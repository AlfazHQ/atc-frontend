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
                      Payment Method
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Total
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Status
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Action
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
                      {{ history.payment_type }}
                      <template v-if="history.payment_type === 'Bank'">
                        <a v-if="history.receipt" target="_blank" :href="history.receipt" class="d-block">Download</a>
                        <div v-else class="fs-10 text-warning cursor-pointer">No document Uploaded</div>
                      </template>
                    </td>
                    <td>{{ history.total }}</td>
                    <td>
                      <div class="mt-sm-1 d-block">
                        <span class="badge bg-success-transparent rounded-pill text-success p-2 px-3">{{ history.status }}</span>
                      </div>
                    </td>
                    <td>
                      <button v-if="history.payment_type === 'Bank' && history.status !== 'Completed'" class="btn btn-info" @click="handleMarkAsCompleted(history)">Mark as Completed</button>
                      <span v-else class="text-warning">N/A</span>
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
      title="Tips"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <label>Receipt</label>
            <img :src="getThumbnail" alt="" class="form-control-thumbnail" @click="inputThumbnail">
            <input
              v-show="false"
              ref="thumbnail"
              type="file"
              accept="image/*"
              @change="inputThumbnailChange($event)">
          </div>
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
import Admin from "@/services/api/Admin";

export default {
  name: 'TransactionHistory',
  components: { Pagination },
  data() {
    return {
      item: {},
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
    getThumbnail() {
      return this.item.thumbnail ? this.item.thumbnail : require(`@/assets/img/250x150.png`)
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      Admin.transactionHistory(page).then(res => {
        this.item = res.data.items
      })
    },
    inputThumbnailChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.item.thumbnail_file = files[0]
      this.item.thumbnail = getObjectURL(files[0])
    },
    async inputThumbnail() {
      this.$refs.thumbnail.click()
    },
    handleMarkAsCompleted(item) {
      this.$confirm('Are you sure to Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.markAsCompleted(item)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Update canceled'
        })
      })
    },
    markAsCompleted(item) {
      Admin.markAsCompleted(item.id).then(res => {
        this.$notify({
          type: 'success',
          title: 'Completed',
          message: res.message
        })
        this.getItems()
      })
    }
  }
}
</script>
