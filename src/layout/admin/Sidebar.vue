<template>

  <!--APP-SIDEBAR-->
  <div class="sticky">
    <div class="app-sidebar__overlay" data-bs-toggle="sidebar" />
    <div class="app-sidebar">
      <div class="side-header">
        <router-link :to="{ name: 'Home'}" class="header-brand1">
          <img src="@/assets/images/brand/logo.png" class="header-brand-img desktop-logo" alt="logo">
          <img
            src="@/assets/images/brand/logo.png"
            class="header-brand-img toggle-logo"
            alt="logo"
          >
          <img src="@/assets/images/brand/logo.png" class="header-brand-img light-logo" alt="logo">
          <img
            src="@/assets/images/brand/logo.png"
            class="header-brand-img light-logo1"
            alt="logo"
          >
        </router-link>
        <!-- LOGO -->
      </div>
      <div class="main-sidemenu">
        <ul class="side-menu">
          <!--          <li class="sub-category">-->
          <!--            <h3>Main</h3>-->
          <!--          </li>-->
          <!--          <li class="slide">-->
          <!--            <a class="side-menu__item has-link" data-bs-toggle="slide" href="index.html"><i-->
          <!--              class="side-menu__icon fe fe-home"-->
          <!--            /><span-->
          <!--              class="side-menu__label"-->
          <!--            >Dashboard</span></a>-->
          <!--          </li>-->
          <li class="sub-category">
            <h3>Menus</h3>
          </li>
          <li>
            <sidebar-item v-for="(route, index) in permission_routes" :key="route.path" :index="index" :item="route" :base-path="route.path" />
            <!--            <a class="side-menu__item has-link" href="list.html">-->
            <!--              <i class="side-menu__icon fe fe-folder" /><span class="side-menu__label">All Ads</span>-->
            <!--            </a>-->
            <!--            <a class="side-menu__item has-link" href="list.html">-->
            <!--              <i class="side-menu__icon fe fe-folder" /><span class="side-menu__label">Advertisers</span>-->
            <!--            </a>-->
            <!--            <a class="side-menu__item has-link" href="list.html">-->
            <!--              <i class="side-menu__icon fe fe-folder" /><span class="side-menu__label">Providers</span>-->
            <!--            </a>-->
            <!--            <a class="side-menu__item has-link" href="list.html">-->
            <!--              <i class="side-menu__icon fe fe-folder" /><span class="side-menu__label">Users</span>-->
            <!--            </a>-->
          </li>
        </ul>
      </div>
    </div>
    <!--/APP-SIDEBAR-->
  </div>
  <!--/APP-SIDEBAR-->
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import { scrollCat } from '@/utils/scroll-to'
import { mapGetters } from 'vuex'
import { publicRoutes } from '@/router'
import SidebarItem from './SidebarItem'
export default {
  name: 'Layout',
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    currentModule() {
      const routeName = this.$route.name
      return this.permission_routes.find(module => {
        if ((!module.hidden && module.meta) || module.sidebarVisible) {
          if (module.children.length) {
            const children = module.children.find(children => children.name === routeName)
            if (children) {
              return module
            }
          }
          // console.log(module.name)
          // console.log('routeName', routeName)
          // return module.name === routeName
          // return {}
        }
      })
    },
    publicRoutes() {
      return publicRoutes
    }
  },
  mounted() {
    // new PerfectScrollbar('.menu-categories', {
    //   wheelSpeed: 0.5,
    //   swipeEasing: !0,
    //   minScrollbarLength: 40,
    //   maxScrollbarLength: 300
    // })
    // scrollCat()
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

