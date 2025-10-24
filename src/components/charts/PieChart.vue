<template>
  <canvas :id="chartId" />
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'PieChart',
  props: {
    // route object
    chartId: {
      type: String,
      default: 'pie-chart',
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      lineChartData: null
    }
  },
  created() {
  },
  mounted() {
    var optionpie = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: true,
        position: 'bottom'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
    const ctx7 = document.getElementById(this.chartId)
    new Chart(ctx7, {
      type: 'pie',
      data: this.data,
      options: optionpie
    })
  },
  destroyed() {
  },
  methods: {
  }
}
</script>

