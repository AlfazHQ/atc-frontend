<template>

  <div class="card">
    <div class="ads-banner-img">
      <div class="close-button cursor-pointer" @click="handleClose">
        <feather type="x" size="24" stroke="#fff" />
      </div>
      <img :src="item.banner" alt="" class="rounded-3 w-100">
      <div class="player-action cursor-pointer" @click="toggleAudio()">
        <feather :type="player.isPlaying? 'pause-circle' : 'play-circle'" stroke="#fff" size="64" />
      </div>
      <audio
        v-if="item.audio"
        id="audio-player"
        ref="player"
        style="display:none"
        preload="metadata"
        @loadeddata="handlePlayer"
        @ended="handleEndPlayer"
      >
        <source :src="item.audio" type="audio/mpeg">
      </audio>
    </div>
    <div class="card-header">
      <div class="card-title">
        <h4 class="mb-1">{{ item.title }}</h4>
        <div class="ratings">
          <el-rate :disabled="!item.is_subscribed" v-model="item.rating" />
        </div>
      </div>
      <div class="card-options">
        <div class="media">
          <div class="media-body ms-2">
            <h5 class="mt-0">{{ player.duration }} Seconds</h5>
            <span class="fs-12">7,732,008 Auditions</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body py-5">
      <div class="card-header bg-transparent">
        <h5 class="card-title mb-1">Ad Description</h5>
        <div class="border-bottom"></div>
        <div class="card-options">
          Aired {{ item.aired }}
        </div>
      </div>
      <p class="card-text mt-3">{{ item.description }}</p>
      <template v-if="roles.includes('user')">
        <button v-if="item.is_subscribed" class="btn bg-pink btn-block py-3 mt-5" >Subscribed</button>
        <button v-else class="btn bg-purple btn-block py-3 mt-5" @click="handleSubscribe">Subscribe</button>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AdsDetail',
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {
          title: null,
          date: null,
          thumbnail: null,
          aired: null,
          description: null,
          banner: null,
          audio: null,
          rating: null
        }
      }
    }
  },
  data() {
    return {
      player: {
        isPlaying: false,
        duration: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  mounted() {
  },
  methods: {
    handlePlayer(player) {
      const audio = document.getElementById('audio-player')
      console.log('audio ', audio.duration)
      console.log(player.target.duration)
      this.player.duration = player.target.duration
    },
    handleClose() {
      this.item = {}
      this.$emit('handleClose', true)
      if (this.player.isPlaying) {
        this.toggleAudio(true)
      }
    },
    handleSubscribe() {
      this.item = {}
      this.$emit('handleSubscribe', true)
      if (this.player.isPlaying) {
        this.toggleAudio(true)
      }
    },
    handleEndPlayer() {
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
