import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Vuelidate from 'vuelidate'
import VueFeather from '@/components/vue-feather'

import device from 'vue-device-detector-js'

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css'

import '@/utils/helper'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'

import '@/assets/plugins/bootstrap/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/dark-style.css'
import '@/assets/css/transparent-style.css'
import '@/assets/css/skin-modes.css'
import '@/assets/css/icons.css'
import '@/assets/colors/color1.css'
import '@/assets/css/main.css'
import '@/assets/frontend/font/reey-font/stylesheet.css'
import '@/assets/frontend/css/main.css'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, digits, min, max, confirmed, size } from 'vee-validate/dist/rules'
import 'bootstrap'
import './permission'
// Add a rule.
// extend('required', {
//   validate(value) {
//     return {
//       required: true,
//       valid: ['', null, undefined].indexOf(value) === -1,
//     }
//   },
//   message: 'The field is required',
//   computesRequired: true
// })
extend('email', email)
extend('digits', digits)
extend('min', min)
extend('max', max)
extend('confirmed', confirmed)

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
})

extend('min', {
  ...min,
  params: ['length'],
  message: 'The {_field_} should Be minimum {length} characters'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
import VuePusher from 'vue-pusher'
Vue.use(VuePusher, {
  api_key: process.env.VUE_APP_PUSHER_APP_KEY,
  options: {
    cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
    encrypted: true,
    authEndpoint: `${process.env.VUE_APP_BASE_API}/api/broadcasting/auth`,
    auth: {
      headers: {
        Authorization: store.getters.token,
        Accept: 'application/json'
      }
    }
  }
})

Vue.use(device)
Vue.use(VueHighlightJS)
Vue.use(Element, { locale })
Vue.use(Vuelidate)
Vue.use(VueFeather)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
