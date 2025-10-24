<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-4 col-sm-12 mb-4">
              <h3>Withdrawal history</h3>
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
                  <th class="bg-transparent border-bottom-0">Payment Method</th>
                  <th class="bg-transparent border-bottom-0">Amount</th>
                  <th class="bg-transparent border-bottom-0">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="el in filteredItems" :key="el.id" class="border-bottom">
                  <td>{{ el.date }}</td>
                  <td>{{ el.payment_method }}</td>
                  <td>$ {{ el.amount }}</td>
                  <td>
                    {{ el.status }}
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

import Pagination from 'laravel-vue-pagination'
import Auth from '@/services/api/Auth'
import { mapGetters } from 'vuex'
import Admin from '@/services/api/Admin'

export default {
  name: 'WithdrawalHistory',
  components: { Pagination },
  data() {
    return {
      item: {},
      filter: {},
      userId: null,
      query: null,
    }
  },
  computed: {
    ...mapGetters([
      'is_admin'
    ]),
    filteredItems() {
      const result = this.item.data
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.payment_method.toLowerCase().includes(query) || item.date.toLowerCase().includes(query))
    }
  },
  created() {
  },
  mounted() {
    if (this.$route.params.id) {
      this.userId = this.$route.params.id
    }
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      if (this.is_admin) {
        Admin.allPayoutHistory(page, this.userId).then(res => {
          this.item = res.data.items
        })
      } else {
        Auth.payoutHistory(page).then(res => {
          this.item = res.data.items
        })
      }
    }
  }
}
</script>
