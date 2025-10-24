<template>
  <section class="container-fluid app-bg-purple footer-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card bg-transparent mb-0">
            <div class="card-body">
              <div class="top-footer my-3 mt-5">
                <div class="row">
                  <div class="col-lg-4 col-sm-12 col-md-12 mb-3" :class="{ 'text-center': device === 'mobile'}">
                    <img class="footer-logo" src="@/assets/images/brand/accent_logo2.png">
                    <p class="footer-tagline my-4">Earning has never <br>
                      been so easy.</p>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-6 col-md-4">
                    <h5 class="fw-600">Links</h5>
                    <ul class="list-unstyled mb-5 mb-lg-0">
                      <li><router-link :to="{ name: 'Home'}">Home</router-link></li>
                      <li><router-link :to="{ name: 'GlobalCoverage'}">Global Coverage</router-link></li>
                      <li><router-link :to="{ name: 'Pricing'}">Pricing</router-link></li>
                      <li><router-link :to="{ name: 'WhyAtc'}">WhyAtc</router-link></li>
                    </ul>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-6 col-md-4 text-center text-md-start-">
                    <h5 class="fw-600">Policies</h5>
                    <ul class="list-unstyled mb-5 mb-lg-0">
                      <li><router-link :to="{ name: 'PrivacyPolicy'}">Privacy Policy</router-link></li>
                      <li><router-link :to="{ name: 'TermsConditions'}">Terms & Condition</router-link></li>
                      <li><router-link :to="{ name: 'Faqs'}">Faqs</router-link></li>
                      <li><router-link :to="{ name: 'RefundPolicy'}">Refund Policy</router-link></li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-sm-12 col-md-4 text-center text-md-start">
                    <h5 class="mb-0 m-t-30 fw-600">Say Hello!</h5>
                    <p class="mb-0"><a href="mailto:support@adstocall.com ">support@adstocall.com</a></p>
                    <p><a href="tel:8898006802" style="color:white;">+88 (9800) 6802</a></p>
                    <p>30 Broklyern Goldin Street, <br> New York, United States of America</p>
                    <ul class="footer-social-list mb-3 mt-5">
                      <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="https://www.google.com/" target="_blank"><i class="fa fa-google"></i></a></li>
                      <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <footer class="main-footer px-0 pb-0 pt-0">
                <div class="row ">
                  <div class="col-xl-8 col-lg-12 col-md-12 text-white mb-3">© All Right Reserved by <a href="javascript:void(0)">Adstocall.com</a>
                  </div>
                  <div class="col-xl-4 col-lg-12 col-md-12 ms-auto text-end">
                    <img class="payments-cards" src="@/assets/frontend/img/cards.svg" alt="">
<!--                    <ul class="footer-payments-items">-->
<!--                      <li><a href="javascript:void(0);"><i class="fa fa-cc-amex" aria-hidden="true"></i></a></li>-->
<!--                      <li><a href="javascript:void(0);"><i class="fa fa-cc-visa" aria-hidden="true"></i></a></li>-->
<!--                      <li><a href="javascript:void(0);"><i class="fa fa-credit-card-alt" aria-hidden="true"></i></a></li>-->
<!--                      <li><a href="javascript:void(0);"><i class="fa fa-cc-mastercard" aria-hidden="true"></i></a></li>-->
<!--                      <li><a href="javascript:void(0);"><i class="fa fa-cc-paypal" aria-hidden="true"></i></a></li>-->
<!--                    </ul>-->
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <!-- COL-END -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantRoutes } from '@/router'
const baseurl = process.env.VUE_APP_BASE_API

export default {
  name: 'Footer',
  data() {
    return {
      item: {}
    }
  },
  computed: {
    baseurl() {
      return baseurl
    },
    ...mapGetters([
      'permission_routes',
      'auth',
      'device',
    ]),
    publicRoutes() {
      return constantRoutes.find(route => route.children && route.children.length && route.meta && route.meta.isPublic).children
    }
  },
  methods: {
  }
}
</script>

