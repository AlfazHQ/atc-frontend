<template>
  <div class="main-area">
    <section class="container coverage-map">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Choose a plan that is perfect for you</h1>
          <p class="text-center mt-3">Whether you are a mom and pops shop or a large conglomerate Adsto call has a plan that will cater to your needs and allow you to reach your desired audience.</p>
          <advertisement-package :items="items" :show-title="false" :is-height-lg="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AdvertisementPackage from '@/components/pricing-package/advertisement-package'
import Utils from "@/services/api/Utils";
export default {
  name: 'PricingPage',
  components: { AdvertisementPackage },
  data() {
    return {
      items: null
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
    this.getItems()
  },
  methods: {
    getItems() {
      Utils.getPackages().then(res => {
        this.items = res.data.items
      })
    }
  }
}
</script>
