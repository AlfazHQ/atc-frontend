<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 END -->
    <div class="row mt-5">
      <div class="col-12">
        <advertisement-package :items="items" :is-height-lg="false" :show-title="false" />
      </div>
    </div>
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import AdvertisementPackage from '@/components/pricing-package/advertisement-package'
import Utils from '@/services/api/Utils'
export default {
  name: 'Packages',
  components: { AdvertisementPackage },
  data() {
    return {
      items: [],
      action: 'Add',
      dialogVisible: false,
      temp: {
        title: null,
        audioFile: null
      }
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems() {
      Utils.getPackages().then(res => {
        this.items = res.data.items
      })
    },
    handleAddAds() {
      this.dialogVisible = true
      this.resetTemp()
    },
    handleEditAds() {
      this.dialogVisible = true
    },
    resetTemp() {
      this.temp = {
        title: null,
        audioFile: null
      }
    }
  }
}
</script>
