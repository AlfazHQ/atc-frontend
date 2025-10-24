/** When your routing table is too long, you can split it into small modules **/

import AdminLayout from '@/layout/admin'

const advertiserRouter = {
  path: '/advertiser',
  component: AdminLayout,
  name: 'Advertiser',
  meta: {
    title: 'Advertiser',
    roles: ['advertiser'],
    icon: 'briefcase'
  },
  children: [
    // {
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard'),
    //   name: 'Dashboard',
    //   meta: { title: 'Dashboard', icon: 'briefcase', roles: ['advertiser'] }
    // },
    {
      path: 'create-ads',
      component: () => import('@/views/advertiser/my-ads/action'),
      name: 'CreateAds',
      hidden: true,
      meta: { title: 'Create Ads', icon: 'briefcase', roles: ['advertiser'] }
    },
    {
      path: 'edit-ads/:id',
      component: () => import('@/views/advertiser/my-ads/action'),
      name: 'EditAds',
      hidden: true,
      meta: { title: 'Edit Ads', icon: 'briefcase', roles: ['advertiser'] }
    },
    {
      path: 'audition-reports',
      component: () => import('@/views/advertiser/reports/audition-reports'),
      name: 'AuditionReport',
      meta: { title: 'Audition Report', icon: 'briefcase', roles: ['advertiser'] }
    },
    {
      path: 'payment-history',
      component: () => import('@/views/advertiser/payment-history'),
      name: 'PaymentHistory',
      meta: { title: 'Payment History', icon: 'phone-incoming', roles: ['advertiser'] }
    },
    {
      path: 'checkout',
      component: () => import('@/views/advertiser/checkout'),
      name: 'CheckOut',
      hidden: true,
      meta: { title: 'CheckOut', icon: 'briefcase', roles: ['advertiser'] }
    },
    {
      path: 'guideline',
      component: () => import('@/views/advertiser/guideline'),
      name: 'Guidelines',
      meta: { title: 'Guidelines', icon: 'server', roles: ['advertiser'] }
    }
  ]
}
export default advertiserRouter
