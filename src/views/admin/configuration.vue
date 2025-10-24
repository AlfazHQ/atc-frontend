<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid mt-5">
    <!-- ROW-4 -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Stripe Credentials</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label for="exampleInputname">Key</label>
                  <input id="exampleInputname" type="text" class="form-control" placeholder="****">
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label for="exampleInputname1">Secret</label>
                  <input id="exampleInputname1" type="text" class="form-control" placeholder="***">
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-end">
            <a href="javascript:void(0)" class="btn btn-success mx-3">Save</a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Paypal Credentials</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label for="exampleInputname">Key</label>
                  <input id="exampleInputname" type="text" class="form-control" placeholder="****">
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label for="exampleInputname1">Secret</label>
                  <input id="exampleInputname1" type="text" class="form-control" placeholder="***">
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-end">
            <a href="javascript:void(0)" class="btn btn-success mx-3">Save</a>
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
