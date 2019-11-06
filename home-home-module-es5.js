(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      DFree Things\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <p>Line ThingsとDFreeが接続できるかテスト</p>\n    <p>{{ value }}</p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/data/buffer.data.ts":
/*!*************************************!*\
  !*** ./src/app/data/buffer.data.ts ***!
  \*************************************/
/*! exports provided: BufferData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferData", function() { return BufferData; });
var BufferData = {
    count0: { value: [0], message: 'センサー 0個', countSensor: 0 },
    count1: { value: [1, 2, 4, 8], message: 'センサー 1個', countSensor: 1 },
    count2: { value: [3, 5, 6, 9, 10, 12], message: 'センサー 2個', countSensor: 2 },
    count3: { value: [7, 11, 13, 14], message: 'センサー 3個', countSensor: 3 },
    count4: { value: [15], message: 'センサー 4個', countSensor: 4 },
};


/***/ }),

/***/ "./src/app/data/gatt.data.ts":
/*!***********************************!*\
  !*** ./src/app/data/gatt.data.ts ***!
  \***********************************/
/*! exports provided: GattData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GattData", function() { return GattData; });
var GattData = {
    USER_SERVICE_UUID: '41b1ed3b-44bc-40c3-8cad-1f5c6b4945b1',
    URINE_JUDGMENT_DATA_UUID: '6131A60C-069D-4A0E-82F4-3C657A0B4A80',
    PSDI_SERVICE_UUID: 'E625601E-9E55-4597-A598-76018A0D293D',
    PSDI_CHARACTERISTIC_UUID: '26E2B12B-85F0-4F3F-9FDD-91D114270E6E',
};


/***/ }),

/***/ "./src/app/data/liff.data.ts":
/*!***********************************!*\
  !*** ./src/app/data/liff.data.ts ***!
  \***********************************/
/*! exports provided: LiffData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiffData", function() { return LiffData; });
var LiffData = {
    LIFF_ID: '1653365120-qRVd6laG',
};


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_liff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/liff.service */ "./src/app/services/liff.service.ts");
/* harmony import */ var _data_gatt_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/gatt.data */ "./src/app/data/gatt.data.ts");
/* harmony import */ var _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/buffer.data */ "./src/app/data/buffer.data.ts");





var SERVICE_UUID = _data_gatt_data__WEBPACK_IMPORTED_MODULE_3__["GattData"].USER_SERVICE_UUID;
var URINE_CHARACTERISTIC_UUID = _data_gatt_data__WEBPACK_IMPORTED_MODULE_3__["GattData"].URINE_JUDGMENT_DATA_UUID;
var HomePage = /** @class */ (function () {
    function HomePage(liffService) {
        this.liffService = liffService;
        this.countSensor = null;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.liffService.initLiff()
            .then(function () {
            _this.initLineLiff();
        })
            .catch(function (err) {
            alert('ngOnInit Error' + JSON.stringify(err));
        });
    };
    HomePage.prototype.initLineLiff = function () {
        var _this = this;
        this.liffService.initLineLiff()
            .then(function () {
            _this.liffCheckAvailabilityAndDo(function () { return _this.liffRequestDevice(); });
        })
            .catch(function (error) {
            alert('initLineLiff Error' + JSON.stringify(error));
        });
    };
    HomePage.prototype.liffCheckAvailabilityAndDo = function (callbackIfAvailable) {
        var _this = this;
        this.liffService.getAvailability().then(function (isAvailable) {
            if (isAvailable) {
                callbackIfAvailable();
            }
            else {
                setTimeout(function () { return _this.liffCheckAvailabilityAndDo(callbackIfAvailable); }, 1000);
            }
        })
            .catch(function (error) { return alert('liffCheckAvailabilityAndDo' + JSON.stringify(error)); });
    };
    HomePage.prototype.liffRequestDevice = function () {
        var _this = this;
        this.liffService.requestDevice().then(function (device) {
            _this.liffConnectToDevice(device);
        })
            .catch(function (error) {
            alert('liffRequestDevice ERROR' + JSON.stringify(error));
        });
    };
    HomePage.prototype.liffConnectToDevice = function (device) {
        var _this = this;
        device.gatt.connect().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var service, characteristic;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, device.gatt.getPrimaryService(SERVICE_UUID)];
                    case 1:
                        service = _a.sent();
                        return [4 /*yield*/, service.getCharacteristic(URINE_CHARACTERISTIC_UUID)];
                    case 2:
                        characteristic = _a.sent();
                        return [4 /*yield*/, characteristic.addEventListener('characteristicvaluechanged', function (e) {
                                _this.jugmentCountSensor(e);
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, characteristic.startNotifications()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (connectRrror) { return alert('Connect Error: ' + JSON.stringify(connectRrror)); });
        var disconnectCallback = function () {
            device.removeEventListener('gattserverdisconnected', disconnectCallback);
            _this.initLineLiff();
        };
    };
    HomePage.prototype.jugmentCountSensor = function (e) {
        if (_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count0.value.indexOf(e.target.value.getInt8()) > -1) {
            if (this.countSensor !== _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count0.countSensor) {
                this.countSensor = _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count0.countSensor;
            }
            alert(_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count0.message);
        }
        else if (_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count1.value.indexOf(e.target.value.getInt8()) > -1) {
            if (this.countSensor !== _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count1.countSensor) {
                this.countSensor = _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count1.countSensor;
            }
            alert(_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count1.message);
        }
        else if (_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count2.value.indexOf(e.target.value.getInt8()) > -1) {
            if (this.countSensor !== _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count2.countSensor) {
                this.countSensor = _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count2.countSensor;
            }
            alert(_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count2.message);
        }
        else if (_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count3.value.indexOf(e.target.value.getInt8()) > -1) {
            if (this.countSensor !== _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count3.countSensor) {
                this.countSensor = _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count3.countSensor;
            }
            alert(_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count3.message);
        }
        else if (_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count4.value.indexOf(e.target.value.getInt8()) > -1) {
            if (this.countSensor !== _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count4.countSensor) {
                this.countSensor = _data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count4.countSensor;
            }
            alert(_data_buffer_data__WEBPACK_IMPORTED_MODULE_4__["BufferData"].count4.message);
        }
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_liff_service__WEBPACK_IMPORTED_MODULE_2__["LiffService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_liff_service__WEBPACK_IMPORTED_MODULE_2__["LiffService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/liff.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/liff.service.ts ***!
  \******************************************/
/*! exports provided: LiffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiffService", function() { return LiffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_gatt_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/gatt.data */ "./src/app/data/gatt.data.ts");
/* harmony import */ var _data_liff_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/liff.data */ "./src/app/data/liff.data.ts");




var SERVICE_UUID = _data_gatt_data__WEBPACK_IMPORTED_MODULE_2__["GattData"].USER_SERVICE_UUID;
var URINE_CHARACTERISTIC_UUID = _data_gatt_data__WEBPACK_IMPORTED_MODULE_2__["GattData"].URINE_JUDGMENT_DATA_UUID;
var PSDI_SERVICE_UUID = _data_gatt_data__WEBPACK_IMPORTED_MODULE_2__["GattData"].PSDI_SERVICE_UUID;
var PSDI_CHARACTERISTIC_UUID = _data_gatt_data__WEBPACK_IMPORTED_MODULE_2__["GattData"].PSDI_CHARACTERISTIC_UUID;
var LIFF_ID = _data_liff_data__WEBPACK_IMPORTED_MODULE_3__["LiffData"].LIFF_ID;
var LiffService = /** @class */ (function () {
    function LiffService() {
    }
    LiffService.prototype.initLiff = function () {
        return liff.init({ liffId: LIFF_ID });
    };
    LiffService.prototype.initLineLiff = function () {
        return liff.initPlugins(['bluetooth']);
    };
    LiffService.prototype.getAvailability = function () {
        return liff.bluetooth.getAvailability();
    };
    LiffService.prototype.requestDevice = function () {
        return liff.bluetooth.requestDevice();
    };
    LiffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LiffService);
    return LiffService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map