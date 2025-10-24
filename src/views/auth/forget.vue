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
                <ValidationObserver v-slot="{ handleSubmit }">
                  <a href="https://adstocall.com/"><img class="logo" src="@/assets/images/brand/logo.png"></a>
                  <h3 class="fw-600 mb-4">Forgot Password</h3>
                  <template v-if="isEmailSent">
                    <div class="mb-3">
                      <label for="NewPassword" class="form-label">OTP</label>
                      <otp-input
                        ref="otpInput"
                        class="justify-content-center"
                        input-classes="otp-input shadow-sm"
                        :separator="false"
                        :num-inputs="6"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        @on-complete="handleOnComplete"
                      />
                    </div>
                    <div class="mb-3 position-relative">
                      <label for="NewPassword" class="form-label">New Password</label>
                      <input
                        v-model="loginForm.password"
                        :type="passwordType"
                        class="form-control"
                        required
                        placeholder="New Password"
                      >
                      <div class="position-absolute" style="top: 60%;right: 15px;" @click="showPwd">
                        <feather :type="passwordType === 'password' ? 'eye' : 'eye-off'"/>
                      </div>
                    </div>
                    <div class="mb-3 position-relative">
                      <label for="ConfirmPassword" class="form-label">Confirm Password</label>
                      <input
                        v-model="loginForm.password_confirmation"
                        :type="passwordType"
                        class="form-control"
                        required
                        placeholder="Confirm Password"
                      >
                      <div class="position-absolute" style="top: 60%;right: 15px;" @click="showPwd">
                        <feather :type="passwordType === 'password' ? 'eye' : 'eye-off'"/>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="mb-3">
                      <div class="row form-item-wrapper mx-0">
                        <div class="col-md-6 col-12">
                          <label class="form-label">Mobile Phone</label>
                        </div>
                        <div class="col-md-2 col-12">
                          <ValidationProvider v-slot="{ errors }" name="Mobile" rules="required">
                            <el-select v-model="loginForm.phone_code" placeholder="Select">
                              <el-option
                                v-for="country in countries"
                                :key="country.id"
                                :label="country.phone_code"
                                :value="country.phone_code"
                              />
                            </el-select>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="col-md-4 col-12 pe-0">
                          <ValidationProvider v-slot="{ errors }" name="Mobile" rules="required|min:10|max:10">
                            <input v-model="loginForm.mobile" type="number" :class="{'border-danger' : errors.length}" class="form-control" placeholder="Enter Number *">
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </template>
                  <div class="d-grid my-4">
                    <button v-if="isEmailSent" class="btn btn-primary" type="button" @click="setPassword">Set Password</button>
                    <button v-else class="btn btn-primary" type="button" @click="handleSubmit(handleForget)">Send</button>
                  </div>
                </ValidationObserver>
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
import OtpInput from '@bachdgvn/vue-otp-input'
import Utils from "@/services/api/Utils";
export default {
  name: 'Login',
  components: {
    OtpInput
  },
  mixins: [ResizeMixin],
  data() {
    return {
      loginForm: {
        mobile: '',
        token: '',
        phone_code: '+880',
        password: null,
        password_confirmation: null
      },
      countries: [],
      passwordType: 'password',
      redirect: undefined,
      isEmailSent: false,
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
    }),
    selectedCountry() {
      const that = this
      const country = this.countries.find(c => c.id === that.loginForm.country_id)
      return country || {}
    }
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
    this.getCountries()
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
    getCountries() {
      Utils.getCountries().then(res => {
        this.countries = res.data.countries
      })
    },
    handleForget() {
      const payload = {
        mobile: this.loginForm.phone_code + this.loginForm.mobile
      }
      Utils.forgotPassword(payload).then(res => {
        this.$notify({
          type: 'success',
          message: res.message
        })
        this.isEmailSent = true
      })
    },
    setPassword() {
      const payload = {
        mobile: this.loginForm.phone_code + this.loginForm.mobile,
        token: this.loginForm.token,
        password: this.loginForm.password,
        password_confirmation: this.loginForm.password_confirmation
      }
      Utils.setPassword(payload).then(res => {
        this.$notify({
          type: 'success',
          message: res.message
        })
        this.$router.push({ name: 'Login'})
      })
    },
    handleOnComplete(value) {
      this.loginForm.token = value
    }
  }
}
</script>
  <style scoped src="@/assets/authentication/bootstrap.min.css"></style>
  <style scoped src="@/assets/authentication/custom.css"></style>
