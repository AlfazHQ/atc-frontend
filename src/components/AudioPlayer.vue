<template>
  <div :style="cssProps">
    <div :class="clasName" class="cursor-pointer" @click="toggleAudio()">
      <feather :type="player.isPlaying? 'pause-circle' : 'play-circle'" stroke="#fff" size="64" />
    </div>
    <audio
      v-if="file"
      :id="'audio-player_' + uid"
      ref="player"
      style="display:none"
      preload="metadata"
      @loadeddata="handlePlayer"
      @ended="handleEndPlayer"
    >
      <source :src="file" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  props: {
    file: {
      type: String,
      required: true,
      default: null
    },
    uid: {
      type: Number,
      required: true,
      default: null
    },
    player: {
      type: Object,
      required: true,
      default() {
        return {
          isPlaying: false
        }
      }
    },
    clasName: {
      type: String,
      default: 'player-action'
    }
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/img/apple-music.png')})`,
        height: '180px',
        width: '180px',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }
  },
  destroyed() {
    // this.toggleAudio(true)
    // console.log('dest')
  },
  mounted() {
  },
  methods: {
    handlePlayer(player) {
      // const audio = document.getElementById('audio-player_' + this.uid)
      // console.log('audio ', audio.duration)
      // console.log(player.target.duration)
    },
    handleClose() {
      this.item = {}
      this.$emit('handleClose', true)
      if (this.player.isPlaying) {
        this.toggleAudio(true)
      }
    },
    handleEndPlayer() {
      this.player.isPlaying = false
    },
    toggleAudio(forcePause = false) {
      const audio = document.getElementById('audio-player_' + this.uid)
      console.log(audio)
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
