<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">Provider Lists</h3>
          </div>
          <div class="card-body pt-4">

            <div class="table-responsive">
              <table
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                  <tr>
                    <th class="bg-transparent border-bottom-0">Logo
                    </th>
                    <th class="bg-transparent border-bottom-0">Name
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Email
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Mobile
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Address
                    </th>
                    <th
                      class="bg-transparent border-bottom-0"
                    >
                      Date
                    </th>
                    <th class="bg-transparent border-bottom-0">Status
                    </th>
                    <th class="bg-transparent border-bottom-0">Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 5" :key="i" class="border-bottom">
                    <td>
                      <img class="rounded-img" src="@/assets/images/media/1.jpg" alt="Generic placeholder image">
                    </td>
                    <td>
                      <h4 class="mt-0">KFC</h4>
                    </td>
                    <td><span class="mt-sm-2 d-block">kfc@gmail.com</span></td>
                    <td><span class="mt-sm-2 d-block">+8801764673691</span></td>
                    <td><span class="mt-sm-2 d-block">Uttara,Dhaka</span></td>
                    <td><span class="mt-sm-2 d-block">30 Aug2021</span></td>
                    <td>
                      <div class="mt-sm-1 d-block">
                        <span
                          class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                        >Active</span>
                      </div>
                    </td>
                    <td>
                      <el-dropdown trigger="click">
                        <el-button type="primary">
                          Action<i class="el-icon-arrow-down el-icon--right" />
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>Edit</el-dropdown-item>
                          <el-dropdown-item>Approve</el-dropdown-item>
                          <el-dropdown-item>Reject</el-dropdown-item>
                          <el-dropdown-item>Delete</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
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
window.jQuery = require('jquery')
var $ = window.jQuery
// require('@/assets/plugins/jvectormap/jquery.vmap')
require('jvectormap')
require('@/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en')
import LineChart from '@/components/charts/Line'
import PieChart from '@/components/charts/PieChart'

export default {
  name: 'AdminDashboard',
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
