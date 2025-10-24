<template>
  <div class="main-area">
    <section class="" :class="device === 'mobile' ? 'slider-area-mobile' : 'slider-area'" :style="cssBgImg">
      <div class="top-slider" :style="cssProps">
        <div class="hero-area">
          <div class="hero-title text-capitalize align-items-center hero-wrapper" :style="heroWrapperCss">
            <div class="row m-0">
              <div class="col-12">
                <div class="play-icon">
                  <div :style="RippleCss" @click="dialogVisibleVideo = true">
                    <ripple :size="device === 'mobile' ? 'medium' : 'large'" />
                    <!--                    <div class="video-icon" :style="videoIconWrapperCss">-->
                    <!--                      <feather type="play" fill="red" stroke="fff" :size="Lg" :custom-style="videoIconCss" />-->
                    <!--                    </div>-->
                  </div>
                  <h3 class="text-white wttv" :style="[wtvCss]">Watch the Video</h3>
                </div>
                <h1 class="text-white fw-600 lh-1 mb-2" :style="sliderTitle">Get Paid</h1>
              </div>
            </div>
            <div class="row m-0">
              <div :class="device === 'mobile' ? 'col-8' : 'col-12'">
                <h3 class="text-white fw-600 mb-3" :style="[sliderTagline]">Everytime your phone rings</h3>
              </div>
<!--              <div v-if="device !== 'mobile'" class="col-12">-->
<!--                <button class="btn app-bg-purple text-white br-7 border-white fs-28 py-2" @click="$router.push({ name: 'SignUp' })">Sign Up to Start Earning Today >>></button>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-3 position-relative z-index2">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="row mt-3">
              <div class="col-8 mb-4">
                <h2 class="fw-bold" :class="device === 'mobile' ? 'fs-15' : 'fs--40'">Most Popular Ad choices</h2>
              </div>
              <div class="col-4 mb-4 text-end">
                <router-link :to="{ name: 'AllAds'}">View All</router-link>
              </div>
            </div>
            <div class="card-body p-0">
              <ad-items :items="ads" :breakpoints="slider.breakpoints" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="parallax-bg free-access pt-7 mb-5">
      <div v-if="device=== 'mobile'" class="free-access-bg jarallax" :style="parallaxMCss" data-jarallax data-speed="0.2" data-imgSize="fill" data-imgPosition="50% 50%">
        <!--        <div class="free-access-shape-1 float-bob-x">-->
        <!--          <img src="@/assets/frontend/img/free-access-shape-1.png" alt="">-->
        <!--        </div>-->
        <div class="free-access-shape-2">
          <img src="@/assets/frontend/img/free-access-shape-2.png" alt="">
        </div>
        <div class="free-access-shape-3">
          <img src="@/assets/frontend/img/free-access-shape-3.png" alt="">
        </div>
      </div>
      <div v-else class="free-access-bg jarallax" :style="parallaxCss" data-jarallax data-speed="0.2" data-imgSize="fill" data-imgPosition="50% 50%">
        <div class="free-access-shape-1 float-bob-x">
          <img src="@/assets/frontend/img/free-access-shape-1.png" alt="">
        </div>
        <div class="free-access-shape-2">
          <img src="@/assets/frontend/img/free-access-shape-2.png" alt="">
        </div>
        <div class="free-access-shape-3">
          <img src="@/assets/frontend/img/free-access-shape-3.png" alt="">
        </div>
      </div>
      <div class="service-area text-center" :style="serviceAreaCss">
        <div class="service-content">
          <h1 class="text-white fw-bold lh-base" :style="fsXl">Get Paid Every 30 Days With <br>Unlimited Ads To Choose From</h1>
          <button class="btn app-bg-purple text-white br-7 py-2 px-4 app-br" style="margin-top: 4%;" :class="device === 'mobile' ? 'fs-12' : 'fs-28'" @click="$router.push({ name: 'SignUp' })">Get Started Now</button>
        </div>
      </div>

      <div id="counter-area" class="counter-area card shadow-lg mb-0" :style="counterAreaCss">
        <div class="row card-body text-center" :class="device === 'mobile' ? 'py-3' : 'py-5'">
          <div class="col-3 border-end-1 p-0">
            <h1 class="fw-bold mb-1 text-black" :class="device === 'mobile' ? 'fs-14' : 'fs-30'">
              <ICountUp
                v-if="options.begin"
                :delay="delay"
                :end-val="endVal"
                :options="options"
              />
            </h1>
            <p class="mb-0" :class="device === 'mobile' ? 'fs-09' : 'fs-20'">Countries Globally</p>
          </div>
          <div class="col-3 border-end-1">
            <h1 class="fw-bold mb-1 text-black" :class="device === 'mobile' ? 'fs-14' : 'fs-30'">
              <ICountUp
                v-if="options.begin"
                :delay="delay"
                :end-val="2"
                :options="options"
              />
              <span class="text-muted">Bln</span></h1>
            <p class="mb-0" :class="device === 'mobile' ? 'fs-09' : 'fs-20'">Users Daily</p>
          </div>
          <div class="col-3 border-end-1">
            <h1 class="fw-bold mb-1 text-black" :class="device === 'mobile' ? 'fs-14' : 'fs-30'">
              <ICountUp
                v-if="options.begin"
                :delay="delay"
                :end-val="300"
                :options="options"
              />
            </h1>
            <p class="mb-0" :class="device === 'mobile' ? 'fs-09' : 'fs-20'">Network Providers</p>
          </div>
          <div class="col-3">
            <h1 class="fw-bold mb-1 text-black" :class="device === 'mobile' ? 'fs-14' : 'fs-30'">
              <ICountUp
                v-if="options.begin"
                :delay="delay"
                :end-val="100"
                :options="options"
              />
              <span class="text-muted">K</span></h1>
            <p class="mb-0" :class="device === 'mobile' ? 'fs-09' : 'fs-20'">Paid Out Daily</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container text-center">
      <div class="platform-ability" :style="platformCss">
        <h4 v-if="device=== 'mobile'"><strong class="fw-600">Works on Any Device with <br>A sim Card</strong></h4>
        <h2 v-else><strong class="fw-600">Works on Any Device with <br>A sim Card</strong></h2>
        <p class="mt-3">Never worry about what type of devices you have, feature phones, smartphones, <br> tablets or Computers with sim card they are all compatible with Adstocall.</p>
        <div class="device-platform mt-7">
          <img src="@/assets/frontend/img/devices.png" alt="">
          <div class="watch-devices__price-box cursor-pointer" :style="priceBoxCss" @click="$router.push({ name: 'SignUp' })">
            <div class="watch-devices__price-box-shape" />
            <h4 :class="device === 'mobile' ? 'fs-12' : 'fs-20'">Start</h4>
            <p :class="device === 'mobile' ? 'fs-06' : 'fs-10'">Earning Now</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container getting-started text-center mt-7">
      <h2 class="fw-600 mb-3 text-center">Getting started is simple as.</h2>
      <template v-if="device === 'mobile'">
        <div class="row m-0 mb-3 align-items-center">
          <div class="col mobile-stage-img">
            <img src="@/assets/frontend/img/get-started/stage1.jpg" alt="">
          </div>
          <div class="col mobile-step-counter pt-5">
            <img src="@/assets/frontend/img/get-started/01.png" alt="">
            <div class="content">Create an account submit and verify your phone number,s agree to terms and condition</div>
          </div>
        </div>
        <div class="row m-0 mb-3 align-items-center">
          <div class="col mobile-step-counter pt-5">
            <img src="@/assets/frontend/img/get-started/02.png" alt="">
            <div class="content">Select the preffered ads or song you would like to play when anyone calls your telephone number.</div>
          </div>
          <div class="col mobile-stage-img">
            <img src="@/assets/frontend/img/get-started/stage2.jpg" alt="">
          </div>
        </div>
        <div class="row m-0 align-items-center">
          <div class="col mobile-stage-img">
            <img src="@/assets/frontend/img/get-started/stage3.jpg" alt="">
          </div>
          <div class="col mobile-step-counter pt-5">
            <img src="@/assets/frontend/img/get-started/03.png" alt="">
            <div class="content">Instantly start earning from every call you recieve, transfer to your bank acount or paypal.</div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="row m-0">
          <div class="col col-md-4 col-sm-12 single-steps">
            <div class="step-img">
              <img src="@/assets/frontend/img/get-started/01.png" alt="">
            </div>
            <div class="desc-img">
              <img src="@/assets/frontend/img/get-started/stage1.jpg" alt="">
            </div>
            <div class="content mt-3">Create an account submit and verify your phone number,s agree to terms and condition</div>
          </div>
          <div class="col col-md-4 col-sm-12 single-steps">
            <div class="step-img">
              <img src="@/assets/frontend/img/get-started/02.png" alt="">
            </div>
            <div class="desc-img">
              <img src="@/assets/frontend/img/get-started/stage2.jpg" alt="">
            </div>
            <div class="content mt-3">Select the preffered ads or song you would like to play when anyone calls your telephone number.</div>
          </div>
          <div class="col col-md-4 col-sm-12 single-steps">
            <div class="step-img">
              <img src="@/assets/frontend/img/get-started/03.png" alt="">
            </div>
            <div class="desc-img">
              <img src="@/assets/frontend/img/get-started/stage3.jpg" alt="">
            </div>
            <div class="content mt-3">Instantly start earning from every call you recieve, transfer to your bank acount or paypal.</div>
          </div>
        </div>
      </template>
    </section>
    <section class="container mt-5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="row">
              <div class="col-12 mb-4">
                <h2 class="fw-bold text-center" :class="device === 'mobile' ? 'fs-15' : 'fs--40'">Our Customers</h2>
              </div>
            </div>
            <div class="card-body p-0">
              <swiper :slides-per-view="9" :space-between="15" :loop="false" :breakpoints="slider.breakpoints">
                <swiper-slide v-for="n in 6" :key="n" class="card">
                  <div class="customer-item card-body br-7">
                    <img :src="getBrandImg( n)" alt="">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="row">
              <div class="col-12 mb-4">
                <h2 class="fw-bold text-center" :class="device === 'mobile' ? 'fs-15' : 'fs--40'">Digital Billboards</h2>
              </div>
            </div>
            <div class="card-body p-0">
              <swiper v-if="billboards.length" :loop="false" :breakpoints="slider.billboardBreakpoints">
                <swiper-slide v-for="billboard in billboards" :key="billboard.id" class="pp">
                  <div class="billboard-item">
                    <img class="br-5" :src="billboard.thumbnail" alt="">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <a v-if="userAgent ==='Android'" href="https://play.google.com/store/apps/details?id=com.whatsapp&hl=en&gl=US" target="_blank">
            <img src="@/assets/images/banner-for-android.jpg" alt="" class="w-100 mt-5">
          </a>
          <a v-else-if="userAgent ==='iOS'" href="https://apps.apple.com/us/app/pok%C3%A9mon-go/id1094591345" target="_blank">
            <img src="@/assets/images/banner-for-apple.jpg" alt="" class="w-100 mt-5">
          </a>
          <a v-else href="https://play.google.com/store/apps/details?id=com.whatsapp&hl=en&gl=US" target="_blank">
            <img src="@/assets/images/pc.jpg" alt="" class="w-100 mt-5">
          </a>
        </div>
      </div>
    </section>
    <section class="container mt-5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="row">
              <div class="col-12 mb-4">
                <h2 class="fw-bold text-center" :class="device === 'mobile' ? 'fs-15' : 'fs--40'">Our Latest Article</h2>
              </div>
            </div>
            <div class="card-body p-0">
              <swiper v-if="blogs.length" :loop="false" :breakpoints="slider.blogBreakpoints">
                <swiper-slide v-for="(blog, i) in blogs" :key="blog.id" class="pb-2">
                  <router-link :to="{ name: 'BlogDetail', params: { id: blog.id}}">
                    <div class="blog-img br-7">
                      <img class="br-5" :src="blog.thumbnail" alt="">
                      <div class="blog-date bg-warning br-5 px-2 text-white fs-14">{{ blog.date }}</div>
                    </div>
                    <div class="blog-details bg-white shadow-sm mx-3 br-5 p-3">
                      <div class="blog-meta mb-2">
                        <ul>
                          <li><a href="javascript:void(0);"> <feather type="user" /> By Admin</a></li>
                          <li><a href="javascript:void(0);"> <feather type="message-circle" /> 0 Comments</a></li>
                        </ul>
                      </div>
                      <div class="blog-title">
                        <h6 class="text-black">{{ blog.title | trimStr }}</h6>
                      </div>
                      <div class="border-top" />
                      <div class="blog-footer text-center mt-2">
                        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id }}">Read More</router-link>
                      </div>
                    </div>
                  </router-link>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-0">
      <div class="row m-0">
        <div class="col-md-7 my-2">
          <div class="card-body text-center border border-danger cursor-pointer br-5" @click="$router.push({ name: 'SignUp' })">
            Become an Advertiser
          </div>
        </div>
        <div class="col-md-3 my-2">
          <div class="card-body text-center border border-warning cursor-pointer br-5" @click="$router.push({ name: 'SignUp' })">
            Sign Up to Earn
          </div>
        </div>
        <div class="col-md-2 my-2">
          <div class="card-body text-center border border-info br-5">
            <feather type="share-2" /> Share
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid mt-3 bg-light">
      <div class="container">
        <div class="row m-0 py-5">
          <div class="col-md-6">
            <div class="mb-4 mt-3">
              <h2 class="fw-bold" :class="device === 'mobile' ? 'fs-15' : 'fs--40'">FAQ,s</h2>
            </div>
            <div class="align-items-center">
              <div class="text-center mb-4">
                <img class="b-img" src="@/assets/images/brand/logo.png" alt="...">
              </div>
              <p>We developed adstocall to put the power in both the advertiser and consumer hands allowing users to choose which ads are entertaining to use as ringtones,</p>
            </div>
          </div>
          <div class="col-md-6 shadow br-5 bg-white">
            <el-collapse v-model="activeNames">
              <el-collapse-item name="1">
                <template slot="title">
                  <h6 class="fw-600">How do I get my ad on adstocall?</h6>
                </template>
                <div>Create an account submit your information upload your ads get them approved and that’s it</div>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template slot="title">
                  <h6 class="fw-600">How much can i earn per call?</h6>
                </template>
                <div>A average user receives 1000-1500 calls per month, each call is priced at $0.05 per call, 1500
                  x 0.05 =$75 monthly passive income.</div>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template slot="title">
                  <h6 class="fw-600">As a user or advertiser will I get calls from telemarketers?</h6>
                </template>
                <div>NO we will not call you about any offers, or share your number with any other third party
                  advertisers.</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5">
      <div class="row align-items-center border br-5 newsletter m-0">
        <div class="col-md-4 col-sm-12 my-3">
          <input type="text" class="form-control form-item-wrapper bg-white" placeholder="Full Name">
        </div>
        <div class="col-md-4 col-sm-12 my-3">
          <input type="text" class="form-control form-item-wrapper" placeholder="Email">
        </div>
        <div class="col-md-4 col-sm-12 text-center">
          <button class="btn app-bg-purple text-white py-2">Join Our Newsletter</button>
        </div>
        <div class="send-img">
          <img src="@/assets/frontend/img/send.png" alt="">
        </div>
      </div>
    </section>
    <div class="mb-5" />
    <el-dialog
      :show-close="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisibleVideo"
      custom-class="rounded-dialog"
      :width="device === 'mobile'? '90%': '50%'"
    >
      <video-player :options="promotional_video" @dialogClosed="dialogVisibleVideo = false" />

    </el-dialog>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper'
import { jarallax, jarallaxVideo } from 'jarallax'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import ICountUp from 'vue-countup-v2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import { mapGetters } from 'vuex'
import CssMixin from '@/layout/mixin/CssHandler'
import VideoPlayer from '@/components/videoPlayer'
import Ripple from '@/components/Ripple'
import AdItems from '@/components/AdItems'
import Utils from '@/services/api/Utils'

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide,
    ICountUp,
    VideoPlayer,
    AdItems,
    Ripple
  },
  filters: {
    trimStr(string) {
      return string.length > 50 ? string.substring(0, 50 - 3) + ' ...' : string
    }
  },
  mixins: [CssMixin],
  data() {
    return {
      activeNames: ['1'],
      blogs: [],
      ads: [],
      billboards: [],
      faqs: null,
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
          }
          // 2400: {
          //   spaceBetween: 20,
          //   slidesPerView: 16
          // }
        },
        billboardBreakpoints: {
          0: {
            spaceBetween: 20,
            slidesPerView: 1.1
          },
          375: {
            spaceBetween: 20,
            slidesPerView: 1.2
          },
          576: {
            spaceBetween: 20,
            slidesPerView: 1.3
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 2.1
          },
          1200: {
            spaceBetween: 20,
            slidesPerView: 3
          },
          1400: {
            spaceBetween: 20,
            slidesPerView: 4
          },
          1600: {
            spaceBetween: 20,
            slidesPerView: 4
          }
          // 2400: {
          //   spaceBetween: 20,
          //   slidesPerView: 16
          // }
        },
        blogBreakpoints: {
          0: {
            spaceBetween: 20,
            slidesPerView: 1.1
          },
          375: {
            spaceBetween: 20,
            slidesPerView: 1.2
          },
          576: {
            spaceBetween: 20,
            slidesPerView: 1.3
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 2.1
          },
          1200: {
            spaceBetween: 20,
            slidesPerView: 3
          },
          1400: {
            spaceBetween: 20,
            slidesPerView: 4
          },
          1600: {
            spaceBetween: 20,
            slidesPerView: 4
          }
          // 2400: {
          //   spaceBetween: 20,
          //   slidesPerView: 16
          // }
        }
      },
      player: {
        isPlaying: false
      },
      delay: 500,
      endVal: 250,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
        begin: false
      },
      dialogVisibleVideo: false,
      dialogVisible: false,
      parallaxCss: {
        backgroundImage: `url(${require('@/assets/frontend/img/parallax.jpg')})`
      },
      parallaxMCss: {
        backgroundImage: `url(${require('@/assets/frontend/img/selfie.jpg')})`
      },
      promotional_video: {}
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles',
      'clientWidth',
      'device'
    ]),
    userAgent() {
      let OSName = 'Unknown OS'
      if (navigator.userAgent.indexOf('Win') !== -1) OSName = 'Windows'
      if (navigator.userAgent.indexOf('Mac') !== -1) OSName = 'Macintosh'
      if (navigator.userAgent.indexOf('Linux') !== -1) OSName = 'Linux'
      if (navigator.userAgent.indexOf('Android') !== -1) OSName = 'Android'
      if (navigator.userAgent.indexOf('like Mac') !== -1) OSName = 'iOS'
      return OSName
    }
  },
  created() {
    // window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    // jarallaxVideo()
    jarallax(document.querySelectorAll('.jarallax'))
    window.addEventListener('scroll', this.handleScroll)
    this.getBlogs()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    getBlogs() {
      Utils.getHomePage().then(res => {
        this.blogs = res.data.blogs
        this.faqs = res.data.faqs
        this.ads = res.data.ads
        this.billboards = res.data.billboards
        this.promotional_video = res.data.promotional_video
      })
    },
    getImg(img) {
      return require('@/assets/frontend/img/' + img)
    },
    getBrandImg(img) {
      // return require('@/assets/frontend/img/' + img)
      // var images = require.context('@/assets/frontend/img/brands/', false, /\.jpg$/)
      // return images('./' + img + '.png')
      return require('@/assets/frontend/img/brands/' + img + '.png')
    },
    getImgUrl(pet) {
      var images = require.context('@/assets/frontend/img/', false, /\.jpg$/)
      return images('./' + pet + '.jpg')
    },
    handleScroll() {
      const el = document.getElementById('counter-area')
      if (this.isInViewport(el)) {
        this.options.begin = true
      } else {
        this.options.begin = false
      }
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top
      var elemBottom = rect.bottom

      // Only completely visible elements return true:
      var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
      // Partially visible elements return true:
      // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible
    },
    handleEndPayler() {
      this.player.isPlaying = false
    },
    toggleAudio() {
      const audio = document.getElementById('audio-player')
      this.player.isPlaying = audio.paused
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }
    }
  }
}
</script>
