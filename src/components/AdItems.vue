<template>
  <div class="">
    <swiper v-if="items.length" :loop="false" :observer="true" :observe-parents="true" :breakpoints="breakpoints">
      <swiper-slide v-for="(item, i) in items" :key="i" class="test">
        <div class="slider-item cursor-pointer" @click="handleDialog(item)">
          <img :src="item.thumbnail" alt="">
          <div class="play-option cursor-pointer">
            <ripple></ripple>
          </div>
          <ul class="rating-option shadow-lg shadow-info">
            <li>{{ item.year }}</li>
            <li class="ms-3"><feather type="star" fill="#ffff00" /> <span>{{ item.rating }}</span></li>
          </ul>
        </div>
      </swiper-slide>
    </swiper>
    <el-dialog
      :show-close="false"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="rounded-dialog"
      :width="device === 'mobile'? '90%': '40%'"
    >
      <ads-detail :item="temp" @handleClose="handleClose" @handleSubscribe="handleSubscribe"></ads-detail>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ripple from '@/components/Ripple'
import AdsDetail from '@/components/AdsDetail'
import { Navigation, Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import Portal from '@/services/api/Portal'
SwiperCore.use([Navigation, Pagination])
export default {
  name: 'AdItems',
  components: {
    Swiper,
    SwiperSlide,
    Ripple,
    AdsDetail
  },
  props: {
    items: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    breakpoints: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      temp: {
        title: null,
        date: null,
        thumbnail: null,
        aired: null,
        description: null,
        banner: null,
        audio: null,
        rating: null
      },
      player: {
        isPlaying: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'clientWidth',
      'roles',
      'device'
    ])
  },
  mounted() {
  },
  methods: {
    subscribe(id) {
      Portal.subscribeAds(id).then(res => {
        this.$notify({
          type: 'success',
          title: 'Completed',
          message: res.message
        })
      })
    },
    handleDialog(item) {
      this.temp = item
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
      this.resetTemp()
    },
    handleSubscribe() {
      if (!this.roles.includes('user')) {
        return this.$notify({
          type: 'warning',
          title: 'Permission denied',
          message: 'Please Login as Publisher'
        })
      }
      Portal.subscribeAds(this.temp.id).then(res => {
        this.$notify({
          type: 'success',
          title: 'Completed',
          message: res.message
        })
        this.dialogVisible = false
        this.resetTemp()
      }).catch(err => {
        console.log(err)
        this.dialogVisible = false
        this.resetTemp()
      })
    },
    resetTemp() {
      this.temp = {
        title: null,
        date: null,
        thumbnail: null,
        aired: null,
        description: null,
        banner: null,
        audio: null,
        rating: null
      }
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
    }
  }
}
</script>
