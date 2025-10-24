<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- Row -->
    <div class="row row-sm mt-5">
      <div class="col-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-3 col-sm-12 mb-4">
              <h3 class="text-capitalize">{{ fileType }} Lists</h3>
            </div>
            <div class="col-md-7 col-sm-12 mb-4">
<!--              <div class="input-group">-->
<!--                <input v-model="query" type="text" class="form-control " placeholder="Search something..." name="s">-->
<!--                <span class="input-group-btn ms-0">-->
<!--                  <button class="btn btn-primary" type="submit">-->
<!--                    <span class="fe fe-search text-white" />-->
<!--                  </button>-->
<!--                </span>-->
<!--              </div>-->
            </div>
            <div class="col-md-2 col-sm-12 mb-4 text-end">
              <button class="btn btn-dark" @click="$router.push({ name: 'FileManager'})">Go Back</button>
            </div>
          </div>
          <div class="card-body">
            <div class="row row-sm">
              <div v-for="el in item.data" :key="el.id" class="col-2">
                <div class="card overflow-hidden">
                  <a v-if="['thumbnail', 'banner'].includes(el.media_type)" href="javascript:void(0);"><img :src="el.path_url" alt="img" class="w-100 file-manager-item"></a>
                  <audio-player v-if="['audio'].includes(el.media_type)" :key="el.id" class="w-100 file-manager-item" clas-name="file-player-action" :player="el.player" :uid="el.id" :file="el.path_url"/>
                  <div class="card-footer">
                    <div class="d-flex">
                      <div class="">
                        <h5 class="mb-0 fw-semibold text-break fs-12">{{ el.path | getFilename }}</h5>
                      </div>
<!--                      <div class="ms-auto my-auto">-->
<!--                        <span class="text-muted mb-0 text-capitalize">{{ el.media_type }}</span>-->
<!--                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <pagination class="justify-content-center mt-5" :data="item" @pagination-change-page="myMediaFilesByType"/>
          </div>
        </div>
      </div>
      <!-- End Row -->
    </div>
    <!-- End Row -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import Portal from '@/services/api/Portal'
import AudioPlayer from '@/components/AudioPlayer'
import { mapGetters } from 'vuex'
import Pagination from 'laravel-vue-pagination'
export default {
  name: 'FileManager',
  components: { AudioPlayer, Pagination },
  filters: {
    getFilename(path) {
      let str = path
      str = str.split('/')
      return str[5]
    }
  },
  data() {
    return {
      item: {},
      fileType: null,
      total_ads: 0,
      temp: {
        title: null,
        audioFile: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  mounted() {
    if (this.$route.params && this.$route.params.type) {
      this.fileType = this.$route.params.type
      this.myMediaFilesByType()
    }
  },
  methods: {
    myMediaFilesByType(page = 1) {
      Portal.myMediaFilesByType(page, this.fileType).then(res => {
        this.item = res.data.items
      })
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
