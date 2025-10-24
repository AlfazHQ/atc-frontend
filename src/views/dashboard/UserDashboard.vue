<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-1 -->
    <div class="row mt-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Earned</h6>
                    <h2 class="mb-0 number-font">$ {{ summary.total_earned }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Call</h6>
                    <h2 class="mb-0 number-font"> {{ summary.total_audition }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Pending Balance</h6>
                    <h2 class="mb-0 number-font"> {{ summary.total_pending_balance }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Payout</h6>
                    <h2 class="mb-0 number-font"> {{ summary.total_payout }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-1 END -->

    <!-- ROW-2 -->
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
        <div class="card height-md">
          <div class="card-header">
            <h3 class="card-title">Ads Reports</h3>
          </div>
          <div class="card-body">
            <div class="d-flex mx-auto text-center justify-content-center mb-4">
              <div class="d-flex text-center justify-content-center"><span
                class="dot-label bg-secondary my-auto"
              />Call
              </div>
            </div>
            <div class="chartjs-wrapper-demo">
              <LineChart :labels="auditionReport.labels" :data="auditionReport.data" />
            </div>
          </div>
        </div>
      </div>
      <!-- COL END -->
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
        <div class="card overflow-hidden height-md">
          <div class="card-body pb-0 bg-recentorder">
            <h3 class="card-title text-white">OS Reports</h3>
          </div>
          <div class="card-body overflow-y-scroll">
            <div class="chart-wrapper" style="height: 300px">
              <pie-chart chart-id="os-chart" :data="osReports" />
            </div>
          </div>
        </div>
      </div>
      <!-- COL END -->
    </div>
    <!-- ROW-2 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>
import LineChart from '@/components/charts/Line'
import PieChart from '@/components/charts/PieChart'
import Portal from '@/services/api/Portal'
export default {
  name: 'UserDashboard',
  components: { LineChart, PieChart },
  data() {
    return {
      osReports: {
        labels: ['Android OS', 'IOS', 'BlackBerry OS', 'Chrome OS', 'Harmony OS'],
        datasets: [{
          data: [50, 25, 10, 5, 10],
          backgroundColor: ['#6c5ffc', '#05c3fb', '#09ad95', '#1170e4', '#e82646']
        }]
      },
      operatorReports: {
        labels: ['GrameenPhone', 'Robi', 'Banglalink', 'Airtel', 'Teletalk'],
        datasets: [{
          data: [35, 25, 20, 15, 10],
          backgroundColor: ['#1170e4', '#e82646', '#e0a44b', '#ee379f', '#e82646']
        }]
      },
      auditionReport: {},
      summary: {
        total_earned: null,
        total_audition: null,
        total_pending_balance: null,
        total_payout: null
      }
    }
  },
  created() {
    this.getDashboard()
  },
  methods: {
    getDashboard() {
      Portal.portalDashboard().then(res => {
        this.summary = res.data.summary
        this.auditionReport = res.data.auditionReport
      })
    }
  }
}
</script>

