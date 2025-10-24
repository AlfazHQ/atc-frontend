<template>
  <div class="main-area">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <img src="@/assets/frontend/img/blog-banner.jpg" alt="">
          <h2 class="text-center my-5">{{ blog.title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-sm-12">
          <div class="blog-header">
            <img :src="blog.banner" alt="">
          </div>
          <div class="blog-body mt-5">
            <span v-html="blog.body"></span>
          </div>
          <div class="card shadow mt-5">
            <div class="card-header">
              <div class="card-title">Comments</div>
            </div>
            <div class="card-body pb-0">
              <div v-for="i in 2" :key="i" class="media mb-5 overflow-visible d-block d-sm-flex">
                <div class="me-3 mb-2">
                  <img class="media-object rounded-circle thumb-sm" alt="64x64" src="@/assets/images/man.png">
                </div>
                <div class="media-body overflow-visible">
                  <div class="border mb-5 p-4 br-5">
                    <h5 class="mt-0">Gavin Murray</h5>
                    <span><i class="fe fe-thumb-up text-danger"></i></span>
                    <p class="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro quisquam est.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow">
            <div class="card-header">
              <div class="card-title">Add a Comments</div>
            </div>
            <div class="card-body">
              <form class="form-horizontal  m-t-20" action="index.html">
                <div class="form-group">
                  <div class="col-xs-12">
                    <textarea class="form-control" rows="5">Your Comment*</textarea>
                  </div>
                </div>
                <div class="">
                  <a href="javascript:void(0)" class="btn btn-primary btn-rounded  waves-effect waves-light">Submit</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 ">
          <div class="card shadow-lg">
            <img :src="blog.thumbnail" alt="" style="width: 100%">
            <div class="card-body border-bottom">
              <h2 class="card-title">Top News</h2>
            </div>
            <ul class="list-group list-group-flush pb-3">
              <li v-for="blg in blogs" :key="blg.id" class="list-group-item">
                <router-link :to="{ name: 'BlogDetail', params: { id: blg.id}}">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img :src="blg.thumbnail" alt="" style="width: 100px;">
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6>{{ blg.title | trimStr }}</h6>
                      <div class="blog-items-meta">
                        <span class="author text-muted fs-12"><a href="javascript:void(0);">By Admin</a></span>
                        <span class="date text-muted fs-12">{{ blg.date }}</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Utils from '@/services/api/Utils'
export default {
  name: 'BlogDetails',
  filters: {
    trimStr(string) {
      return string.length > 50 ? string.substring(0, 50 - 3) + ' ...' : string
    }
  },
  data() {
    return {
      bgStyle: {
        backgroundColor: '#f6ebfb',
        padding: '2%',
        height: '40rem'
      },
      blog: {},
      blogs: [],
      imgStyle: {
        position: 'absolute',
        left: '-30%'
      }
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles',
      'device'
    ])
  },
  created() {
    this.getBlogs()
  },
  mounted() {
    if (this.$route.params && this.$route.params.id) {
      this.getInfo(this.$route.params.id)
    }
  },
  methods: {
    getBlogs() {
      Utils.getBlogs().then(res => {
        this.blogs = res.data.blogs
      })
    },
    getInfo(id) {
      Utils.getBlogDetails(id).then(res => {
        this.blog = res.data.blog
      })
    }
  }
}
</script>
