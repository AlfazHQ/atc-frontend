<template>
  <div id="main-wrapper" class="oxyy-login-register">
    <div class="container-fluid px-0">
      <div class="row g-0 min-vh-100">
        <!-- Welcome Text
        ========================= -->
        <div v-if="device !== 'mobile'" class="col-md-6">
          <div class="hero-wrap d-flex align-items-center h-100">
            <div class="hero-mask opacity-8" />
            <div
              class="hero-bg hero-bg-scroll"
              :style="{'background-image': 'url(' + require('@/assets/images/login.jpg') + ')'}"
            />
            <div class="hero-content w-100 min-vh-100 d-flex flex-column">
              <div class="row g-0" />
              <div class="row g-0 my-auto">
                <div class="col-10 col-lg-9 mx-auto">
                  <h1 class="text-11 text-white mb-4">HELLO, CIAO, HOLA, NI HAO </h1>

                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Welcome Text End -->

        <!-- Login Form
        ========================= -->
        <div class="col-lg-6 d-flex col-sm-12">
          <div class="container my-auto py-5">
            <div class="row g-0">
              <div class="col-10 col-lg-9 col-xl-8 mx-auto">
                <router-link :to="{ name: 'Home'}"><img class="logo" src="@/assets/images/brand/logo.png"></router-link>
                <h3 class="fw-600 mb-4">Log In</h3>
                <form id="loginForm" @submit.prevent="onSubmit">
                  <div class="mb-3">
                    <label for="emailAddress" class="form-label">Email Address</label>
                    <input
                      id="emailAddress"
                      v-model="loginForm.email"
                      type="email"
                      class="form-control"
                      required
                      placeholder="Enter Your Email"
                    >
                  </div>
                  <div class="mb-3 position-relative">
                    <label for="loginPassword" class="form-label">Password</label>
                    <input
                      id="loginPassword"
                      v-model="loginForm.password"
                      :type="passwordType"
                      class="form-control"
                      required
                      placeholder="Enter Password"
                    >
                    <div class="position-absolute" style="top: 60%;right: 15px;" @click="showPwd">
                      <feather :type="passwordType === 'password' ? 'eye' : 'eye-off'"/>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col">
                      <div class="form-check">
                        <input
                          id="remember-me"
                          name="remember"
                          class="form-check-input"
                          type="checkbox"
                        >
                        <label class="form-check-label" for="remember-me">Remember Me</label>
                      </div>
                    </div>
                    <div class="col text-end"><a href="javascript:void(0);"><router-link :to="{ name: 'ForgetPassword'}" class="link-primary">Forgot Password ?</router-link></a></div>
                  </div>
                  <div class="d-grid my-4">
                    <button class="btn btn-primary" type="submit">Login</button>
                  </div>
                </form>
                <p class="text-center text-muted mb-0">Don't have an account?<router-link :to="{ name: 'SignUp'}" class="link-primary"> Sign Up</router-link></p>

                <div v-if="$device.isIOS" class="d-flex flex-column align-items-center mb-4">
                  <img class="qr" src="@/assets/images/app_store_qr.png">
                </div>
                <div v-else-if="$device.os.android" class="d-flex flex-column align-items-center mb-4">
                  <img class="qr" src="@/assets/images/play_store_qr.png">
                </div>
                <div v-else-if="$device.isOSx" class="d-flex flex-column align-items-center mb-4">
                  <img class="qr" src="@/assets/images/app_store_qr.png">
                </div>
                <div v-else-if="$device.os.windows" class="d-flex flex-column align-items-center mb-4">
                  <img class="qr" src="@/assets/images/qr.png">
                </div>
                <div v-else class="d-flex flex-column align-items-center mb-4">
                  <img class="qr" src="@/assets/images/play_store_qr.png">
                </div>
                <div class="d-flex flex-column align-items-center mb-4">
                  <div class="row">
                    <div class="col-4">
                      <a href="https://www.apple.com/app-store/"><img class="app" src="@/assets/images/store/app.png">
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="https://play.google.com/store/apps/details?id=com.easital.adstocall.ads_to_call"><img class="app" src="@/assets/images/store/play.png">
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="https://one.store/"><img class="app" src="@/assets/images/store/one_store.png">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Login Form End -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'
import ResizeMixin from '@/layout/mixin/ResizeHandler'

export default {
  name: 'Login',
  mixins: [ResizeMixin],
  data() {
    return {
      loginForm: {
        email: 'advertiser@gmail.com',
        password: 'password'
      },
      passwordType: 'password',
      redirect: undefined,
      otherQuery: {}
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles',
      'device'
    ]),
    ...mapState({
      // sidebar: state => state.app.sidebar,
      // device: state => state.app.device
    })
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {
    if (this.loginForm.email === '') {
      this.$refs.email.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    onSubmit(event) {
      console.log('Form Submitting')
      this.handleLogin()
    },
    handleLogin() {
      this.$store.dispatch('auth/login', this.loginForm)
        .then(() => {
          this.$router.push({ name: 'Dashboard' }).catch(error => {
            // console.info(error.message)
          })
        })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style scoped src="@/assets/authentication/bootstrap.min.css"></style>
<style scoped src="@/assets/authentication/custom.css"></style>

