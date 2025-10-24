<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-2 col-sm-12 mb-4">
              <h3 class="text-capitalize">Activity Log List</h3>
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
          </div>
          <div class="card-body pt-4">

            <div class="table-responsive">
              <table
                v-if="filteredItems.length"
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                  <tr>
                    <th class="bg-transparent border-bottom-0">Avatar</th>
                    <th class="bg-transparent border-bottom-0">Name</th>
                    <th class="bg-transparent border-bottom-0">Description</th>
                    <th class="bg-transparent border-bottom-0">Changes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="el in filteredItems" :key="el.id" class="border-bottom">
                    <td>
                      <img class="rounded-img" :src="el.causer.avatar" alt="Generic placeholder image">
                    </td>
                    <td>
                      <h4 class="mt-0">{{ el.causer.name }}</h4>
                    </td>
                    <td><span class="mt-sm-2 d-block">{{ el.description }}</span></td>
                    <td><span class="mt-sm-2 d-block">{{ el.changes }}</span></td>
                  </tr>
                </tbody>
              </table>
              <h3 v-else class="text-center p-8">No Data Found !</h3>
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
import Pagination from 'laravel-vue-pagination'
import Admin from '@/services/api/Admin'

export default {
  name: 'ActivityLog',
  components: { Pagination },
  data() {
    return {
      filter: {
        status: null
      },
      item: {
        data: null
      },
      statuses: null,
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
      return result.filter(item => item.causer.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query))
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      Admin.getActivityLogs(page).then(res => {
        this.item = res.data.items
      })
    }
  }
}
</script>
