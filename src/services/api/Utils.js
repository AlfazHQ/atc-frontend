import request from '@/services/network/request'
export default {
  getHomePage() {
    return request({
      url: '/homepage',
      method: 'get'
    })
  },
  getBlogs() {
    return request({
      url: '/blogs',
      method: 'get'
    })
  },
  getAds(query) {
    return request({
      url: '/campaigns',
      method: 'get',
      params: { query }
    })
  },
  getPopularAds(query) {
    return request({
      url: '/popular-campaigns',
      method: 'get',
      params: { query }
    })
  },
  getBlogDetails(id) {
    return request({
      url: '/blogs/' + id,
      method: 'get'
    })
  },
  getFaqs() {
    return request({
      url: '/faqs',
      method: 'get'
    })
  },
  getStatuses() {
    return request({
      url: '/statuses',
      method: 'get'
    })
  },
  getCountries() {
    return request({
      url: '/countries',
      method: 'get'
    })
  },
  getPackages() {
    return request({
      url: '/packages',
      method: 'get'
    })
  },
  getProviders() {
    return request({
      url: '/service-providers',
      method: 'get'
    })
  },
  virtualCall(data) {
    return request({
      url: '/virtual-call',
      method: 'post',
      data
    })
  },
  sendOtp(data) {
    return request({
      url: '/send-otp',
      method: 'post',
      data
    })
  },
  forgotPassword(data) {
    return request({
      url: '/forget-password',
      method: 'post',
      data
    })
  },
  setPassword(data) {
    return request({
      url: '/set-password',
      method: 'post',
      data
    })
  }
}
