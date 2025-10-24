<template>
  <component :is="currentRole" />
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './AdminDashboard'
import advertiserDashboard from './AdvertiserDashboard'
import providerDashboard from './ProviderDashboard'
import userDashboard from './UserDashboard'

export default {
  name: 'Dashboard',
  components: { adminDashboard, advertiserDashboard, providerDashboard, userDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (this.roles.includes('super_admin')) {
      this.currentRole = 'adminDashboard'
    } else if (this.roles.includes('advertiser')) {
      this.currentRole = 'advertiserDashboard'
    } else if (this.roles.includes('provider')) {
      this.currentRole = 'userDashboard'
    } else if (this.roles.includes('user')) {
      this.currentRole = 'userDashboard'
    }
  }
}
</script>
