(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-10-top-bottom {\n  margin: 10px 0;\n}\n\n#amount {\n  width: 150px;\n}\n\n.app-card {\n  max-width: 850px;\n  margin: 10px 0 0 0;\n}\n\n@media screen and (max-width: 600px)  {\n  .app-card {\n    margin: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tMTAtdG9wLWJvdHRvbSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4jYW1vdW50IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uYXBwLWNhcmQge1xuICBtYXgtd2lkdGg6IDg1MHB4O1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSAge1xuICAuYXBwLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"card app-card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Check currencies around the world</h5>\n        <hr />\n\n        <div class=\"row\">\n          <div class=\"col col-md-12\">\n            <div class=\"form-row\">\n              <div class=\"col-md-1\"><label for=\"from\">From:</label></div>\n\n              <div class=\"col-md-11\">\n                <select\n                  id=\"from\"\n                  [(ngModel)]=\"query.from\"\n                  class=\"custom-select\"\n                >\n                  <option *ngFor=\"let key of symbolsKeys\" [value]=\"key\">\n                    {{ key }} - {{ symbols[key] }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col col-12 margin-10-top-bottom\">\n            <button (click)=\"swapCurrencies()\" class=\"btn btn-link\">\n              Swap Currencies\n            </button>\n          </div>\n\n          <div class=\"col col-md-12\">\n            <div class=\"form-row\">\n              <div class=\"col-md-1\"><label for=\"to\">To:</label></div>\n              <div class=\"col-md-11\">\n                <select id=\"to\" [(ngModel)]=\"query.to\" class=\"custom-select\">\n                  <option *ngFor=\"let key of symbolsKeys\" [value]=\"key\">\n                    {{ key }} - {{ symbols[key] }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col col-12 margin-10-top-bottom\">\n            <div class=\"form-row\">\n              <div class=\"col-md-1\"><label for=\"amount\">Amount:</label></div>\n              <div class=\"col-md-11\">\n                <input\n                  id=\"amount\"\n                  type=\"number\"\n                  [(ngModel)]=\"amount\"\n                  class=\"form-control\"\n                />\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col col-12 margin-10-top-bottom\">\n            <button (click)=\"getCurrency()\" class=\"btn btn-outline-primary\">\n              Get Currency\n            </button>\n          </div>\n\n          <div class=\"col col-12\">\n            <hr />\n            <div *ngIf=\"error\">Error on currency fetch, please try again</div>\n            <div *ngIf=\"!error\" id=\"result\">RESULT: {{ result }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _fixer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixer.service */ "./src/app/fixer.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(fixer) {
        this.fixer = fixer;
        this.symbols = {};
        this.result = 0.0;
        this.error = false;
        this.amount = 1;
        this.query = {
            from: "USD",
            to: "BRL"
        };
        this.calcResult = function (from) { return function (to) { return function (amount) {
            return (to / from) * amount;
        }; }; };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCurrency();
        this.getSymbols();
    };
    AppComponent.prototype.getCurrency = function () {
        var _this = this;
        this.fixer.fetch(this.query).subscribe(function (_a) {
            var success = _a.success, rates = _a.rates;
            if (success) {
                _this.result = _this.calcResult(rates[_this.query.from])(rates[_this.query.to])(_this.amount);
                _this.error = false;
            }
            else {
                _this.error = true;
                _this.result = 0;
            }
        });
    };
    Object.defineProperty(AppComponent.prototype, "symbolsKeys", {
        get: function () {
            return Object.keys(this.symbols);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.swapCurrencies = function () {
        var tempFrom = this.query.from;
        this.query.from = this.query.to;
        this.query.to = tempFrom;
        this.getCurrency();
    };
    AppComponent.prototype.getSymbols = function () {
        var _this = this;
        this.fixer.symbols().subscribe(function (_a) {
            var success = _a.success, symbols = _a.symbols;
            if (success) {
                _this.symbols = symbols;
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fixer_service__WEBPACK_IMPORTED_MODULE_2__["FixerService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fixer.service.ts":
/*!**********************************!*\
  !*** ./src/app/fixer.service.ts ***!
  \**********************************/
/*! exports provided: FixerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixerService", function() { return FixerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BASE_URL = "http://data.fixer.io/api";
var ACCESS_KEY = "e99d5d81dcd71097fefcba2fb9124bfb";
var FixerService = /** @class */ (function () {
    function FixerService(http) {
        this.http = http;
    }
    FixerService.prototype.latestUrl = function (_a) {
        var from = _a.from, to = _a.to;
        return BASE_URL + "/latest?access_key=" + ACCESS_KEY + "&symbols=" + from + "," + to;
    };
    FixerService.prototype.fetch = function (query) {
        var URL = this.latestUrl(query);
        return this.http.get(URL);
    };
    FixerService.prototype.symbols = function () {
        var URL = BASE_URL + "/symbols&access_key=" + ACCESS_KEY;
        return this.http.get(URL);
    };
    FixerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FixerService);
    return FixerService;
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

module.exports = __webpack_require__(/*! /home/fabio/sites/lets-currency/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map