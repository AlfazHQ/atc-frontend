/** When your routing table is too long, you can split it into small modules **/

import AdminLayout from '@/layout/admin'

const shareRouter = {
  path: '',
  component: AdminLayout,
  name: 'Advertiser',
  meta: {
    title: 'Advertiser',
    roles: ['advertiser', 'provider', 'super_admin'],
    icon: 'briefcase'
  },
  children: [
    {
      path: 'my-ads',
      component: () => import('@/views/advertiser/my-ads'),
      name: 'MyAds',
      meta: { title: 'Ad Management', icon: 'droplet', roles: ['advertiser'] }
    },
    {
      path: 'billboards',
      component: () => import('@/views/share/billboards'),
      name: 'Billboards',
      meta: { title: 'Billboards', icon: 'layout', roles: ['advertiser', 'provider'] }
    },
    {
      path: 'add-billboard',
      component: () => import('@/views/share/billboards/action'),
      name: 'AddBillboard',
      hidden: true,
      meta: { title: 'AddBillboard', icon: 'briefcase', roles: ['advertiser', 'provider'] }
    },
    {
      path: 'edit-billboard/:id',
      component: () => import('@/views/share/billboards/action'),
      name: 'EditBillboard',
      hidden: true,
      meta: { title: 'EditBillboard', icon: 'briefcase', roles: ['advertiser', 'provider'] }
    },
    {
      path: 'file-manager',
      component: () => import('@/views/share/file-manager'),
      name: 'FileManager',
      meta: { title: 'File Manager', icon: 'folder', roles: ['advertiser', 'provider', 'super_admin'] }
    },
    {
      path: 'file-manager/:type',
      component: () => import('@/views/share/file-manager/files'),
      name: 'FileManagerFiles',
      hidden: true,
      meta: { title: 'File Manager', icon: 'folder', roles: ['advertiser', 'provider', 'super_admin'] }
    },
    {
      path: 'packages',
      component: () => import('@/views/share/packages'),
      name: 'Packages',
      meta: { title: 'Packages', icon: 'package', roles: ['advertiser', 'provider'] }
    }
  ]
}
export default shareRouter
