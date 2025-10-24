<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">Call history</h3>
            <!--            <div class="card-options">-->
            <!--              <div class="input-group">-->
            <!--                <input type="text" class="form-control form-control-sm h-6" placeholder="Search something..." name="s">-->
            <!--                <span class="input-group-btn ms-0">-->
            <!--                  <button class="btn btn-sm btn-primary" type="submit">-->
            <!--                    <span class="fe fe-search text-white"></span>-->
            <!--                  </button>-->
            <!--                </span>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
          <div class="card-body pt-4">

            <div class="table-responsive">
              <table
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                  <tr>
                    <th
                      class="bg-transparent border-bottom-0"
                    >
                      Date
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Ads Title
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 6" :key="i" class="border-bottom">
                    <td><span class="mt-sm-2 d-block">30 Aug
                      2021</span></td>
                    <td>
                      <div class="d-flex">
                        <div
                          class="mt-0 mt-sm-3 d-block"
                        >
                          <h6
                            class="mb-0 fs-14 fw-semibold"
                          >
                            Ads {{ i }}</h6>
                        </div>
                      </div>
                    </td>
                    <td><span class="mt-sm-2 d-block">$0.015</span></td>
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

export default {
  name: 'MyAds',
  data() {
    return {
      items: [],
      action: 'Add',
      dialogVisible: false,
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
