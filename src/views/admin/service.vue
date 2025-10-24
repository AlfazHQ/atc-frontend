<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card overflow-hidden">
          <div class="card-header">
            <div>
              <h3 class="card-title">World wide service coverage</h3>
            </div>
          </div>
          <div class="card-body p-0 mt-2">
            <div class="">
              <div id="world-map-markers1" class="worldh world-map" style="height: 700px;" />
            </div>
            <div class="table-responsive mt-2 text-center">
              <table class="table text-nowrap border-dashed mb-0">
                <thead>
                  <tr>
                    <th class="text-start">Country</th>
                    <th class="text-center">latitude</th>
                    <th class="text-center">longitude</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="el in coverageCountries" :key="el.id">
                    <td class="text-start p-4">{{ el.name }}</td>
                    <td class="p-4">{{ el.latitude }}</td>
                    <td class="p-4">{{ el.longitude }}</td>
                  </tr>
                </tbody>
              </table>
              <!--end /table-->
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
import Utils from '@/services/api/Utils'

window.jQuery = require('jquery')
var $ = window.jQuery
require('jvectormap')
require('@/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en')

export default {
  name: 'Services',
  data() {
    return {
      countries: []
    }
  },
  computed: {
    coverageCountries() {
      return this.countries.filter(c => c.has_coverage)
    }
  },
  watch: {
    countries: {
      deep: true,
      handler(val) {
        // this.initMap()
      }
    }
  },
  mounted() {
    // this.initMap()
  },
  created() {
    this.getCountries()
  },
  methods: {
    initMap() {
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
        markers: this.coverageCountries
      })
      console.log('this.coverageCountries', this.coverageCountries)
    },
    getCountries() {
      Utils.getCountries().then(res => {
        this.countries = res.data.countries
        this.initMap()
      })
    }
  }
}
</script>
