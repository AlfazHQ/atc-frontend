<template>
  <div class="main-area">
    <section class="container coverage-map">
      <div class="card">
        <h1 class="text-center mb-9">Explore Adstocall Coverage Globally.</h1>
        <div class="card-body p-0" >
          <div id="world-map-markers1" class="worldh world-map" style="height: 500px;" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Utils from '@/services/api/Utils'

window.jQuery = require('jquery')
var $ = window.jQuery
require('jvectormap')
require('@/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en')

export default {
  name: 'CoverageServices',
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
