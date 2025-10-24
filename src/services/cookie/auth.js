import Cookies from 'js-cookie'

const TokenKey = 'Admin-Auth-Token'
const SecretKey = 'Secret-Token'
const CartKey = 'Cart-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function getSecret() {
  return Cookies.get(SecretKey)
}

export function getCart() {
  console.log('CartKey ', JSON.parse(localStorage.getItem(CartKey)))
  // console.log('CartKey ', JSON.parse(CartKey))
  // return Cookies.get(JSON.parse(CartKey))
  return JSON.parse(localStorage.getItem(CartKey))
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setSecret(token) {
  return Cookies.set(SecretKey, token)
}

export function setCart(token) {
  console.log('token ', token)
  return localStorage.setItem(CartKey, JSON.stringify(token))
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeCart() {
  return localStorage.setItem(CartKey, JSON.stringify({ }))
}
