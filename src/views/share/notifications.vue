<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 END -->

    <div class="container">
      <ul v-if="notification.data.length" class="notification">
        <li v-for="(el, i) in notification.data" :key="i">
          <div class="notification-time">
            <span class="date">{{ el.time }}</span>
          </div>
          <div class="notification-body">
            <div class="media mt-0">
              <div class="media-body ms-3 d-flex">
                <div class="">
                  <p class="fs-15 text-dark fw-bold mb-0">{{ el.data.title }}</p>
                  <p class="mb-0 fs-13 text-dark">{{ el.data.body }}</p>
                </div>
                <div class="notify-time">
                  <p class="mb-0 text-muted fs-11">{{ el.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <h3 v-else class="text-center p-8">No Data Found !</h3>
      <div class="text-center mb-4">
        <pagination class="justify-content-center mt-5" :data="notification" @pagination-change-page="getMyNotification"/>
      </div>
    </div>
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import Auth from '@/services/api/Auth'
import Pagination from 'laravel-vue-pagination'
export default {
  name: 'Notifications',
  components: { Pagination },
  data() {
    return {
      notification: {
        data: []
      }
    }
  },
  created() {
    this.getMyNotification()
  },
  methods: {
    getMyNotification(page = 1) {
      Auth.myNotification(page).then(res => {
        this.notification = res.data.notification
      })
    }
  }
}
</script>
