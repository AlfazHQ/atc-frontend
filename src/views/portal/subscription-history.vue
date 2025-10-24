<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-4 col-sm-12 mb-4">
              <h3>My Subscriptions</h3>
            </div>
            <div class="col-md-8 col-sm-12 mb-4">
              <div class="input-group">
                <input v-model="query" type="text" class="form-control " placeholder="Search something..." name="s">
                <span class="input-group-btn ms-0">
                  <button class="btn btn-primary" type="submit">
                    <span class="fe fe-search text-white" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="card-body pt-4">

            <div class="table-responsive">
              <table
                v-if="filteredItems.length"
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                  <tr>
                    <th class="bg-transparent border-bottom-0">
                      Ads Title
                    </th>
                    <th
                      class="bg-transparent border-bottom-0"
                    >
                      Date
                    </th>
                    <!--                    <th class="bg-transparent border-bottom-0">Status-->
                    <!--                    </th>-->
                    <th class="bg-transparent border-bottom-0" style="width: 300px">Rating</th>
                    <th class="bg-transparent border-bottom-0">Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="el in filteredItems" :key="el.id" class="border-bottom">
                    <td>
                      <div class="d-flex">
                        <div
                          class="mt-0 d-block"
                        >
                          <h6
                            class="mb-0 fs-14 fw-semibold"
                          >
                            {{ el.title }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>{{ el.aired }}</td>
                    <td>
                      <el-rate
                        v-model="el.rating"
                        :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
                        show-text
                        :disabled="is_admin"
                        @change="handleRating(el)"
                      />
                    </td>
                    <td><button :disabled="is_admin" class="btn btn-warning btn-sm" @click="unsubscribeAds(el.id)">Unsubscribe</button></td>
                  </tr>
                </tbody>
              </table>
              <h3 v-else class="text-center p-8">No Data Found !</h3>
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

import Portal from '@/services/api/Portal'
import { mapGetters } from 'vuex'
import Admin from '@/services/api/Admin'

export default {
  name: 'MySubscriptions',
  data() {
    return {
      items: [],
      userId: null,
      query: null
    }
  },
  computed: {
    ...mapGetters([
      'is_admin'
    ]),
    filteredItems() {
      const result = this.items
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.title.toLowerCase().includes(query))
    }
  },
  created() {
  },
  mounted() {
    if (this.$route.params.id) {
      this.userId = this.$route.params.id
    }
    this.getItems(this.$route.params.id)
  },
  methods: {
    getItems(userId) {
      if (this.is_admin) {
        Admin.allSubscriptions(userId).then(res => {
          this.items = res.data.items
        })
      } else {
        Portal.mySubscriptions().then(res => {
          this.items = res.data.items
        })
      }
    },
    handleRating(el) {
      Portal.submitRating(el).then(res => {
        this.$notify({
          title: 'Success',
          message: res.message
        })
        this.getItems()
      })
    },
    unsubscribeAds(id) {
      Portal.unsubscribeAds(id).then(res => {
        this.$notify({
          title: 'Unsubscribed',
          message: res.message
        })
        this.getItems()
      })
    },
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
