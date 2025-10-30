<template>
  <div class="landing-page">
    <div v-if="loading" class="preloader">
      <div class="preloader__image"></div>
    </div>
    <navbar @toggleSideBar="toggleSideBar" />
    <app-main />
    <Footer/>
    <div v-if="isSideBarOpened" class="mobile-menu app-bg-purple p-4">
      <div class="close-btn" @click="isSideBarOpened = false">
        <feather type="x" size="28" stroke="#fff"/>
      </div>
      <ul class="mb-4">
        <li class="menu-item"><router-link :to="{ name: 'Home'}">Home</router-link></li>
        <li class="menu-item"><router-link :to="{ name: 'GlobalCoverage'}">Global Coverage</router-link></li>
        <!-- <li class="menu-item"><router-link :to="{ name: 'Pricing'}">Pricing</router-link></li> -->
        <li class="menu-item"><router-link :to="{ name: 'WhyAtc'}">WhyAtc</router-link></li>
      </ul>

      <template v-if="is_logged_in">
        <button class="app-btn-rounded app-bg-pink text-white border-0 me-2" @click="logout">Logout</button>
        <button class="app-btn-rounded app-bg-pink text-white border-0 me-2" @click="$router.push({ name: 'Dashboard'})">Dashboard</button>
      </template>
      <template v-else>
        <button class="app-btn-rounded bg-white app-text-purple border-0 me-2" @click="$router.push({ name: 'SignUp'})">Sign Up</button>
        <button class="app-btn-rounded app-bg-pink text-white border-0 me-2" @click="$router.push({ name: 'Login'})">Login</button>
      </template>
      <p class="mb-2 mt-3 fs-18"><a class="text-white" href="mailto:support@adstocall.com ">support@adstocall.com</a></p>
      <p class="mb-4 fs-18"><a class="text-white" href="tel:8898006802" style="color:white;">+88 (9800) 6802</a></p>
      <ul class="footer-social-list text-start">
        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
        <li><a href="https://www.google.com/" target="_blank"><i class="fa fa-google"></i></a></li>
        <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
    <div v-if="isSideBarOpened" class="offcanvas-backdrop fade show"></div>
  </div>
</template>

<script>
import { AppMain, Navbar } from './components'
import Footer from '@/layout/frontend/components/Footer'
import ResizeMixin from '@/layout/mixin/ResizeHandler'
import { mapGetters } from "vuex";

export default {
  name: 'FrontendLayout',
  components: {
    Footer,
    AppMain,
    Navbar
  },
  mixins: [ResizeMixin],
  data() {
    return {
      loading: false,
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
  watch: {
    $route(to, from) {
      this.isSideBarOpened = false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, (Math.random() * (4 - 1) + 1) * 1000)
  },
  methods: {
    toggleSideBar(option) {
      this.isSideBarOpened = option
    },
    async logout() {
      await this.$store.dispatch('auth/logout')
      await this.$router.push('/')
    }
  }
}
</script>
<style>
.preloader {
  position: fixed;
  background-color: #fff;
  background-position: center center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}
.preloader__image {
  background-image: url(~@/assets/images/loader.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 60px auto;
  width: 100%;
  height: 100%;
  animation-name: example;
  animation-duration: 20s;
}

@keyframes example {
  0% { filter: blur(0px); }
  100% { filter: blur(2px); }
}
</style>
