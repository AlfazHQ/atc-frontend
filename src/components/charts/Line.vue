<template>
  <canvas id="line-chart" />
</template>

<script>
import Chart from 'chart.js'
import { hexToRgba, myVarVal, myVarVal1 } from '@/utils/chartjs'
export default {
  name: 'LineChart',
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
      var myCanvas = document.getElementById('line-chart')
      myCanvas.height = '330'

      var myCanvasContext = myCanvas.getContext('2d')
      var gradientStroke1 = myCanvasContext.createLinearGradient(0, 80, 0, 280)
      gradientStroke1.addColorStop(0, hexToRgba(myVarVal, 0.8) || 'rgba(108, 95, 252, 0.8)')
      gradientStroke1.addColorStop(1, hexToRgba(myVarVal, 0.2) || 'rgba(108, 95, 252, 0.2) ')

      var gradientStroke2 = myCanvasContext.createLinearGradient(0, 80, 0, 280)
      gradientStroke2.addColorStop(0, hexToRgba(myVarVal1, 0.8) || 'rgba(5, 195, 251, 0.8)')
      gradientStroke2.addColorStop(1, hexToRgba(myVarVal1, 0.8) || 'rgba(5, 195, 251, 0.2) ')

      this.chart = new Chart(myCanvas, {
        type: 'line',
        data: {
          labels: this.labels,
          type: 'line',
          datasets: [{
            label: 'Total Calls',
            data: this.data,
            backgroundColor: gradientStroke1,
            borderColor: myVarVal,
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: gradientStroke1,
            pointBorderColor: myVarVal,
            pointHoverBorderColor: gradientStroke1,
            pointBorderWidth: 0,
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            fill: 'origin'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            enabled: false
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: false
            }
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'rgba(119, 119, 142, 0.08)'
              },
              ticks: {
                fontColor: '#b0bac9',
                autoSkip: true
              },
              scaleLabel: {
                display: false,
                labelString: 'Month',
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              ticks: {
                stepSize: 1,
                fontColor: '#b0bac9'
              },
              display: true,
              gridLines: {
                display: true,
                drawBorder: false,
                zeroLineColor: 'rgba(142, 156, 173,0.1)',
                color: 'rgba(142, 156, 173,0.1)'
              },
              scaleLabel: {
                display: false,
                labelString: 'sales',
                fontColor: 'transparent'
              }
            }]
          },
          title: {
            display: false,
            text: 'Normal Legend'
          }
        }
      })
    },
  }
}
</script>

