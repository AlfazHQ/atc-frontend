<template>
  <div class="container-fluid p-0">
    <!--    <nav class="navbar navbar-light signup-nav h-9 px-5">-->
    <!--      <router-link :to="{ name: 'Home'}" class="navbar-brand"> <img src="@/assets/images/brand/logo-2.png" class="header-brand-img desktop-logo" alt="logo"></router-link>-->
    <!--      <button class="app-btn-rounded app-bg-pink text-white border-0 me-2" @click="$router.push({ name: 'Login'})">Login</button>-->
    <!--    </nav>-->
    <div class="container mt-5">
      <div v-if="active === 1" class="row">
        <div class="col-md-12 mb-4">
          <div class="row form-item-wrapper mx-0">
            <div class="col-md-5 col-12">
              <label class="form-label fw-600 fs-20">Sign Up as</label>
            </div>
            <div class="col-md-7 col-12 text-end">
              <!--              <button class="btn app-bg-purple text-white px-7">User</button>-->
              <!--              <button class="btn app-bg-purple text-white px-7">Advertiser</button>-->
              <el-radio-group v-model="item.type" class="mt-2" fill="#2C0270">
                <el-radio-button label="User" />
                <el-radio-button label="Advertiser" />
              </el-radio-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container signup my-5 shadow-lg">
      <div class="step-header">
        <div class="row">
          <div class="col-12 p-0">
            <ul v-if="device !== 'mobile'" class="p-0">
              <li v-for="(step, index) in steps" :key="step.id" :class="{'active': active === step.id, 'bg-green': active > step.id, 'visited': active-1 >= step.id && active === step.id+1}" class="p-5">
                <div class="media media-lg mt-0" style="margin-left: 15px;">
                  <div class="step-number" :class="{ 'bg-purple': active > step.id}">
                    {{ ++index }}
                  </div>
                  <div class="media-body">
                    <h4 class="mt-0">{{ step.title }}</h4>
                    <p class="mb-0 fs-14">{{ step.description }}</p>
                  </div>
                </div>
              </li>
            </ul>
            <ul v-else class="mobile-step-wrapper p-0">
              <li v-for="(step, index) in steps" :key="step.id" :class="{'active': active === step.id, 'bg-green': active > step.id, 'visited': active-1 >= step.id && active === step.id+1}" class="p-3">
                <div class="media media-lg mt-0" style="margin-left: 15px;">
                  <div class="step-number" :class="{ 'bg-purple': active > step.id}">
                    {{ ++index }}
                  </div>
                  <div v-if="active === step.id" class="media-body">
                    <h4 class="mb-0">{{ step.title }}</h4>
                    <p class="mb-0 fs-10">{{ step.description }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="step-body p-3">
        <ValidationObserver v-slot="{ handleSubmit }">
          <div class="row">
            <div class="col-md-10 col-sm-12 offset-md-1 offset-sm-0">
              <div class="form-wrapper mt-5">
                <form class="form-horizontal">
                  <template v-if="active === 1">
                    <div class="row">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <input v-model="item.first_name" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="First Name *">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <input v-model="item.last_name" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="Last Name *">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div v-if="item.type === 'Advertiser'" class="row">
                      <div class="col-md-5 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <div :class="{'border-danger' : errors.length}" class="row form-item-wrapper mx-0">
                            <div class="col-8">
                              <label class="form-label">Gender *</label>
                            </div>
                            <div class="col-4">
                              <el-select v-model="item.gender" placeholder="Select">
                                <el-option
                                  v-for="el in ['Male', 'Female']"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="col-md-7 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <input v-model="item.job_title" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="Job Title*">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div v-else class="row">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <div class="row form-item-wrapper mx-0">
                          <div class="col-6">
                            <label class="form-label">Occupation</label>
                          </div>
                          <div class="col-6">
                            <el-select v-model="item.occupation" placeholder="Select">
                              <el-option
                                v-for="el in ['Student', 'Self Employed', 'Business']"
                                :key="el"
                                :label="el"
                                :value="el"
                              />
                            </el-select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <div :class="{'border-danger' : errors.length}" class="row form-item-wrapper mx-0">
                            <div class="col-7">
                              <label class="form-label">Gender *</label>
                            </div>
                            <div class="col-5">
                              <el-select v-model="item.gender" placeholder="Select">
                                <el-option
                                  v-for="el in ['Male', 'Female']"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <input v-model="item.profile.company_name" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="Company Name *">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <div class="row form-item-wrapper mx-0">
                          <div class="col-8">
                            <label class="form-label">Company Size</label>
                          </div>
                          <div class="col-4">
                            <el-select v-model="item.profile.company_size" placeholder="Select">
                              <el-option
                                v-for="el in ['Small', 'Medium', 'Large']"
                                :key="el"
                                :label="el"
                                :value="el"
                              />
                            </el-select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <div class="row form-item-wrapper mx-0" :class="{'border-danger' : errors.length}">
                            <div class="col-6">
                              <label class="form-label">Industry *</label>
                            </div>
                            <div class="col-6">
                              <el-select v-model="item.profile.industry" placeholder="Select">
                                <el-option
                                  v-for="el in ['Agriculture', 'Basic Metal Production', 'Chemical industries', 'Commerce', 'Construction', 'Education', 'Financial services', 'Food & drink', 'Professional services', 'Government', 'Beauty', 'Internet', 'Advertising', 'Shopping', 'Entertainment', 'Travel', 'Others']"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-if="item.type === 'Advertiser'" v-slot="{ errors }" rules="required">
                          <div class="row form-item-wrapper mx-0" :class="{'border-danger' : errors.length}">
                            <div class="col-6">
                              <label class="form-label">Number Of  Employees *</label>
                            </div>
                            <div class="col-6">
                              <el-select v-model="item.profile.no_of_employee" placeholder="Select">
                                <el-option
                                  v-for="el in ['1 to 15', '15 to 35', '35 to 60', '60 to 100', '100+']"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider v-else v-slot="{ errors }" rules="required">
                          <div class="row form-item-wrapper mx-0" :class="{'border-danger' : errors.length}">
                            <div class="col-8">
                              <label class="form-label">Average calls receive per day *</label>
                            </div>
                            <div class="col-4">
                              <el-select v-model="item.profile.avg_call_receive_day" placeholder="Select">
                                <el-option
                                  v-for="el in ['10', '20', '50', '100+']"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <div class="row form-item-wrapper mx-0" :class="{'border-danger' : errors.length}">
                            <div class="col-7">
                              <label class="form-label">Country *</label>
                            </div>
                            <div class="col-5">
                              <el-select v-model="item.country_id" filterable placeholder="Select">
                                <el-option
                                  v-for="country in countries"
                                  :key="country.id"
                                  :label="country.name"
                                  :value="country.id"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                          <input v-model="item.email" type="email" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" :placeholder="item.type === 'Advertiser'? 'Business Email *' : 'Email *'">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" name="Password" rules="required|confirmed:password_confirmation|min:8">
                          <input v-model="item.password" :type="passwordType" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="Password *">
                          <div class="toggle-visible" @click="toggleVisible">
                            <feather :type="passwordType === 'password' ? 'eye' : 'eye-off'" />
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" name="Confirm Password" rules="required|min:8" vid="password_confirmation">
                          <input v-model="item.password_confirmation" :type="confirmPasswordType" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="Confirm Password *">
                          <div class="toggle-visible" @click="confirmToggleVisible">
                            <feather :type="confirmPasswordType === 'password' ? 'eye' : 'eye-off'" />
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <div class="row form-item-wrapper mx-0">
                          <div class="col-4">
                            <label class="form-label">{{ selectedCountry.phone_code }}</label>
                          </div>
                          <div class="col-8">
                            <ValidationProvider v-slot="{ errors }" name="Phone" rules="required|min:10|max:10">
                              <input v-model="item.profile.work_phone" type="number" :class="{'border-danger' : errors.length}" class="form-control" placeholder="Work Phone">
                              <span class="text-danger" style="position: absolute; margin-left: -55%;">{{ errors[0] }}</span>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" name="State" rules="required">
                          <input v-model="item.profile.state" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="State *">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" name="City" rules="required">
                          <input v-model="item.profile.city" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="City *">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="col-md-6 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" name="Zipcode" rules="required">
                          <input v-model="item.profile.zipcode" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="Zip Code *">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" name="Address" rules="required">
                          <input v-model="item.address" type="text" :class="{'border-danger' : errors.length}" class="form-control form-item-wrapper" placeholder="Address *">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 col-sm-12 mb-4">
                        <div v-if="item.type === 'Advertiser'" class="row form-item-wrapper mx-0">
                          <div class="col-8">
                            <label class="form-label">Annual Advertising Budget</label>
                          </div>
                          <div class="col-4">
                            <el-select v-model="item.profile.annual_budget" placeholder="Select">
                              <el-option
                                v-for="el in ['$10k - $20k', '$20k - $40k', '$40k - $80k', '$80k - $120k', '$120k+']"
                                :key="el"
                                :label="el"
                                :value="el"
                              />
                            </el-select>
                          </div>
                        </div>
                        <div v-else class="row form-item-wrapper mx-0">
                          <div class="col-8">
                            <label class="form-label">Annual Income</label>
                          </div>
                          <div class="col-4">
                            <el-select v-model="item.profile.annual_income" placeholder="Select">
                              <el-option
                                v-for="el in ['$10k - $20k', '$20k - $40k', '$40k - $80k', '$80k - $120k', '$120k+']"
                                :key="el"
                                :label="el"
                                :value="el"
                              />
                            </el-select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="item.type === 'Advertiser'" class="row">
                      <div class="col-md-12 mb-4">
                        <div class="row form-item-wrapper mx-0">
                          <div class="col-8">
                            <label class="form-label">Countries Intend to advertise to</label>
                          </div>
                          <div class="col-4">
                            <el-select v-model="item.profile.intend_countries" placeholder="Select">
                              <el-option
                                v-for="country in countries"
                                :key="country.id"
                                :label="country.name"
                                :value="country.id"
                              />
                            </el-select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="item.type === 'User'" class="row">
                      <div class="col-md-7 col-sm-12 mb-4">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <div class="row form-item-wrapper mx-0" :class="{'border-danger' : errors.length}">
                            <div class="col-7">
                              <label class="form-label">Mobile Service Provider *</label>
                            </div>
                            <div class="col-5">
                              <el-select v-model="item.profile.mobile_service_provider" placeholder="Select">
                                <el-option
                                  v-for="provider in providers"
                                  :key="provider.id"
                                  :label="provider.name"
                                  :value="provider.id"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="col-md-5 col-sm-12 mb-4 ">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                          <div class="row form-item-wrapper mx-0" :class="{'border-danger' : errors.length}">
                            <div class="col-7">
                              <label class="form-label">Your Phone model *</label>
                            </div>
                            <div class="col-5">
                              <el-select v-model="item.profile.phone_model" placeholder="Select">
                                <el-option
                                  v-for="el in ['Android', 'IOS', 'Blackberry', 'Feature Phone', 'Windows']"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div v-if="item.type === 'User'" class="row">
                      <div class="col-md-12 mb-4">
                        <div class="row form-item-wrapper mx-0">
                          <div class="col-8">
                            <label class="form-label">How would you describe your personality?</label>
                          </div>
                          <div class="col-4">
                            <el-select v-model="item.profile.personality" placeholder="Select">
                              <el-option
                                v-for="el in ['Reserve', 'Outgoing', 'Social Butterfly']"
                                :key="el"
                                :label="el"
                                :value="el"
                              />
                            </el-select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="active === 2">
                    <template v-if="item.type === 'Advertiser'">
                      <div class="row">
                        <div class="col-md-12 col-sm-12 mb-4">
                          <label class="form-label">Company Info</label>
                          <textarea v-model="item.profile.company_info" class="form-control form-item-wrapper h-auto" rows="5">By submitting this form i confirm that i have read the privacy policy and agree to the processing of my personal data by Personio for this stated purposes. In case of consent, I can revoke my consent to this processing at any time</textarea>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div class="row">
                        <div class="col-md-8 mb-4">
                          <div class="row form-item-wrapper mx-0">
                            <div class="col-8">
                              <label class="form-label">How many mobile phones do you have?</label>
                            </div>
                            <div class="col-4">
                              <el-select v-model="item.profile.no_of_handset" placeholder="Select">
                                <el-option
                                  v-for="el in 10"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 mb-4">
                          <div class="row form-item-wrapper mx-0">
                            <div class="col-md-6 col-12">
                              <label class="form-label">Enter the mobile number you wish to use for Adstocall</label>
                            </div>
                            <div class="col-md-2 col-2"><label class="form-label">{{ selectedCountry.phone_code }}</label></div>
                            <div class="col-md-4 col-10">
                              <ValidationProvider v-slot="{ errors }" name="Mobile" rules="required|min:10|max:10">
                                <input v-model="item.mobile_phone" type="number" :class="{'border-danger' : errors.length}" class="form-control" placeholder="Enter Number *">
                                <span class="text-danger">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-7 mb-4">
                          <div class="row form-item-wrapper mx-0">
                            <div class="col-8">
                              <label class="form-label">How you Like to be paid?</label>
                            </div>
                            <div class="col-4">
                              <el-select v-model="item.profile.payment_period" placeholder="Select">
                                <el-option
                                  v-for="el in ['Monthly', 'Annually']"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-9 mb-4">
                          <div class="row form-item-wrapper mx-0">
                            <div class="col-8">
                              <label class="form-label">How many ads would you like to add to your line?</label>
                            </div>
                            <div class="col-4">
                              <el-select v-model="item.profile.ad_line_interest" placeholder="Select">
                                <el-option
                                  v-for="el in 10"
                                  :key="el"
                                  :label="el"
                                  :value="el"
                                />
                              </el-select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <el-checkbox v-model="item.is_agreed" size="medium" />
                        <span class="ms-2">By adding this ad to my playlist this form i confirm that i have read the privacy policy and agree to the processing of my personal data by  for this stated purposes. In case of consent,<a href="/privacy-policy" target="_blank"> -MORE</a></span>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="active === 3">
                    <div class="row justify-content-center">
                      <div class="col-md-8 offset-md-2 col-sm-12 offset-sm-0">
                        <div class="media media-lg mt-0 align-items-center">
                          <img class="all_set_img" src="@/assets/images/all_set.png" alt="image">
                          <div class="media-body">
                            <h3 class="mt-0 text-purple-dark fw-600">You are all Set</h3>
                            <h5 class="text-purple-dark mb-0">Take a look at your details</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col-12">
                        <div class="card bg-transparent" style="border: 1px solid #ddd !important;">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-6">
                                <div class="list-group">
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Name</h5>
                                    </div>
                                    <p class="mb-1">{{ item.first_name }} {{ item.last_name }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Gender</h5>
                                    </div>
                                    <p class="mb-1">{{ item.gender }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Job title</h5>
                                    </div>
                                    <p class="mb-1">{{ item.job_title }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Company Name</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.company_name }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Company Size</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.company_size }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Industry</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.industry }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Number of employees</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.no_of_employee }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Business Email</h5>
                                    </div>
                                    <p class="mb-1">{{ item.email }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Business Phone</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.work_phone }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Address</h5>
                                    </div>
                                    <p class="mb-1">{{ item.address }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Country</h5>
                                    </div>
                                    <p class="mb-1">{{ selectedCountry.name }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">State</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.state }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">ZIP</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.zipcode }}</p>
                                  </span>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="list-group">
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Annual Advertising Budget</h5>
                                    </div>
                                    <p class="mb-1"> {{ item.profile.annual_budget }}</p>
                                  </span>
                                  <span class="mb-3">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 text-purple-dark">Company Bio</h5>
                                    </div>
                                    <p class="mb-1">{{ item.profile.company_info }}</p>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </form>
              </div>
            </div>
          </div>

          <div class="step-footer p-4 mb-8 mt-5">
            <div class="step-counter float-left fs-16">
              <!--            Step {{ active }} of 3-->
              <button v-if="active > 1" class="btn btn-purple text-white float-right py-2 px-3" @click="back">Back</button>
            </div>
            <button v-if="active === 3" class="btn btn-purple text-white float-right py-2 px-3" @click="next">Submit</button>
            <button v-else class="btn btn-purple text-white float-right py-2 px-3" :disabled="active === 2 && !item.is_agreed" @click="handleSubmit(next)">GO TO NEXT STEP</button>
          </div>
        </ValidationObserver>
      </div>
      <el-dialog :visible.sync="dialogVisible" :width="device === 'mobile'? '90%': '30%'" custom-class="p-0 rounded-dialog">

        <div class="row">
          <div v-if="device !== 'mobile'" class="col-md-4">
            <img src="@/assets/images/otp-bg.png" alt="" style="height: 100%;">
          </div>
          <div class="col-md-8 col-sm-12">
            <div class="otp-header ms-6 mt-7">
              <h3>Enter OTP</h3>
              <h5>A Code has been sent to your Mobile number.</h5>
              <p>Mobile: {{ item.mobile_phone }}</p>
              <p>Incorrect mobile number ?<strong class="fw-bold text-info" @click="handleChangeNumber"> Change it</strong></p>
            </div>

            <template v-if="changeNumber">
              <div class="row mx-0">
                <div class="col-8 form-item-wrapper offset-2">
                  <ValidationProvider v-slot="{ errors }" name="Mobile" rules="required|min:10|max:10">
                    <input v-model="item.mobile_phone" type="number" :disabled="item.token" :class="{'border-danger' : errors.length}" class="form-control" placeholder="Enter Number *">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-purple px-8 fs-17 mb-3" @click="reSendOtp">Send OTP</button>
              </div>
            </template>

            <template v-else>
              <otp-input
                ref="otpInput"
                class="justify-content-center"
                input-classes="otp-input shadow-sm"
                :separator="false"
                :num-inputs="6"
                :should-auto-focus="true"
                :is-input-num="true"
                @on-complete="handleOnComplete"
              />
              <div class="mt-5 text-center">
                <button class="btn btn-purple px-8 fs-17" @click="handleConfirm">Confirm</button>
                <p v-if="resendAttempt <3 " class="mt-3 text-purple-dark mb-5 cursor-pointer" @click="reSendOtp">Resend Code</p>
              </div>
            </template>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'
import ResizeMixin from '@/layout/mixin/ResizeHandler'
import OtpInput from '@bachdgvn/vue-otp-input'
import Auth from '@/services/api/Auth'
import Utils from '@/services/api/Utils'

export default {
  name: 'Signup',
  components: {
    OtpInput
  },
  mixins: [ResizeMixin],
  data() {
    return {
      active: 1,
      form: { },
      rangeValue: [24, 45],
      dialogVisible: false,
      changeNumber: false,
      resendAttempt: 0,
      countries: [],
      providers: [],
      passwordType: 'password',
      confirmPasswordType: 'password',
      item: {
        first_name: null,
        last_name: null,
        token: null,
        type: 'User',
        occupation: null,
        job_title: null,
        gender: null,
        mobile: null,
        mobile_phone: null,
        email: null,
        password: null,
        password_confirmation: null,
        address: null,
        country_id: 230,
        is_agreed: false,
        profile: {
          company_name: null,
          company_size: null,
          company_info: null,
          industry: null,
          work_phone: null,
          no_of_employee: null,
          avg_call_receive_day: null,
          state: null,
          city: null,
          zipcode: null,
          annual_income: null,
          annual_budget: null,
          mobile_service_provider: null,
          phone_model: null,
          personality: null,
          no_of_handset: null,
          payment_period: null,
          ad_line_interest: null,
          intend_countries: null
        }
      },
      steps: [
        {
          id: 1,
          title: 'ACCOUNT',
          description: 'Enter Information'
        },
        {
          id: 2,
          title: 'PERSONAL',
          description: 'Personal Information'
        },
        {
          id: 3,
          title: 'OVERVIEW',
          description: 'Re check'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'auth',
      'roles',
      'device'
    ]),
    ...mapState({
      // sidebar: state => state.app.sidebar,
      // device: state => state.app.device
    }),
    selectedCountry() {
      const that = this
      const country = this.countries.find(c => c.id === that.item.country_id)
      return country || {}
    }
  },
  created() {
    this.getCountries()
    this.getProviders()
  },
  methods: {
    next() {
      if (this.active === 2 && !this.dialogVisible && this.item.type === 'User') {
        this.sendOtp()
      } else {
        if (this.active++ >= 3) this.handleSignUp()
      }
    },
    back() {
      this.active--
    },
    handleOnComplete(value) {
      this.item.token = value
    },
    toggleVisible() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    confirmToggleVisible() {
      if (this.confirmPasswordType === 'password') {
        this.confirmPasswordType = 'text'
      } else {
        this.confirmPasswordType = 'password'
      }
    },
    getCountries() {
      Utils.getCountries().then(res => {
        this.countries = res.data.countries
      })
    },
    getProviders() {
      Utils.getProviders().then(res => {
        this.providers = res.data.providers
      })
    },
    handleChangeNumber() {
      this.changeNumber = !this.changeNumber
    },
    handleSignUp() {
      this.item.mobile = this.selectedCountry.phone_code + this.item.mobile_phone
      Auth.register(this.item).then(res => {
        this.$router.push({ name: 'Login' })
      }).catch(err => {
        this.active = 1
        console.log('err ', err)
      })
    },
    reSendOtp() {
      this.changeNumber = false
      if (this.resendAttempt > 3) {
        return this.$notify({
          type: 'success',
          title: 'Warning',
          message: 'Max attempt reached'
        })
      }
      this.resendAttempt++
      this.sendOtp()
    },
    sendOtp() {
      if (!this.item.mobile_phone) {
        return this.$notify({
          type: 'warning',
          title: 'Warning',
          message: 'Please Enter Valid Mobile number'
        })
      }
      if (this.item.token) {
        return this.active++
      }
      this.dialogVisible = true

      const payload = {
        mobile: this.selectedCountry.phone_code + this.item.mobile_phone
      }
      Utils.sendOtp(payload).then(res => {
        this.dialogVisible = true
        this.$notify({
          type: 'success',
          title: 'OTP Sent',
          message: res.message
        })
      })
    },
    handleConfirm() {
      this.dialogVisible = false
      this.active++
    }
  }
}
</script>
<!--<style src="@/assets/css/style.css">-->
<!--.el-select {-->
<!--  /*width: 100%;*/-->
<!--}-->
<!--</style>-->
<style scoped>
.form-control{
  background-color: transparent !important;
}
</style>
<style>
.el-radio-button__inner {
  padding: 14px 75px;
  font-size: 14px;
  border-radius: 0;
}
.signup-nav{
  background: #3B148C;
}
.signup-nav.navbar .navbar-brand{
  height: auto;
}
.signup-nav .header-brand-img{
  width: 230px;
}
</style>

