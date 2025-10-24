<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row pt-4 px-5">
            <div class="col-md-4 col-sm-12 mb-4">
              <h3>Most Popular Ad choices</h3>
            </div>
            <div class="col-md-8 col-sm-12 mb-4">
              <div class="input-group">
                <input v-model="popular_query" type="text" class="form-control" placeholder="Search something" @keyup.enter="handlePopularSearch">
                <span class="input-group-btn ms-0">
                  <button class="btn btn-primary" type="submit" @click="handlePopularSearch">
                    <span class="fe fe-search text-white" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="card-body pt-4">
            <ad-items key="popular" :items.sync="popularItems" :breakpoints="slider.breakpoints" />
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row pt-4 px-5">
            <div class="col-md-4 col-sm-12 mb-4">
              <h3>Latest Ad choices</h3>
            </div>
            <div class="col-md-8 col-sm-12 mb-4">
              <div class="input-group">
                <input v-model="query" type="text" class="form-control " placeholder="Search something..." @keyup.enter="handleSearch">
                <span class="input-group-btn ms-0">
                  <button class="btn btn-primary" type="submit" @click="handleSearch">
                    <span class="fe fe-search text-white" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="card-body pt-4">
            <ad-items key="latest" :items="allItems" :breakpoints="slider.breakpoints" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- CONTAINER END -->
</template>

<script>
import { mapGetters } from 'vuex'
import AdItems from '@/components/AdItems'
import Utils from '@/services/api/Utils'
export default {
  name: 'AdChoice',
  components: {
    AdItems
  },
  data() {
    return {
      slider: {
        breakpoints: {
          0: {
            spaceBetween: 10,
            slidesPerView: 2
          },
          375: {
            spaceBetween: 10,
            slidesPerView: 2.2
          },
          576: {
            spaceBetween: 20,
            slidesPerView: 3
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 4
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 4
          },
          1200: {
            spaceBetween: 20,
            slidesPerView: 5
          },
          1400: {
            spaceBetween: 20,
            slidesPerView: 6
          },
          1600: {
            spaceBetween: 20,
            slidesPerView: 6.5
          },
          1800: {
            spaceBetween: 20,
            slidesPerView: 7.5
          },
          2000: {
            spaceBetween: 20,
            slidesPerView: 8.5
          },
          2200: {
            spaceBetween: 20,
            slidesPerView: 10
          },
          2400: {
            spaceBetween: 20,
            slidesPerView: 11
          },
          2600: {
            spaceBetween: 20,
            slidesPerView: 12
          }
        }
      },
      items: [],
      popular_items: [],
      popular_query: null,
      query: null
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles',
      'device'
    ]),
    popularItems() {
      const result = this.popular_items
      if (!this.popular_query) {
        return result
      }
      const query = this.popular_query.toLowerCase()
      return result.filter(item => item.title.toLowerCase().includes(query))
    },
    allItems() {
      const result = this.items
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.title.toLowerCase().includes(query))
    }
  },
  created() {
    this.getItems()
    this.getPopularAds()
  },
  methods: {
    handleSearch() {
      const query = this.query.toLowerCase()
      if (query.length > 1) {
        this.getItems(query)
      } else if (!query) {
        return this.getItems(query)
      }
    },
    handlePopularSearch() {
      const query = this.popular_query.toLowerCase()
      if (query.length > 1) {
        this.getPopularAds(query)
      } else if (!query) {
        return this.getPopularAds(query)
      }
    },
    getPopularAds(query = '') {
      Utils.getPopularAds(query).then(res => {
        this.popular_items = res.data.popular_items
      })
    },
    getItems(query = '') {
      Utils.getAds(query).then(res => {
        this.items = res.data.items
      })
    }
  }
}
</script>
