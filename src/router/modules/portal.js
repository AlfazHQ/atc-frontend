/** When your routing table is too long, you can split it into small modules **/

import AdminLayout from '@/layout/admin'

const portalRouter = {
  path: '/portal',
  component: AdminLayout,
  name: 'Portal',
  meta: {
    title: 'Portal',
    roles: ['user', 'provider'],
    icon: 'briefcase'
  },
  children: [
    // {
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard'),
    //   name: 'Dashboard',
    //   meta: { title: 'Dashboard', icon: 'briefcase', roles: ['advertiser'] }
    // },
    // {
    //   path: 'all-calls',
    //   component: () => import('@/views/dashboard'),
    //   name: 'AllCalls',
    //   meta: { title: 'All Calls', icon: 'briefcase', roles: ['user', 'provider'] }
    // },
    {
      path: 'my-earnings',
      component: () => import('@/views/portal/reports/earning-reports'),
      name: 'MyEarning',
      meta: { title: 'My Earning History', icon: 'trending-up', roles: ['provider'] }
    },
    {
      path: 'ad-choice',
      component: () => import('@/views/portal/ad-choice'),
      name: 'AdChoice',
      meta: { title: 'Ad Choice', icon: 'archive', roles: ['user'] }
    },
    {
      path: 'subscription-history',
      component: () => import('@/views/portal/subscription-history'),
      name: 'SubscriptionHistory',
      meta: { title: 'My Subscriptions', icon: 'archive', roles: ['user'] }
    },
    {
      path: 'pending-earning',
      component: () => import('@/views/portal/reports/earning-reports'),
      name: 'PendingEarning',
      meta: { title: 'Earning History', icon: 'trending-up', roles: ['user'] }
    },
    {
      path: 'call-history',
      component: () => import('@/views/portal/call-history'),
      name: 'CallHistory',
      hidden: true,
      meta: { title: 'Call History', icon: 'phone-incoming', roles: ['user'] }
    },
    {
      path: 'payout',
      component: () => import('@/views/portal/payout'),
      name: 'Payout',
      meta: { title: 'Transfer out', icon: 'credit-card', roles: ['user', 'provider'] }
    },
    {
      path: 'api-keys',
      component: () => import('@/views/portal/developer-tools/api-keys'),
      name: 'ApiKeys',
      meta: { title: 'Api Keys', icon: 'code', roles: ['provider'] }
    },
    {
      path: 'withdrawal-history',
      component: () => import('@/views/portal/withdrawal-history'),
      name: 'WithdrawalHistory',
      meta: { title: 'Withdrawal History', icon: 'dollar-sign', roles: ['user', 'provider'] }
    }
  ]
}
export default portalRouter
