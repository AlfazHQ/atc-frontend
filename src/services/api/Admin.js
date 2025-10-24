import request from '@/services/network/request'
export default {
  getBlogs(page) {
    return request({
      url: '/admin/blogs',
      method: 'get'
    })
  },
  getBlogDetails(id) {
    return request({
      url: '/admin/blogs/' + id,
      method: 'get'
    })
  },
  saveBlog(data) {
    return request({
      url: '/admin/blogs',
      method: 'post',
      data
    })
  },
  updateBlog(data, id) {
    return request({
      url: '/admin/blogs/' + id,
      method: 'post',
      data
    })
  },
  deleteBlog(id) {
    return request({
      url: '/admin/blogs/' + id,
      method: 'delete'
    })
  },
  getAllAds(page) {
    return request({
      url: '/admin/ads?page=' + page,
      method: 'get'
    })
  },
  saveAds(data) {
    return request({
      url: '/admin/ads',
      method: 'post',
      data
    })
  },
  updateAdsStatus(id, status) {
    return request({
      url: '/admin/update-ads-status/' + id + '/' + status,
      method: 'get'
    })
  },
  deleteAds(id) {
    return request({
      url: '/admin/ads/' + id,
      method: 'delete'
    })
  },
  getAllBillboards(page) {
    return request({
      url: '/admin/billboards?page=' + page,
      method: 'get'
    })
  },
  updateBillBoardStatus(id, status) {
    return request({
      url: '/admin/update-billboard-status/' + id + '/' + status,
      method: 'get'
    })
  },
  deleteBillboard(id) {
    return request({
      url: '/admin/billboards/' + id,
      method: 'delete'
    })
  },
  updateUserStatus(id, status) {
    return request({
      url: '/admin/update-user-status/' + id + '/' + status,
      method: 'get'
    })
  },
  getUsers(page, role, status_id) {
    return request({
      url: '/admin/users?page=' + page + '&role=' + role + '&status_id=' + status_id
    })
  },
  getActivityLogs(page) {
    return request({
      url: '/admin/activity-logs?page=' + page,
      method: 'get'
    })
  },
  transactionHistory(page) {
    return request({
      url: '/admin/transaction-history?page=' + page,
      method: 'get'
    })
  },
  markAsCompleted(id) {
    return request({
      url: '/admin/mark-transaction-as-completed/' + id,
      method: 'get'
    })
  },
  getUserProfile(id) {
    return request({
      url: '/admin/user-profile/' + id,
      method: 'get'
    })
  },
  adminDashboard() {
    return request({
      url: '/admin/dashboard',
      method: 'get'
    })
  },
  payoutHistory(page) {
    return request({
      url: '/admin/payout-history?page=' + page,
      method: 'get'
    })
  },
  payoutStatusUpdate(data) {
    return request({
      url: '/admin/payout-status-update',
      method: 'post',
      data
    })
  },
  allPayoutHistory(page, userId) {
    return request({
      url: '/admin/all-payout-history/' + userId + '?page=' + page,
      method: 'post'
    })
  },
  allAdsAuditions(page, userId) {
    return request({
      url: '/admin/all-ads-report/' + userId + '?page=' + page,
      method: 'post'
    })
  },
  allSubscriptions(userId) {
    return request({
      url: '/admin/all-subscriptions/' + userId,
      method: 'get'
    })
  },
}
