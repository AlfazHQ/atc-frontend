<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">Guidelines</h3>
            <div class="card-options">
              <!-- <div class="row">
                  <div class="col-md-6 col-sm-12 mb-3">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-sm h-6" placeholder="Search something..." name="s">
                      <span class="input-group-btn ms-0">
                        <button class="btn btn-sm btn-primary" type="submit">
                          <span class="fe fe-search text-white"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'AddBillboard'})">Guidelines</button>
                  </div>
                </div> -->
            </div>

          </div>
          <div class="card-body pt-4">
            <div class="col-md-10 mt-5 mr-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec et volutpat enim. Nullam dolor nunc, condimentum nec felis non, ullamcorper finibus nunc.
                Fusce et dapibus arcu. Cras pulvinar, nunc quis euismod accumsan, augue felis condimentum massa,
                vitae lacinia metus dolor ut sapien. Ut congue odio quis ante malesuada, ac ornare ipsum eleifend.
                ed et orci ultrices, rhoncus felis ac, faucibus risus. Nunc neque est, efficitur efficitur erat et,
                vestibulum mollis mauris. Phasellus sit amet dolor quis libero ultricies maximus quis ut ex. Donec eros nibh,
                pulvinar ornare auctor in, varius tincidunt enim. Aenean elit quam, rhoncus id lobortis quis, gravida id sem.
                Nunc vitae molestie est, a pellentesque lorem. Mauris laoreet ut mauris eget tempor. Fusce dignissim mi scelerisque
                libero interdum, at egestas massa ultricies.In blandit nec dui aliquam ornare. Donec aliquam nulla sapien, et
                eleifend sapien bibendum ut. Donec suscipit ligula mauris.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec et volutpat enim. Nullam dolor nunc, condimentum nec felis non, ullamcorper finibus nunc.
                Fusce et dapibus arcu. Cras pulvinar, nunc quis euismod accumsan, augue felis condimentum massa,
                vitae lacinia metus dolor ut sapien. Ut congue odio quis ante malesuada, ac ornare ipsum eleifend.
                ed et orci ultrices,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec et volutpat enim. Nullam dolor nunc, condimentum nec felis non, ullamcorper finibus nunc.
                Fusce et dapibus arcu. Cras pulvinar, nunc quis euismod accumsan, augue felis condimentum massa,
                vitae lacinia metus dolor ut sapien. Ut congue odio quis ante malesuada, ac ornare ipsum eleifend.
                ed et orci ultrices,
                Donec et volutpat enim. Nullam dolor nunc, condimentum nec felis non, ullamcorper finibus nunc.
                Fusce et dapibus arcu. Cras pulvinar, nunc quis euismod accumsan, augue felis condimentum massa,
                vitae lacinia metus dolor ut sapien. Ut congue odio quis ante malesuada, ac ornare ipsum eleifend.
                ed et orci ultrices,
              </p>
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
      action: 'Add',
      dialogVisible: false,
      temp: {
        title: null,
        audioFile: null
      }
    }
  },
  mounted() {
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
