import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLayout from '@/layout/admin'
import FrontendLayout from '@/layout/frontend'
// import rolesPermissionRouter from './modules/role-permission'
// import officeRouter from './modules/office-management'
import adminRouter from './modules/admin'
import advertiserRouter from './modules/advertiser'
import portalRouter from './modules/portal'
import shareRouter from './modules/share'

Vue.use(VueRouter)

export const publicRoutes = [
  {
    path: '/redirect/:path(.*)',
    name: 'Redirect',
    component: () => import('@/views/redirect/index'),
    hidden: true,
    meta: { title: 'Redirect', isPublic: true, icon: 'home' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login'),
    hidden: true,
    meta: { title: 'Login', isPublic: true, icon: 'home' }
  },
  // {
  //   path: '/signup',
  //   name: 'SignUp',
  //   component: () => import('@/views/auth/signup'),
  //   hidden: true,
  //   meta: { title: 'SignUp', isPublic: true, icon: 'home' }
  // },
  {
    path: '/forget',
    name: 'ForgetPassword',
    component: () => import('@/views/auth/forget'),
    hidden: true,
    meta: { title: 'Forget Password', isPublic: true, icon: 'home' }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test'),
    hidden: true,
    meta: { title: 'Test', isPublic: true, icon: 'home' }
  },
  {
    path: '/sorry',
    name: 'Sorry',
    component: () => import('@/views/Sorry'),
    hidden: true,
    meta: { title: 'Sorry', isPublic: true, icon: 'home' }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error-page/404'),
    hidden: true,
    meta: { title: '404', isPublic: true, icon: 'home' }
  },
  {
    path: '/401',
    name: 'UnAuthenticated',
    component: () => import('@/views/error-page/401'),
    hidden: true,
    meta: { title: '401', isPublic: true, icon: 'home' }
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    hidden: true,
    component: FrontendLayout,
    meta: { title: 'Home', isPublic: true, icon: 'home' },
    children: [
      {
        path: '/home',
        name: 'HomePage',
        component: () => import('@/views/frontend/Home'),
        meta: { title: 'Home Page', isPublic: true, icon: 'home' }
      },
      {
        path: '/global-coverage',
        name: 'GlobalCoverage',
        component: () => import('@/views/frontend/coverage'),
        meta: { title: 'Global Coverage', isPublic: true, icon: 'home' }
      },
      {
        path: '/pricing',
        name: 'Pricing',
        component: () => import('@/views/frontend/pricing'),
        meta: { title: 'Pricing', isPublic: true, icon: 'home' }
      },
      {
        path: '/all-ads',
        name: 'AllAds',
        component: () => import('@/views/frontend/all-ads'),
        meta: { title: 'AllAds', isPublic: true, icon: 'home' }
      },
      {
        path: '/blog-details/:id',
        name: 'BlogDetail',
        component: () => import('@/views/frontend/BlogDetails'),
        meta: { title: 'Blog Detail', isPublic: true, icon: 'home' }
      },
      {
        path: '/atc',
        name: 'WhyAtc',
        component: () => import('@/views/frontend/Atc'),
        meta: { title: 'Why Atc', isPublic: true, icon: 'home' }
      },
      {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: () => import('@/views/frontend/PrivacyPolicy'),
        meta: { title: 'Privacy Policy', isPublic: true, icon: 'home' }
      },
      {
        path: '/term-conditions',
        name: 'TermsConditions',
        component: () => import('@/views/frontend/TermsConditions'),
        meta: { title: 'Terms Conditions', isPublic: true, icon: 'home' }
      },
      {
        path: '/refund-policy',
        name: 'RefundPolicy',
        component: () => import('@/views/frontend/RefunPolicy'),
        meta: { title: 'Refund Policy', isPublic: true, icon: 'home' }
      },
      {
        path: '/faqs',
        name: 'Faqs',
        component: () => import('@/views/frontend/Faqs'),
        meta: { title: 'Faqs', isPublic: true, icon: 'home' }
      },
      {
        path: '/virtual-emulator',
        name: 'VirtualEmulator',
        component: () => import('@/views/frontend/Emulator'),
        meta: { title: 'VirtualEmulator', isPublic: true, icon: 'home' }
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/views/auth/signup'),
        hidden: true,
        meta: { title: 'SignUp', isPublic: true, icon: 'home' }
      },
    ]
  },
  {
    path: '/dashboard',
    name: 'DashboardHome',
    redirect: '/dashboard',
    component: AdminLayout,
    meta: { title: 'Dashboard', icon: 'home' },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: 'Dashboard', icon: 'home' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on acl permissions
 */
export const asyncRoutes = [
  adminRouter,
  shareRouter,
  advertiserRouter,
  portalRouter,
  // officeRouter,
  // rolesPermissionRouter,
  {
    path: '/settings',
    name: 'Settings',
    redirect: '/profile',
    component: AdminLayout,
    meta: { title: 'Settings', icon: 'settings' },
    children: [
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/message'),
        meta: { title: 'Message', icon: 'message-square' }
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: () => import('@/views/share/notifications'),
        meta: { title: 'Notifications', icon: 'bell' }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/Profile'),
        meta: { title: 'Profile', icon: 'user' }
      }
      // {
      //   path: 'change-password',
      //   name: 'ChangePassword',
      //   component: () => import('@/views/admin/Dashboard'),
      //   meta: { title: 'Change Password', icon: 'home' }
      // }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: publicRoutes,
  scrollBehavior(to, from, savedPosition) {
    console.log('scroll')
    // always scroll to top
    return { x: 0, y: 0 }
  }
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
