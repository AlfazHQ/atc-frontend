<template>
  <div class="main-area">
    <section class="container">

      <div class="row mt-5">
        <div class="col-md-12 mb-4">
          <div class="row form-item-wrapper mx-0">
            <div class="col-md-6">
              <label class="form-label">Enter mobile number</label>
            </div>
            <div class="col-md-6">
              <input v-model="item.mobile" type="text" class="form-control" placeholder="Enter Number *">
            </div>
          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="row form-item-wrapper mx-0">
            <div class="col-md-6">
              <label class="form-label">Enter Ad ID</label>
            </div>
            <div class="col-md-6">
              <input v-model="item.ads_id" type="number" class="form-control" placeholder="Enter Ad ID * Ex 1,2,3,4,5">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card text-center">
            <div class="card-header">
              <h2>Virtual Emulator</h2>
            </div>
            <div class="card-body">
              <div class="emulator position-relative">
                <img src="@/assets/images/emulator.png" alt="">
                <div class="call-btn position-absolute cursor-pointer" @click="callNow">Call Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Utils from '@/services/api/Utils'
export default {
  name: 'BlogDetails',
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
      },
      item: {
        mobile: '+8801764695324',
        ads_id: 1
      },
      ads: []
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles',
      'device'
    ])
  },
  created() {
    // this.getAds()
  },
  methods: {
    getAds() {
      Utils.getAds().then(res => {
        this.ads = res.data.items
      })
    },
    callNow() {
      // const payload = {
      //   mobile: '+8801764695324',
      //   ads_id: '1'
      // }
      Utils.virtualCall(this.item).then(res => {
        this.$notify({
          type: 'success',
          message: res.message
        })
      })
    }
  }
}
</script>
<style>
.emulator img{
  width: 460px;
}
.call-btn.position-absolute {
  top: 50%;
  right: 0;
  left: 0;
  margin: auto;
  background: yellow;
  width: 110px;
  /* height: 35px; */
  padding: 10px;
  border-radius: 6px;
}
</style>
