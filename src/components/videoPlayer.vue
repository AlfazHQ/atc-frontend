<template>
  <div class="card">
    <div class="close-button cursor-pointer" @click="handleClose">
      <feather type="x" stroke="#fff"/>
    </div>
    <video ref="player" style="width: 100%;height: auto" controls autoplay>
      <source :src="options.src" :type="options.type">
      Your browser does not support the video tag.
    </video>
    <div class="call-to-action">
      <button class="btn app-bg-pink text-white" @click="$router.push({ name: 'SignUp'})">Sign up Now</button>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {
          src: null,
          type: null
        }
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
  },
  methods: {
    handleClose() {
      this.$refs.player.pause()
      this.$emit('dialogClosed', true)
    }
  }
}
</script>
<style>
.call-to-action {
  position: absolute;
  bottom: -70px;
  width: 100%;
  text-align: center;
}
</style>
