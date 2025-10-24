<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-1 -->
    <div class="row mt-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-2">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Active Users</h6>
                    <h2 class="mb-0 number-font">{{ summary.active_users }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-2">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Ads</h6>
                    <h2 class="mb-0 number-font">{{ summary.ads }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-2">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Active Advertiser</h6>
                    <h2 class="mb-0 number-font">{{ summary.advertisers }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xl-2">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Providers</h6>
                    <h2 class="mb-0 number-font">{{ summary.providers }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="is_admin" class="col-lg-6 col-md-6 col-sm-12 col-xl-2">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Active Plans</h6>
                    <!--                    <e>total purchases</e>-->
                    <h2 class="mb-0 number-font">{{ summary.plans }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="is_admin" class="col-lg-6 col-md-6 col-sm-12 col-xl-2">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex">
                  <div class="mt-2">
                    <h6 class="">Total Earning</h6>
                    <h2 class="mb-0 number-font">$ {{ summary.earnings }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-1 END -->

    <!-- ROW-2 -->
    <div v-if="is_admin" class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
        <div class="card height-md">
          <div class="card-header">
            <h3 class="card-title">Ads Reports</h3>
          </div>
          <div class="card-body">
            <div class="d-flex mx-auto text-center justify-content-center mb-4">
              <div class="d-flex text-center justify-content-center me-3"><span
                class="dot-label bg-primary my-auto"
              />Auditions
              </div>
            </div>
            <div class="chartjs-wrapper-demo">
              <LineChart :labels="auditionReport.labels" :data="auditionReport.data" />
              <!--              <canvas id="transactions" class="chart-dropshadow"></canvas>-->
            </div>
          </div>
        </div>
      </div>
      <!-- COL END -->
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
        <div class="card overflow-hidden height-md">
          <div class="card-body pb-0 bg-recentorder">
            <h3 class="card-title text-white">OS Reports</h3>
          </div>
          <div class="card-body overflow-y-scroll">
            <div class="chart-wrapper" style="height: 300px">
              <pie-chart chart-id="os-report" :data="osReports" />
            </div>
          </div>
        </div>
      </div>
      <!-- COL END -->
    </div>
    <!-- ROW-2 END -->

    <!-- ROW-3 -->
    <div v-if="is_admin" class="row">
      <div class="col-xl-4 col-md-12">
        <div class="card height-md">
          <div class="card-header">
            <h4 class="card-title fw-semibold">Recent Ads</h4>
          </div>
          <div class="card-body pb-0 overflow-y-scroll">
            <ul class="">
              <li v-for="el in latest_ads" :key="el.id" class="d-sm-flex border-bottom p-2">
                <div>
                  <div class="media mt-0">
                    <div class="media-user me-2">
                      <div class=""><img alt="" class="rounded-circle avatar avatar-md" src="@/assets/images/man.png"></div>
                    </div>
                    <div class="media-body">
                      <h6 class="mb-0 mt-1">{{ el.owner.first_name }}</h6>
                      <small class="text-muted">User ID: {{ el.owner.id }}</small>
                      <div class="text-muted">Ads Title: {{ el.title }}</div>
                    </div>
                  </div>
                </div>
                <div class="ms-auto d-md-flex">
                  <a class="text-center ads-thumbnail" @click="handleDialog(el)">
                    <img :src="el.thumbnail" alt="">
                    <div class="ad-option cursor-pointer">
                      <ripple />
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card overflow-hidden height-md">
          <div class="card-header">
            <div>
              <h3 class="card-title">Global Coverage</h3>
            </div>
          </div>
          <div class="card-body p-0 mt-2 overflow-y-scroll">
            <div class="">
              <div id="world-map-markers1" class="worldh world-map h-250" />
            </div>
            <div class="table-responsive mt-2 text-center">
              <table class="table text-nowrap border-dashed mb-0">
                <thead>
                <tr>
                  <th class="text-start">Country</th>
                  <th class="text-center">latitude</th>
                  <th class="text-center">longitude</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="el in coverageCountries" :key="el.id">
                  <td class="text-start p-4">{{ el.name }}</td>
                  <td class="p-4">{{ el.latitude }}</td>
                  <td class="p-4">{{ el.longitude }}</td>
                </tr>
                </tbody>
              </table>
              <!--end /table-->
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card height-md">
          <div class="card-header">
            <h4 class="card-title fw-semibold">Browser Usage</h4>
          </div>
          <div class="card-body overflow-y-scroll">
            <div class="browser-stats">
              <div class="row mb-4">
                <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                  <img
                    src="@/assets/images/browsers/chrome.svg"
                    class="img-fluid"
                    alt="img"
                  >
                </div>
                <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                  <div class="d-flex align-items-end justify-content-between mb-1">
                    <h6 class="mb-1">Chrome</h6>
                    <h6 class="fw-semibold mb-1">35,502 <span
                      class="text-success fs-11"
                    >(<i
                      class="fe fe-arrow-up"
                    />12.75%)</span></h6>
                  </div>
                  <div class="progress h-2 mb-3">
                    <div
                      class="progress-bar bg-primary"
                      style="width: 70%;"
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                  <img
                    src="@/assets/images/browsers/opera.svg"
                    class="img-fluid"
                    alt="img"
                  >
                </div>
                <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                  <div class="d-flex align-items-end justify-content-between mb-1">
                    <h6 class="mb-1">Opera</h6>
                    <h6 class="fw-semibold mb-1">12,563 <span
                      class="text-danger fs-11"
                    >(<i
                      class="fe fe-arrow-down"
                    />15.12%)</span></h6>
                  </div>
                  <div class="progress h-2 mb-3">
                    <div
                      class="progress-bar bg-secondary"
                      style="width: 40%;"
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                  <img
                    src="@/assets/images/browsers/ie.svg"
                    class="img-fluid"
                    alt="img"
                  >
                </div>
                <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                  <div class="d-flex align-items-end justify-content-between mb-1">
                    <h6 class="mb-1">IE</h6>
                    <h6 class="fw-semibold mb-1">25,364 <span
                      class="text-success fs-11"
                    >(<i
                      class="fe fe-arrow-down"
                    />24.37%)</span></h6>
                  </div>
                  <div class="progress h-2 mb-3">
                    <div
                      class="progress-bar bg-success"
                      style="width: 50%;"
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                  <img
                    src="@/assets/images/browsers/firefox.svg"
                    class="img-fluid"
                    alt="img"
                  >
                </div>
                <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                  <div class="d-flex align-items-end justify-content-between mb-1">
                    <h6 class="mb-1">Firefox</h6>
                    <h6 class="fw-semibold mb-1">14,635 <span
                      class="text-success fs-11"
                    >(<i
                      class="fe fe-arrow-down"
                    />15.63%)</span></h6>
                  </div>
                  <div class="progress h-2 mb-3">
                    <div
                      class="progress-bar bg-danger"
                      style="width: 50%;"
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                  <img
                    src="@/assets/images/browsers/edge.svg"
                    class="img-fluid"
                    alt="img"
                  >
                </div>
                <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                  <div class="d-flex align-items-end justify-content-between mb-1">
                    <h6 class="mb-1">Edge</h6>
                    <h6 class="fw-semibold mb-1">15,453 <span
                      class="text-danger fs-11"
                    >(<i
                      class="fe fe-arrow-down"
                    />23.70%)</span></h6>
                  </div>
                  <div class="progress h-2 mb-3">
                    <div
                      class="progress-bar bg-warning"
                      style="width: 10%;"
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                  <img
                    src="@/assets/images/browsers/safari.svg"
                    class="img-fluid"
                    alt="img"
                  >
                </div>
                <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                  <div class="d-flex align-items-end justify-content-between mb-1">
                    <h6 class="mb-1">Safari</h6>
                    <h6 class="fw-semibold mb-1">10,054 <span
                      class="text-success fs-11"
                    >(<i
                      class="fe fe-arrow-up"
                    />11.04%)</span></h6>
                  </div>
                  <div class="progress h-2 mb-3">
                    <div
                      class="progress-bar bg-info"
                      style="width: 40%;"
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                  <img
                    src="@/assets/images/browsers/netscape.svg"
                    class="img-fluid"
                    alt="img"
                  >
                </div>
                <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                  <div class="d-flex align-items-end justify-content-between mb-1">
                    <h6 class="mb-1">Netscape</h6>
                    <h6 class="fw-semibold mb-1">35,502 <span
                      class="text-success fs-11"
                    >(<i
                      class="fe fe-arrow-up"
                    />12.75%)</span></h6>
                  </div>
                  <div class="progress h-2 mb-3">
                    <div
                      class="progress-bar bg-green"
                      style="width: 30%;"
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-3 END -->

    <!-- ROW-4 -->
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">Recent Users</h3>
          </div>
          <div class="card-body pt-4">
            <div class="grid-margin">
              <div class="">
                <div class="panel panel-primary">
                  <div class="panel-body tabs-menu-body border-0 pt-0">
                    <div class="tab-content">
                      <div id="tab5" class="tab-pane active">
                        <div class="table-responsive">
                          <table
                            id="data-table"
                            class="table table-bordered text-nowrap mb-0"
                          >
                            <thead class="border-top">
                              <tr>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 5%;"
                                >User Id
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Name
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Date
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Address
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 10%;"
                                >Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="el in latest_users" :key="el.id" class="border-bottom">
                                <td class="text-center">{{ el.id }}</td>
                                <td class="text-center">{{ el.name }}</td>
                                <td class="text-center">{{ el.date }}</td>
                                <td class="text-center">{{ el.address }}</td>
                                <td class="text-center">{{ el.status }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div id="tab6" class="tab-pane">
                        <div class="table-responsive">
                          <table
                            class="table table-bordered text-nowrap mb-0"
                          >
                            <thead class="border-top">
                              <tr>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 5%;"
                                >Tracking Id
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Product
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Customer
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Date
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Amount
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Payment Mode
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 10%;"
                                >Status
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 5%;"
                                >Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #98765490</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/10.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Headsets</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cherry Blossom</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">30 Aug
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$6.721.5</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #76348798</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/12.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Flower Pot</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Simon Sais</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">15 Nov
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$35,7863</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #23986456</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/4.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Pen Drive</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Manny Jah</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">27 Jan
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$5,89,6437</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #87456325</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/8.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        New Bowl</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Florinda Carasco</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">19 Sep
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$17.98</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #65783926</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/6.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Leather Watch</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Ivan Notheridiya</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">06 Oct
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$8.654.4</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #34654895</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/1.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Digital Camera</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Willie Findit</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">10 Jul
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$8.654.4</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #98765345</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/11.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Earphones</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Addie Minstra</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">25 Jun
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$7,34,9768</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #67546577</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/2.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Shoes</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Laura Biding</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">22 Feb
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$7.76.654</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                                    >Shipped</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div id="tab7" class="tab-pane">
                        <div class="table-responsive">
                          <table
                            class="table table-bordered text-nowrap mb-0"
                          >
                            <thead class="border-top">
                              <tr>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 5%;"
                                >Tracking Id
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Product
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Customer
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Date
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Amount
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Payment Mode
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 10%;"
                                >Status
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 5%;"
                                >Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #98765490</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/10.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Headsets</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cherry Blossom</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">30 Aug
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$6.721.5</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-warning-transparent rounded-pill text-warning p-2 px-3"
                                    >Pending</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #23986456</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/4.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Pen Drive</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Manny Jah</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">27 Jan
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$5,89,6437</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-warning-transparent rounded-pill text-warning p-2 px-3"
                                    >Pending</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #87456325</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/8.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        New Bowl</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Florinda Carasco</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">19 Sep
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$17.98</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-warning-transparent rounded-pill text-warning p-2 px-3"
                                    >Pending</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #65783926</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/6.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Leather Watch</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Ivan Notheridiya</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">06 Oct
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$8.654.4</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-warning-transparent rounded-pill text-warning p-2 px-3"
                                    >Pending</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #34654895</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/1.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Digital Camera</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Willie Findit</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">10 Jul
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$8.654.4</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-warning-transparent rounded-pill text-warning p-2 px-3"
                                    >Pending</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #98765345</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/11.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Earphones</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Addie Minstra</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">25 Jun
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$7,34,9768</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-warning-transparent rounded-pill text-warning p-2 px-3"
                                    >Pending</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #67546577</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/2.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Shoes</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Laura Biding</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">22 Feb
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$7.76.654</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-warning-transparent rounded-pill text-warning p-2 px-3"
                                    >Pending</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div id="tab8" class="tab-pane">
                        <div class="table-responsive">
                          <table
                            class="table table-bordered text-nowrap mb-0"
                          >
                            <thead class="border-top">
                              <tr>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 5%;"
                                >Tracking Id
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Product
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Customer
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Date
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Amount
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                >
                                  Payment Mode
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 10%;"
                                >Status
                                </th>
                                <th
                                  class="bg-transparent border-bottom-0"
                                  style="width: 5%;"
                                >Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #98765490</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/10.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Headsets</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cherry Blossom</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">30 Aug
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$6.721.5</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-danger-transparent rounded-pill text-danger p-2 px-3"
                                    >Cancelled</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #76348798</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/12.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Flower Pot</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Simon Sais</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">15 Nov
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$35,7863</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-danger-transparent rounded-pill text-danger p-2 px-3"
                                    >Cancelled</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #23986456</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/4.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Pen Drive</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Manny Jah</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">27 Jan
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$5,89,6437</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-danger-transparent rounded-pill text-danger p-2 px-3"
                                    >Cancelled</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #87456325</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/8.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        New Bowl</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Florinda Carasco</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">19 Sep
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$17.98</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Online Payment</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-danger-transparent rounded-pill text-danger p-2 px-3"
                                    >Cancelled</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #65783926</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/6.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Leather Watch</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Ivan Notheridiya</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">06 Oct
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$8.654.4</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-danger-transparent rounded-pill text-danger p-2 px-3"
                                    >Cancelled</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                              <tr class="border-bottom">
                                <td class="text-center">
                                  <div class="mt-0 mt-sm-2 d-block">
                                    <h6
                                      class="mb-0 fs-14 fw-semibold"
                                    >
                                      #34654895</h6>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      class="avatar bradius"
                                      style="background-image: url(@/assets/images/orders/1.jpg)"
                                    />
                                    <div
                                      class="ms-3 mt-0 mt-sm-2 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Digital Camera</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Willie Findit</h6>
                                    </div>
                                  </div>
                                </td>
                                <td><span class="mt-sm-2 d-block">10 Jul
                                  2021</span></td>
                                <td><span
                                  class="fw-semibold mt-sm-2 d-block"
                                >$8.654.4</span>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <div
                                      class="mt-0 mt-sm-3 d-block"
                                    >
                                      <h6
                                        class="mb-0 fs-14 fw-semibold"
                                      >
                                        Cash on Delivery</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="mt-sm-1 d-block">
                                    <span
                                      class="badge bg-danger-transparent rounded-pill text-danger p-2 px-3"
                                    >Cancelled</span>
                                  </div>
                                </td>
                                <td>
                                  <div class="g-2">
                                    <a
                                      class="btn text-primary btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Edit"
                                    ><span
                                      class="fe fe-edit fs-14"
                                    /></a>
                                    <a
                                      class="btn text-danger btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Delete"
                                    ><span
                                      class="fe fe-trash-2 fs-14"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->

    <el-dialog
      :show-close="false"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="rounded-dialog"
      :width="device === 'mobile'? '90%': '40%'"
    >
      <ads-detail :item="temp" @handleClose="handleClose" />
    </el-dialog>
  </div>
  <!-- CONTAINER END -->
</template>

<script>
import { mapGetters } from 'vuex'

window.jQuery = require('jquery')
var $ = window.jQuery
// require('@/assets/plugins/jvectormap/jquery.vmap')
require('jvectormap')
require('@/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en')
import LineChart from '@/components/charts/Line'
import PieChart from '@/components/charts/PieChart'
import Admin from '@/services/api/Admin'
import Ripple from '@/components/Ripple'
import AdsDetail from '@/components/AdsDetail'
import Utils from '@/services/api/Utils'
export default {
  name: 'AdminDashboard',
  components: { LineChart, PieChart, Ripple, AdsDetail },
  data() {
    return {
      osReports: {
        labels: ['Android OS', 'IOS', 'BlackBerry OS', 'Chrome OS', 'Harmony OS'],
        datasets: [{
          data: [50, 25, 10, 5, 10],
          backgroundColor: ['#6c5ffc', '#05c3fb', '#09ad95', '#1170e4', '#e82646']
        }]
      },
      operatorReports: {
        labels: ['GrameenPhone', 'Robi', 'Banglalink', 'Airtel', 'Teletalk'],
        datasets: [{
          data: [35, 25, 20, 15, 10],
          backgroundColor: ['#1170e4', '#e82646', '#e0a44b', '#ee379f', '#e82646']
        }]
      },
      dialogVisible: false,
      summary: {
        active_users: null,
        ads: null,
        advertisers: null,
        providers: null,
        plans: null,
        earnings: null
      },
      auditionReport: {},
      temp: {},
      latest_ads: [],
      countries: [],
      latest_users: []
    }
  },
  computed: {
    ...mapGetters([
      'is_admin',
      'device'
    ]),
    coverageCountries() {
      return this.countries.filter(c => c.has_coverage)
    }
  },
  created() {
    this.getAdminDashboard()
    this.getCountries()
  },
  mounted() {
  },
  methods: {
    getAdminDashboard() {
      Admin.adminDashboard().then(res => {
        this.summary = res.data.summary
        this.latest_ads = res.data.latest_ads
        this.latest_users = res.data.latest_users
        this.auditionReport = res.data.auditionReport
      })
    },
    initMap() {
      $('#world-map-markers1').vectorMap({
        map: 'world_mill_en',
        scaleColors: ['#6c5ffc', '#e82646', '#05c3fb'],

        normalizeFunction: 'polynomial',

        hoverOpacity: 0.7,

        hoverColor: false,

        regionStyle: {

          initial: {

            fill: '#edf0f5'
          }
        },
        markerStyle: {
          initial: {
            r: 6,
            'fill': '#6c5ffc',
            'fill-opacity': 0.9,
            'stroke': '#fff',
            'stroke-width': 9,
            'stroke-opacity': 0.2
          },

          hover: {
            'stroke': '#fff',
            'fill-opacity': 1,
            'stroke-width': 1.5
          }
        },
        backgroundColor: 'transparent',
        markers: this.coverageCountries
      })
      console.log('this.coverageCountries', this.coverageCountries)
    },
    getCountries() {
      Utils.getCountries().then(res => {
        this.countries = res.data.countries
        this.initMap()
      })
    },
    handleDialog(item) {
      console.log('item ', item.audio)
      this.resetTemp()
      this.temp = item
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
      this.resetTemp()
    },
    resetTemp() {
      this.temp = {}
    },

  }
}
</script>
