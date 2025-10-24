<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-4 col-sm-12 mb-4">
              <h3>Earning history</h3>
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
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                <tr>
                  <th class="bg-transparent border-bottom-0">Date</th>
                  <th class="bg-transparent border-bottom-0">Ads Title</th>
                  <th class="bg-transparent border-bottom-0">Amount</th>
                  <th class="bg-transparent border-bottom-0">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="el in filteredItems" :key="el.id" class="border-bottom">
                  <td>{{ el.date }}</td>
                  <td>{{ el.ads }}</td>
                  <td>$ {{ el.amount }}</td>
                  <td>
                    <span v-if="el.is_pending" class="mt-sm-2 d-block">Pending</span>
                    <span v-else class="mt-sm-2 d-block">Available</span>
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
  name: 'MyEarning',
  components: { Pagination },
  data() {
    return {
      item: {},
      filter: {},
      query: null,
    }
  },
  computed: {
    filteredItems() {
      const result = this.item.data
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.ads.toLowerCase().includes(query) || item.date.toLowerCase().includes(query))
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      Portal.myEarningHistory(page).then(res => {
        this.item = res.data.items
      })
    }
  }
}
</script>
