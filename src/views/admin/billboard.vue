<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-2 col-sm-12 mb-4">
              <h3>All Billboard Lists</h3>
            </div>
            <div class="col-md-10 col-sm-12 mb-4">
              <div class="input-group">
                <input v-model="query" type="text" class="form-control " placeholder="Search something..." name="s">
                <span class="input-group-btn ms-0">
                  <button class="btn btn-primary" type="submit">
                    <span class="fe fe-search text-white" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="card-body pt-4">

            <div class="table-responsive">
              <table
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                  <tr>
                    <th class="bg-transparent border-bottom-0">Thumbnail
                    </th>
                    <th class="bg-transparent border-bottom-0">Owner
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Title
                    </th>
                    <th
                      class="bg-transparent border-bottom-0"
                    >
                      Date
                    </th>
                    <th class="bg-transparent border-bottom-0">Status
                    </th>
                    <th v-if="is_admin" class="bg-transparent border-bottom-0" style="width: 20%">Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="itm in filteredItems" :key="itm.id" class="border-bottom">
                    <td class="text-center" style="width: 15%">
                      <img class="billboard-img-list" :src="itm.thumbnail" alt="">
                    </td>
                    <td>
                      <div class="media media-lg mt-0">
                        <div class="media-body cursor-pointer" @click="$router.push({ name: 'UserProfile', params: { id: itm.id }})">
                          <h4 class="mt-0">{{ itm.owner.first_name }}</h4>
                          <p class="text-muted mb-0 fs-14 text-decoration-underline">User ID: {{ itm.owner.id }}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex">
                        <div
                          class="mt-0 mt-sm-3 d-block"
                        >
                          <h6
                            class="mb-0 fs-14 fw-semibold"
                          >
                            {{ itm.title }} </h6>
                        </div>
                      </div>
                    </td>
                    <td><span class="mt-sm-2 d-block">{{ itm.date }}</span></td>
                    <td>
                      <div class="mt-sm-1 d-block">
                        <span
                          class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                        >{{ itm.status }}</span>
                      </div>
                    </td>
                    <td v-if="is_admin">
                      <button v-if="[2,3,4].includes(itm.status_id)" class="btn btn-success ms-3" @click="ToggleStatus(itm.id,1)">Approve</button>
                      <button v-else class="btn btn-warning ms-3" @click="ToggleStatus(itm.id,4)">Reject</button>
                      <button class="btn btn-danger ms-3" @click="handleDelete(itm.id)">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <pagination class="justify-content-center mt-5" :data="item" @pagination-change-page="getItems" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>
import Pagination from 'laravel-vue-pagination'
import Admin from '@/services/api/Admin'
import { mapGetters } from 'vuex'

export default {
  name: 'AllAds',
  components: { Pagination },
  data() {
    return {
      item: { },
      temp: {},
      query: null,
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'clientWidth',
      'device'
    ]),
    filteredItems() {
      const result = this.item.data
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.title.toLowerCase().includes(query) || item.date.toLowerCase().includes(query))
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      Admin.getAllBillboards(page).then(res => {
        this.item = res.data.items
      })
    },
    handleDialog(item) {
      console.log('item ', item.audio)
      this.resetTemp()
      this.temp = item
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
      this.resetTemp()
    },
    resetTemp() {
      this.temp = {}
    },

    handleDelete(id) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        return this.deleteItem(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    },
    deleteItem(id) {
      Admin.deleteBillboard(id).then(res => {
        this.$notify({
          type: 'success',
          title: 'Success',
          message: res.message
        })
        this.getItems()
      })
    },
    ToggleStatus(id, status) {
      Admin.updateBillBoardStatus(id, status).then(res => {
        this.$notify({
          type: 'success',
          title: 'Success',
          message: res.message
        })
        this.getItems()
      })
    },
  }
}
</script>
