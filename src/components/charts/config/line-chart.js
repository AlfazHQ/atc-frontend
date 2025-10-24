import { gradientStroke1, myVarVal, gradientStroke2 } from '@/utils/chartjs'
export const lineChartData = {

  type: 'line',
  data: {
    labels: ['Jan11', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    type: 'line',
    datasets: [{
      label: 'Total Sales',
      data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
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
    }, {
      label: 'Total Orders',
      data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454],
      backgroundColor: 'transparent',
      borderColor: '#05c3fb',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: gradientStroke2,
      pointBorderColor: '#05c3fb',
      pointHoverBorderColor: gradientStroke2,
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
          min: 0,
          max: 1050,
          stepSize: 150,
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
}

export default lineChartData
//
// // convertion of hex code to rgba code
// function hexToRgba(hexValue, alpha) {
//   'use strict'
//
//   if (!isValidHex(hexValue)) {
//     return null
//   }
//   const chunkSize = Math.floor((hexValue.length - 1) / 3)
//   const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
//   const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
//   return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
// }
//
// // to check the value is hexa or not
// const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)
//
// const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, 'g'))
//
// // convert hex value to 256
// const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// // get alpha value is equla to 1 if there was no value is asigned to alpha in function
// const getAlphafloat = (a, alpha) => {
//   if (typeof a !== 'undefined') {
//     return a / 255
//   }
//   if ((typeof alpha !== 'number') || alpha < 0 || alpha > 1) {
//     return 1
//   }
//   return alpha
// }
