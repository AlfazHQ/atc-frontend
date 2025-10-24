import request from '@/services/network/request'
export default {
  getMyAds(page) {
    return request({
      url: '/portal/my-ads?page=' + page,
      method: 'get'
    })
  },
  getMyAdsInfo(id) {
    return request({
      url: '/portal/ads-info/' + id,
      method: 'get'
    })
  },
  saveMyAds(data) {
    return request({
      url: '/portal/save-my-ads',
      method: 'post',
      data
    })
  },
  updateMyAds(data, id) {
    return request({
      url: '/portal/update-my-ads/' + id,
      method: 'post',
      data
    })
  },
  getMyBillboards(page) {
    return request({
      url: '/portal/my-billboards?page=' + page,
      method: 'get'
    })
  },
  purchaseHistory(page) {
    return request({
      url: '/portal/purchase-history?page=' + page,
      method: 'get'
    })
  },
  uploadReceipt(data) {
    return request({
      url: '/portal/upload-receipt',
      method: 'post',
      data
    })
  },
  // transactionHistory(page) {
  //   return request({
  //     url: '/portal/transaction-history?page=' + page,
  //     method: 'get'
  //   })
  // },
  getMyBillboardInfo(id) {
    return request({
      url: '/portal/billboard-info/' + id,
      method: 'get'
    })
  },
  subscribeAds(id) {
    return request({
      url: '/portal/subscribe-ads/' + id,
      method: 'get'
    })
  },
  unsubscribeAds(id) {
    return request({
      url: '/portal/unsubscribe-ads/' + id,
      method: 'get'
    })
  },
  submitRating(data) {
    return request({
      url: '/portal/submit-rating',
      method: 'post',
      data
    })
  },
  mySubscriptions() {
    return request({
      url: '/portal/my-subscriptions',
      method: 'get'
    })
  },
  myMediaFiles() {
    return request({
      url: '/portal/my-media-files',
      method: 'get'
    })
  },
  myMediaFilesByType(page, type) {
    return request({
      url: '/portal/my-media-files/' + type + '?page=' + page,
      method: 'get'
    })
  },
  saveMyBillboard(data) {
    return request({
      url: '/portal/save-my-billboard',
      method: 'post',
      data
    })
  },
  updateMyBillboard(data, id) {
    return request({
      url: '/portal/update-my-billboard/' + id,
      method: 'post',
      data
    })
  },
  myAdsAuditions(page) {
    return request({
      url: '/portal/my-ads-report?page=' + page,
      method: 'post'
    })
  },
  myEarningHistory(page) {
    return request({
      url: '/portal/my-earning-history?page=' + page,
      method: 'post'
    })
  },
  advertiserDashboard() {
    return request({
      url: '/portal/advertiser-dashboard',
      method: 'get'
    })
  },
  portalDashboard() {
    return request({
      url: '/portal/portal-dashboard',
      method: 'get'
    })
  },
}
