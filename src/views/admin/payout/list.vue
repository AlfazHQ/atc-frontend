<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-2 col-sm-12 mb-4">
              <h3>Payout Lists</h3>
            </div>
            <div class="col-md-10 col-sm-12 mb-4">
              <div class="input-group">
                <input v-model="query" type="text" class="form-control " placeholder="Search something...">
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
                    <th class="bg-transparent border-bottom-0">User</th>
                    <th class="bg-transparent border-bottom-0">Payment Method</th>
                    <th class="bg-transparent border-bottom-0">Amount</th>
                    <th class="bg-transparent border-bottom-0">Status
                    </th>
                    <th class="bg-transparent border-bottom-0">Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="history in filteredItems" :key="history.id" class="border-bottom">
                    <td><span class="mt-sm-2 d-block">{{ history.date }}</span></td>
                    <td><span class="mt-sm-2 d-block cursor-pointer text-decoration-underline" @click="$router.push({ name: 'UserProfile', params: { id: history.user_id }})">{{ history.user }}</span></td>
                    <td>
                      <span class="mt-sm-2 d-block fw-bold">{{ history.payment_method }}</span>
                      <template v-if="history.payment_method === 'Bank'">
                        <h6>Account Name: {{ history.bank_account_name }}</h6>
                        <h6>Account Number: {{ history.bank_account_number }}</h6>
                        <h6>SWIFT Code: {{ history.bank_swift_code }}</h6>
                        <h6>Bank Name: {{ history.bank_name }}</h6>
                        <h6>IBAN: {{ history.bank_iban }}</h6>
                      </template>
                      <template v-else>
                        <h6>Email: {{ history.paypal_email }}</h6>
                      </template>
                    </td>
                    <td><span class="mt-sm-2 d-block">${{ history.amount }}</span></td>
                    <td>
                      <div class="mt-sm-1 d-block"><span class="badge bg-success-transparent rounded-pill text-success p-2 px-3">{{ history.status }}</span></div>
                    </td>
                    <td>
                      <button v-if="history.status === 'Pending'" class="btn btn-success" @click="handleStatus(history, 7)">Mark as Paid</button>
                      <button v-if="history.status === 'Pending'" class="btn btn-warning ms-3" @click="handleStatus(history, 4)">Reject</button>
                      <button v-else class="btn btn-success">N/A</button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import Admin from '@/services/api/Admin'

export default {
  name: 'PayoutHistoryList',
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
      return result.filter(item => item.date.toLowerCase().includes(query) || item.trxid.toLowerCase().includes(query) || item.payment_method.toLowerCase().includes(query))
    },
  },
  created() {
    this.payoutHistory()
  },
  methods: {
    payoutHistory(page = 1) {
      Admin.payoutHistory(page).then(res => {
        this.item = res.data.items
      })
    },
    handleStatus(item, status_id) {
      const payload = {
        id: item.id,
        status_id
      }
      Admin.payoutStatusUpdate(payload).then(res => {
        this.$notify({
          type: 'success',
          title: 'Status Updated',
          message: res.message
        })
        this.payoutHistory()
      })
    }
  }
}
</script>
