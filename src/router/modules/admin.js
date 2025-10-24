/** When your routing table is too long, you can split it into small modules **/

import AdminLayout from '@/layout/admin'

const adminRouter = {
  path: '/admin',
  component: AdminLayout,
  name: 'Admin',
  meta: {
    title: 'Admin',
    roles: ['super_admin', 'customer_care'],
    icon: 'briefcase'
  },
  children: [
    {
      path: 'all-ads',
      component: () => import('@/views/admin/ads'),
      name: 'AllAds',
      meta: { title: 'Ads List', icon: 'droplet', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'all-billboards',
      component: () => import('@/views/admin/billboard'),
      name: 'AllBillBoard',
      meta: { title: 'Billboard List', icon: 'droplet', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'advertiser',
      component: () => import('@/views/admin/advertiser'),
      name: 'Advertiser',
      meta: { title: 'Advertisers', icon: 'users', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'provider',
      component: () => import('@/views/admin/providers'),
      name: 'Providers',
      meta: { title: 'Providers', icon: 'users', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'users',
      component: () => import('@/views/admin/users'),
      name: 'Users',
      meta: { title: 'Users', icon: 'users', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'user-profile/:id',
      component: () => import('@/views/admin/users/profile'),
      name: 'UserProfile',
      hidden: true,
      meta: { title: 'User Profile', icon: 'users', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'payout-requests',
      component: () => import('@/views/admin/payout/list'),
      name: 'PayoutRequests',
      meta: { title: 'Payout Requests', icon: 'zap', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'transaction-history',
      component: () => import('@/views/admin/transaction-history'),
      name: 'TransactionHistory',
      meta: { title: 'Transaction History', icon: 'zap', roles: ['super_admin', 'customer_care'] }
    },
    {
      path: 'bulk-messages',
      component: () => import('@/views/message'),
      name: 'BulkMessages',
      meta: { title: 'Bulk Messages', icon: 'message-circle', roles: ['super_admin'] }
    },
    {
      path: 'services',
      component: () => import('@/views/admin/service'),
      name: 'Services',
      meta: { title: 'Service Coverage', icon: 'briefcase', roles: ['super_admin'] }
    },
    {
      path: 'blogs',
      component: () => import('@/views/admin/blog'),
      name: 'Blogs',
      meta: { title: 'Blogs', icon: 'trello', roles: ['super_admin'] }
    },
    {
      path: 'add-blog',
      component: () => import('@/views/admin/blog/action'),
      name: 'AddBlogs',
      hidden: true,
      meta: { title: 'Blogs', icon: 'settings', roles: ['super_admin'] }
    },
    {
      path: 'edit-blog/:id',
      component: () => import('@/views/admin/blog/action'),
      name: 'EditBlogs',
      hidden: true,
      meta: { title: 'Edit Blogs', icon: 'settings', roles: ['super_admin'] }
    },
    {
      path: 'activity-log',
      component: () => import('@/views/admin/activityLog'),
      name: 'ActivityLog',
      meta: { title: 'Activity Log', icon: 'server', roles: ['super_admin'] }
    },
    {
      path: 'configuration',
      component: () => import('@/views/admin/configuration'),
      name: 'Configuration',
      meta: { title: 'Configuration', icon: 'settings', roles: ['super_admin'] }
    }
  ]
}
export default adminRouter
