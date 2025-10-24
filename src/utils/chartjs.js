
export const myVarVal = '#6c5ffc'
export const myVarVal1 = '#05c3fb'
// convertion of hex code to rgba code
export function hexToRgba(hexValue, alpha) {
  'use strict'

  if (!isValidHex(hexValue)) {
    return null
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3)
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}

// to check the value is hexa or not
export const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

export const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, 'g'))

// convert hex value to 256
export const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
export const getAlphafloat = (a, alpha) => {
  if (typeof a !== 'undefined') {
    return a / 255
  }
  if ((typeof alpha !== 'number') || alpha < 0 || alpha > 1) {
    return 1
  }
  return alpha
}
