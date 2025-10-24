<template>

  <div class="page">
    <div class="page-main">
      <div class="row m-0 justify-content-center mt-9">
        <div class="col-6 offet-6">
          <input v-model="authKey" type="password" class="form-control form-item-wrapper" placeholder="****" @input="handleKey">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { setSecret } from '@/services/cookie/auth'
export default {
  name: 'Sorry',
  data() {
    return {
      authKey: null
    }
  },
  watch: {
  },
  created() {
  },
  destroyed() {
  },
  methods: {
    handleKey() {
      if (this.authKey.length === 8) {
        console.log(this.authKey)
        if (this.authKey == 88889999) {
          setSecret('true')
          this.$notify({
            type: 'success',
            title: 'Congratulation',
            message: 'Welcome to the gang'
          })
          return this.$router.push({ name: 'Home' })
        } else {
          return this.$notify({
            type: 'warning',
            title: 'Opps !',
            message: 'Invalid Secret'
          })
        }
      }
    }
  }
}
</script>

