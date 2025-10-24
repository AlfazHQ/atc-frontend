<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid mt-5">

    <!-- Row -->
    <div class="row row-sm">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
        <div class="card overflow-hidden">
          <div class="main-content-app pt-0 main-chat-2">
            <div class="main-content-left main-content-left-chat">
              <div class="card-body d-flex">
                <div class="main-img-user online"><img alt="avatar" :src="auth.avatar"></div>
                <div class="main-chat-msg-name">
                  <h6>{{ auth.name }}</h6>
                  <span class="dot-label bg-success" /><small class="me-3">Available</small>
                </div>
              </div>

              <!-- main-chat-header -->
              <div v-if="is_admin || is_customer_care" class="card-body ">
                <div class="input-group">
                  <input v-model="query" type="text" class="form-control" placeholder="Search ...">
                  <span class="input-group-text btn btn-primary">Search</span>
                </div>
              </div>
              <div class="tab-menu-heading border-top">
                <div class="tabs-menu1">
                  <ul class="nav panel-tabs">
                    <li><a :href="'#' + activeTabName" class="active" data-bs-toggle="tab" @click="activeTabName = 'All'">All</a></li>
                    <li v-if="is_admin || is_customer_care"><a :href="'#' + activeTabName" data-bs-toggle="tab" @click="activeTabName = 'User'">Users</a></li>
                    <li v-if="is_admin || is_customer_care"><a :href="'#' + activeTabName" data-bs-toggle="tab" @click="activeTabName = 'Provider'">Provider</a></li>
                    <li v-if="is_admin || is_customer_care"><a :href="'#' + activeTabName" data-bs-toggle="tab" @click="activeTabName = 'Advertiser'">Advertisers</a></li>
                  </ul>
                </div>
              </div>
              <div class="tab-content main-chat-list flex-2 ">
                <div :id="activeTabName" class="tab-pane active">
                  <div class="main-chat-list tab-pane">
                    <template v-if="filteredContact.length">
                      <div v-for="(contact, i) in filteredContact" :key="i" class="media new border-top-0" @click="getMsg(contact.id)">
                        <div class="main-img-user online" :title="contact.name">
                          <img alt="" :src="contact.avatar">
                        </div>
                        <div class="media-body">
                          <div class="media-contact-name">
                            <span>{{ contact.name }}</span> <span>{{ contact.last_msg_at }}</span>
                          </div>
<!--                          <p v-if="tempContact.id === contact.id"> {{ lastMsg.type !== 'text' ? 'File' : lastMsg.body }} </p>-->
                          <p v-if="contact.last_msg"> {{ contact.last_msg_type !== 'text' ? 'File' :contact.last_msg }} </p>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <h3 class="text-center" style="margin: 10% 0;">Empty contacts!</h3>
                    </template>
                  </div>
                  <!-- main-chat-list -->
                </div>
              </div>
              <!-- main-chat-list -->
            </div>
          </div>
        </div>
      </div>
      <div v-if="tempContact.id" class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
        <div class="card">
          <div class="main-content-app pt-0">
            <div class="main-content-body main-content-body-chat h-100">
              <div class="main-chat-header pt-3 d-block d-sm-flex">
                <div class="main-img-user online"><img alt="avatar" :src="tempContact.avatar"></div>
                <div class="main-chat-msg-name mt-2">
                  <h6>{{ tempContact.name }}</h6>
                  <span class="dot-label bg-success" /><small class="me-3">online</small>
                </div>
              </div>
              <!-- main-chat-header -->
              <div id="ChatBody" class="main-chat-body flex-2">
                <div class="content-inner overflow-scroll h-100">
                  <template v-for="(el, k) in messages">
                    <div :key="'msg_'+ k" :class="el.sender_id === auth.id ? 'flex-row-reverse chat-right' : 'chat-left'" class="media">
<!--                      <div class="main-img-user online" :title="el.name"><img alt="avatar" :src="el.is_sender ? tempContact.avatar : auth.avatar"></div>-->
                      <div class="main-img-user online" :title="el.name"><img alt="avatar" :src="el.avatar"></div>
                      <div class="media-body">
                        <div v-if="el.type === 'image'" class="file-preview">
                          <img :src="el.body" class="msg_file">
                        </div>
                        <div v-else class="main-msg-wrapper">
                          {{ el.body }}
                        </div>
                        <div>
                          <span>{{ el.time }}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                  <div id="msgItm" ref="scrollToMe" />
                </div>
              </div>
              <div class="main-chat-footer">
                <input v-model="msg.body" class="form-control" placeholder="Type your message here..." type="text" @keyup.enter="sendMsg">
                <a class="nav-link" data-bs-toggle="tooltip" title="Attach a File">
                  <el-upload
                    class="msg-file-uploader"
                    drag
                    :on-change="handleFiles"
                    :show-file-list="false"
                    :auto-upload="false"
                    action="#">
                    <i class="fe fe-paperclip" />
                  </el-upload>
                </a>
                <button type="button" class="btn btn-icon  btn-primary brround" @click="sendMsg"><i class="fa fa-paper-plane-o" /></button>
                <nav class="nav" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tempContact.id" class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
        <div class="card">
          <div class="main-content-app profile-details-main">
            <div class="card-body pb-0">
              <div class="">

                <div class="text-center chat-image pb-0 mb-4 br-5">
                  <div class="chat-profile mb-3 brround">
                    <img alt="avatar" :src="tempContact.avatar" class="brround w-100p h-100p">
                  </div>
                  <div class="main-chat-msg-name">
                    <h5 class="mb-1 text-dark fw-semibold">{{ tempContact.name }}</h5>
                    <span class="dot-label bg-success" /><small class="me-3">Available</small>
                    <!--                    <p class="text-muted mt-0 mb-1 pt-0 fs-13">{{ tempContact.type }}</p>-->
                  </div>
                </div>
                <div class="">
                  <h6 class="mb-3">Contact Details :</h6>
                  <div class="d-flex mb-2">
                    <div>
                      <a class="nav-link border rounded-pill chat-profile me-2" href="javascript:void(0)"><i class="fe fe-mail" /></a>
                    </div>
                    <div class="ms-2">
                      <p class="fs-13 fw-semibold mb-0">Email</p>
                      <p class="fs-12 text-muted">{{ tempContact.email }}</p>
                    </div>
                  </div>
                  <div class="d-flex mb-2 mt-2">
                    <div>
                      <a class="nav-link border rounded-pill chat-profile me-2" href="javascript:void(0)"><i class="fe fe-phone" /></a>
                    </div>
                    <div class="ms-2">
                      <p class="fs-13 fw-semibold mb-0">Phone</p>
                      <p class="fs-12 text-muted">{{ tempContact.mobile }}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 class="mb-3 pt-5">Media :</h5>
                  <ul id="lightgallery" class="list-unstyled row">
                    <li v-for="(file, i) in media_items" :key="i" class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0">
                      <a href="javascript:void(0)">
                        <img class="w-100p h-auto br-5" :src="file.path" alt="Thumb-1">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- End Row -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>
import Auth from '@/services/api/Auth'
import { mapGetters } from 'vuex'

export default {
  name: 'Messages',
  data() {
    return {
      contacts: [],
      media_items: [],
      activeTabName: 'All',
      query: null,
      messages: [],
      newMessage: null,
      tempContact: {
        name: null,
        avatar: null
      },
      msg: {
        body: null,
        file: null,
        file_url: null,
        type: 'text'
      }
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'is_admin',
      'is_customer_care'
    ]),
    filteredContact() {
      let result = this.contacts
      const tabName = this.activeTabName
      if (tabName !== 'All') {
        result = result.filter(c => c.type === tabName)
      }
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.name.toLowerCase().includes(query))
    },
    lastMsg() {
      return this.messages[this.messages.length - 1]
    }
  },
  created() {
    this.getMyContacts()
  },
  mounted() {
    this.pusherEvent()
  },
  methods: {
    pusherEvent() {
      const channel = this.$pusher.subscribe('private-chat' + '.' + this.auth.id)
      channel.bind('MessageSent', data => {
        // console.log('data', data)
        if (data) {
          if (this.tempContact.id === data.message.sender_id) {
            this.handlePostEvent(data)
          }
        }
      })
      /*
      * Fetch realtime contact list
      *  */
      const contactListChannel = this.$pusher.subscribe('private-chat-contacts' + '.' + this.auth.id)
      contactListChannel.bind('ContactListEvent', data => {
        // console.log('data', data)
        if (data) {
          this.contacts = data.contacts
        }
      })
    },
    handlePostEvent(data) {
      this.messages.push(data.message)
      console.log(this.messages)
      if (data.message.type === 'image') {
        this.media_items.push({
          path: data.message.path,
          type: data.message.type,
          time: data.message.time
        })
      }
      this.scrollToElement()
    },
    getMyContacts() {
      Auth.getMyContacts().then(res => {
        this.contacts = res.data.contacts
      })
    },
    getMsg(sender) {
      Auth.fetchMessage(sender).then(res => {
        this.messages = res.data.messages
        this.tempContact = res.data.user
        this.media_items = res.data.media_items
        this.scrollToElement()
      })
    },
    sendMsg() {
      const formData = new FormData()
      formData.append('receiver_id', this.tempContact.id)
      formData.append('body', this.msg.body)
      formData.append('type', this.msg.type)
      if (this.msg.file) {
        formData.append('file', this.msg.file)
      }
      Auth.sendMessage(formData).then(res => {
        this.handlePostMsg()
      })
    },
    handlePostMsg() {
      this.getMyContacts()
      this.getMsg(this.tempContact.id)
      this.resetMsg()
      this.scrollToElement()
    },
    resetMsg() {
      this.msg = {
        body: null,
        file: null,
        file_url: null,
        type: 'text'
      }
    },
    handleFiles(file, fileList) {
      if (!this.isValidImage(file.raw)) {
        return this.$notify({
          title: 'Warning',
          type: 'warning',
          message: 'Invalid File'
        })
      }
      this.msg.type = 'image'
      this.msg.file = file.raw
      this.msg.file_url = URL.createObjectURL(file.raw)
      // setTimeout(() => {
      //   this.scrollToElement()
      // }, 1000)
      this.sendMsg()
    },
    isValidImage(file) {
      if (!file.type) {
        this.$message.error('File must be Valid format!')
        return false
      }
      const isValid = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isValid) {
        this.$message.error('File must be JPG/PNG format!')
      }
      if (!isLt2M) {
        this.$message.error('File size can not exceed 2MB!')
      }
      return isValid && isLt2M
    },
    handleFile() {
      document.getElementById('fileUpload').click()
    },
    scrollToElement() {
      this.$nextTick(function() {
        const el = this.$refs.scrollToMe
        if (el) {
          // Use el.scrollIntoView() to instantly scroll to the element
          el.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }
}
</script>
