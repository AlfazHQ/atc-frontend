<template>
  <!-- app-Header -->
  <div class="app-header header sticky">
    <div class="container-fluid main-container">
      <div class="d-flex">
        <a
          aria-label="Hide Sidebar"
          class="app-sidebar__toggle"
          data-bs-toggle="sidebar"
          href="javascript:void(0)"
          @click="toggleSideBar"
        />
        <!-- sidebar-toggle-->
        <a class="logo-horizontal" href="javascript:void(0);">
          <img src="@/assets/images/brand/logo.png" class="header-brand-img desktop-logo" alt="logo">
          <img
            src="@/assets/images/brand/logo.png"
            class="header-brand-img light-logo1"
            alt="logo"
          >
        </a>
        <!-- LOGO -->
        <div class="d-flex order-lg-2 ms-auto header-right-icons">
          <!-- SEARCH -->
          <button
            class="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon fe fe-more-vertical" />
          </button>
          <div class="navbar navbar-collapse responsive-navbar p-0">
            <div id="navbarSupportedContent-4" class="collapse navbar-collapse">
              <div class="d-flex order-lg-2">
                <div class="d-flex country">
                  <!-- <a class="nav-link icon theme-layout nav-link-bg layout-setting">
                    <span class="dark-layout"><i class="fe fe-moon" /></span>
                    <span class="light-layout"><i class="fe fe-sun" /></span>
                  </a> -->
                </div>
                <!-- Theme-Layout -->
                <div v-if="value == false" :model="value == false" class="dropdown d-flex">
                  <a class="nav-link icon full-screen-link nav-link-bg" @click="fullScreen">
                    <i class="fe fe-minimize fullscreen-button" />
                  </a>
                </div>
                <div v-else class="dropdown d-flex">
                  <a class="nav-link icon full-screen-link nav-link-bg" @click="exitFullScreen">
                    <i class="fe fe-maximize fullscreen-button" />
                  </a>
                </div>
                <!-- Country Select -->
                <!-- <div class="dropdown d-flex">
                  <a class="nav-link icon full-screen-link nav-link-bg" href="javascript:void(0);" @click="handleSelectCountry">
                    <i class="fe fe-flag fullscreen-button" />
                  </a>
                </div> -->
                <!-- FULL-SCREEN -->
                <div class="dropdown  d-flex notifications">
                  <a class="nav-link icon" data-bs-toggle="dropdown"><i
                    class="fe fe-bell"
                  /><span class=" pulse" />
                  </a>
                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <div class="drop-heading border-bottom">
                      <div class="d-flex justify-content-between">
                        <h6 class="mt-1 mb-0 fs-16 fw-semibold text-dark">Notifications
                        </h6>
                        <!--                        <div class="clear-notification cursor-pointer">-->
                        <!--                          <feather type="bell-off"/>-->
                        <!--                        </div>-->
                      </div>
                    </div>
                    <div class="notifications-menu overflow-y-scroll">
                      <span v-for="(el, i) in latestNotifications" :key="i" class="dropdown-item d-flex cursor-pointer" @click="$router.push({ name: 'Notifications'})">
                        <div class="me-3 notifyimg  bg-primary brround box-shadow-primary">
                          <i class="fe fe-mail" />
                        </div>
                        <div class="mt-1 wd-80p">
                          <h5 class="notification-label mb-1" :class="el.is_read ? '' : 'fw-bold'">{{ el.data.title }}
                          </h5>
                          <span class="notification-subtext" :class="el.is_read ? '' : 'fw-bold'">{{ el.time }}</span>
                        </div>
                      </span>
                    </div>
                    <div class="dropdown-divider m-0" />
                    <router-link :to="{ name: 'Notifications'}" class="dropdown-item text-center p-3 text-muted">View all Notification</router-link>
                  </div>
                </div>
                <!-- NOTIFICATIONS -->
                <div class="dropdown d-flex profile-1">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="dropdown"
                    class="nav-link leading-none d-flex"
                  >
                    <img
                      :src="auth.avatar"
                      alt="profile-user"
                      class="avatar  profile-user brround cover-image"
                    >
                  </a>
                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <div class="drop-heading">
                      <div class="text-center">
                        <h5 class="text-dark mb-0 fs-14 fw-semibold">{{ auth.name }}</h5>
                        <small class="text-muted">{{ roles.length? roles[0].toUpperCase(): 'N/A' }}</small>
                      </div>
                    </div>
                    <div class="dropdown-divider m-0" />
                    <router-link :to="{ name: 'Profile' }" class="dropdown-item"><i class="dropdown-icon fe fe-user" /> Profile</router-link>
                    <a class="dropdown-item" href="javascript:void(0);" @click="logout">
                      <i class="dropdown-icon fe fe-alert-circle" /> Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /app-Header -->
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ResizeMixin from '../mixin/ResizeHandler'
import Auth from '@/services/api/Auth'

export default {
  name: 'Navbar',
  mixins: [ResizeMixin],
  data() {
    return {
      value: false,
      notification: { data: [] }
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles'
    ]),
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    latestNotifications() {
      return this.notification.data
    }
  },
  mounted() {
    this.pusherEvent()
    this.getMyNotification()
  },
  methods: {

    pusherEvent() {
      /*
      * Fetch realtime contact list
      *  */
      const notificationChannel = this.$pusher.subscribe('private-fetch-notification' + '.' + this.auth.id)
      console.log('notificationChannel ', notificationChannel)
      notificationChannel.bind('NotificationEvent', res => {
        console.log('res', res.data)
        if (res) {
          this.notification.data.unshift(res.data)
          this.$notify({
            title: res.data.data.title,
            type: 'info',
            message: res.data.data.body
          })
        }
      })
    },
    fullScreen() {
      var el = document.documentElement
      el.requestFullscreen()
      this.value = true
    },
    exitFullScreen() {
      document.exitFullscreen()
      this.value = false
    },
    getMyNotification(page = 1) {
      Auth.myNotification(page).then(res => {
        this.notification = res.data.notification
      })
    },
    handleSelectCountry() {
      console.log('handleSelectCountry')
      this.$emit('handleSelectCountry', true)
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
      // if (this.sidebar.opened) {
      //   document.body.classList.add('sidenav-toggled')
      // } else {
      //   document.body.classList.remove('sidenav-toggled')
      // }
      console.log('this.sidebar.opened', this.sidebar.opened)
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    async logout() {
      await this.$store.dispatch('auth/logout')
      await this.$router.push({ path: '/login' })
    }
  }
}
</script>

