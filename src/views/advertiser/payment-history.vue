<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-2 col-sm-12 mb-4">
              <h3>Payment History</h3>
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
                    <th class="bg-transparent border-bottom-0">
                      Date
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      TrxId
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Package
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Payment Method
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Total
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="history in filteredItems" :key="history.id" class="border-bottom">
                    <td>
                      {{ history.date }}
                    </td>
                    <td>
                      {{ history.trxid }}
                    </td>
                    <td>
                      {{ history.package_name }}
                    </td>
                    <td>
                      {{ history.payment_type }}
                      <template v-if="history.payment_type === 'Bank'">
                        <a v-if="history.receipt" target="_blank" :href="history.receipt" class="d-block">Download</a>
                        <div v-else class="fs-10 text-blue cursor-pointer" @click="handleDialog(history)">Upload Bank receipt</div>
                      </template>
                    </td>
                    <td>{{ history.total }}</td>
                    <td>
                      <div class="mt-sm-1 d-block">
                        <span class="badge bg-success-transparent rounded-pill text-success p-2 px-3">{{ history.status }}</span>
                      </div>
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
    <el-dialog
      :visible.sync="dialogVisible"
      custom-class="p-0"
      width="30%">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-12 text-center">
              <img :src="getReceipt" alt="" class="form-control-thumbnail" @click="inputReceipt">
              <input
                v-show="false"
                ref="Receipt"
                type="file"
                accept="image/*"
                @change="inputReceiptChange($event)">
            </div>
          </div>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-info me-3" @click="handleSaveReceipt">Save</button>
          <button class="btn btn-warning" @click="dialogVisible = false">Cancel</button>
        </div>
      </div>

    </el-dialog>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>
import Portal from '@/services/api/Portal'
import Pagination from 'laravel-vue-pagination'
import { getObjectURL } from '@/utils/utils'

export default {
  name: 'PaymentHistory',
  components: { Pagination },
  data() {
    return {
      item: {},
      temp: {},
      dialogVisible: false,
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
      return result.filter(item => item.date.toLowerCase().includes(query) || item.trxid.toLowerCase().includes(query) || item.payment_type.toLowerCase().includes(query))
    },
    getReceipt() {
      return this.temp.receipt ? this.temp.receipt : require(`@/assets/img/receipt-upload.png`)
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      Portal.purchaseHistory(page).then(res => {
        this.item = res.data.items
      })
    },
    handleDialog(item) {
      this.dialogVisible = true
      this.temp = item
    },
    inputReceiptChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.temp.receipt_file = files[0]
      this.temp.receipt = getObjectURL(files[0])
    },
    async inputReceipt() {
      this.$refs.Receipt.click()
    },
    handleSaveReceipt() {
      const formData = new FormData()
      formData.append('transaction_id', this.temp.id)
      formData.append('receipt_file', this.temp.receipt_file)
      Portal.uploadReceipt(formData).then(res => {
        this.dialogVisible = false
        this.$notify({
          type: 'success',
          title: 'Uploaded',
          message: res.message
        })
        this.getItems()
      })
    }
  }
}
</script>
