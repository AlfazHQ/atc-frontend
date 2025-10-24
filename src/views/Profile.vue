<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid mt-5">
    <!-- ROW-4 -->
    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Edit Profile</h3>
          </div>
          <div class="card-body">
            <div class="text-center chat-image mb-5">
              <div class="chat-profile mb-3 brround">
                <el-upload
                  class="msg-file-uploader"
                  drag
                  :on-change="handleFiles"
                  :show-file-list="false"
                  :auto-upload="false"
                  action="#">
                  <img alt="avatar" :src="auth.avatar" class="brround w-100p h-100p">
                </el-upload>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label>First Name</label>
                  <input v-model="auth.first_name" type="text" class="form-control" placeholder="First Name">
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label>Last Name</label>
                  <input v-model="auth.last_name" type="text" class="form-control" placeholder="Enter Last Name">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input v-model="auth.email" type="email" class="form-control" placeholder="Email address">
            </div>
            <div class="form-group">
              <label>Contact Number</label>
              <input v-model="auth.mobile" type="text" class="form-control" placeholder="Contact number">
            </div>
          </div>
          <div class="card-footer text-end">
            <a href="javascript:void(0)" class="btn btn-success mx-3" @click="updateProfile">Save</a>
            <a href="javascript:void(0)" class="btn btn-danger">Cancel</a>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Edit Password</div>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label class="form-label">Current Password</label>
              <div id="Password-toggle" class="wrap-input100 validate-input input-group">
                <input v-model="item.current_password" class="input100 form-control" type="password" placeholder="Current Password" autocomplete="current-password">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">New Password</label>
              <div id="Password-toggle1" class="wrap-input100 validate-input input-group">
                <input v-model="item.new_password" class="input100 form-control" type="password" placeholder="New Password" autocomplete="new-password">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Confirm Password</label>
              <div id="Password-toggle2" class="wrap-input100 validate-input input-group">
                <input v-model="item.password_confirmation" class="input100 form-control" type="password" placeholder="Confirm Password" autocomplete="new-password">
              </div>
            </div>
          </div>
          <div class="card-footer text-end">
            <button class="btn btn-primary mx-3" @click="updatePassword">Update</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header justify-content-between">
            <div class="card-title">Delete Account</div>
            <button class="btn btn-danger mx-3" @click="handleDeleteAccount">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import { mapGetters } from 'vuex'
import Auth from '@/services/api/Auth'

export default {
  name: 'Profile',
  data() {
    return {
      item: {
        current_password: null,
        new_password: null,
        password_confirmation: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'auth'
    ])
  },
  mounted() {
  },
  methods: {
    updateProfile() {
      const formData = new FormData()
      formData.append('first_name', this.auth.first_name)
      formData.append('last_name', this.auth.last_name)
      formData.append('email', this.auth.email)
      formData.append('mobile', this.auth.mobile)
      if (this.auth.avatar_file) {
        formData.append('avatar_file', this.auth.avatar_file)
      }
      Auth.updateProfile(formData).then(res => {
        this.$notify({
          type: 'success',
          message: res.message
        })
      })
    },
    updatePassword() {
      Auth.changePassword(this.item).then(res => {
        this.$notify({
          type: 'success',
          message: res.message
        })
        this.item = {
          current_password: null,
          new_password: null,
          password_confirmation: null
        }
      })
    },
    handleFiles(file, fileList) {
      if (!this.isValidImage(file.raw)) {
        return this.$notify({
          title: 'Warning',
          type: 'warning',
          message: 'Invalid File'
        })
      }
      this.auth.avatar_file = file.raw
      this.auth.avatar = URL.createObjectURL(file.raw)
    },
    isValidImage(file) {
      if (!file.type) {
        this.$message.error('File must be Valid format!')
        return false
      }
      const isValid = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isValid) {
        this.$message.error('File must be JPG/PNG format!')
      }
      if (!isLt2M) {
        this.$message.error('File size can not exceed 2MB!')
      }
      return isValid && isLt2M
    },
    async handleDeleteAccount() {
      this.$confirm('This will permanently delete your account. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        Auth.deleteMyAccount().then(async res => {
          this.$message({
            type: 'success',
            message: res.message
          })
          await this.$store.dispatch('auth/resetToken')
          await this.$router.push({ name: 'Login' })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
</script>
