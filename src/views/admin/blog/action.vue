<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-10 col-sm-12 mb-4">
              <h3>{{ isEditMode ? 'Edit' : 'Add' }} Blog</h3>
            </div>
            <div class="col-md-2 col-sm-12 text-end">
              <button class="btn btn-info" @click="handleSubmit">Save</button>
              <button class="btn btn-dark ms-3" @click="$router.go(-1)">Back</button>
            </div>
          </div>
          <div class="card-body pt-4">

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Title</label>
                  <input v-model="item.title" type="text" class="form-control" placeholder="">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>Thumbnail</label>
                  <img :src="getThumbnail" alt="" class="form-control-thumbnail" @click="inputThumbnail">
                  <input
                    v-show="false"
                    ref="thumbnail"
                    type="file"
                    accept="image/*"
                    @change="inputThumbnailChange($event)">
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <label>Banner</label>
                  <img :src="getBanner" alt="" class="form-control-banner" @click="inputBanner">
                  <input
                    v-show="false"
                    ref="banner"
                    type="file"
                    accept="image/*"
                    @change="inputBannerChange($event)">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Body</label>
                  <vue-editor v-model="item.body"></vue-editor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>
import { VueEditor } from 'vue2-editor'
import Admin from '@/services/api/Admin'
import { getObjectURL } from '@/utils/utils'

export default {
  name: 'AdminDashboard',
  components: { VueEditor },
  data() {
    return {
      item: {
        title: null,
        thumbnail_file: null,
        thumbnail: null,
        banner_file: null,
        banner: null,
        body: null
      }
    }
  },
  computed: {
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
  methods: {
    getInfo(id) {
      Admin.getBlogDetails(id).then(res => {
        this.item = res.data.blog
      })
    },
    inputThumbnailChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.item.thumbnail_file = files[0]
      this.item.thumbnail = getObjectURL(files[0])
    },
    inputBannerChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.item.banner_file = files[0]
      this.item.banner = getObjectURL(files[0])
    },
    async inputThumbnail() {
      this.$refs.thumbnail.click()
    },
    async inputBanner() {
      this.$refs.banner.click()
    },
    handleSubmit() {
      const formData = new FormData()
      formData.append('title', this.item.title)
      if (this.item.thumbnail_file) {
        formData.append('thumbnail_file', this.item.thumbnail_file)
      }
      if (this.item.banner_file) {
        formData.append('banner_file', this.item.banner_file)
      }
      formData.append('body', this.item.body)
      if (this.isEditMode) {
        formData.append('_method', 'PUT')
        Admin.updateBlog(formData, this.item.id).then(res => {
          this.$notify({
            title: 'Success',
            type: 'success',
            message: res.message
          })
          this.$router.push({ name: 'Blogs' })
        })
      } else {
        Admin.saveBlog(formData).then(res => {
          this.$notify({
            title: 'Success',
            type: 'success',
            message: res.message
          })
          this.$router.push({ name: 'Blogs' })
        })
      }
    }
  }
}
</script>
<style>
.form-control-thumbnail{
  width: 250px;
  height: 150px;
  display: block;
  border-radius: 6px;
  cursor: pointer;
}
.form-control-banner{
  width: 750px;
  height: 300px;
  display: block;
  border-radius: 6px;
  cursor: pointer;
}
</style>
