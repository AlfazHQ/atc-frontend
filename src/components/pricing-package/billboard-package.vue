<template>
  <div class="card" :class="{ 'height-lg' : isHeightLg }">
    <div class="card-header">
      <h3 class="card-title">Billboard Packages</h3>
    </div>
    <div class="card-body overflow-y-scroll">

      <div id="generic_price_table">
        <section>
          <div class="container">

            <!--BLOCK ROW START-->
            <div class="row">
              <div class="col-md-4 col-sm-12">

                <!--PRICE CONTENT START-->
                <div class="generic_content clearfix shadow-lg">

                  <!--HEAD PRICE DETAIL START-->
                  <div class="generic_head_price clearfix">

                    <!--HEAD CONTENT START-->
                    <div class="generic_head_content clearfix">

                      <!--HEAD START-->
                      <div class="head_bg" />
                      <div class="head">
                        <span>Lite</span>
                      </div>
                      <!--//HEAD END-->

                    </div>
                    <!--//HEAD CONTENT END-->

                    <!--PRICE START-->
                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">{{ Number(slideRange.lite * 0.01).toFixed(2) }}</span>
                      </span>
                    </div>
                    <!--//PRICE END-->

                  </div>
                  <!--//HEAD PRICE DETAIL END-->
                  <el-slider v-model="slideRange.lite" :show-tooltip="false" :marks="slideRange.marks" :min="20000" :max="50000" class="px-8" />
                  <!--FEATURE LIST START-->
                  <div class="generic_feature_list">
                    <ul>
                      <li><span>{{ slideRange.lite }}</span> Audition</li>
                      <li><span>24/7</span> Support</li>
                      <li><span>3</span>Network provider</li>
                      <li>Upgrade free</li>
                      <li>One country</li>
                    </ul>
                  </div>
                  <!--//FEATURE LIST END-->

                  <!--BUTTON START-->
                  <div class="generic_price_btn clearfix">
                    <router-link :to="{ name: 'CheckOut'}">Buy Now</router-link>
                  </div>
                  <!--//BUTTON END-->

                </div>
                <!--//PRICE CONTENT END-->

              </div>

              <div class="col-md-4 col-sm-12">

                <!--PRICE CONTENT START-->
                <div class="generic_content active clearfix shadow-lg">

                  <!--HEAD PRICE DETAIL START-->
                  <div class="generic_head_price clearfix">

                    <!--HEAD CONTENT START-->
                    <div class="generic_head_content clearfix">

                      <!--HEAD START-->
                      <div class="head_bg" />
                      <div class="head">
                        <span>Premium</span>
                      </div>
                      <!--//HEAD END-->

                    </div>
                    <!--//HEAD CONTENT END-->

                    <!--PRICE START-->
                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">{{ Number(slideRange.premium * 0.015).toFixed(2) }}</span>
                      </span>
                    </div>
                    <!--//PRICE END-->

                  </div>
                  <!--//HEAD PRICE DETAIL END-->

                  <el-slider v-model="slideRange.premium" :show-tooltip="false" :marks="slideRange.marks" :min="40000" :max="100000" class="px-8" />
                  <!--FEATURE LIST START-->
                  <div class="generic_feature_list">
                    <ul>
                      <li><span>{{ slideRange.premium }}</span> Audition</li>
                      <li><span>24/7</span> Support</li>
                      <li><span>5</span>Network provider</li>
                      <li>Upgrade free</li>
                      <li>One country</li>
                    </ul>
                  </div>
                  <!--//FEATURE LIST END-->

                  <!--BUTTON START-->
                  <div class="generic_price_btn clearfix">
                    <a class="" href="">Active</a>
                  </div>
                  <!--//BUTTON END-->

                </div>
                <!--//PRICE CONTENT END-->

              </div>
              <div class="col-md-4 col-sm-12">

                <!--PRICE CONTENT START-->
                <div class="generic_content clearfix shadow-lg">

                  <!--HEAD PRICE DETAIL START-->
                  <div class="generic_head_price clearfix">

                    <!--HEAD CONTENT START-->
                    <div class="generic_head_content clearfix">

                      <!--HEAD START-->
                      <div class="head_bg" />
                      <div class="head">
                        <span>Enterprise</span>
                      </div>
                      <!--//HEAD END-->

                    </div>
                    <!--//HEAD CONTENT END-->

                    <!--PRICE START-->
                    <div class="generic_price_tag clearfix">
                      <h3 class="p-3 mb-3">Have more advanced needs?</h3>
                    </div>
                    <!--//PRICE END-->

                  </div>
                  <!--//HEAD PRICE DETAIL END-->

                  <el-slider v-model="slideRange.enterprise" :show-tooltip="false" :marks="slideRange.marks" :min="100000" :max="500000" disabled class="px-8" />
                  <!--FEATURE LIST START-->
                  <div class="generic_feature_list">
                    <ul>
                      <li>Custom Volume of Audition</li>
                      <li>Priority Support</li>
                      <li>Multiple Ads</li>
                      <li>Multiple Country,Languages</li>
                      <li>Get Banner + Audio</li>
                    </ul>
                  </div>
                  <!--//FEATURE LIST END-->

                  <!--BUTTON START-->
                  <div class="generic_price_btn clearfix">
                    <router-link :to="{ name: 'CheckOut'}">Get Quote</router-link>
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
  name: 'BillboardPackage',
  props: {
    // modules: {
    //   type: Array,
    //   required,
    //   default() {
    //     return []
    //   }
    // },
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
        lite: 50000,
        premium: 100000,
        enterprise: 500000,
        marks: {
          20000: '20k',
          50000: '50k',
          100000: '100k',
          500000: '∞'
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
  }
}
</script>

<style src="@/assets/css/price-table.css"></style>
