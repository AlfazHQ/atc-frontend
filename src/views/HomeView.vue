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
                    <h6 class="">Total Users</h6>
                    <h2 class="mb-0 number-font">44,278</h2>
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
                    <h2 class="mb-0 number-font">67,987</h2>
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
                    <h6 class="">Total Advertiser</h6>
                    <h2 class="mb-0 number-font">$76,965</h2>
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
                    <h2 class="mb-0 number-font">$59,765</h2>
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
                    <h6 class="">Total Cost</h6>
                    <h2 class="mb-0 number-font">$59,765</h2>
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
                    <h6 class="">Total Profit</h6>
                    <h2 class="mb-0 number-font">$59,765</h2>
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
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Ads Reports</h3>
          </div>
          <div class="card-body">
            <div class="d-flex mx-auto text-center justify-content-center mb-4">
              <div class="d-flex text-center justify-content-center me-3"><span
                class="dot-label bg-primary my-auto"
              />Cost
              </div>
              <div class="d-flex text-center justify-content-center"><span
                class="dot-label bg-secondary my-auto"
              />Profit
              </div>
            </div>
            <div class="chartjs-wrapper-demo">
              <canvas id="transactions" class="chart-dropshadow" />
            </div>
          </div>
        </div>
      </div>
      <!-- COL END -->
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
        <div class="card overflow-hidden">
          <div class="card-body pb-0 bg-recentorder">
            <h3 class="card-title text-white">Recent Ads</h3>
            <div class="chartjs-wrapper-demo">
              <canvas id="recentorders" class="chart-dropshadow" />
            </div>
          </div>
          <div id="flotback-chart" class="flot-background" />
          <div class="card-body">
            <div class="d-flex mb-4 mt-3">
              <div
                class="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3"
              >
                <i class="fe fe-check" />
              </div>
              <div class="">
                <h6 class="mb-1 fw-semibold">KFC</h6>
                <p class="fw-normal fs-12">Ads Name </p>
              </div>
              <div class=" ms-auto my-auto">
                <p class="fw-bold fs-20"> $1,768 </p>
              </div>
            </div>
            <div class="d-flex">
              <div class="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                <i class="fe fe-x" />
              </div>
              <div class="">
                <h6 class="mb-1 fw-semibold">BFC</h6>
                <p class="fw-normal fs-12"> Ads 001</p>
              </div>
              <div class=" ms-auto my-auto">
                <p class="fw-bold fs-20 mb-0"> $3,675 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- COL END -->
    </div>
    <!-- ROW-2 END -->

    <!-- ROW-3 -->
    <div class="row">
      <div class="col-xl-4 col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title fw-semibold">Recent Ads</h4>
          </div>
          <div class="card-body pb-0">
            <ul class="task-list">
              <li class="d-sm-flex">
                <div>
                  <i class="task-icon bg-primary" />
                  <h6 class="fw-semibold">KFC<span
                    class="text-muted fs-11 mx-2 fw-normal"
                  >09 July 2021</span>
                  </h6>
                  <p class="text-muted fs-12">Ads 001</p>
                </div>
                <div class="ms-auto d-md-flex">
                  <a
                    href="javascript:void(0)"
                    class="text-muted me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                    aria-label="Edit"
                  ><span
                    class="fe fe-edit"
                  /></a>
                  <a href="javascript:void(0)" class="text-muted"><span
                    class="fe fe-trash-2"
                  /></a>
                </div>
              </li>
              <li class="d-sm-flex">
                <div>
                  <i class="task-icon bg-primary" />
                  <h6 class="fw-semibold">KFC<span
                    class="text-muted fs-11 mx-2 fw-normal"
                  >09 July 2021</span>
                  </h6>
                  <p class="text-muted fs-12">Ads 002</p>
                </div>
                <div class="ms-auto d-md-flex">
                  <a
                    href="javascript:void(0)"
                    class="text-muted me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                    aria-label="Edit"
                  ><span
                    class="fe fe-edit"
                  /></a>
                  <a href="javascript:void(0)" class="text-muted"><span
                    class="fe fe-trash-2"
                  /></a>
                </div>
              </li>
              <li class="d-sm-flex">
                <div>
                  <i class="task-icon bg-primary" />
                  <h6 class="fw-semibold">KFC<span
                    class="text-muted fs-11 mx-2 fw-normal"
                  >09 July 2021</span>
                  </h6>
                  <p class="text-muted fs-12">Ads 002</p>
                </div>
                <div class="ms-auto d-md-flex">
                  <a
                    href="javascript:void(0)"
                    class="text-muted me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                    aria-label="Edit"
                  ><span
                    class="fe fe-edit"
                  /></a>
                  <a href="javascript:void(0)" class="text-muted"><span
                    class="fe fe-trash-2"
                  /></a>
                </div>
              </li>
              <li class="d-sm-flex">
                <div>
                  <i class="task-icon bg-primary" />
                  <h6 class="fw-semibold">KFC<span
                    class="text-muted fs-11 mx-2 fw-normal"
                  >09 July 2021</span>
                  </h6>
                  <p class="text-muted fs-12">Ads 002</p>
                </div>
                <div class="ms-auto d-md-flex">
                  <a
                    href="javascript:void(0)"
                    class="text-muted me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                    aria-label="Edit"
                  ><span
                    class="fe fe-edit"
                  /></a>
                  <a href="javascript:void(0)" class="text-muted"><span
                    class="fe fe-trash-2"
                  /></a>
                </div>
              </li>
              <li class="d-sm-flex">
                <div>
                  <i class="task-icon bg-primary" />
                  <h6 class="fw-semibold">BFC<span
                    class="text-muted fs-11 mx-2 fw-normal"
                  >09 July 2021</span>
                  </h6>
                  <p class="text-muted fs-12">Ads 002</p>
                </div>
                <div class="ms-auto d-md-flex">
                  <a
                    href="javascript:void(0)"
                    class="text-muted me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                    aria-label="Edit"
                  ><span
                    class="fe fe-edit"
                  /></a>
                  <a href="javascript:void(0)" class="text-muted"><span
                    class="fe fe-trash-2"
                  /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card overflow-hidden">
          <div class="card-header">
            <div>
              <h3 class="card-title">Ads Report by Locations with Devices</h3>
            </div>
          </div>
          <div class="card-body p-0 mt-2">
            <div class="">
              <div id="world-map-markers1" class="worldh world-map h-250" />
            </div>
            <div class="table-responsive mt-2 text-center">
              <table class="table text-nowrap border-dashed mb-0">
                <thead>
                  <tr>
                    <th class="text-start">Country</th>
                    <th class="">Device</th>
                    <th class="">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-start p-4">Bangladesh</td>
                    <td class="p-4"><span
                      class="sales-icon text-primary mx-2 brround bg-primary-transparent p-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi
                                    bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg></span><span class="mobile">Mobiles</span>
                    </td>
                    <td class="p-4">22%</td>
                  </tr>
                  <tr>
                    <td class="text-start p-4">Bangladesh</td>
                    <td class="p-4"><span
                      class="sales-icon text-danger mx-2 brround bg-danger-transparent p-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-tablet
                                "
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                      />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg></span>Tablets
                    </td>
                    <td class="p-4">56%</td>
                  </tr>
                </tbody>
              </table>
              <!--end /table-->
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title fw-semibold">Browser Usage</h4>
          </div>
          <div class="card-body">
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
            <h3 class="card-title mb-0">Users</h3>
          </div>
          <div class="card-body pt-4">
            <div class="grid-margin">
              <div class="">
                <div class="panel panel-primary">
                  <div class="tab-menu-heading border-0 p-0">
                    <div class="tabs-menu1">
                      <!-- Tabs -->
                      <ul class="nav panel-tabs product-sale">
                        <li><a
                          href="#tab5"
                          class="active"
                          data-bs-toggle="tab"
                        >All users</a></li>
                      </ul>
                    </div>
                  </div>
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
                                  Income
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
                                      #98765490</h6>
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
                                      #98765490</h6>
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
                                      #98765490</h6>
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
                                      #98765490</h6>
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
                                      #98765490</h6>
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
                                      #98765490</h6>
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
  </div>
  <!-- CONTAINER END -->
</template>

<script>

export default {
  name: 'HomeView'
}
</script>
