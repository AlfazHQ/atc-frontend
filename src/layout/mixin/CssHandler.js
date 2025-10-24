import { mapGetters } from 'vuex'
const DESKTOP = 992
const TABLET = 768
const MOBILE = 576
export default {
  computed: {
    ...mapGetters([
      'clientWidth',
      'device'
    ]),
    dimension() {
      if (this.device === 'largeDesktop') {
        return 1.5
      } else if (this.device === 'desktop') {
        return 1.2
      } else if (this.device === 'mobile') {
        return 0.8
      }
      return 0
    },
    cssProps() {
      return {
        backgroundImage: `url(${require('@/assets/frontend/img/slider-bg.jpg')})`,
        position: 'relative',
        height: '100%',
        // height: this.device === 'mobile' ? '205px' : '712px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    },
    cssBgImg() {
      let height = this.clientWidth / (2.1) + 'px'
      if (this.device === 'mobile') {
        height = this.clientWidth / (1.5) + 'px'
      }
      return {
        height: height
      }
    },
    cssParallaxBgImg() {
      return {
        // height: this.clientWidth / 5 + 'px'
      }
    },
    colorBlack() {
      return {
        color: '#000'
      }
    },
    border1() {
      return {
        border: '1px solid #ddd'
      }
    },
    Xxxl() {
      return this.clientWidth / (9.5 * this.dimension)
    },
    Xxl() {
      return this.clientWidth / (20 * this.dimension)
    },
    Xl() {
      return this.clientWidth / (30 * this.dimension)
    },
    Lg() {
      return this.clientWidth / (40 * this.dimension)
    },
    Md() {
      return this.clientWidth / (50 * this.dimension)
    },
    Sm() {
      return this.clientWidth / (60 * this.dimension)
    },
    Xs() {
      return this.clientWidth / (70 * this.dimension)
    },
    Xxs() {
      return this.clientWidth / (100)
    },
    fsXxl() {
      return {
        fontSize: this.Xxl + 'px'
      }
    },
    fsXxxl() {
      return {
        fontSize: this.Xxxl + 'px'
      }
    },
    fsXl() {
      return {
        fontSize: this.Xl + 'px'
      }
    },
    fsLg() {
      return {
        fontSize: this.Lg + 'px'
      }
    },
    fsMd() {
      return {
        fontSize: this.Md + 'px'
      }
    },
    fsSm() {
      return {
        fontSize: this.Sm + 'px'
      }
    },
    fsXs() {
      return {
        fontSize: this.Xs + 'px'
      }
    },
    fsXxs() {
      return {
        fontSize: this.Xxs + 'px'
      }
    },
    RippleCss() {
      let marginBottom = this.Xxl + 10 + 'px'
      let marginLeft = this.Xxxl + this.Xxxl + this.Xxl + 'px'
      if (this.device === 'mobile') {
        marginBottom = this.Xxl + 10 + 'px'
        marginLeft = this.Xxxl + this.Xxxl + 'px'
      }
      return {
        width: this.Xxl + 'px',
        height: this.Xxl + 'px',
        borderRadius: '50%',
        marginLeft: marginLeft,
        marginBottom: marginBottom
        // animation: 'ripple 2s linear infinite'
      }
    },
    RippleIconCss() {
      return {
        position: 'absolute',
        top: '8px',
        left: '8px'
      }
    },
    RippleIconLgCss() {
      return {
        position: 'absolute',
        top: '20px',
        left: '24px'
      }
    },
    heroWrapperCss() {
      let bottom = this.Xxl + this.Md + 'px'
      let paddingLeft = '7%'
      if (this.device === 'mobile') {
        bottom = this.Lg + 'px'
        paddingLeft = 0
      }

      return {
        bottom: bottom,
        paddingLeft: paddingLeft
      }
    },
    wtvCss() {
      let fs = this.Xl + 'px'
      let marginLeft = '4%'
      let marginBottom = '2%'
      if (this.device === 'mobile') {
        fs = this.Xl + 'px'
        marginLeft = '1%'
        marginBottom = '6%'
      }

      return {
        fontSize: fs,
        marginLeft: marginLeft,
        marginBottom: marginBottom
      }
    },
    sliderTitle() {
      let fontSize = this.Xxxl + 'px'
      if (this.device === 'mobile') {
        fontSize = this.Xxl + this.Lg + 'px'
      }

      return {
        fontSize: fontSize
      }
    },
    sliderTagline() {
      let fontSize = this.Xl + 'px'
      if (this.device === 'mobile') {
        fontSize = this.Xl + 'px'
      }

      return {
        fontSize: fontSize
      }
    },
    videoIconWrapperCss() {
      return {
        position: 'relative',
        background: '#fff',
        height: this.Xxl + 'px',
        width: this.Xxl + 'px',
        borderRadius: '50%'
      }
    },
    videoIconCss() {
      return {
        position: 'absolute',
        top: '27%',
        right: '20%'
      }
    },
    serviceAreaCss() {
      return {
        marginTop: '-15%',
        paddingBottom: this.clientWidth / (3) + 'px',
        minHeight: this.clientWidth / (1.9 * this.dimension) + 'px'
      }
    },
    platformCss() {
      return {
        marginTop: this.Xxxl - 10 + 'px'
      }
    },
    counterAreaCss() {
      let bottom = '-' + this.Xl + 'px'
      // if (this.clientWidth >= MOBILE && this.clientWidth <= DESKTOP) {
      //   bottom = '-8%'
      // }
      if (this.clientWidth - 1 < MOBILE) {
        bottom = '-' + this.Xxl + 'px'
      }
      if (this.clientWidth >= MOBILE && this.clientWidth <= DESKTOP) {
        bottom = '-' + this.Xl + 'px'
      }
      return {
        width: this.device === 'mobile' ? this.clientWidth / (1.1) + 'px' : this.clientWidth / (1.5) + 'px',
        // bottom: this.device === 'mobile' ? '-' + this.Xl + 'px' : '-' + this.Xxl + 'px'
        bottom: bottom
      }
    },
    priceBoxCss() {
      return {
        height: this.device === 'mobile' ? '80px' : '115px',
        width: this.device === 'mobile' ? '80px' : '115px',
      }
    },
    headerImgCss() {
      return {
        width: this.device === 'mobile' ? '180px' : '230px'
      }
    }
  }
}
