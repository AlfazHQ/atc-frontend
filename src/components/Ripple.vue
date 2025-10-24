<template>
  <div class="ripple-effect" :style="[{ backgroundColor: color}, { width: size === 'medium' ? '2rem' : '5rem'}, { height: size === 'medium' ? '2rem' : '5rem'}]">
    <feather type="play" stroke="#e6202d" fill="#e6202d" :size="size === 'medium' ? 18 : 36" :custom-style="size === 'medium' ? RippleIconCss : RippleIconLgCss" />
  </div>
</template>

<script>

import CssMixin from '@/layout/mixin/CssHandler'

export default {
  name: 'Ripple',
  mixins: [CssMixin],
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    size: {
      type: String,
      default: 'medium'
    },
    color: {
      type: String,
      default: '#ffffff'
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
  }
}
</script>
<style scoped>
.ripple-effect {
  border-radius: 50%;
  position:relative;
  animation: ripple-effect 3s linear infinite;
}
.ripple-effect::before,
.ripple-effect::after{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius: 50%;
  animation: ripple-effect 3s linear infinite 1s;
}
.ripple-effect::after {
  animation: ripple-effect 3s linear infinite 2s;
}
@keyframes ripple-effect {
  0% {
    box-shadow: 0 0 0 .2rem rgba(255, 255, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 0 1rem rgba(157, 157, 157, 0);
  }
}
</style>
