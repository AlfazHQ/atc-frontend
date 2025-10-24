<template>
  <div class="page">
    <div class="page-main">
      <navbar @handleSelectCountry="handleSelectCountry" />
      <sidebar />
      <!--  BEGIN CONTENT AREA  -->
      <div class="main-content app-content mt-0" style="padding-top: 75px" @click="handleClickOutside">
        <div class="side-app">

          <app-main />
        </div>
      </div>
    </div>

    <el-dialog
      :show-close="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="rounded-dialog"
      width="25%">
      <ul class="row p-5">
        <div class="input-group mb-5">
          <input type="text" class="form-control " placeholder="Search Country" name="s">
          <span class="input-group-btn ms-0">
                  <button class="btn btn-primary" type="submit">
                    <span class="fe fe-search text-white" />
                  </button>
                </span>
        </div>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block active" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/us_flag.jpg" class="me-3 language"></span>USA
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/italy_flag.jpg" class="me-3 language"></span>Italy
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/spain_flag.jpg" class="me-3 language"></span>Spain
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/india_flag.jpg" class="me-3 language"></span>India
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/french_flag.jpg" class="me-3 language"></span>French
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/russia_flag.jpg" class="me-3 language"></span>Russia
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/germany_flag.jpg" class="me-3 language"></span>Germany
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/argentina.jpg" class="me-3 language"></span>Argentina
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/malaysia.jpg" class="me-3 language"></span>Malaysia
          </a>
        </li>
        <li class="col-lg-6 mb-2">
          <a href="javascript:void(0)" class="btn btn-country btn-lg btn-block" @click="dialogVisible=false">
            <span class="country-selector"><img alt="" src="@/assets/images/flags/turkey.jpg" class="me-3 language"></span>Turkey
          </a>
        </li>
      </ul>
<!--      <span slot="footer" class="dialog-footer">-->
<!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>-->
<!--      </span>-->
    </el-dialog>
    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-md-12 col-sm-12 text-center">
            Copyright © <span id="year" /> <a href="javascript:void(0)">ATC</a>. Designed with <span
            class="fa fa-heart text-danger"
          /> by <a href="javascript:void(0)"> ATC </a> All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
    <!-- FOOTER END -->
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AppMain from './AppMain'
import { mapState } from 'vuex'
import ResizeMixin from '../mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar
  },
  mixins: [ResizeMixin],
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    classObj() {
      return {
        'sidenav-toggled': !this.sidebar.opened,
        // 'sidebar-closed': !this.sidebar.opened && this.device !== 'mobile',
        // mobile: this.device === 'mobile' && !this.sidebar.opened
      }
    }
  },
  watch: {
    // 'sidebar.opened'(val) {
    //   if (val) {
    //     document.body.classList.add('sidenav-toggled')
    //   } else {
    //     document.body.classList.remove('sidenav-toggled')
    //   }
    // }
  },
  mounted() {
  },
  methods: {
    handleSelectCountry(val) {
      console.log('on handleSelectCountry', val)
      this.dialogVisible = val
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

