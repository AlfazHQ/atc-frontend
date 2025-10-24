<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-md-6 col-sm-12 offset-md-3 offset-sm-0">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">{{ isEditMode ? 'Edit' : 'Create new' }} Ads</h3>
            <div class="card-options">
              <button class="btn btn-dark btn-sm" @click="$router.go(-1)">Back</button>
            </div>
          </div>
          <div class="card-body pt-4">
            <ValidationObserver v-slot="{ handleSubmit }">

              <div class="form-wrapper mt-5">
                <form class="form-horizontal">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 mb-4">
                      <ValidationProvider v-slot="{ errors }" rules="required">
                        <input v-model="item.title" type="text" class="form-control form-item-wrapper" placeholder="Title *">
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="row form-item-wrapper mx-0 pb-4 mb-4">
                    <label class="form-label">Select Your age Demographic *</label>
                    <!--                  <h2>Select Your age Demographic</h2>-->
                    <div class="col-md-6 col-sm-12 mb-4">
                      <div class="row form-item-wrapper mx-0">
                        <div class="col-6">
                          <label class="form-label">Male</label>
                        </div>
                        <div class="col-6">
                          <el-slider
                            v-model="item.male_age_range"
                            class="form-control"
                            range
                            show-stops
                            :min="18"
                            :max="80"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 mb-4">
                      <div class="row form-item-wrapper mx-0">
                        <div class="col-6">
                          <label class="form-label">Female</label>
                        </div>
                        <div class="col-6">
                          <el-slider
                            v-model="item.female_age_range"
                            class="form-control"
                            range
                            show-stops
                            :min="18"
                            :max="80"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <h4>Thumbnail Image *</h4>
                    <div class="col-md-8 col-sm-12 mb-4">
                      <ValidationProvider v-slot="{ errors }" rules="required">

                        <el-upload
                          class="atc-file-uploader"
                          drag
                          :on-change="handleThumbnailFiles"
                          :show-file-list="false"
                          :auto-upload="false"
                          action="#"
                        >
                          <i class="el-icon-picture-outline" />
                          <div class="el-upload__text">
                            <p>Thumbnail Image size 200p x 300p JPEG/PNG</p>
                            Drop file here or <em>click to upload</em>
                          </div>
                        </el-upload>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>

                    </div>
                    <div class="col-md-4 col-sm-12 mb-4 text-center">
                      <img :src="getThumbnail" class="billboard-img">
                    </div>
                  </div>
                  <div class="row">
                    <h4>Banner Image *</h4>
                    <div class="col-12 mb-4">
                      <ValidationProvider v-slot="{ errors }" rules="required">
                        <el-upload
                          class="atc-file-uploader"
                          drag
                          :on-change="handleBannerFiles"
                          :show-file-list="false"
                          :auto-upload="false"
                          action="#"
                        >
                          <i class="el-icon-picture-outline" />
                          <div class="el-upload__text">
                            <p>Thumbnail Image size 200p x 300p JPEG/PNG</p>
                            Drop file here or <em>click to upload</em>
                          </div>
                        </el-upload>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>

                    </div>
                    <div class="col-12 mb-4 text-center">
                      <img :src="getBanner" class="banner-img">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8 col-sm-12 mb-4">
                      <h4>Audio File *</h4>
                      <ValidationProvider v-slot="{ errors }" rules="required">

                        <el-upload
                          class="atc-file-uploader"
                          drag
                          :on-change="handleAudioFiles"
                          :show-file-list="false"
                          :auto-upload="false"
                          action="#"
                        >
                          <!--                      <i class="el-icon-upload"></i>-->
                          <i class="el-icon-headset" />
                          <div class="el-upload__text">
                            <p>Audio type Mp3</p>
                            Drop file here or <em>click to upload</em>
                          </div>
                        </el-upload>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-4 text-center">
                      <div class="ads-preview mt-3">

                        <template v-if="item.audio">
                          <div class="player-action" style="top:30%" @click="toggleAudio()">
                            <feather :type="player.isPlaying? 'pause-circle' : 'play-circle'" stroke="#fff" size="64" />
                            <audio
                              id="audio-player"
                              ref="player"
                              style="display:none"
                              @ended="handleEndPayler"
                            >
                              <source :src="item.audio" type="audio/mpeg">
                            </audio>
                          </div>
                        </template>
                        <template v-else>
                          <feather type="music" size="128" stroke="#ddd" />
                        </template>
                      </div>
                    </div>
                  </div>
                  <!--                <div class="row">-->
                  <!--                  <h4>Banner Image *</h4>-->
                  <!--                  <div class="col-md-12">-->
                  <!--                    <div class="form-group text-center">-->
                  <!--                      <img :src="getBanner" alt="" class="form-control-banner br-5" @click="inputBanner">-->
                  <!--                      <input-->
                  <!--                        v-show="false"-->
                  <!--                        ref="banner"-->
                  <!--                        type="file"-->
                  <!--                        accept="image/*"-->
                  <!--                        @change="inputBannerChange($event)">-->
                  <!--                    </div>-->
                  <!--                  </div>-->
                  <!--                </div>-->
                  <div class="row">
                    <div class="col-md-4 col-sm-12 mb-4">
                      <h4>Country *</h4>
                      <ValidationProvider v-slot="{ errors }" rules="required">
                        <el-select v-model="item.country_ids" filterable multiple :multiple-limit="1" collapse-tags class="form-item-wrapper" placeholder="Select Country">
                          <el-option
                            v-for="el in countries"
                            :key="el.id"
                            :label="el.name"
                            :value="el.id"
                          />
                        </el-select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-4 text-center">
                      <h4>Providers *</h4>
                      <ValidationProvider v-slot="{ errors }" rules="required">
                        <el-select v-model="item.provider_ids" filterable multiple class="form-item-wrapper" placeholder="Select Providers">
                          <el-option
                            v-for="el in providers"
                            :key="el.id"
                            :label="el.name"
                            :value="el.id"
                          />
                        </el-select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-4 text-end">
                      <h4>Preferred Gender *</h4>
                      <el-select v-model="item.preferred_gender" class="form-item-wrapper" placeholder="Select Gender">
                        <el-option
                          v-for="el in ['Male', 'Female', 'Both']"
                          :key="el"
                          :label="el"
                          :value="el"
                        />
                      </el-select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 mb-4">
                      <el-input
                        v-model="item.description"
                        :autosize="{ minRows: 5, maxRows: 10}"
                        type="textarea"
                        placeholder="Description *"
                      />
                      <!--                    <input v-model="item.title" type="text" class="form-control form-item-wrapper" placeholder="Title *">-->
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-footer">
                <button class="btn btn-info float-end" @click="handleSubmit(handlePublish)">Publish</button>
                <button class="btn btn-dark float-end me-4" @click="$router.go(-1)">Cancel</button>
              </div>
            </ValidationObserver>

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
        country_ids: [],
        provider_ids: [],
        preferred_gender: 'Both',
        male_age_range: [24, 50],
        female_age_range: [22, 35],
        audio_file: null,
        thumbnail_file: null,
        banner_file: null,
        audio: null,
        thumbnail: null,
        banner: null,
        description: null
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
      Portal.getMyAdsInfo(id).then(res => {
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
    handleBannerFiles(file, fileList) {
      console.log('file.type ', file)
      if (!this.isValidImage(file.raw)) {
        return this.$notify({
          title: 'Warning',
          type: 'warning',
          message: 'Invalid File'
        })
      }
      this.item.banner_file = file.raw
      this.item.banner = URL.createObjectURL(file.raw)
    },
    handleAudioFiles(file, fileList) {
      console.log('file.type ', file)
      this.item.audio_file = file.raw
      this.item.audio = URL.createObjectURL(file.raw)
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
    inputBannerChange(e) {
      const files = this.$refs.banner.files[0]
      // const files = e.target.files
      // console.log('files ', files)
      // if (!files.length) return
      this.item.banner_file = files[0]
      this.item.banner = getObjectURL(files[0])
    },
    async inputBanner() {
      this.$refs.banner.click()
    },
    handleEndPayler() {
      this.player.isPlaying = false
    },
    toggleAudio(forcePause = false) {
      const audio = document.getElementById('audio-player')
      this.player.isPlaying = audio.paused
      if (audio.paused && !forcePause) {
        audio.play()
      } else {
        audio.pause()
      }
    },
    handlePublish() {
      const formData = new FormData()
      formData.append('title', this.item.title)
      formData.append('description', this.item.description)
      formData.append('country_ids', this.item.country_ids)
      formData.append('provider_ids', this.item.provider_ids)
      formData.append('male_age_range', this.item.male_age_range)
      formData.append('female_age_range', this.item.female_age_range)
      formData.append('preferred_gender', this.item.preferred_gender)
      if (this.item.audio_file) {
        formData.append('audio_file', this.item.audio_file)
      }
      if (this.item.thumbnail_file) {
        formData.append('thumbnail_file', this.item.thumbnail_file)
      }
      if (this.item.banner_file) {
        formData.append('banner_file', this.item.banner_file)
      }

      if (this.isEditMode) {
        formData.append('_method', 'PUT')
        Portal.updateMyAds(formData, this.item.id).then(res => {
          this.$notify({
            title: 'Ads updated',
            message: res.message,
            type: 'success'
          })
          this.$router.push({ name: 'MyAds' })
        })
      } else {
        Portal.saveMyAds(formData).then(res => {
          this.$notify({
            title: 'Ads created',
            message: res.message,
            type: 'success'
          })
          this.$router.push({ name: 'MyAds' })
        })
      }
    }
  }
}
</script>
