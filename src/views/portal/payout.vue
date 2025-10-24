<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid mt-5">
    <!-- ROW-1 OPEN -->
    <div class="row">
      <div class="col-xl-8 col-md-12 offset-xl-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Payout Request</h3>
          </div>
          <div class="card-body">
            <ValidationObserver v-slot="{ handleSubmit }">
              <div class="row">
                <div class="col-md-12 col-sm-12 mb-4">
                  <ValidationProvider v-slot="{ errors }" name="Amount" rules="required">
                    <input v-model="item.amount" type="number" :class="{'border-danger' : errors.length}" class="form-control" placeholder="Enter Amount *" oninput="this.value = Math.abs(this.value)">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- <input v-model="item.amount" type="number" class="form-control form-item-wrapper" placeholder="Amount *" oninput="this.value = Math.abs(this.value)"> -->
                </div>
                <div class="col-md-12 col-sm-12 mb-4">
                  <select v-model="item.payment_method" class="form-control">
                    <option :value="null">Select Payment Method *</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Bank">Bank</option>
                  </select>
                </div>
                <template v-if="item.payment_method === 'Paypal'">
                  <div class="col-md-12 col-sm-12 mb-4">
                    <ValidationProvider v-slot="{ errors }" name="Paypal" rules="required">
                      <input v-model="item.paypal_email" type="email" class="form-control form-item-wrapper" placeholder="Paypal Account *">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </template>
                <template v-if="item.payment_method === 'Bank'">
                  <div class="col-md-6 col-12 mb-4">
                    <ValidationProvider v-slot="{ errors }" name="Bank_account_name" rules="required">
                      <input v-model="item.bank_account_name" type="text" class="form-control form-item-wrapper" placeholder="Bank Account Name *">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6 col-12 mb-4">
                    <ValidationProvider v-slot="{ errors }" name="bank_account_number" rules="required">
                      <input v-model="item.bank_account_number" type="text" class="form-control form-item-wrapper" placeholder="Bank Account Number *">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6 col-12 mb-4">
                    <ValidationProvider v-slot="{ errors }" name="bank_name" rules="required">
                      <input v-model="item.bank_name" type="text" class="form-control form-item-wrapper" placeholder="Bank Name *">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 col-12 mb-4">
                    <ValidationProvider v-slot="{ errors }" name="bank_swift_code" rules="required">
                      <input v-model="item.bank_swift_code" type="text" class="form-control form-item-wrapper" placeholder="Swift Code *">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-8 col-12 mb-4">
                    <ValidationProvider v-slot="{ errors }" name="bank_iban" rules="required">
                      <input v-model="item.bank_iban" type="text" class="form-control form-item-wrapper" placeholder="IBAN *">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </template>
              </div>
              <div class="card-footer text-end">
                <!-- <button class="btn btn-primary" @click="handlePayout">Payout</button> -->
                <button class="btn btn-purple text-white float-right py-2 px-3" @click="handleSubmit(handlePayout)">Payout</button>
              </div>
            </ValidationObserver>
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

export default {
  name: 'Payout',
  data() {
    return {
      item: {
        amount: null,
        payment_method: null,
        paypal_email: null,
        bank_account_name: null,
        bank_account_number: null,
        bank_swift_code: null,
        bank_name: null,
        bank_iban: null
      }
    }
  },
  methods: {
    handlePayout() {
      this.handleSubmit()
      Auth.payoutRequest(this.item).then(res => {
        this.$notify({
          type: 'success',
          title: 'Success',
          message: res.message
        })
        this.resetItem()
        this.$router.push({ name: 'WithdrawalHistory' })
      })
    },
    resetItem() {
      this.item = {
        amount: null,
        payment_method: null,
        paypal_email: null,
        bank_account_name: null,
        bank_account_number: null,
        bank_swift_code: null,
        bank_name: null,
        bank_iban: null
      }
    }
  }
}
</script>
