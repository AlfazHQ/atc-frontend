<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-md-6 col-sm-12 offset-md-3 offset-sm-0">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">{{ isEditMode ? 'Edit' : 'Create new' }} Billboard</h3>
            <div class="card-options">
              <button class="btn btn-dark btn-sm" @click="$router.go(-1)">Back</button>
            </div>
          </div>
          <div class="card-body pt-4">

            <div class="form-wrapper mt-5">
              <form class="form-horizontal">
                <div class="row">
                  <div class="col-md-12 col-sm-12 mb-4">
                    <input v-model="item.title" type="text" class="form-control form-item-wrapper" placeholder="Title *">
                  </div>
                </div>
                <div class="row">
                  <h4>Thumbnail Image *</h4>
                  <div class="col-md-8 col-sm-12 mb-4">
                    <el-upload
                      class="atc-file-uploader"
                      drag
                      :on-change="handleThumbnailFiles"
                      :show-file-list="false"
                      :auto-upload="false"
                      action="#">
                      <i class="el-icon-picture-outline"></i>
                      <div class="el-upload__text">
                        <p>Thumbnail Image size 200p x 300p JPEG/PNG</p>
                        Drop file here or <em>click to upload</em>
                      </div>
                    </el-upload>
                  </div>
                  <div class="col-md-4 col-sm-12 mb-4 text-center">
                    <img :src="getThumbnail" class="billboard-img">
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-info float-end" @click="handlePublish">Publish</button>
            <button class="btn btn-dark float-end me-4" @click="$router.go(-1)">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import { getObjectURL } from '@/utils/utils'
import Portal from '@/services/api/Portal'
import Utils from '@/services/api/Utils'
export default {
  name: 'MyAdsAction',
  data() {
    return {
      item: {
        title: null,
        thumbnail_file: null,
        banner_file: null,
        thumbnail: null,
        banner: null
      },
      countries: [],
      providers: [],
      player: {
        isPlaying: false
      },
      dialogVisible: false,
      temp: {
        title: null,
        audioFile: null
      }
    }
  },
  computed: {
    getAudio() {
      return this.item.audio ? this.item.audio : null
    },
    getThumbnail() {
      return this.item.thumbnail ? this.item.thumbnail : require(`@/assets/img/250x150.png`)
    },
    getBanner() {
      return this.item.banner ? this.item.banner : require(`@/assets/img/750x300.png`)
    },
    isEditMode() {
      return this.$route.params && this.$route.params.id
    }
  },
  mounted() {
    if (this.isEditMode) {
      this.getInfo(this.$route.params.id)
    }
  },
  created() {
    this.getCountries()
    this.getProviders()
  },
  methods: {
    getInfo(id) {
      Portal.getMyBillboardInfo(id).then(res => {
        this.item = res.data.item
      })
    },
    getCountries() {
      Utils.getCountries().then(res => {
        this.countries = res.data.countries
      })
    },
    getProviders() {
      Utils.getProviders().then(res => {
        this.providers = res.data.providers
      })
    },
    handlePreview() {
      console.log('handlePreview')
    },
    handleThumbnailFiles(file, fileList) {
      console.log('file.type ', file)
      if (!this.isValidImage(file.raw)) {
        return this.$notify({
          title: 'Warning',
          type: 'warning',
          message: 'Invalid File'
        })
      }
      this.item.thumbnail_file = file.raw
      this.item.thumbnail = URL.createObjectURL(file.raw)
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
    handleAddAds() {
      this.dialogVisible = true
      this.action = 'Add'
      this.resetTemp()
    },
    handleEditAds() {
      this.dialogVisible = true
      this.action = 'Edit'
    },
    resetTemp() {
      this.temp = {
        title: null,
        audioFile: null
      }
    },
    handlePublish() {
      const formData = new FormData()
      formData.append('title', this.item.title)
      formData.append('thumbnail_file', this.item.thumbnail_file)

      if (this.isEditMode) {
        formData.append('_method', 'PUT')
        Portal.updateMyBillboard(formData, this.item.id).then(res => {
          this.$notify({
            title: 'BillBoard updated',
            message: res.message,
            type: 'success'
          })
          this.$router.push({ name: 'Billboards' })
        })
      } else {
        Portal.saveMyBillboard(formData).then(res => {
          this.$notify({
            title: 'BillBoard created',
            message: res.message,
            type: 'success'
          })
          this.$router.push({ name: 'Billboards' })
        })
      }
    }
  }
}
</script>
