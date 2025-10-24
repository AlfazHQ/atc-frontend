<template>

  <div class="page">
    <div class="page-main">
      <div class="row">
        <div class="col-12">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// import BarChart from '@/components/charts/Bar'
import LineChart from '@/components/charts/Line'
import PieChart from '@/components/charts/PieChart'
export default {
  name: 'TestApp',
  components: { LineChart, PieChart },
  data() {
    return {
      loginForm: {
        email: 'superadmin@gmail.com',
        password: 'password'
      },
      passwordType: 'password',
      redirect: undefined,
      otherQuery: {}
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
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
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

