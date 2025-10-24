import request from '@/services/network/request'
export default {
  login(data) {
    return request({
      url: '/auth/login',
      method: 'post',
      data
    })
  },
  register(data) {
    return request({
      url: '/auth/register',
      method: 'post',
      data
    })
  },
  updateProfile(data) {
    return request({
      url: '/auth/update-profile',
      method: 'post',
      data
    })
  },
  deleteMyAccount() {
    return request({
      url: '/auth/delete-my-account',
      method: 'get'
    })
  },
  dashboard(data) {
    return request({
      url: '/auth/dashboard',
      method: 'get'
    })
  },
  changePassword(data) {
    return request({
      url: '/auth/update-password',
      method: 'post',
      data
    })
  },
  getInfo() {
    return request({
      url: '/auth/info',
      method: 'get'
    })
  },
  billingAddress() {
    return request({
      url: '/auth/billing-address',
      method: 'get'
    })
  },
  saveAddress(data) {
    return request({
      url: '/auth/save-billing-address',
      method: 'post',
      data
    })
  },
  purchasePackage(data) {
    return request({
      url: '/auth/purchase-package',
      method: 'post',
      data
    })
  },
  payoutRequest(data) {
    return request({
      url: '/auth/payout-request',
      method: 'post',
      data
    })
  },
  payoutHistory(page, data) {
    return request({
      url: '/auth/payout-history?page=' + page,
      method: 'post',
      data
    })
  },
  logout() {
    return request({
      url: '/auth/logout',
      method: 'post'
    })
  },
  getMyContacts() {
    request.setLoading(false)
    return request({
      url: '/auth/contacts',
      method: 'get'
    })
  },
  fetchMessage(sender) {
    request.setLoading(false)
    return request({
      url: '/auth/fetch-messages/' + sender,
      method: 'get'
    })
  },
  sendMessage(data) {
    request.setLoading(false)
    return request({
      url: '/auth/send-message',
      method: 'post',
      data
    })
  },
  getPaymentIndent() {
    return request({
      url: '/auth/get-payment-indent',
      method: 'get'
    })
  },
  myNotification(page = 1) {
    return request({
      url: '/auth/my-notifications?page=' + page,
      method: 'get'
    })
  }
}
