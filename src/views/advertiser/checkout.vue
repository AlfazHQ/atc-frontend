<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid mt-5">
    <!-- ROW-1 OPEN -->
    <div class="row">
      <div class="col-xl-8 col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Billing Information</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6 col-md-6">
                <div class="form-group">
                  <label class="form-label">First Name <span class="text-red">*</span></label>
                  <input v-model="billing_address.first_name" type="text" class="form-control" placeholder="First name">
                </div>
              </div>
              <div class="col-sm-6 col-md-6">
                <div class="form-group">
                  <label class="form-label">Last Name <span class="text-red">*</span></label>
                  <input v-model="billing_address.last_name" type="text" class="form-control" placeholder="Last name">
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-label">Company Name <span class="text-red">*</span></label>
                  <input v-model="billing_address.company_name" type="text" class="form-control" placeholder="Company name">
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-label">Email address <span class="text-red">*</span></label>
                  <input v-model="billing_address.email" type="email" class="form-control" placeholder="Email">
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-label">Country <span class="text-red">*</span></label>
                  <select v-model="billing_address.country_id" class="form-control form-select select2" data-bs-placeholder="Select">
                    <option :value="null">Select</option>
                    <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-label">Address <span class="text-red">*</span></label>
                  <input v-model="billing_address.address" type="text" class="form-control" placeholder="Home Address">
                </div>
              </div>
              <div class="col-sm-6 col-md-6">
                <div class="form-group">
                  <label class="form-label">City <span class="text-red">*</span></label>
                  <input v-model="billing_address.city" type="text" class="form-control" placeholder="City">
                </div>
              </div>
              <div class="col-sm-6 col-md-6">
                <div class="form-group">
                  <label class="form-label">Zip Code <span class="text-red">*</span></label>
                  <input v-model="billing_address.zipcode" type="number" class="form-control" placeholder="ZIP Code">
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-primary" @click="saveAddress">Save</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Payment Information</h3>
          </div>
          <div class="card-body">
            <div class="card-pay">
              <el-tabs v-model="activeTab" type="border-card" :stretch="true">
                <el-tab-pane name="Card">
                  <span slot="label"><feather type="credit-card" /> Card</span>
                  <div class="tab-body">
                    <div class="bg-danger-transparent-2 text-danger br-3 mb-4" role="alert">Please Enter Valid Details</div>
                    <div class="form-group">
                      <label class="form-label">CardHolder Name</label>
                      <input v-model="billing_address.name" type="text" class="form-control" placeholder="Full Name">
                    </div>
                    <label for="card-element" class="leading-7 text-sm text-gray-600">Credit Card Info</label>
                    <div id="card-element"></div>
                  </div>
                </el-tab-pane>
<!--                <el-tab-pane>-->
<!--                  <span slot="label"><feather type="dollar-sign" /> Paypal</span>-->
<!--                  <div class="tab-body">-->
<!--                    <p>Paypal is easiest way to pay online</p>-->
<!--                    <p><a href="javascript:void(0)" class="btn btn-primary"><i class="fa fa-paypal" /> Log in my Paypal</a></p>-->
<!--                    <p class="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>-->
<!--                  </div>-->
<!--                </el-tab-pane>-->
                <el-tab-pane name="Bank">
                  <span slot="label"><feather type="database" /> Bank</span>
                  <div class="tab-body">
                    <p>Bank account details</p>
                    <dl class="card-text">
                      <dt>BANK: </dt>
                      <dd> THE UNION BANK 0456</dd>
                    </dl>
                    <dl class="card-text">
                      <dt>Account Number: </dt>
                      <dd> 67542897653214</dd>
                    </dl>
                    <dl class="card-text">
                      <dt>IBAN: </dt>
                      <dd>543218769</dd>
                    </dl>
                    <p class="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-12">
        <div class="card cart">
          <div class="card-header">
            <h3 class="card-title">Your Order</h3>
          </div>
          <div class="card-body">
            <div class="">
              <div class="d-flex">
                <!--                <img class="avatar-xxl br-7" src="@/assets/images/pngs/4.jpg" alt="img">-->
                <div class="ms-3">
                  <h4 class="mb-1 fw-semibold fs-14"><a href="javascript:void(0);">{{ cart.name }} Package</a></h4>
                </div>
                <div class="ms-auto">
                  <span class="fs-16 fw-semibold">$ {{ cart.amount }}</span>
                </div>
              </div>
            </div>
            <ul class="list-group border br-7 mt-5">
              <li class="list-group-item border-0">
                Sub Total
                <span class="h6 fw-bold mb-0 float-end">$ {{ cart.amount }}</span>
              </li>
              <li class="list-group-item border-0">
                Discount
                <span class="h6 fw-bold mb-0 float-end">0</span>
              </li>
              <li class="list-group-item border-0">
                Total
                <span class="h4 fw-bold mb-0 float-end">$ {{ cart.amount }}</span>
              </li>
            </ul>
          </div>
          <div class="card-footer text-end">
            <el-button type="primary" :loading="paymentProcessing" @click="handlePay">Process to Pay</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-1 CLOSED -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import Auth from '@/services/api/Auth'
import Utils from '@/services/api/Utils'
// import { StripeCheckout } from '@vue-stripe/vue-stripe'
import { mapGetters } from 'vuex'
import { loadStripe } from '@stripe/stripe-js'
const STRIPE_KEY = process.env.VUE_APP_STRIPE_KEY

export default {
  name: 'Checkout',
  components: {
    // StripeCheckout
  },
  data() {
    return {
      billing_address: {
        country_id: null,
        name: null,
        country_code: null,
        first_name: null,
        last_name: null,
        company_name: null,
        email: null,
        address: null,
        city: null,
        zipcode: null
      },
      stripe: {},
      cardElement: {},
      indent: { client_secret: null },
      paymentProcessing: false,
      activeTab: 'Card',
      countries: null
    }
  },
  computed: {
    ...mapGetters([
      'cart'
    ])
  },
  created() {
    this.billingAddress()
    this.getCountries()
    this.getPaymentIndent()
  },
  async mounted() {
    this.stripe = await loadStripe(STRIPE_KEY)

    const elements = this.stripe.elements()
    this.cardElement = elements.create('card', {
      classes: {
        base: 'stripe-input'
      }
    })

    this.cardElement.mount('#card-element')
  },
  methods: {
    async handlePay() {
      if (!this.billing_address.id) {
        return this.$notify({
          type: 'warning',
          title: 'Warning',
          message: 'Please Save Billing Information'
        })
      }
      if (!this.cart.id) {
        return this.$notify({
          type: 'warning',
          title: 'Warning',
          message: 'Your Cart is empty!'
        })
      }
      this.paymentProcessing = true
      if (this.activeTab === 'Card') {
        await this.stripe.confirmCardSetup(
          this.indent.client_secret,
          {
            payment_method: {
              card: this.cardElement,
              billing_details: {
                name: this.billing_address.name,
                email: this.billing_address.email,
                address: {
                  line1: this.billing_address.address,
                  country: this.billing_address.country_code,
                  city: this.billing_address.city,
                  postal_code: this.billing_address.zipcode
                }
              }
            }
          }
        ).then(result => {
          if (result.error) {
            this.paymentProcessing = false
            this.$notify({
              type: 'success',
              title: 'Warning',
              message: result.error.message
            })
          } else {
            console.log('result', result)
            // paymentMethod = result.setupIntent.payment_method
            this.handlePurchase(result.setupIntent.payment_method)
          }
        }).catch(() => {
          this.paymentProcessing = false
        })
      } else {
        this.handlePurchase()
      }
    },
    billingAddress() {
      Auth.billingAddress().then(res => {
        this.billing_address = res.data.item
      })
    },
    getPaymentIndent() {
      Auth.getPaymentIndent().then(res => {
        this.indent = res.data.indent
      })
    },
    getCountries() {
      Utils.getCountries().then(res => {
        this.countries = res.data.countries
      })
    },
    handlePurchase(payment_method) {
      this.cart.payment_method = payment_method
      this.cart.payment_type = this.activeTab
      Auth.purchasePackage(this.cart).then(res => {
        this.$notify({
          type: 'success',
          title: 'Completed',
          message: res.message
        })

        this.$store.dispatch('auth/removeCart')
        this.$router.push({ name: 'PaymentHistory' })
      })
    },
    saveAddress() {
      Auth.saveAddress(this.billing_address).then(res => {
        this.$notify({
          type: 'success',
          title: 'Saved',
          message: res.message
        })
        this.billingAddress()
      })
    }
  }
}
</script>
<style>
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  color: #fff;
  background-color: #0d6efd;
  border-right-color: #0d6efd;
  border-left-color: #0d6efd;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active:hover {
  color: #fff;
}
.el-tabs__item {
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
}
</style>
