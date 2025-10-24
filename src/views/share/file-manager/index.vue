<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- Row -->
    <div class="row row-sm mt-5">
      <div class="col-md-5 col-lg-5 col-xl-3">
        <div class="card">
          <div v-if="!is_admin" class="card-body">
            <button v-if="auth.roles.includes('advertiser')|| roles.include('provider')" class="btn btn-primary btn-block" data-bs-target="#createfile" @click="$router.push({ name: 'AddBillboard'})"><i class="fe fe-plus me-1" /> Billboard Banner</button>
            <button v-if="auth.roles.includes('advertiser')" class="btn btn-danger btn-block" data-bs-target="#createfile" @click="$router.push({ name: 'CreateAds'})"><i class="fe fe-plus me-1" /> New Ad</button>
            <button v-if="auth.roles.includes('advertiser')" class="btn btn-warning btn-block" data-bs-target="#createfile" @click="$router.push({ name: 'CreateAds'})"><i class="fe fe-upload me-1" /> Upload Song Clip</button>
          </div>
          <div class="card-body pt-4">
            <div class="list-group list-group-transparent mb-0 file-manager">
              <div class="d-flex">
                <div>
                  <a href="javascript:void(0);" class="list-group-item  d-flex align-items-center px-0">
                    <i class="fe fe-image fs-18 me-2 text-success p-2" />Ads
                  </a>
                </div>
                <div class="text-end ms-auto mt-3">
                  <span class="fs-11  text-dark">{{ total_ads }} Files</span>
                </div>
              </div>
              <div class="progress progress-xs mb-3 ms-2">
                <div class="progress-bar bg-green" style="width: 60%;" />
              </div>
              <div class="d-flex">
                <div>
                  <a href="javascript:void(0);" class="list-group-item  d-flex align-items-center px-0">
                    <i class="fe fe-music fs-18 me-2 text-warning p-2" /> Billboard
                  </a>
                </div>
                <div class="text-end ms-auto mt-3">
                  <span class="fs-11  text-dark">{{ total_billboard }} Files</span>
                </div>
              </div>
              <div class="progress progress-xs mb-3 ms-2">
                <div class="progress-bar bg-warning" style="width: 20%;" />
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <a href="javascript:void(0)" class="file-manager-image"><img src="@/assets/images/media/folder1.png" alt="img"></a>
              <h3 class="ms-3 mt-5 fw-semibold">{{ total_ads + total_billboard }} Files</h3>
            </div>
            <div class="progress progress-xs mb-3">
              <div class="progress-bar bg-warning" style="width: 40%;" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-7 col-xl-9">
        <div class="row row-sm">
          <div class="text-dark mb-2 ms-1 fs-20 fw-semibold">All Folders</div>
          <div class="col-xl-3 col-md-6 col-sm-6">
            <div class="card pos-relative">
              <router-link :to="{ name: 'FileManagerFiles', params: { type: 'audio' }}">
                <div class="card-body px-4 pt-4 pb-2">
                  <div class="d-flex">
                    <span class="bg-success-transparent border border-success brround">
                      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="#09ad95" d="M10 4L12 6H20C21.1 6 22 6.89 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10M19 9H15.5V13.06L15 13C13.9 13 13 13.9 13 15C13 16.11 13.9 17 15 17C16.11 17 17 16.11 17 15V11H19V9Z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="card-footer border-top-0">
                  <div class="d-flex">
                    <div>
                      <h5 class="text-teal">Audios</h5>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-sm-6">
            <div class="card pos-relative">
              <router-link :to="{ name: 'FileManagerFiles', params: { type: 'images' }}">
                <div class="card-body px-4 pt-4 pb-2">
                  <div class="d-flex">
                    <span class="bg-danger-transparent border border-orange brround">
                      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="#fc7303" d="M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="card-footer border-top-0">
                  <div class="d-flex">
                    <div>
                      <h5 class="text-orange">Images</h5>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="text-dark mb-2 ms-1 fs-20 fw-semibold">Recent Ads</div>
        <div class="row row-sm">
          <div v-for="el in ads" :key="el.id" class="col-3">
            <div class="card overflow-hidden">
              <a v-if="['thumbnail', 'banner'].includes(el.media_type)" href="javascript:void(0);"><img :src="el.path_url" alt="img" class="w-100 file-manager-item"></a>
              <audio-player v-if="['audio'].includes(el.media_type)" class="w-100 file-manager-item" clas-name="file-player-action" :player="el.player" :uid="el.id" :file="el.path_url"/>
              <div v-if="is_admin" class="option-btn" title="Share" @click="handleShare(el)">
                <feather type="share"/>
              </div>
              <div v-else class="option-btn" title="Re campaign" @click="$router.push({ name: 'EditAds', params: { id: el.id}})">
                <feather type="rotate-ccw"/>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <div class="">
                    <h5 class="mb-0 fw-semibold text-break fs-12">{{ el.path | getFilename }}</h5>
                  </div>
<!--                  <div class="ms-auto my-auto">-->
<!--                    <span class="text-muted mb-0 text-capitalize">{{ el.media_type }}</span>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-dark mb-2 ms-1 fs-20 fw-semibold">Recent Billboards</div>
        <div class="row row-sm">
          <div v-for="el in billboards" :key="el.id" class="col-3">
            <div class="card overflow-hidden">
              <a href="javascript:void(0);"><img :src="el.path_url" alt="img" class="w-100 file-manager-item"></a>
              <div class="card-footer">
                <div class="d-flex">
                  <div class="">
                    <h5 class="mb-0 fw-semibold text-break fs-12">{{ el.path | getFilename }}</h5>
                  </div>
<!--                  <div class="ms-auto my-auto">-->
<!--                    <span class="text-muted mb-0 text-capitalize">{{ el.media_type }}</span>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Row -->
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%">
      <div class="card">
        <div class="card-header">
          <h2>Sharing Media</h2>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <el-select v-model="temp.provider_ids" multiple placeholder="Select Providers">
                <el-option
                  v-for="item in providers"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="col-6">
              <a v-if="['thumbnail', 'banner'].includes(temp.media_type)" href="javascript:void(0);"><img :src="temp.path_url" alt="img" class=" file-manager-item"></a>
              <audio-player v-if="['audio'].includes(temp.media_type)" class="w-100 file-manager-item" clas-name="file-player-action" :player="temp.player" :uid="temp.id" :file="temp.path_url"/>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="shareMedia">Confirm</el-button>
      </span>
    </el-dialog>
    <!-- End Row -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import Portal from '@/services/api/Portal'
import AudioPlayer from '@/components/AudioPlayer'
import { mapGetters } from 'vuex'
import Utils from '@/services/api/Utils'
export default {
  name: 'FileManager',
  components: { AudioPlayer },
  filters: {
    getFilename(path) {
      let str = path
      str = str.split('/')
      return str[5]
    }
  },
  data() {
    return {
      ads: [],
      billboards: [],
      providers: [],
      total_ads: 0,
      total_billboard: 0,
      action: 'Add',
      dialogVisible: false,
      temp: {
        provider_ids: [],
        audioFile: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'auth',
      'is_admin'
    ])
  },
  created() {
    this.getLatestMedia()
    this.getProviders()
  },
  methods: {
    getLatestMedia() {
      Portal.myMediaFiles().then(res => {
        this.total_ads = res.data.total_ads
        this.total_billboard = res.data.total_billboard
        this.ads = res.data.ads
        this.billboards = res.data.billboards
      })
    },
    getProviders() {
      Utils.getProviders().then(res => {
        this.providers = res.data.providers
      })
    },
    shareMedia() {
      this.dialogVisible = false
      this.$notify({
        type: 'success',
        title: 'Success',
        message: 'This file has been shared successfully'
      })
    },
    handleShare(el) {
      this.dialogVisible = true
      this.temp = el
    },
    resetTemp() {
      this.temp = {
        title: null,
        audioFile: null
      }
    }
  }
}
</script>
