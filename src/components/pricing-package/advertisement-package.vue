<template>
  <div class="card" :class="{ 'height-lg' : isHeightLg }">
    <div v-if="showTitle" class="card-header">
      <h3 class="card-title">Advertisement Packages</h3>
    </div>
    <div class="card-body overflow-y-scroll">

      <div id="generic_price_table">
        <section>
          <div class="container">

            <!--BLOCK ROW START-->
            <div class="row justify-content-center">

              <div v-for="item in items" :key="item.id" class="col-md-3 col-sm-12 d-grid" :class="item.is_popular ? 'mt-3' : 'mt-5'">

                <div v-if="item.is_popular" class="top-tab text-white text-center fw-600" style="margin-top: -45px;margin-bottom: 0;">
                  <div class="app-bg-purple py-2" style="border-radius: 10px">Popular</div>
                </div>
                <div class="generic_content clearfix shadow-lg" :class="{ 'active' : item.is_purchased && item.status != 'Suspend' }">
                  <div class="generic_head_price clearfix">

                    <!--HEAD CONTENT START-->
                    <div class="generic_head_content clearfix">

                      <!--HEAD START-->
                      <div class="head_bg" />
                      <div class="head">
                        <span>{{ item.name }}</span>
                      </div>
                      <!--//HEAD END-->

                    </div>
                    <!--//HEAD CONTENT END-->

                    <!--PRICE START-->
                    <div class="generic_price_tag clearfix">
                      <h3 v-if="item.max_price === item.min_price" class="p-3 mb-3 fs-18">Have more advanced needs?</h3>
                      <span v-else class="price">
                        <span class="sign">$</span>
                        <span class="currency">{{ item.amount }}</span>
                      </span>
                    </div>
                    <!--//PRICE END-->

                  </div>
                  <!--//HEAD PRICE DETAIL END-->

                  <el-slider v-model="item.amount" :show-tooltip="false" :marks="slideRange.marks" :min="item.min_price" :max="item.max_price" class="px-8" />
                  <!--FEATURE LIST START-->
                  <div class="generic_feature_list mb-7">
                    <ul v-if="item.max_price === item.min_price">
                      <li>Custom Volume of Audition</li>
                      <li>Priority Support</li>
                      <li>Multiple Ads</li>
                      <li>Multiple Country,Languages</li>
                      <li>Get Banner + Audio</li>
                    </ul>
                    <ul v-else-if="item.type === 'Billboard'">
                      <li><span>{{ Math.floor(item.amount * item.cpa) }}</span> Days</li>
                      <li><span>24/7</span> Support</li>
                    </ul>
                    <ul v-else>
                      <li><span>{{ Math.floor(item.amount / item.cpa) }}</span> Audition</li>
                      <li><span>24/7</span> Support</li>
                      <li><span>5</span>Network provider</li>
                      <li>Upgrade free</li>
                      <li>One country</li>
                    </ul>
                  </div>
                  <!--//FEATURE LIST END-->

                  <!--BUTTON START-->
                  <div v-if="item.is_purchased" class="generic_price_btn clearfix">
                    <a class="cursor-pointer">{{ item.status }}</a>
                  </div>
                  <div v-else class="generic_price_btn clearfix">
                    <a v-if="item.max_price === item.min_price" class="cursor-pointer">Get Quote</a>
                    <a v-else class="cursor-pointer" @click="handleBuy(item)">Buy Now</a>
                  </div>
                  <!--//BUTTON END-->

                </div>
                <!--//PRICE CONTENT END-->

              </div>
            </div>
            <!--//BLOCK ROW END-->

          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdvertisementPackage',
  filters: {
    abbreviateNumber(number) {
      Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
      }).format(number)
    }
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    showTitle: {
      type: Boolean,
      default() {
        return true
      }
    },
    isHeightLg: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      slideRange: {
        marks: {
          1200: '1.2k',
          50000: '50k',
          100000: '100k',
          250000: '250k',
          500000: '500k'
        }
      }
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleBuy(item) {
      this.$store.dispatch('auth/handleCart', item)
      this.$router.push({ name: 'CheckOut' })
    }
  }
}
</script>

<style src="@/assets/css/price-table.css"></style>
