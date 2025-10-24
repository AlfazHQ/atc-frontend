<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-2 col-sm-12 mb-4">
              <h3>My Ads Lists</h3>
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
            <div class="col-md-2 col-sm-12 mb-4 text-end">
              <button class="btn btn-primary" @click="$router.push({ name: 'CreateAds'})">Create new Ad</button>
            </div>
          </div>
          <div class="card-body pt-4">

            <div class="table-responsive">
              <table
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                  <tr>
                    <th class="bg-transparent border-bottom-0 text-center">Audio
                    </th>
                    <th class="bg-transparent border-bottom-0">
                      Title
                    </th>
                    <th
                      class="bg-transparent border-bottom-0"
                    >
                      Date
                    </th>
                    <th class="bg-transparent border-bottom-0">Status
                    </th>
                    <th class="bg-transparent border-bottom-0">Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="el in filteredItems" :key="el.id" class="border-bottom">
                    <td class="text-center ads-thumbnail" @click="handleDialog(el)">
                      <img :src="el.thumbnail" alt="">
                      <div class="ad-option cursor-pointer">
                        <ripple></ripple>
                      </div>
                    </td>
                    <td>
                      {{ el.title }}
                    </td>
                    <td>{{ el.aired }}</td>
                    <td> <span class="badge bg-success-transparent rounded-pill text-success p-2 px-3">{{ el.status }}</span></td><td>
                      <div class="action-buttons">
                        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'EditAds', params: { id: el.id}})"><feather type="edit" size="14" /> Edit</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <pagination class="justify-content-center mt-5" :data="item" @pagination-change-page="getItems"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :show-close="false"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="rounded-dialog"
      :width="device === 'mobile'? '90%': '40%'"
    >
      <ads-detail :item="temp" @handleClose="handleClose"></ads-detail>
    </el-dialog>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import Portal from '@/services/api/Portal'
import Pagination from 'laravel-vue-pagination'
import Ripple from '@/components/Ripple'
import AdsDetail from '@/components/AdsDetail'
import { mapGetters } from 'vuex'

export default {
  name: 'MyAds',
  components: { Pagination, Ripple, AdsDetail },
  data() {
    return {
      item: {},
      temp: {},
      query: null,
      dialogVisible: false,
    }
  },
  computed: {
    ...mapGetters([
      'clientWidth',
      'device'
    ]),
    filteredItems() {
      const result = this.item.data
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.title.toLowerCase().includes(query) || item.aired.toLowerCase().includes(query))
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems(page = 1) {
      Portal.getMyAds(page).then(res => {
        this.item = res.data.items
      })
    },
    handleDialog(item) {
      this.temp = item
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
      this.resetTemp()
      // if (this.player.isPlaying) {
      //   this.toggleAudio(true)
      // }
    },
    resetTemp() {
      this.temp = {}
    }
  }
}
</script>
