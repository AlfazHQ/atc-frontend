<template>
  <nav class="navbar navbar-expand-lg app-bg-purple" :class="clientWidth <= 1230 ? 'p-0 h-8' : 'px-5 h-100p'">
    <div class="container-fluid justify-content-between">
      <div class="nav-wrapper align-items-center" style="display: contents">
        <router-link class="navbar-brand me-0 pe-0" :to="{ name: 'Home'}"><img src="@/assets/images/brand/logo-2.png" class="header-brand-img desktop-logo" alt="logo" :style="headerImgCss"></router-link>
        <div class="navbar-toggler px-0" @click="toggleSideBar">
          <feather type="menu" size="28" stroke="#fff"/>
        </div>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 ms-9 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Home'}" class="nav-link text-white active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'GlobalCoverage'}" class="nav-link text-white">Global Coverage</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Pricing'}" class="nav-link text-white">Pricing</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'WhyAtc'}" class="nav-link text-white">Why ATC</router-link>
          </li>
        </ul>
        <div class="auth-options">
          <template v-if="is_logged_in">
            <button class="app-btn-rounded app-bg-pink text-white border-0 me-2" @click="logout">Logout</button>
            <button class="app-btn-rounded app-bg-green text-white border-0 me-2" @click="$router.push({ name: 'Dashboard'})">Dashboard</button>
          </template>
          <template v-else>
            <button class="app-btn-rounded app-bg-green text-white border-0 me-2" @click="$router.push({ name: 'Login'})">Place A Ad</button>
            <button class="app-btn-rounded bg-white app-text-purple border-0 me-2" @click="$router.push({ name: 'SignUp'})">Sign Up</button>
            <button class="app-btn-rounded app-bg-pink text-white border-0 me-2" @click="$router.push({ name: 'Login'})">Login</button>
          </template>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img src="@/assets/frontend/img/lang.png" alt="" class="lang-btn">
              <feather type="chevron-down" stroke="#fff"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>US</el-dropdown-item>
              <el-dropdown-item>IN</el-dropdown-item>
              <el-dropdown-item>BD</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import CssMixin from '@/layout/mixin/CssHandler'

export default {
  name: 'Navbar',
  components: {
  },
  mixins: [CssMixin],
  data() {
    return {
      isSideBarOpened: false
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'clientWidth',
      'is_logged_in',
      'device',
      'auth'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      await this.$router.push('/')
    },
    toggleSideBar() {
      this.$emit('toggleSideBar', true)
    },
    handleCommand(route) {
      if (route === 'logout') return this.logout()
      this.$router.push({ name: route })
    }
  }
}
</script>
<style scoped>
li.nav-item {
  margin-right: 8px;
}
</style>
