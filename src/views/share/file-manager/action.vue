<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-md-6 col-sm-12 offset-md-3 offset-sm-0">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">{{ isEditMode ? 'Edit' : 'Create new' }} Ad</h3>
            <div class="card-options">
              <button class="btn btn-dark btn-sm" @click="$router.go(-1)">Back</button>
            </div>
          </div>
          <div class="card-body pt-4">

            <div class="form-wrapper mt-5">
              <form class="form-horizontal">
                <div class="row">
                  <div class="col-md-12 col-sm-12 mb-4">
                    <input type="text" class="form-control form-item-wrapper" placeholder="Title *">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8 col-sm-12 mb-4">
                    <div class="row form-item-wrapper mx-0">
                      <div class="col-8">
                        <label class="form-label">Upload Audio</label>
                      </div>
                      <div class="col-4 text-end">
                        <div class="form-control">
                          <feather type="file" fill="#2C0270" stroke="#fff" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

export default {
  name: 'MyAds',
  data() {
    return {
      items: [],
      dialogVisible: false,
      temp: {
        title: null,
        audioFile: null
      }
    }
  },
  computed: {
    isEditMode() {
      return this.$route.params && this.$route.params.id
    }
  },
  mounted() {
    if (this.isEditMode) {
      // this.getInfo(this.$route.params.id)
    }
  },
  methods: {
    handleAddAds() {
      this.dialogVisible = true
      this.action = 'Add'
      this.resetTemp()
    },
    handleEditAds() {
      this.dialogVisible = true
      this.action = 'Edit'
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
