(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/alert/alert.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/alert/alert.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error-logs-table/error-logs-table.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error-logs-table/error-logs-table.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">Error Logs <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\"> <i\n            class=\"mdi mdi-refresh\" (click)=\"getErrorLogs()\"></i></span> </h4>\n<div class=\"table-responsive\">\n    <table class=\"table table-header-dark\">\n        <thead>\n            <tr>\n                <th width=\"15%\">FirstTime</th>\n                <th width=\"15%\">LastTime</th>\n                <th width=\"5%\">Count</th>\n                <th width=\"15%\">Service</th>\n                <th>Message</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"!errors || isLoading\">\n            <tr>\n                <td colspan=\"5\" class=\"text-center\">\n                    <img src=\"assets/images/loading.svg\">\n                </td>\n            </tr>\n        </tbody>\n        <tbody *ngIf=\"!isLoading && (!errors || errors.length == 0)\">\n            <tr>\n                <td colspan=\"5\" class=\"text-center\">\n                    No error found.\n                </td>\n            </tr>\n        </tbody>\n        <tbody *ngIf=\"!isLoading && errors && errors.length > 0\">\n            <tr\n                *ngFor=\"let err of errors | slice: (pageInfo.pageNumber-1) * pageInfo.pageSize : (pageInfo.pageNumber-1) * pageInfo.pageSize + pageInfo.pageSize\">\n                <td>\n                    {{err.FirstTime | date: 'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                    {{err.LastTime | date: 'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                    {{err.Count}}\n                </td>\n                <td>\n                    {{err.Service}}\n                </td>\n                <td>\n                    {{err.Message}}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<ngb-pagination *ngIf=\"errors && errors.length > pageInfo.pageSize\" [collectionSize]=\"errors.length\" [(page)]=\"pageInfo.pageNumber\"\n                        [maxSize]=\"10\" [pageSize]=\"pageInfo.pageSize\"\n                        class=\"mt-2 d-flex justify-content-end pagination-danger\"></ngb-pagination>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"d-sm-flex justify-content-center justify-content-sm-between\">\n      <span class=\"text-muted text-center text-sm-left d-block d-sm-inline-block\">Copyright © 2019 <a href=\"https://sportcast.com.au/\"\n          target=\"_blank\">Sportcast</a>. All rights reserved.</span>\n      <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\">sportcast.com.au</span>\n    </div>\n  </footer>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\r\n  \r\n  <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\r\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" (click)=\"toggleOffcanvas()\">\r\n        <span class=\"mdi mdi-menu\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand brand-logo\" href=\"/\">\r\n      <img src=\"assets/images/sportscastlogo.png\" alt=\"logo\" />\r\n    </a>\r\n    <a class=\"navbar-brand brand-logo-mini\" href=\"/\">\r\n      <img src=\"assets/images/sportscastlogo-mini.png\" alt=\"logo\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\r\n      <button class=\"navbar-toggler align-self-center\" type=\"button\" (click)=\"toggleOffcanvas()\">\r\n        <span class=\"mdi mdi-menu\"></span>\r\n      </button>\r\n    <div class=\"search-field d-none d-md-block\">\r\n      <form class=\"d-flex align-items-stretch h-100\" action=\"#\">\r\n        <div class=\"input-group align-items-center\">\r\n          <div class=\"input-group-prepend bg-transparent\">\r\n            <i class=\"input-group-text border-0 mdi mdi-magnify\"></i>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control bg-transparent border-0\" placeholder=\"Search\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ul class=\"navbar-nav navbar-nav-right\">\r\n      <!-- <li class=\"nav-item nav-profile dropdown\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" ngbDropdownToggle>\r\n          <div class=\"nav-profile-img\">\r\n            <img src=\"assets/images/faces/face1.jpg\" alt=\"image\">\r\n            <span class=\"availability-status online\"></span>\r\n          </div>\r\n          <div class=\"nav-profile-text\">\r\n            <p class=\"mb-1 text-black\">SportCast</p>\r\n          </div>\r\n        </a>\r\n        <div class=\"dropdown-menu navbar-dropdown\" ngbDropdownMenu aria-labelledby=\"profileDropdown\">\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <i class=\"mdi mdi-logout mr-2 text-primary\"></i>\r\n            Signout\r\n          </a>\r\n        </div>\r\n      </li> -->\r\n      <li class=\"nav-item nav-logout d-none d-lg-block\">\r\n        <a class=\"nav-link\" href=\"#\">\r\n          <i class=\"mdi mdi-power\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/peak-requests-chart/peak-requests-chart.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/peak-requests-chart/peak-requests-chart.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center p-5\" *ngIf=\"isLoading\">\n    <img src=\"assets/images/loading.svg\">\n</div>\n<div id=\"peak-request-chart\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/process-time-details-table/process-time-details-table.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/process-time-details-table/process-time-details-table.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">Process Time Details <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\"> <i\n            class=\"mdi mdi-refresh\" (click)=\"getProcessTimeDetails()\"></i></span> </h4>\n<div class=\"table-responsive\">\n    <table class=\"table table-header-dark\">\n        <thead>\n            <tr>\n                <th width=\"auto\">Client</th>\n                <th width=\"auto\">&lt; 50</th>\n                <th width=\"auto\">&lt; 100</th>\n                <th width=\"auto\">&lt; 200</th>\n                <th width=\"auto\">&lt; 300</th>\n                <th width=\"auto\">&lt; 400</th>\n                <th width=\"auto\">&lt; 500</th>\n                <th width=\"auto\">500 To 1000</th>\n                <th width=\"auto\">1k To 2k</th>\n                <th width=\"auto\">2k To 3k</th>\n                <th width=\"auto\">3k To 5k</th>\n                <th width=\"auto\">5k To 10k</th>\n                <th width=\"auto\">10k To 20k</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"!details || isLoading\">\n            <tr>\n                <td colspan=\"13\" class=\"text-center\">\n                    <img src=\"assets/images/loading.svg\">\n                </td>\n            </tr>\n        </tbody>\n        <tbody *ngIf=\"!isLoading && (!details || details.length == 0)\">\n            <tr>\n                <td colspan=\"13\" class=\"text-center\">\n                    No slips found.\n                </td>\n            </tr>\n        </tbody>\n        <tbody *ngIf=\"!isLoading && details && details.length > 0\">\n            <tr\n                *ngFor=\"let dt of details | slice: (pageInfo.pageNumber-1) * pageInfo.pageSize : (pageInfo.pageNumber-1) * pageInfo.pageSize + pageInfo.pageSize\">\n                <td>{{dt.Client}}</td>\n                <td>{{dt.LessThan50 | number}}</td>\n                <td>{{dt.LessThan100 | number}}</td>\n                <td>{{dt.LessThan200 | number}}</td>\n                <td>{{dt.LessThan300 | number}}</td>\n                <td>{{dt.LessThan400 | number}}</td>\n                <td>{{dt.LessThan500 | number}}</td>\n                <td>{{dt['500To1000'] | number}}</td>\n                <td>{{dt['1kTo2k'] | number}}</td>\n                <td>{{dt['2kTo3k'] | number}}</td>\n                <td>{{dt['3kTo5k'] | number}}</td>\n                <td>{{dt['5kTo10k'] | number}}</td>\n                <td>{{dt['10kTo20k'] | number}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<ngb-pagination *ngIf=\"details && details.length > pageInfo.pageSize\" [collectionSize]=\"details.length\"\n    [(page)]=\"pageInfo.pageNumber\" [maxSize]=\"10\" [pageSize]=\"pageInfo.pageSize\"\n    class=\"mt-2 d-flex justify-content-end pagination-danger\"></ngb-pagination>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center p-5\" *ngIf=\"isLoading\">\n    <img src=\"assets/images/loading.svg\">\n</div>\n<div id=\"request-slip-save-throughput-chart\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center p-5\" *ngIf=\"isLoading\">\r\n    <img src=\"assets/images/loading.svg\">\r\n</div>\r\n<div id=\"response-time-vs-throughput-chart\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar sidebar-offcanvas animated fadeInLeft\" id=\"sidebar\">\r\n  <ul class=\"nav\">\r\n    <li class=\"nav-item\" (click)=\"goTo('live-activity-dashboard')\">\r\n      <a class=\"nav-link\">\r\n        <span class=\"menu-title\">Live Activity Dashboard</span>\r\n        <i class=\"mdi mdi-chart-timeline menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n    <!-- <li class=\"nav-item\" data-toggle=\"collapse\" href=\"#twenty-four-hours-sub-menu\" aria-expanded=\"true\">\r\n      <a class=\"nav-link active\">\r\n        <span class=\"menu-title\">24h Activity Dashboard</span>\r\n        <i class=\"mdi mdi-chart-line menu-icon\"></i>\r\n      </a>\r\n    </li> -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"collapse\" href=\"#twenty-four-hours-sub-menu\" aria-expanded=\"true\" aria-controls=\"twenty-four-hours-sub-menu\">\r\n          <span class=\"menu-title\">24h Activity Dashboard</span>\r\n          <i class=\"menu-arrow\"></i>\r\n          <i class=\"mdi mdi-chart-line menu-icon\"></i>\r\n        </a>\r\n        <div class=\"collapse show\" id=\"twenty-four-hours-sub-menu\">\r\n            <ul class=\"nav flex-column sub-menu\">\r\n              <!-- <li class=\"nav-item\"> <a class=\"nav-link\">Dashboard</a></li> -->\r\n              <li class=\"nav-item\" (click)=\"goTo('24h-activity-dashboard/error-logs')\"> <a class=\"nav-link\">Error Logs</a></li>\r\n              <li class=\"nav-item\" (click)=\"goTo('24h-activity-dashboard/peak-requests')\"> <a class=\"nav-link\">Peak Requests</a></li>\r\n              <li class=\"nav-item\" (click)=\"goTo('24h-activity-dashboard/process-time-details')\"> <a class=\"nav-link\">Process Time Details</a></li>              \r\n              <li class=\"nav-item\" (click)=\"goTo('24h-activity-dashboard/response-time-vs-throughput')\"> <a class=\"nav-link\">Response Time vs Throughput</a></li>\r\n              <li class=\"nav-item\" (click)=\"goTo('24h-activity-dashboard/request-and-slip-save-throughput')\"> <a class=\"nav-link\">Request And Slip Save Throughput</a></li>\r\n              <li class=\"nav-item\" (click)=\"goTo('24h-activity-dashboard/slips-per-client')\"> <a class=\"nav-link\">Slips Per Client</a></li>\r\n            </ul>\r\n          </div>\r\n      </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\">\r\n        <span class=\"menu-title\">Daily Report</span>\r\n        <i class=\"mdi mdi-chart-pie menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\">\r\n        <span class=\"menu-title\">Weekly Report</span>\r\n        <i class=\"mdi mdi-chart-bar menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slips-per-client-table/slips-per-client-table.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slips-per-client-table/slips-per-client-table.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">Slips <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\"> <i\n    class=\"mdi mdi-refresh\" (click)=\"getSlips()\"></i></span> </h4>\n<div class=\"table-responsive\">\n<table class=\"table table table-striped table-bordered table-header-dark\">\n<thead>\n    <tr>\n        <th width=\"auto\">Client</th>\n        <th width=\"33%\">Avg Slips Per Minutes</th>\n        <th width=\"33%\">Avg Price Requests Per Second</th>\n    </tr>\n</thead>\n<tbody *ngIf=\"!slips || isLoading\">\n    <tr>\n        <td colspan=\"3\" class=\"text-center\">\n            <img src=\"assets/images/loading.svg\">\n        </td>\n    </tr>\n</tbody>\n<tbody *ngIf=\"!isLoading && (!slips || slips.length == 0)\">\n    <tr>\n        <td colspan=\"3\" class=\"text-center\">\n            No slips found.\n        </td>\n    </tr>\n</tbody>\n<tbody *ngIf=\"!isLoading && slips && slips.length > 0\">\n    <tr\n        *ngFor=\"let sl of slips | slice: (pageInfo.pageNumber-1) * pageInfo.pageSize : (pageInfo.pageNumber-1) * pageInfo.pageSize + pageInfo.pageSize\">\n        <td>\n            {{sl.Client}}\n        </td>\n        <td>\n            {{sl.AvgSlipsPerMinutes}}\n        </td>\n        <td>\n            {{sl.AvgPriceRequestsPerSecond}}\n        </td>\n    </tr>\n</tbody>\n</table>\n</div>\n\n<ngb-pagination *ngIf=\"slips && slips.length > pageInfo.pageSize\" [collectionSize]=\"slips.length\" [(page)]=\"pageInfo.pageNumber\"\n                [maxSize]=\"10\" [pageSize]=\"pageInfo.pageSize\"\n                class=\"mt-2 d-flex justify-content-end pagination-danger\"></ngb-pagination>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/anonymous/anonymous.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/anonymous/anonymous.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/auth/auth.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/auth/auth.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"container-fluid page-body-wrapper\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"main-panel\">\r\n            <div class=\"content-wrapper\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/login/login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentication/login/login.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\r\n    <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\r\n        <div class=\"content-wrapper d-flex align-items-center auth\">\r\n            <div class=\"row w-100\">\r\n                <div class=\"col-lg-4 mx-auto\">\r\n                    <div class=\"auth-form-light text-left p-5\">\r\n                        <div class=\"brand-logo mb-5\">\r\n                            <img src=\"assets/images/logo_mrec2.svg\">\r\n                        </div>\r\n                        <h4>Hello! Welcome to Data Factory Reporting</h4>\r\n                        <h6 class=\"font-weight-light\">Sign in to continue.</h6>\r\n                        <form class=\"pt-3\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"email\" class=\"form-control form-control-lg\" id=\"exampleInputEmail1\"\r\n                                    placeholder=\"Username\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" class=\"form-control form-control-lg\" id=\"exampleInputPassword1\"\r\n                                    placeholder=\"Password\">\r\n                            </div>\r\n                            <div class=\"mt-3\">\r\n                                <a class=\"btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn\"\r\n                                    href=\"/\">SIGN IN</a>\r\n                            </div>\r\n                            \r\n                            <div class=\"my-2 d-flex justify-content-between align-items-center\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input class=\"custom-control-input\" type=\"checkbox\" id=\"rmmbr_1\">\r\n                                    <label class=\"custom-control-label\" for=\"rmmbr_1\">Keep me signed in</label>\r\n                                </div>\r\n                                <!-- <a class=\"auth-link text-black\">Forgot password?</a> -->\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- content-wrapper ends -->\r\n    </div>\r\n    <!-- page-body-wrapper ends -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/live-dashboard/live-dashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/live-dashboard/live-dashboard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n    <h3 class=\"page-title\">\r\n        <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\r\n            <i class=\"mdi mdi-home\"></i>\r\n        </span>\r\n        Live Dashboard\r\n    </h3>\r\n    <nav aria-label=\"breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">\r\n                <span></span>Overview\r\n                <i class=\"mdi mdi-alert-circle-outline icon-sm text-primary align-middle\"></i>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</div>\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-md-4 stretch-card grid-margin\">\r\n        <div class=\"card bg-gradient-danger card-img-holder text-white\">\r\n            <div class=\"card-body\">\r\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                <h4 class=\"font-weight-normal mb-3\">Weekly Sales\r\n                    <i class=\"mdi mdi-chart-line mdi-24px float-right\"></i>\r\n                </h4>\r\n                <h2 class=\"mb-5\">$ 15,0000</h2>\r\n                <h6 class=\"card-text\">Increased by 60%</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4 stretch-card grid-margin\">\r\n        <div class=\"card bg-gradient-info card-img-holder text-white\">\r\n            <div class=\"card-body\">\r\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                <h4 class=\"font-weight-normal mb-3\">Weekly Orders\r\n                    <i class=\"mdi mdi-bookmark-outline mdi-24px float-right\"></i>\r\n                </h4>\r\n                <h2 class=\"mb-5\">45,6334</h2>\r\n                <h6 class=\"card-text\">Decreased by 10%</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4 stretch-card grid-margin\">\r\n        <div class=\"card bg-gradient-success card-img-holder text-white\">\r\n            <div class=\"card-body\">\r\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                <h4 class=\"font-weight-normal mb-3\">Visitors Online\r\n                    <i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\r\n                </h4>\r\n                <h2 class=\"mb-5\">95,5741</h2>\r\n                <h6 class=\"card-text\">Increased by 5%</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12 grid-margin\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Recent Tickets</h4>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Assignee\r\n                                </th>\r\n                                <th>\r\n                                    Subject\r\n                                </th>\r\n                                <th>\r\n                                    Status\r\n                                </th>\r\n                                <th>\r\n                                    Last Update\r\n                                </th>\r\n                                <th>\r\n                                    Tracking ID\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    <img src=\"assets/images/faces/face1.jpg\" class=\"mr-2\" alt=\"image\">\r\n                                    David Grey\r\n                                </td>\r\n                                <td>\r\n                                    Fund is not recieved\r\n                                </td>\r\n                                <td>\r\n                                    <label class=\"badge badge-gradient-success\">DONE</label>\r\n                                </td>\r\n                                <td>\r\n                                    Dec 5, 2017\r\n                                </td>\r\n                                <td>\r\n                                    WD-12345\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <img src=\"assets/images/faces/face2.jpg\" class=\"mr-2\" alt=\"image\">\r\n                                    Stella Johnson\r\n                                </td>\r\n                                <td>\r\n                                    High loading time\r\n                                </td>\r\n                                <td>\r\n                                    <label class=\"badge badge-gradient-warning\">PROGRESS</label>\r\n                                </td>\r\n                                <td>\r\n                                    Dec 12, 2017\r\n                                </td>\r\n                                <td>\r\n                                    WD-12346\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <img src=\"assets/images/faces/face3.jpg\" class=\"mr-2\" alt=\"image\">\r\n                                    Marina Michel\r\n                                </td>\r\n                                <td>\r\n                                    Website down for one week\r\n                                </td>\r\n                                <td>\r\n                                    <label class=\"badge badge-gradient-info\">ON HOLD</label>\r\n                                </td>\r\n                                <td>\r\n                                    Dec 16, 2017\r\n                                </td>\r\n                                <td>\r\n                                    WD-12347\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <img src=\"assets/images/faces/face4.jpg\" class=\"mr-2\" alt=\"image\">\r\n                                    John Doe\r\n                                </td>\r\n                                <td>\r\n                                    Loosing control on server\r\n                                </td>\r\n                                <td>\r\n                                    <label class=\"badge badge-gradient-danger\">REJECTED</label>\r\n                                </td>\r\n                                <td>\r\n                                    Dec 3, 2017\r\n                                </td>\r\n                                <td>\r\n                                    WD-12348\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-7 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Project Status</h4>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    #\r\n                                </th>\r\n                                <th>\r\n                                    Name\r\n                                </th>\r\n                                <th>\r\n                                    Due Date\r\n                                </th>\r\n                                <th>\r\n                                    Progress\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    1\r\n                                </td>\r\n                                <td>\r\n                                    Herman Beck\r\n                                </td>\r\n                                <td>\r\n                                    May 15, 2015\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"progress\">\r\n                                        <div class=\"progress-bar bg-gradient-success\" role=\"progressbar\"\r\n                                            style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    2\r\n                                </td>\r\n                                <td>\r\n                                    Messsy Adam\r\n                                </td>\r\n                                <td>\r\n                                    Jul 01, 2015\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"progress\">\r\n                                        <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\"\r\n                                            style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    3\r\n                                </td>\r\n                                <td>\r\n                                    John Richards\r\n                                </td>\r\n                                <td>\r\n                                    Apr 12, 2015\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"progress\">\r\n                                        <div class=\"progress-bar bg-gradient-warning\" role=\"progressbar\"\r\n                                            style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    4\r\n                                </td>\r\n                                <td>\r\n                                    Peter Meggik\r\n                                </td>\r\n                                <td>\r\n                                    May 15, 2015\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"progress\">\r\n                                        <div class=\"progress-bar bg-gradient-primary\" role=\"progressbar\"\r\n                                            style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    5\r\n                                </td>\r\n                                <td>\r\n                                    Edward\r\n                                </td>\r\n                                <td>\r\n                                    May 03, 2015\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"progress\">\r\n                                        <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\"\r\n                                            style=\"width: 35%\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    5\r\n                                </td>\r\n                                <td>\r\n                                    Ronald\r\n                                </td>\r\n                                <td>\r\n                                    Jun 05, 2015\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"progress\">\r\n                                        <div class=\"progress-bar bg-gradient-info\" role=\"progressbar\" style=\"width: 65%\"\r\n                                            aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-5 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Recent Updates</h4>\r\n                <div class=\"d-flex\">\r\n                    <div class=\"d-flex align-items-center mr-4 text-muted font-weight-light\">\r\n                        <i class=\"mdi mdi-account-outline icon-sm mr-2\"></i>\r\n                        <span>jack Menqu</span>\r\n                    </div>\r\n                    <div class=\"d-flex align-items-center text-muted font-weight-light\">\r\n                        <i class=\"mdi mdi-clock icon-sm mr-2\"></i>\r\n                        <span>October 3rd, 2018</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-6 pr-1\">\r\n                        <img src=\"assets/images/dashboard/img_1.jpg\" class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\r\n                        <img src=\"assets/images/dashboard/img_4.jpg\" class=\"mw-100 w-100 rounded\" alt=\"image\">\r\n                    </div>\r\n                    <div class=\"col-6 pl-1\">\r\n                        <img src=\"assets/images/dashboard/img_2.jpg\" class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\r\n                        <img src=\"assets/images/dashboard/img_3.jpg\" class=\"mw-100 w-100 rounded\" alt=\"image\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex mt-5 align-items-top\">\r\n                    <img src=\"assets/images/faces/face3.jpg\" class=\"img-sm rounded-circle mr-3\" alt=\"image\">\r\n                    <div class=\"mb-0 flex-grow\">\r\n                        <h5 class=\"mr-2 mb-2\">School Website - Authentication Module.</h5>\r\n                        <p class=\"mb-0 font-weight-light\">It is a long established fact that a reader will be distracted\r\n                            by the readable\r\n                            content of a page.</p>\r\n                    </div>\r\n                    <div class=\"ml-auto\">\r\n                        <i class=\"mdi mdi-heart-outline text-muted\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n            <i class=\"mdi mdi-home\"></i>\n        </span>\n        24h Activity Dashboard\n    </h3>\n    <nav aria-label=\"breadcrumb\">\n        <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                Error Logs\n            </li>\n            <li class=\"breadcrumb-item\" aria-current=\"page\">\n                <a (click)=\"goTo('24h-activity-dashboard')\">24h Activity Dashboard</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n\n<div class=\"card\">\n    <div class=\"card-body\">\n        <app-error-logs-table></app-error-logs-table>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n            <i class=\"mdi mdi-home\"></i>\n        </span>\n        24h Activity Dashboard\n    </h3>\n    <nav aria-label=\"breadcrumb\">\n        <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                Peak Requests\n            </li>\n            <li class=\"breadcrumb-item\" aria-current=\"page\">\n                <a (click)=\"goTo('24h-activity-dashboard')\">24h Activity Dashboard</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 grid-margin stretch-card\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-peak-requests-chart (onDataChanged)=\"onDataChanged($event)\"></app-peak-requests-chart>\n                <div class=\"table-responsive\">\n                        <table class=\"table table-header-dark\">\n                            <thead>\n                                <tr>\n                                    <th>Client</th>\n                                    <th>Slip Count</th>\n                                    <th>Price Request Count</th>\n                                </tr>\n                            </thead>\n                            <tbody *ngIf=\"!data || isLoading\">\n                                <tr>\n                                    <td colspan=\"3\" class=\"text-center\">\n                                        <img src=\"assets/images/loading.svg\">\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tbody *ngIf=\"!isLoading && (!data || data.length == 0)\">\n                                <tr>\n                                    <td colspan=\"3\" class=\"text-center\">\n                                        No data.\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tbody *ngIf=\"!isLoading && data && data.length > 0\">\n                                <tr\n                                    *ngFor=\"let d of data | slice: (pageInfo.pageNumber-1) * pageInfo.pageSize : (pageInfo.pageNumber-1) * pageInfo.pageSize + pageInfo.pageSize\">\n                                    <td>\n                                        {{d.Client}}\n                                    </td>\n                                    <td>\n                                        {{d.SlipCount | number}}\n                                    </td>\n                                    <td>\n                                        {{d.PriceRequestCount | number}}\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n    \n                    <ngb-pagination *ngIf=\"data && data.length > pageInfo.pageSize\" [collectionSize]=\"data.length\"\n                        [(page)]=\"pageInfo.pageNumber\" [maxSize]=\"10\" [pageSize]=\"pageInfo.pageSize\"\n                        class=\"mt-2 d-flex justify-content-end pagination-danger\"></ngb-pagination>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n        <h3 class=\"page-title\">\n            <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n                <i class=\"mdi mdi-home\"></i>\n            </span>\n            24h Activity Dashboard\n        </h3>\n        <nav aria-label=\"breadcrumb\">\n            <ul class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                    Process Time Details\n                </li>\n                <li class=\"breadcrumb-item\" aria-current=\"page\">\n                    <a (click)=\"goTo('24h-activity-dashboard')\">24h Activity Dashboard</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 grid-margin\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <app-process-time-details-table></app-process-time-details-table>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n        <h3 class=\"page-title\">\n            <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n                <i class=\"mdi mdi-home\"></i>\n            </span>\n            24h Activity Dashboard\n        </h3>\n        <nav aria-label=\"breadcrumb\">\n            <ul class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                    Request and Slip Save Throughput\n                </li>\n                <li class=\"breadcrumb-item\" aria-current=\"page\">\n                    <a (click)=\"goTo('24h-activity-dashboard')\">24h Activity Dashboard</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12 grid-margin\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <app-request-slip-save-throughput-chart (onDataChanged)=\"onDataChanged($event)\"></app-request-slip-save-throughput-chart>\n    \n                    <div class=\"table-responsive\">\n                            <table class=\"table table-header-dark\">\n                                <thead>\n                                    <tr>\n                                        <th>Timestamp</th>\n                                        <th>Price Request Count</th>\n                                        <!-- <th>Price Request Speed Ms Avg</th> -->\n                                        <!-- <th>Price Request Speed Ms Min</th> -->\n                                        <!-- <th>Price Request Speed Ms Max</th> -->\n                                        <th>Slip SaveC ount</th>\n                                        <!-- <th>Slip Save Speed Ms Avg</th>\n                                        <th>Slip Save Speed Ms Min</th>\n                                        <th>Slip Save Speed Ms Max</th> -->\n                                    </tr>\n                                </thead>\n                                <tbody *ngIf=\"isLoading\">\n                                    <tr>\n                                        <td colspan=\"3\" class=\"text-center\">\n                                            <img src=\"assets/images/loading.svg\">\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tbody *ngIf=\"!isLoading && (!data || data.length == 0)\">\n                                    <tr>\n                                        <td colspan=\"3\" class=\"text-center\">\n                                            No data.\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tbody *ngIf=\"!isLoading && data && data.length > 0\">\n                                    <tr\n                                        *ngFor=\"let d of data | slice: (pageInfo.pageNumber-1) * pageInfo.pageSize : (pageInfo.pageNumber-1) * pageInfo.pageSize + pageInfo.pageSize\">\n                                        <td>{{d.Timestamp}}</td>\n                                        <td>{{d.PriceRequestCount}}</td>\n                                        <!-- <td>{{d.PriceRequestSpeedMsAvg}}</td>\n                                        <td>{{d.PriceRequestSpeedMsMin}}</td>\n                                        <td>{{d.PriceRequestSpeedMsMax}}</td> -->\n                                        <td>{{d.SlipSaveCount}}</td>\n                                        <!-- <td>{{d.SlipSaveSpeedMsAvg}}</td>\n                                        <td>{{d.SlipSaveSpeedMsMin}}</td>\n                                        <td>{{d.SlipSaveSpeedMsMax}}</td>\n                                    </tr> -->\n                                </tbody>\n                            </table>\n                        </div>\n        \n                        <ngb-pagination *ngIf=\"data && data.length > pageInfo.pageSize\" [collectionSize]=\"data.length\"\n                            [(page)]=\"pageInfo.pageNumber\" [maxSize]=\"10\" [pageSize]=\"pageInfo.pageSize\"\n                            class=\"mt-2 d-flex justify-content-end pagination-danger\"></ngb-pagination>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n            <i class=\"mdi mdi-home\"></i>\n        </span>\n        24h Activity Dashboard\n    </h3>\n    <nav aria-label=\"breadcrumb\">\n        <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                Response Time vs Throughput\n            </li>\n            <li class=\"breadcrumb-item\" aria-current=\"page\">\n                <a (click)=\"goTo('24h-activity-dashboard')\">24h Activity Dashboard</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-response-time-vs-throughput-chart (onDataChanged)=\"onDataChanged($event)\"></app-response-time-vs-throughput-chart>\n\n                <div class=\"table-responsive\">\n                        <table class=\"table table-header-dark\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\">Minute</th>\n                                    <th class=\"text-center\">Average (ms) Price Response</th>\n                                    <th class=\"text-center\">Total Price Requests</th>\n                                </tr>\n                            </thead>\n                            <tbody *ngIf=\"!data || isLoading\">\n                                <tr>\n                                    <td colspan=\"3\" class=\"text-center\">\n                                        <img src=\"assets/images/loading.svg\">\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tbody *ngIf=\"!isLoading && (!data || data.length == 0)\">\n                                <tr>\n                                    <td colspan=\"3\" class=\"text-center\">\n                                        No data.\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tbody *ngIf=\"!isLoading && data && data.length > 0\">\n                                <tr\n                                    *ngFor=\"let d of data | slice: (pageInfo.pageNumber-1) * pageInfo.pageSize : (pageInfo.pageNumber-1) * pageInfo.pageSize + pageInfo.pageSize\">\n                                    <td>\n                                        {{d.Minute}}\n                                    </td>\n                                    <td>\n                                        {{d.AverageMsPriceResponse | number}}\n                                    </td>\n                                    <td>\n                                        {{d.TotalPriceRequests | number}}\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n    \n                    <ngb-pagination *ngIf=\"data && data.length > pageInfo.pageSize\" [collectionSize]=\"data.length\"\n                        [(page)]=\"pageInfo.pageNumber\" [maxSize]=\"10\" [pageSize]=\"pageInfo.pageSize\"\n                        class=\"mt-2 d-flex justify-content-end pagination-danger\"></ngb-pagination>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n        <h3 class=\"page-title\">\n            <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n                <i class=\"mdi mdi-home\"></i>\n            </span>\n            24h Activity Dashboard\n        </h3>\n        <nav aria-label=\"breadcrumb\">\n            <ul class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                    Slips Per Client\n                </li>\n                <li class=\"breadcrumb-item\" aria-current=\"page\">\n                    <a (click)=\"goTo('24h-activity-dashboard')\">24h Activity Dashboard</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-body\">\n            <app-slips-per-client-table></app-slips-per-client-table>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n            <i class=\"mdi mdi-home\"></i>\n        </span>\n        24h Activity Dashboard\n    </h3>\n    <!-- <nav aria-label=\"breadcrumb\">\n        <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                <span></span>Overview\n                <i class=\"mdi mdi-alert-circle-outline icon-sm text-primary align-middle\"></i>\n            </li>\n        </ul>\n    </nav> -->\n</div>\n<div class=\"row\">\n    <div class=\"col-md-4 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-danger card-img-holder text-white\">\n            <div class=\"card-body\">\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                <h4 class=\"font-weight-normal mb-3\">Clients\n                    <i class=\"mdi mdi-chart-line mdi-24px float-right\"></i>\n                </h4>\n                <h2 class=\"mb-5\">15,0000</h2>\n                <!-- <h6 class=\"card-text\">Increased by 60%</h6> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-info card-img-holder text-white\">\n            <div class=\"card-body\">\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                <h4 class=\"font-weight-normal mb-3\">Errors\n                    <i class=\"mdi mdi-bookmark-outline mdi-24px float-right\"></i>\n                </h4>\n                <h2 class=\"mb-5\">45,6334</h2>\n                <h6 class=\"card-text\">Last error: 10 Aug 2019 02:02:00 PM</h6>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-success card-img-holder text-white\">\n            <div class=\"card-body\">\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                <h4 class=\"font-weight-normal mb-3\">Requests\n                    <i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\n                </h4>\n                <h2 class=\"mb-5\">95,5741</h2>\n                <h6 class=\"card-text\">Last request: 14 Aug 2019 09:01:00 AM</h6>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-peak-requests-chart [inverted]=\"true\"></app-peak-requests-chart>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-response-time-vs-throughput-chart></app-response-time-vs-throughput-chart>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-process-time-details-table></app-process-time-details-table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-slips-per-client-table></app-slips-per-client-table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-error-logs-table></app-error-logs-table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterNavigationChange = false;
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    // // toastr
    // showSuccess(message: string) {
    //     this.toastr.success(message, 'Success!');
    // }
    // showError(message: string) {
    //     this.toastr.error(message, 'Oops!');
    // }
    // showWarning(message: string) {
    //     this.toastr.warning(message, 'Warning!');
    // }
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, twentyFourHoursActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _twenty_four_hours_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twenty-four-hours-activity.service */ "./src/app/_services/twenty-four-hours-activity.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "twentyFourHoursActivityService", function() { return _twenty_four_hours_activity_service__WEBPACK_IMPORTED_MODULE_1__["twentyFourHoursActivityService"]; });





/***/ }),

/***/ "./src/app/_services/twenty-four-hours-activity.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_services/twenty-four-hours-activity.service.ts ***!
  \*****************************************************************/
/*! exports provided: twentyFourHoursActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twentyFourHoursActivityService", function() { return twentyFourHoursActivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/config */ "./src/app/_shared/config.ts");





var twentyFourHoursActivityService = /** @class */ (function () {
    function twentyFourHoursActivityService(http) {
        this.http = http;
    }
    /**
     * Get error logs
    */
    twentyFourHoursActivityService.prototype.getErrorLogs = function () {
        return this.http.get(_shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_URL + "/api/DevOps/24HoursActivity/GetErrorLogs?code=" + _shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_KEY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            return datas['Value'];
        }));
    };
    /**
     * Get Peak Requests
    */
    twentyFourHoursActivityService.prototype.getPeakRequests = function () {
        return this.http.get(_shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_URL + "/api/DevOps/24HoursActivity/GetPeakRequests?code=" + _shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_KEY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            return datas['Value'];
        }));
    };
    /**
     * Get Process Time Details
    */
    twentyFourHoursActivityService.prototype.getProcessTimeDetails = function () {
        return this.http.get(_shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_URL + "/api/DevOps/24HoursActivity/GetProcessTimeDetails?code=" + _shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_KEY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            return datas['Value'];
        }));
    };
    /**
     * Get Request Slip Save Throughput
    */
    twentyFourHoursActivityService.prototype.getRequestSlipSaveThroughput = function () {
        return this.http.get(_shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_URL + "/api/DevOps/24HoursActivity/GetRequestSlipSaveThroughput?code=" + _shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_KEY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            return datas['Value'];
        }));
    };
    /**
     * Get Response Time Vs Throughput
    */
    twentyFourHoursActivityService.prototype.getResponseTimeVsThroughput = function () {
        return this.http.get(_shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_URL + "/api/DevOps/24HoursActivity/GetResponseTimeVsThroughput?code=" + _shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_KEY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            return datas['Value'];
        }));
    };
    /**
     * Get slips per client
    */
    twentyFourHoursActivityService.prototype.getSlipsPerClient = function () {
        return this.http.get(_shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_URL + "/api/DevOps/24HoursActivity/GetSlipsPerClient?code=" + _shared_config__WEBPACK_IMPORTED_MODULE_4__["Config"].HOST_KEY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            return datas['Value'];
        }));
    };
    twentyFourHoursActivityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    twentyFourHoursActivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], twentyFourHoursActivityService);
    return twentyFourHoursActivityService;
}());



/***/ }),

/***/ "./src/app/_shared/config.ts":
/*!***********************************!*\
  !*** ./src/app/_shared/config.ts ***!
  \***********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Object.defineProperty(Config, "HOST_URL", {
        /** HOSTING */
        get: function () { return "https://dp-reporting-devops-api-dev.azurewebsites.net"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "HOST_KEY", {
        get: function () { return "l/0e4Yha1t584isKuSmvMCwKUYp/bWXjBqCsGer7hG/UkjIpGRKgvg=="; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "ANONYMOUS_PAGE", {
        // List of anonymous pages
        get: function () { return ["/login", "/register", "/error"]; },
        enumerable: true,
        configurable: true
    });
    ;
    return Config;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/anonymous/anonymous.component */ "./src/app/layouts/anonymous/anonymous.component.ts");
/* harmony import */ var _pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/authentication/login/login.component */ "./src/app/pages/authentication/login/login.component.ts");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "./src/app/layouts/auth/auth.component.ts");
/* harmony import */ var _pages_live_dashboard_live_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/live-dashboard/live-dashboard.component */ "./src/app/pages/live-dashboard/live-dashboard.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_error_logs_error_logs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/error-logs/error-logs.component */ "./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_peak_requests_peak_requests_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component */ "./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_process_time_details_process_time_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component */ "./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_response_time_vs_throughput_response_time_vs_throughput_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component */ "./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_request_and_slip_save_throughput_request_and_slip_save_throughput_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component */ "./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_slips_per_client_slips_per_client_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component */ "./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_twenty_four_hours_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component */ "./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.ts");














var routes = [
    { path: 'login', component: _layouts_anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_3__["AnonymousComponent"], children: [{ path: '', component: _pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }] },
    { path: '', redirectTo: '/24h-activity-dashboard', pathMatch: 'full' },
    {
        path: 'live-activity-dashboard',
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
        data: { title: '', breadcrumb: 'Live Dashboard', type: 'dropdown', icon: 'mdi mdi-chart-timeline' },
        children: [{ path: '', component: _pages_live_dashboard_live_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["LiveDashboardComponent"] }]
    },
    {
        path: '24h-activity-dashboard',
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
        data: { title: '24h Activity Dashboard', breadcrumb: '24h Activity Dashboard', type: 'dropdown', icon: 'mdi mdi-chart-line' },
        children: [
            {
                path: '',
                component: _pages_twenty_four_hours_dashboard_twenty_four_hours_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["TwentyFourHoursDashboardComponent"],
                data: { title: '24h Activity Dashboard', breadcrumb: '24h Activity Dashboard', type: 'link', icon: 'mdi mdi-chart-line' }
            },
            {
                path: 'error-logs',
                component: _pages_twenty_four_hours_dashboard_error_logs_error_logs_component__WEBPACK_IMPORTED_MODULE_7__["ErrorLogsComponent"],
                data: { title: 'Error Logs', breadcrumb: 'Error Logs', type: 'link', icon: '' }
            },
            {
                path: 'peak-requests',
                component: _pages_twenty_four_hours_dashboard_peak_requests_peak_requests_component__WEBPACK_IMPORTED_MODULE_8__["PeakRequestsComponent"],
                data: { title: 'Peak Request', breadcrumb: 'Peak Request', type: 'link', icon: '' }
            },
            {
                path: 'process-time-details',
                component: _pages_twenty_four_hours_dashboard_process_time_details_process_time_details_component__WEBPACK_IMPORTED_MODULE_9__["ProcessTimeDetailsComponent"],
                data: { title: 'Process Time Details', breadcrumb: 'Process Time Details', type: 'link', icon: '' }
            },
            {
                path: 'response-time-vs-throughput',
                component: _pages_twenty_four_hours_dashboard_response_time_vs_throughput_response_time_vs_throughput_component__WEBPACK_IMPORTED_MODULE_10__["ResponseTimeVsThroughputComponent"],
                data: { title: 'Response Time Vs Throughput', breadcrumb: 'Response Time Vs Throughput', type: 'link', icon: '' }
            },
            {
                path: 'request-and-slip-save-throughput',
                component: _pages_twenty_four_hours_dashboard_request_and_slip_save_throughput_request_and_slip_save_throughput_component__WEBPACK_IMPORTED_MODULE_11__["RequestAndSlipSaveThroughputComponent"],
                data: { title: 'Request And Slip Save Throughput', breadcrumb: 'Request And Slip Save Throughput', type: 'link', icon: '' }
            },
            {
                path: 'slips-per-client',
                component: _pages_twenty_four_hours_dashboard_slips_per_client_slips_per_client_component__WEBPACK_IMPORTED_MODULE_12__["SlipsPerClientComponent"],
                data: { title: 'Slips Per Client', breadcrumb: 'Slips Per Client', type: 'link', icon: '' }
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dp-reporting-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/authentication/login/login.component */ "./src/app/pages/authentication/login/login.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layouts_anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/anonymous/anonymous.component */ "./src/app/layouts/anonymous/anonymous.component.ts");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "./src/app/layouts/auth/auth.component.ts");
/* harmony import */ var _pages_live_dashboard_live_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/live-dashboard/live-dashboard.component */ "./src/app/pages/live-dashboard/live-dashboard.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_error_logs_error_logs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/error-logs/error-logs.component */ "./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_twenty_four_hours_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component */ "./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_peak_requests_peak_requests_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component */ "./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_process_time_details_process_time_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component */ "./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_response_time_vs_throughput_response_time_vs_throughput_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component */ "./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_request_and_slip_save_throughput_request_and_slip_save_throughput_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component */ "./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.ts");
/* harmony import */ var _pages_twenty_four_hours_dashboard_slips_per_client_slips_per_client_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component */ "./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.ts");
/* harmony import */ var _components_error_logs_table_error_logs_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/error-logs-table/error-logs-table.component */ "./src/app/components/error-logs-table/error-logs-table.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _components_slips_per_client_table_slips_per_client_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/slips-per-client-table/slips-per-client-table.component */ "./src/app/components/slips-per-client-table/slips-per-client-table.component.ts");
/* harmony import */ var _components_process_time_details_table_process_time_details_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/process-time-details-table/process-time-details-table.component */ "./src/app/components/process-time-details-table/process-time-details-table.component.ts");
/* harmony import */ var _components_peak_requests_chart_peak_requests_chart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/peak-requests-chart/peak-requests-chart.component */ "./src/app/components/peak-requests-chart/peak-requests-chart.component.ts");
/* harmony import */ var _components_response_time_vs_throughput_chart_response_time_vs_throughput_chart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component */ "./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.ts");
/* harmony import */ var _components_request_slip_save_throughput_chart_request_slip_save_throughput_chart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component */ "./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");












;

















// Services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _layouts_anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_12__["AnonymousComponent"],
                _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
                _pages_live_dashboard_live_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["LiveDashboardComponent"],
                _pages_twenty_four_hours_dashboard_twenty_four_hours_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["TwentyFourHoursDashboardComponent"],
                _pages_twenty_four_hours_dashboard_error_logs_error_logs_component__WEBPACK_IMPORTED_MODULE_15__["ErrorLogsComponent"],
                _pages_twenty_four_hours_dashboard_peak_requests_peak_requests_component__WEBPACK_IMPORTED_MODULE_17__["PeakRequestsComponent"],
                _pages_twenty_four_hours_dashboard_process_time_details_process_time_details_component__WEBPACK_IMPORTED_MODULE_18__["ProcessTimeDetailsComponent"],
                _pages_twenty_four_hours_dashboard_response_time_vs_throughput_response_time_vs_throughput_component__WEBPACK_IMPORTED_MODULE_19__["ResponseTimeVsThroughputComponent"],
                _pages_twenty_four_hours_dashboard_request_and_slip_save_throughput_request_and_slip_save_throughput_component__WEBPACK_IMPORTED_MODULE_20__["RequestAndSlipSaveThroughputComponent"],
                _pages_twenty_four_hours_dashboard_slips_per_client_slips_per_client_component__WEBPACK_IMPORTED_MODULE_21__["SlipsPerClientComponent"],
                _components_error_logs_table_error_logs_table_component__WEBPACK_IMPORTED_MODULE_22__["ErrorLogsTableComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"],
                _components_slips_per_client_table_slips_per_client_table_component__WEBPACK_IMPORTED_MODULE_24__["SlipsPerClientTableComponent"],
                _components_process_time_details_table_process_time_details_table_component__WEBPACK_IMPORTED_MODULE_25__["ProcessTimeDetailsTableComponent"],
                _components_peak_requests_chart_peak_requests_chart_component__WEBPACK_IMPORTED_MODULE_26__["PeakRequestsChartComponent"],
                _components_response_time_vs_throughput_chart_response_time_vs_throughput_chart_component__WEBPACK_IMPORTED_MODULE_27__["ResponseTimeVsThroughputChartComponent"],
                _components_request_slip_save_throughput_chart_request_slip_save_throughput_chart_component__WEBPACK_IMPORTED_MODULE_28__["RequestSlipSaveThroughputChartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] },
                _services__WEBPACK_IMPORTED_MODULE_29__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_29__["twentyFourHoursActivityService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AlertComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/components/alert/alert.component.scss")]
        })
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/error-logs-table/error-logs-table.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/error-logs-table/error-logs-table.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItbG9ncy10YWJsZS9lcnJvci1sb2dzLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/error-logs-table/error-logs-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/error-logs-table/error-logs-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: ErrorLogsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLogsTableComponent", function() { return ErrorLogsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_twenty_four_hours_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/twenty-four-hours-activity.service */ "./src/app/_services/twenty-four-hours-activity.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");




var ErrorLogsTableComponent = /** @class */ (function () {
    function ErrorLogsTableComponent(alertService, services) {
        this.alertService = alertService;
        this.services = services;
        // loading flag
        this.isLoading = false;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: (!this.pageSize || this.pageSize <= 0) ? 50 : this.pageSize
        };
        // list of errors
        this.errors = [];
    }
    ErrorLogsTableComponent.prototype.ngOnInit = function () {
        this.getErrorLogs();
    };
    ErrorLogsTableComponent.prototype.getErrorLogs = function () {
        var _this = this;
        this.pageInfo.pageNumber = 1;
        this.isLoading = true;
        this.services.getErrorLogs().pipe().subscribe(function (data) {
            _this.errors = data;
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.error(error, false);
            _this.isLoading = false;
        });
    };
    ErrorLogsTableComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: src_app_services_twenty_four_hours_activity_service__WEBPACK_IMPORTED_MODULE_2__["twentyFourHoursActivityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ErrorLogsTableComponent.prototype, "pageSize", void 0);
    ErrorLogsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-logs-table',
            template: __webpack_require__(/*! raw-loader!./error-logs-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error-logs-table/error-logs-table.component.html"),
            styles: [__webpack_require__(/*! ./error-logs-table.component.scss */ "./src/app/components/error-logs-table/error-logs-table.component.scss")]
        })
    ], ErrorLogsTableComponent);
    return ErrorLogsTableComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(config) {
        this.sidebarOpened = false;
        config.placement = 'bottom-right';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.sizeChange(null);
    };
    NavbarComponent.prototype.toggleOffcanvas = function () {
        if (document.body.classList.contains('turn-off-sidebar')) {
            document.body.classList.remove('turn-off-sidebar');
        }
        else {
            document.body.classList.add('turn-off-sidebar');
        }
    };
    NavbarComponent.prototype.sizeChange = function (event) {
        if (window.innerWidth <= 991) {
            if (!document.body.classList.contains('turn-off-sidebar')) {
                document.body.classList.add('turn-off-sidebar');
            }
        }
        else {
            if (document.body.classList.contains('turn-off-sidebar')) {
                document.body.classList.remove('turn-off-sidebar');
            }
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], NavbarComponent.prototype, "sizeChange", null);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/peak-requests-chart/peak-requests-chart.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/peak-requests-chart/peak-requests-chart.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVhay1yZXF1ZXN0cy1jaGFydC9wZWFrLXJlcXVlc3RzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/peak-requests-chart/peak-requests-chart.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/peak-requests-chart/peak-requests-chart.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PeakRequestsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeakRequestsChartComponent", function() { return PeakRequestsChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);




var PeakRequestsChartComponent = /** @class */ (function () {
    function PeakRequestsChartComponent(alertService, services) {
        this.alertService = alertService;
        this.services = services;
        // loading flag
        this.isLoading = false;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: 10
        };
        // list of requests
        this.requests = [];
        // list of clients
        this.clients = [];
        // list of slipCount
        this.slipCount = [];
        // list of priceRequestCount
        this.priceRequestCount = [];
        // chart object
        this.chart = null;
        // event emitter
        this.onDataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PeakRequestsChartComponent.prototype.ngOnInit = function () {
        this.getPeakRequests();
    };
    PeakRequestsChartComponent.prototype.getPeakRequests = function () {
        var _this = this;
        this.pageInfo.pageNumber = 1;
        this.isLoading = true;
        this.requests = [];
        this.clients = [];
        this.slipCount = [];
        this.priceRequestCount = [];
        this.services.getPeakRequests().pipe().subscribe(function (data) {
            _this.onDataChanged.emit(data);
            _this.requests = data;
            _this.isLoading = false;
            _this.prepareData();
        }, function (error) {
            _this.alertService.error(error, false);
            _this.isLoading = false;
        });
    };
    PeakRequestsChartComponent.prototype.prepareData = function () {
        var _this = this;
        this.requests.forEach(function (item) {
            _this.clients.push(item.Client);
            _this.slipCount.push(parseInt(item.SlipCount));
            _this.priceRequestCount.push(parseInt(item.PriceRequestCount));
        });
        this.initChart();
    };
    PeakRequestsChartComponent.prototype.initChart = function () {
        var options = {
            chart: {
                type: 'column',
                zoomType: 'y',
                inverted: this.inverted,
                height: '500px'
            },
            title: {
                text: 'Peak Requests'
            },
            xAxis: {
                categories: this.clients,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            colors: ['#f9a226', '#007bff'],
            series: [{
                    name: 'Slip Saves (per min)',
                    data: this.slipCount
                }, {
                    name: 'Price Request (per sec)',
                    data: this.priceRequestCount
                }]
        };
        highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"]('peak-request-chart', options);
    };
    PeakRequestsChartComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["twentyFourHoursActivityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PeakRequestsChartComponent.prototype, "inverted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PeakRequestsChartComponent.prototype, "onDataChanged", void 0);
    PeakRequestsChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-peak-requests-chart',
            template: __webpack_require__(/*! raw-loader!./peak-requests-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/peak-requests-chart/peak-requests-chart.component.html"),
            styles: [__webpack_require__(/*! ./peak-requests-chart.component.scss */ "./src/app/components/peak-requests-chart/peak-requests-chart.component.scss")]
        })
    ], PeakRequestsChartComponent);
    return PeakRequestsChartComponent;
}());



/***/ }),

/***/ "./src/app/components/process-time-details-table/process-time-details-table.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/process-time-details-table/process-time-details-table.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy10aW1lLWRldGFpbHMtdGFibGUvcHJvY2Vzcy10aW1lLWRldGFpbHMtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/process-time-details-table/process-time-details-table.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/process-time-details-table/process-time-details-table.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProcessTimeDetailsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessTimeDetailsTableComponent", function() { return ProcessTimeDetailsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");



var ProcessTimeDetailsTableComponent = /** @class */ (function () {
    function ProcessTimeDetailsTableComponent(alertService, services) {
        this.alertService = alertService;
        this.services = services;
        // loading flag
        this.isLoading = false;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: (!this.pageSize || this.pageSize <= 0) ? 50 : this.pageSize
        };
        // list of details
        this.details = [];
    }
    ProcessTimeDetailsTableComponent.prototype.ngOnInit = function () {
        this.getProcessTimeDetails();
    };
    ProcessTimeDetailsTableComponent.prototype.getProcessTimeDetails = function () {
        var _this = this;
        this.pageInfo.pageNumber = 1;
        this.isLoading = true;
        this.services.getProcessTimeDetails().pipe().subscribe(function (data) {
            _this.details = data;
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.error(error, false);
            _this.isLoading = false;
        });
    };
    ProcessTimeDetailsTableComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["twentyFourHoursActivityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProcessTimeDetailsTableComponent.prototype, "pageSize", void 0);
    ProcessTimeDetailsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-process-time-details-table',
            template: __webpack_require__(/*! raw-loader!./process-time-details-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/process-time-details-table/process-time-details-table.component.html"),
            styles: [__webpack_require__(/*! ./process-time-details-table.component.scss */ "./src/app/components/process-time-details-table/process-time-details-table.component.scss")]
        })
    ], ProcessTimeDetailsTableComponent);
    return ProcessTimeDetailsTableComponent;
}());



/***/ }),

/***/ "./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC1zbGlwLXNhdmUtdGhyb3VnaHB1dC1jaGFydC9yZXF1ZXN0LXNsaXAtc2F2ZS10aHJvdWdocHV0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: RequestSlipSaveThroughputChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSlipSaveThroughputChartComponent", function() { return RequestSlipSaveThroughputChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");




var RequestSlipSaveThroughputChartComponent = /** @class */ (function () {
    function RequestSlipSaveThroughputChartComponent(alertService, services) {
        this.alertService = alertService;
        this.services = services;
        // loading flag
        this.isLoading = false;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: 10
        };
        // list of requests
        this.responses = [];
        // list of PriceRequestCount
        this.requests = [];
        // list of SlipSaveCount
        this.slips = [];
        // event emitter
        this.onDataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RequestSlipSaveThroughputChartComponent.prototype.ngOnInit = function () {
        this.getRequestSlipSaveThroughput();
    };
    RequestSlipSaveThroughputChartComponent.prototype.getRequestSlipSaveThroughput = function () {
        var _this = this;
        this.pageInfo.pageNumber = 1;
        this.isLoading = true;
        this.responses = [];
        this.requests = [];
        this.slips = [];
        this.services.getRequestSlipSaveThroughput().pipe().subscribe(function (data) {
            _this.onDataChanged.emit(data);
            _this.responses = data;
            _this.isLoading = false;
            _this.prepareData();
        }, function (error) {
            _this.alertService.error(error, false);
            _this.isLoading = false;
        });
    };
    RequestSlipSaveThroughputChartComponent.prototype.prepareData = function () {
        var _this = this;
        this.responses.forEach(function (item) {
            var mArray = item.Timestamp.split(' ');
            var dateArray = mArray[0].split('-');
            var timeArray = mArray[1].split(':');
            var minute = Date.UTC(parseInt(dateArray[0]), parseInt(dateArray[1]), parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]));
            _this.requests.push([minute, parseInt(item.PriceRequestCount)]);
            _this.slips.push([minute, parseInt(item.SlipSaveCount)]);
        });
        this.initChart();
    };
    RequestSlipSaveThroughputChartComponent.prototype.initChart = function () {
        var options = {
            chart: {
                type: 'spline',
                zoomType: 'x',
                height: '500px',
            },
            title: {
                text: 'Request and Slip Save Throughput'
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Hours'
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0
            },
            // tooltip: {
            //   headerFormat: '<b>{series.name}</b><br>',
            //   pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            // },
            plotOptions: {
                // spline: {
                //   marker: {
                //     enabled: true
                //   }
                // }
                area: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            colors: ['#f9a226', '#3e4b5b'],
            series: [
                {
                    name: 'Price Request (per sec)',
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#fdcf4e'],
                            [1, new highcharts__WEBPACK_IMPORTED_MODULE_2__["Color"]("#fdcf4e").setOpacity(0).get('rgba')]
                        ]
                    },
                    data: this.requests
                }, {
                    name: 'Slip Saves (per min)',
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#434a54'],
                            [1, new highcharts__WEBPACK_IMPORTED_MODULE_2__["Color"]("#434a54").setOpacity(0.5).get('rgba')]
                        ]
                    },
                    data: this.slips
                }
            ]
        };
        highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('request-slip-save-throughput-chart', options);
    };
    RequestSlipSaveThroughputChartComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["twentyFourHoursActivityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], RequestSlipSaveThroughputChartComponent.prototype, "onDataChanged", void 0);
    RequestSlipSaveThroughputChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-slip-save-throughput-chart',
            template: __webpack_require__(/*! raw-loader!./request-slip-save-throughput-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.html"),
            styles: [__webpack_require__(/*! ./request-slip-save-throughput-chart.component.scss */ "./src/app/components/request-slip-save-throughput-chart/request-slip-save-throughput-chart.component.scss")]
        })
    ], RequestSlipSaveThroughputChartComponent);
    return RequestSlipSaveThroughputChartComponent;
}());



/***/ }),

/***/ "./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2UtdGltZS12cy10aHJvdWdocHV0LWNoYXJ0L3Jlc3BvbnNlLXRpbWUtdnMtdGhyb3VnaHB1dC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ResponseTimeVsThroughputChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTimeVsThroughputChartComponent", function() { return ResponseTimeVsThroughputChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");




var ResponseTimeVsThroughputChartComponent = /** @class */ (function () {
    function ResponseTimeVsThroughputChartComponent(alertService, services) {
        this.alertService = alertService;
        this.services = services;
        // loading flag
        this.isLoading = false;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: 10
        };
        // list of requests
        this.responses = [];
        // list of AverageMsPriceResponse
        this.responseTime = [];
        // list of TotalPriceRequests
        this.requests = [];
        // event emitter
        this.onDataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ResponseTimeVsThroughputChartComponent.prototype.ngOnInit = function () {
        this.getResponseTimes();
    };
    ResponseTimeVsThroughputChartComponent.prototype.getResponseTimes = function () {
        var _this = this;
        this.pageInfo.pageNumber = 1;
        this.isLoading = true;
        this.responses = [];
        this.responseTime = [];
        this.requests = [];
        this.services.getResponseTimeVsThroughput().pipe().subscribe(function (data) {
            _this.onDataChanged.emit(data);
            _this.responses = data;
            _this.isLoading = false;
            _this.prepareData();
        }, function (error) {
            _this.alertService.error(error, false);
            _this.isLoading = false;
        });
    };
    ResponseTimeVsThroughputChartComponent.prototype.prepareData = function () {
        var _this = this;
        this.responses.forEach(function (item) {
            var mArray = item.Minute.split(' ');
            var dateArray = mArray[0].split('-');
            var timeArray = mArray[1].split(':');
            var minute = Date.UTC(parseInt(dateArray[0]), parseInt(dateArray[1]), parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]));
            _this.responseTime.push([minute, parseInt(item.AverageMsPriceResponse)]);
            _this.requests.push([minute, parseInt(item.TotalPriceRequests)]);
        });
        this.initChart();
    };
    ResponseTimeVsThroughputChartComponent.prototype.initChart = function () {
        var options = {
            chart: {
                type: 'area',
                zoomType: 'x',
                height: '500px',
            },
            title: {
                text: 'Response time vs Throughput'
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Hours'
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0
            },
            // tooltip: {
            //   headerFormat: '<b>{series.name}</b><br>',
            //   pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            // },
            plotOptions: {
                // spline: {
                //   marker: {
                //     enabled: true
                //   }
                // }
                area: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            colors: ['#f9a226', '#3e4b5b'],
            series: [
                {
                    name: 'Response Time (ms)',
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#fdcf4e'],
                            [1, new highcharts__WEBPACK_IMPORTED_MODULE_2__["Color"]("#fdcf4e").setOpacity(0).get('rgba')]
                        ]
                    },
                    data: this.responseTime
                }, {
                    name: 'Requests per min',
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#434a54'],
                            [1, new highcharts__WEBPACK_IMPORTED_MODULE_2__["Color"]("#434a54").setOpacity(0.5).get('rgba')]
                        ]
                    },
                    data: this.requests
                }
            ]
        };
        highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('response-time-vs-throughput-chart', options);
    };
    ResponseTimeVsThroughputChartComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["twentyFourHoursActivityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ResponseTimeVsThroughputChartComponent.prototype, "onDataChanged", void 0);
    ResponseTimeVsThroughputChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-response-time-vs-throughput-chart',
            template: __webpack_require__(/*! raw-loader!./response-time-vs-throughput-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.html"),
            styles: [__webpack_require__(/*! ./response-time-vs-throughput-chart.component.scss */ "./src/app/components/response-time-vs-throughput-chart/response-time-vs-throughput-chart.component.scss")]
        })
    ], ResponseTimeVsThroughputChartComponent);
    return ResponseTimeVsThroughputChartComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.goTo = function (path) {
        if (path)
            this.router.navigate([path]);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/slips-per-client-table/slips-per-client-table.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/slips-per-client-table/slips-per-client-table.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpcHMtcGVyLWNsaWVudC10YWJsZS9zbGlwcy1wZXItY2xpZW50LXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/slips-per-client-table/slips-per-client-table.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/slips-per-client-table/slips-per-client-table.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SlipsPerClientTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlipsPerClientTableComponent", function() { return SlipsPerClientTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");



var SlipsPerClientTableComponent = /** @class */ (function () {
    function SlipsPerClientTableComponent(alertService, services) {
        this.alertService = alertService;
        this.services = services;
        // loading flag
        this.isLoading = false;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: (!this.pageSize || this.pageSize <= 0) ? 50 : this.pageSize
        };
        // list of slips
        this.slips = [];
    }
    SlipsPerClientTableComponent.prototype.ngOnInit = function () {
        this.getSlips();
    };
    SlipsPerClientTableComponent.prototype.getSlips = function () {
        var _this = this;
        this.pageInfo.pageNumber = 1;
        this.isLoading = true;
        this.services.getSlipsPerClient().pipe().subscribe(function (data) {
            _this.slips = data;
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.error(error, false);
            _this.isLoading = false;
        });
    };
    SlipsPerClientTableComponent.ctorParameters = function () { return [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["twentyFourHoursActivityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SlipsPerClientTableComponent.prototype, "pageSize", void 0);
    SlipsPerClientTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slips-per-client-table',
            template: __webpack_require__(/*! raw-loader!./slips-per-client-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slips-per-client-table/slips-per-client-table.component.html"),
            styles: [__webpack_require__(/*! ./slips-per-client-table.component.scss */ "./src/app/components/slips-per-client-table/slips-per-client-table.component.scss")]
        })
    ], SlipsPerClientTableComponent);
    return SlipsPerClientTableComponent;
}());



/***/ }),

/***/ "./src/app/layouts/anonymous/anonymous.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layouts/anonymous/anonymous.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYW5vbnltb3VzL2Fub255bW91cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/anonymous/anonymous.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/anonymous/anonymous.component.ts ***!
  \**********************************************************/
/*! exports provided: AnonymousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousComponent", function() { return AnonymousComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnonymousComponent = /** @class */ (function () {
    function AnonymousComponent() {
    }
    AnonymousComponent.prototype.ngOnInit = function () {
    };
    AnonymousComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anonymous',
            template: __webpack_require__(/*! raw-loader!./anonymous.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/anonymous/anonymous.component.html"),
            styles: [__webpack_require__(/*! ./anonymous.component.scss */ "./src/app/layouts/anonymous/anonymous.component.scss")]
        })
    ], AnonymousComponent);
    return AnonymousComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/auth/auth.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/auth/auth.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/layouts/auth/auth.component.scss")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/pages/authentication/login/login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/authentication/login/login.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/authentication/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/authentication/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/live-dashboard/live-dashboard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/live-dashboard/live-dashboard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpdmUtZGFzaGJvYXJkL2xpdmUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/live-dashboard/live-dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/live-dashboard/live-dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: LiveDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveDashboardComponent", function() { return LiveDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LiveDashboardComponent = /** @class */ (function () {
    function LiveDashboardComponent() {
    }
    LiveDashboardComponent.prototype.ngOnInit = function () {
    };
    LiveDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-dashboard',
            template: __webpack_require__(/*! raw-loader!./live-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/live-dashboard/live-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./live-dashboard.component.scss */ "./src/app/pages/live-dashboard/live-dashboard.component.scss")]
        })
    ], LiveDashboardComponent);
    return LiveDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R3ZW50eS1mb3VyLWhvdXJzLWRhc2hib2FyZC9lcnJvci1sb2dzL2Vycm9yLWxvZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ErrorLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLogsComponent", function() { return ErrorLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ErrorLogsComponent = /** @class */ (function () {
    function ErrorLogsComponent(router) {
        this.router = router;
    }
    ErrorLogsComponent.prototype.ngOnInit = function () {
    };
    ErrorLogsComponent.prototype.goTo = function (path) {
        if (path)
            this.router.navigate([path]);
    };
    ErrorLogsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ErrorLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-logs',
            template: __webpack_require__(/*! raw-loader!./error-logs.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.html"),
            styles: [__webpack_require__(/*! ./error-logs.component.scss */ "./src/app/pages/twenty-four-hours-dashboard/error-logs/error-logs.component.scss")]
        })
    ], ErrorLogsComponent);
    return ErrorLogsComponent;
}());



/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R3ZW50eS1mb3VyLWhvdXJzLWRhc2hib2FyZC9wZWFrLXJlcXVlc3RzL3BlYWstcmVxdWVzdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PeakRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeakRequestsComponent", function() { return PeakRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PeakRequestsComponent = /** @class */ (function () {
    function PeakRequestsComponent() {
        this.data = [];
        // loading flag
        this.isLoading = true;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: 20
        };
    }
    PeakRequestsComponent.prototype.ngOnInit = function () {
    };
    PeakRequestsComponent.prototype.onDataChanged = function (data) {
        this.data = data;
        this.isLoading = false;
    };
    PeakRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-peak-requests',
            template: __webpack_require__(/*! raw-loader!./peak-requests.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.html"),
            styles: [__webpack_require__(/*! ./peak-requests.component.scss */ "./src/app/pages/twenty-four-hours-dashboard/peak-requests/peak-requests.component.scss")]
        })
    ], PeakRequestsComponent);
    return PeakRequestsComponent;
}());



/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R3ZW50eS1mb3VyLWhvdXJzLWRhc2hib2FyZC9wcm9jZXNzLXRpbWUtZGV0YWlscy9wcm9jZXNzLXRpbWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ProcessTimeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessTimeDetailsComponent", function() { return ProcessTimeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProcessTimeDetailsComponent = /** @class */ (function () {
    function ProcessTimeDetailsComponent() {
    }
    ProcessTimeDetailsComponent.prototype.ngOnInit = function () {
    };
    ProcessTimeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-process-time-details',
            template: __webpack_require__(/*! raw-loader!./process-time-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.html"),
            styles: [__webpack_require__(/*! ./process-time-details.component.scss */ "./src/app/pages/twenty-four-hours-dashboard/process-time-details/process-time-details.component.scss")]
        })
    ], ProcessTimeDetailsComponent);
    return ProcessTimeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R3ZW50eS1mb3VyLWhvdXJzLWRhc2hib2FyZC9yZXF1ZXN0LWFuZC1zbGlwLXNhdmUtdGhyb3VnaHB1dC9yZXF1ZXN0LWFuZC1zbGlwLXNhdmUtdGhyb3VnaHB1dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: RequestAndSlipSaveThroughputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAndSlipSaveThroughputComponent", function() { return RequestAndSlipSaveThroughputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestAndSlipSaveThroughputComponent = /** @class */ (function () {
    function RequestAndSlipSaveThroughputComponent() {
        this.data = [];
        // loading flag
        this.isLoading = true;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: 30
        };
    }
    RequestAndSlipSaveThroughputComponent.prototype.ngOnInit = function () {
    };
    RequestAndSlipSaveThroughputComponent.prototype.onDataChanged = function (data) {
        this.data = data;
        this.isLoading = false;
    };
    RequestAndSlipSaveThroughputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-and-slip-save-throughput',
            template: __webpack_require__(/*! raw-loader!./request-and-slip-save-throughput.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.html"),
            styles: [__webpack_require__(/*! ./request-and-slip-save-throughput.component.scss */ "./src/app/pages/twenty-four-hours-dashboard/request-and-slip-save-throughput/request-and-slip-save-throughput.component.scss")]
        })
    ], RequestAndSlipSaveThroughputComponent);
    return RequestAndSlipSaveThroughputComponent;
}());



/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R3ZW50eS1mb3VyLWhvdXJzLWRhc2hib2FyZC9yZXNwb25zZS10aW1lLXZzLXRocm91Z2hwdXQvcmVzcG9uc2UtdGltZS12cy10aHJvdWdocHV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ResponseTimeVsThroughputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTimeVsThroughputComponent", function() { return ResponseTimeVsThroughputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResponseTimeVsThroughputComponent = /** @class */ (function () {
    function ResponseTimeVsThroughputComponent() {
        this.data = [];
        // loading flag
        this.isLoading = true;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: 30
        };
    }
    ResponseTimeVsThroughputComponent.prototype.ngOnInit = function () {
    };
    ResponseTimeVsThroughputComponent.prototype.onDataChanged = function (data) {
        this.data = data;
        this.isLoading = false;
    };
    ResponseTimeVsThroughputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-response-time-vs-throughput',
            template: __webpack_require__(/*! raw-loader!./response-time-vs-throughput.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.html"),
            styles: [__webpack_require__(/*! ./response-time-vs-throughput.component.scss */ "./src/app/pages/twenty-four-hours-dashboard/response-time-vs-throughput/response-time-vs-throughput.component.scss")]
        })
    ], ResponseTimeVsThroughputComponent);
    return ResponseTimeVsThroughputComponent;
}());



/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R3ZW50eS1mb3VyLWhvdXJzLWRhc2hib2FyZC9zbGlwcy1wZXItY2xpZW50L3NsaXBzLXBlci1jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SlipsPerClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlipsPerClientComponent", function() { return SlipsPerClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlipsPerClientComponent = /** @class */ (function () {
    function SlipsPerClientComponent() {
        this.data = [];
        // loading flag
        this.isLoading = true;
        // paging
        this.pageInfo = {
            pageNumber: 1,
            pageSize: 20
        };
    }
    SlipsPerClientComponent.prototype.ngOnInit = function () {
    };
    SlipsPerClientComponent.prototype.onDataChanged = function (data) {
        this.data = data;
        this.isLoading = false;
    };
    SlipsPerClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slips-per-client',
            template: __webpack_require__(/*! raw-loader!./slips-per-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.html"),
            styles: [__webpack_require__(/*! ./slips-per-client.component.scss */ "./src/app/pages/twenty-four-hours-dashboard/slips-per-client/slips-per-client.component.scss")]
        })
    ], SlipsPerClientComponent);
    return SlipsPerClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R3ZW50eS1mb3VyLWhvdXJzLWRhc2hib2FyZC90d2VudHktZm91ci1ob3Vycy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TwentyFourHoursDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwentyFourHoursDashboardComponent", function() { return TwentyFourHoursDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TwentyFourHoursDashboardComponent = /** @class */ (function () {
    function TwentyFourHoursDashboardComponent() {
    }
    TwentyFourHoursDashboardComponent.prototype.ngOnInit = function () {
    };
    TwentyFourHoursDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-twenty-four-hours-dashboard',
            template: __webpack_require__(/*! raw-loader!./twenty-four-hours-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./twenty-four-hours-dashboard.component.scss */ "./src/app/pages/twenty-four-hours-dashboard/twenty-four-hours-dashboard.component.scss")]
        })
    ], TwentyFourHoursDashboardComponent);
    return TwentyFourHoursDashboardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sources\SportCast\dp-reporting-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map