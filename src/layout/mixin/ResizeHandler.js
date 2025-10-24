import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design
const LARGE_SCREEN_WIDTH = 2560 // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    const isLargeDesktop = this.$_isLargeDesktop()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
    if (isLargeDesktop) {
      store.dispatch('app/toggleDevice', 'largeDesktop')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
    store.dispatch('app/setClientWidth', this.$_getClientWidth())
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_isLargeDesktop() {
      const rect = body.getBoundingClientRect()
      return rect.width + 1 > LARGE_SCREEN_WIDTH
    },
    $_getClientWidth() {
      const rect = body.getBoundingClientRect()
      return rect.width
    },
    $_resizeHandler() {
      if (!document.hidden) {
        store.dispatch('app/setClientWidth', this.$_getClientWidth())
        const isMobile = this.$_isMobile()
        const isLargeDesktop = this.$_isLargeDesktop()
        if (isMobile) {
          store.dispatch('app/toggleDevice', 'mobile')
        } else if (isLargeDesktop) {
          store.dispatch('app/toggleDevice', 'largeDesktop')
        } else {
          store.dispatch('app/toggleDevice', 'desktop')
        }

        if (isMobile) {
          store.dispatch('app/closeSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
