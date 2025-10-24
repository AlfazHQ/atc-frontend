<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Api Key</h3>
            <div class="card-options">
              <button class="btn btn-primary" @click="$router.push({ name: 'AddBillboard'})">Generate Api Key</button>
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
                      Name
                    </th>
                    <th
                      class="bg-transparent border-bottom-0"
                    >
                      Type
                    </th>
                    <th class="bg-transparent border-bottom-0">Secret
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-bottom">
                    <td>
                      Auth Token
                    </td>
                    <td>Bearer</td>
                    <td>{{ token }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">

      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Api Dcoumentation</h3>
          </div>
          <div class="card-body">
            <el-tabs :tab-position="tabPosition" style="height: 400px;">
              <el-tab-pane label="Virtual Call">
                <pre style="margin-top: 2%;overflow-y: auto;height: 300px;" v-highlightjs><code class="javascript">
                  curl --location --request POST 'http://atc.com/api/portal/virtual-call' \
                  --form 'mobile="+8801764695324"' \
                  --form 'ads_id="2"'
                  </code></pre>
              </el-tab-pane>
            </el-tabs>

          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import { getToken } from '@/services/cookie/auth'
const token = getToken()
export default {
  name: 'MyAds',
  data() {
    return {
      items: [],
      token: token,
      action: 'Add',
      dialogVisible: false,
      tabPosition: 'left',
      temp: {
        title: null,
        audioFile: null
      }
    }
  },
  mounted() {
  },
  methods: {
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
