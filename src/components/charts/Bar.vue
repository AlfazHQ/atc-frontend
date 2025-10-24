<template>
  <canvas id="chartBar1" class="h-275" />
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'BarChart',
  props: {
    labels: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    data: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      lineChartData: null,
      chart: null
    }
  },
  watch: {
    labels: {
      deep: true,
      handler(val) {
        this.initChart()
      }
    }
  },
  created() {
  },
  mounted() {
    // const ctx = document.getElementById('line-chart')
    this.initChart()
  },
  destroyed() {
  },
  methods: {
    initChart() {
      /* Bar-Chart1 */
      var ctx = document.getElementById('chartBar1').getContext('2d')
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          // labels: ['Robi', 'Banglalink', 'Grameenphone', 'Teletalk'],
          datasets: [{
            label: 'Robi',
            data: [200],
            borderWidth: 2,
            backgroundColor: '#ff0505',
            borderColor: '#fc0303',
            pointBackgroundColor: '#ffffff'

          }, {
            label: 'Banglalink',
            data: [120],
            borderWidth: 2,
            backgroundColor: '#e0a44b',
            borderColor: '#e0a44b',
            pointBackgroundColor: '#ffffff'

          }, {
            label: 'Grameenphone',
            data: [290],
            borderWidth: 2,
            backgroundColor: '#339ff8',
            borderColor: '#339ff8',
            pointBackgroundColor: '#ffffff'

          }, {
            label: 'Teletalk',
            data: [100],
            borderWidth: 2,
            backgroundColor: '#68c96d',
            borderColor: '#68c96d',
            pointBackgroundColor: '#ffffff'

          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 150,
                fontColor: '#9ba6b5'
              },
              gridLines: {
                color: 'rgba(119, 119, 142, 0.2)'
              }
            }],
            xAxes: [{
              barPercentage: 0.4,
              barValueSpacing: 0,
              barDatasetSpacing: 0,
              barRadius: 0,
              ticks: {
                display: true,
                fontColor: '#9ba6b5'
              },
              gridLines: {
                display: false,
                color: 'rgba(119, 119, 142, 0.2)'
              }
            }]
          },
          legend: {
            display: true,
            labels: {
              fontColor: '#9ba6b5'
            }
          }
        }
      })
    }
  }
}
</script>

