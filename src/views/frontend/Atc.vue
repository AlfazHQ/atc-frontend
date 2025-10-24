<template>
  <div class="main-area">
    <section class="container">
      <h1 class="fw-600 text-center mb-7" style="margin-top: 8%;">Why Millions of People Worlwide Chose ATC?</h1>
      <div class="card">
        <div class="card-body p-0" />
        <div class="row">
          <div class="col-md-6 col-sm-12 mb-4" :style="{marginTop: device === 'mobile' ? '1%' : '15%'}">
            <h2 class="fw-bold" :class="device === 'mobile' ? 'fs-20' : 'fs--45'">Grow faster with our all-in-one marketing platform</h2>
            <p :class="device === 'mobile' ? 'fs-10' : 'fs--20'">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div class="col-md-6 col-sm-12 mb-4 text-end">
            <img src="@/assets/images/atc/atc01.jpg" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12 mb-4 text-end">
            <img src="@/assets/images/atc/atc02.jpg" alt="">
          </div>
          <div class="col-md-6 col-sm-12 mb-4" :style="{marginTop: device === 'mobile' ? '1%' : '15%'}">
            <h2 class="fw-bold" :class="device === 'mobile' ? 'fs-20' : 'fs--45'">Grow faster with our all-in-one marketing platform</h2>
            <p :class="device === 'mobile' ? 'fs-10' : 'fs--20'">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12 mb-4 text-end">
            <img src="@/assets/images/atc/atc03.jpg" alt="">
          </div>
          <div class="col-md-6 col-sm-12 mb-4" :style="{marginTop: device === 'mobile' ? '1%' : '15%'}">
            <h2 class="fw-bold" :class="device === 'mobile' ? 'fs-20' : 'fs--45'">Grow faster with our all-in-one marketing platform</h2>
            <p :class="device === 'mobile' ? 'fs-10' : 'fs--20'">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AtcPage',
  data() {
    return {
      bgStyle: {
        backgroundColor: '#f6ebfb',
        padding: '2%',
        height: '40rem'
      },
      imgStyle: {
        position: 'absolute',
        left: '-30%'
      }
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles',
      'device'
    ])
  }
}
</script>
