<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-1 -->
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
                    <h2 class="mb-0 number-font">44,278</h2>
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
                    <h2 class="mb-0 number-font">67,987</h2>
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
                    <h2 class="mb-0 number-font">$15,765</h2>
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
                    <h6 class="">Total Balance</h6>
                    <h2 class="mb-0 number-font">$50,765</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-1 END -->
    <!-- ROW-1 END -->

    <!-- ROW-2 -->
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
        <div class="card height-md">
          <div class="card-header">
            <h3 class="card-title">Reports</h3>
          </div>
          <div class="card-body">
            <div class="d-flex mx-auto text-center justify-content-center mb-4">
              <div class="d-flex text-center justify-content-center me-3"><span
                class="dot-label bg-primary my-auto"
              />Call
              </div>
              <div class="d-flex text-center justify-content-center"><span
                class="dot-label bg-secondary my-auto"
              />Profit
              </div>
            </div>
            <div class="chartjs-wrapper-demo">
              <LineChart />
              <!--              <canvas id="transactions" class="chart-dropshadow"></canvas>-->
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
              <pie-chart chart-id="os-report" :data="osReports" />
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
window.jQuery = require('jquery')
var $ = window.jQuery
// require('@/assets/plugins/jvectormap/jquery.vmap')
require('jvectormap')
require('@/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en')
import LineChart from '@/components/charts/Line'
import PieChart from '@/components/charts/PieChart'
export default {
  name: 'ProviderDashboard',
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
      }
    }
  },
  mounted() {
    $('#world-map-markers1').vectorMap({
      map: 'world_mill_en',
      scaleColors: ['#6c5ffc', '#e82646', '#05c3fb'],

      normalizeFunction: 'polynomial',

      hoverOpacity: 0.7,

      hoverColor: false,

      regionStyle: {

        initial: {

          fill: '#edf0f5'
        }
      },
      markerStyle: {
        initial: {
          r: 6,
          'fill': '#6c5ffc',
          'fill-opacity': 0.9,
          'stroke': '#fff',
          'stroke-width': 9,
          'stroke-opacity': 0.2
        },

        hover: {
          'stroke': '#fff',
          'fill-opacity': 1,
          'stroke-width': 1.5
        }
      },
      backgroundColor: 'transparent',
      markers: [{
        latLng: [40.3, -101.38],
        name: 'USA'
      }, {
        latLng: [22.5, 1.51],
        name: 'India'
      }, {
        latLng: [50.02, 80.55],
        name: 'Bahrain'
      }, {
        latLng: [3.2, 73.22],
        name: 'Maldives'
      }, {
        latLng: [35.88, 14.5],
        name: 'Malta'
      }]
    })
  }
}
</script>
