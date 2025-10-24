<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-2 col-sm-12 mb-4">
              <h3>Billboard Lists</h3>
            </div>
            <div class="col-md-8 col-sm-12 mb-4">
              <div class="input-group">
                <input v-model="query" type="text" class="form-control " placeholder="Search something..." name="s">
                <span class="input-group-btn ms-0">
                  <button class="btn btn-primary" type="submit">
                    <span class="fe fe-search text-white" />
                  </button>
                </span>
              </div>
            </div>
            <div class="col-md-2 col-sm-12 mb-4 text-end">
              <button class="btn btn-primary" @click="$router.push({ name: 'AddBillboard'})">Create new Billboard</button>
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
                    <th class="bg-transparent border-bottom-0 text-center">
                      Image
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
                    <th class="bg-transparent border-bottom-0">Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="el in filteredItems" :key="el.id" class="border-bottom">
                    <td class="text-center" style="width: 15%">
                      <img class="billboard-img-list" :src="el.thumbnail" alt="">
                    </td>
                    <td>
                      {{ el.title }}
                    </td>
                    <td>{{ el.date }}</td>
                    <td>
                      <div class="mt-sm-1 d-block">
                        <span class="badge bg-success-transparent rounded-pill text-success p-2 px-3">{{ el.status }}</span>
                      </div>
                    </td>
                    <td>

                      <div class="action-buttons">
                        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'EditBillboard', params: { id: el.id}})"><feather type="edit" size="14" /> Edit</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <pagination class="justify-content-center mt-5" :data="item" @pagination-change-page="getItems"/>
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

import Portal from '@/services/api/Portal'
import Pagination from 'laravel-vue-pagination'

export default {
  name: 'MyAds',
  components: { Pagination },
  data() {
    return {
      item: {},
      query: null
    }
  },
  computed: {
    filteredItems() {
      const result = this.item.data
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.title.toLowerCase().includes(query))
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      Portal.getMyBillboards(page).then(res => {
        this.item = res.data.items
      })
    },
    handleAddAds() {
      this.dialogVisible = true
      this.action = 'Add'
      this.resetTemp()
    },
    handleEditAds() {
      this.dialogVisible = true
      this.action = 'Edit'
    },
    resetTemp() {
      this.temp = {
        title: null,
        audioFile: null
      }
    }
  }
}
</script>
