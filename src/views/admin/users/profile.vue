<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-10 col-sm-12 mb-4">
              <h3>User Profile</h3>
            </div>
            <div class="col-md-2 col-sm-12 mb-4 text-end">
              <button class="btn btn-dark ms-3" @click="$router.go(-1)">Back</button>
            </div>
          </div>
          <div class="card-body pt-4">
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Overview" name="Overview">
                <div class="card">
                  <div class="card-body">
                    <h4>Name: {{ userProfile.name }}</h4>
                    <h4>Email: {{ userProfile.email }}</h4>
<!--                    <h4>Age: {{ userProfile.age }}</h4>-->
                    <h4>Gender: {{ userProfile.gender }}</h4>
                    <h4>Phone Model: {{ userProfile.phone_model }}</h4>
                    <h4>Country: {{ userProfile.country }}</h4>
                    <h4>Mobile: {{ userProfile.mobile }}</h4>
                    <h4>Address: {{ userProfile.address }}</h4>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane v-if="userProfile.type === 'Advertiser'" label="Audition Report" name="AuditionReport">
                <audition-reports/>
              </el-tab-pane>
              <el-tab-pane v-if="userProfile.type === 'User' || userProfile.type === 'Provider'" label="Withdrawal History" name="WithdrawalHistory">
                <withdrawal-history/>
              </el-tab-pane>
              <el-tab-pane v-if="userProfile.type === 'User'" label="Subscriptions" name="Subscriptions">
                <subscription-history/>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import Admin from '@/services/api/Admin'
import AuditionReports from '@/views/advertiser/reports/audition-reports'
import SubscriptionHistory from '@/views/portal/subscription-history'
import WithdrawalHistory from '@/views/portal/withdrawal-history'

export default {
  name: 'UserProfile',
  components: { AuditionReports, SubscriptionHistory, WithdrawalHistory },
  data() {
    return {
      activeTab: 'Overview',
      userProfile: {}
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.userId = this.$route.params.id
    }
    this.getUserProfile(this.$route.params.id)
  },
  methods: {
    getUserProfile(id) {
      Admin.getUserProfile(id).then(res => {
        this.userProfile = res.data.user
      })
    }
  }
}
</script>
