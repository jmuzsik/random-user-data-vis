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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\n  <div class=\"row h-100\">\n    <app-side-navbar [fileDownload]=\"fileDownload\"></app-side-navbar>\n    <main class=\"col bg-faded py-3\">\n      <div *ngIf=\"!submitted; else showCharts;\">\n        <app-form [failedFile]=\"failedFile\" (messageEvent)=\"receiveMessage($event)\"></app-form>\n      </div>\n      <ng-template #showCharts>\n        <app-reuseable-chart [receivedData]=\"data\"></app-reuseable-chart>\n      </ng-template>\n    </main>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.submitted = false;
        this.failedFile = false;
        this.fileDownload = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentMessage.subscribe(function (message) {
            if (message === 'reset') {
                _this.submitted = false;
                _this.fileDownload = false;
            }
            else if (message === 'wrong-file') {
                _this.submitted = false;
                _this.failedFile = true;
                _this.fileDownload = false;
            }
        });
    };
    AppComponent.prototype.receiveMessage = function (data) {
        var _this = this;
        this.data = data;
        this.submitted = true;
        setTimeout(function () {
            if (!_this.failedFile) {
                setTimeout(function () {
                    _this.fileDownload = true;
                }, 7000);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "child", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-navbar/side-navbar.component */ "./src/app/side-navbar/side-navbar.component.ts");
/* harmony import */ var _reuseable_chart_reuseable_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reuseable-chart/reuseable-chart.component */ "./src/app/reuseable-chart/reuseable-chart.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _put_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./put-data.service */ "./src/app/put-data.service.ts");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./get-data.service */ "./src/app/get-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_7__["SideNavbarComponent"],
                _reuseable_chart_reuseable_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReuseableChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _put_data_service__WEBPACK_IMPORTED_MODULE_10__["UploadFileService"], _get_data_service__WEBPACK_IMPORTED_MODULE_11__["GetFileService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".larger-textarea {\n  height: 10rem;\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Welcome!</h1>\n  <div class=\"card my-3\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"input-group-prepend mt-4\">\n          <span class=\"input-group-text\">Upload JSON File</span>\n        </div>\n        <input class=\"form-control\" type=\"file\" accept=\".json\" (change)=\"checkJSON($event)\" formControlName=\"file\">\n\n        <div class=\"input-group-prepend mt-4\">\n          <span class=\"input-group-text\">Or Paste the JSON</span>\n        </div>\n        <textarea class=\"form-control\" [value]=\"jsonString\" (change)=\"checkJSON($event)\" (keyup)=\"checkJSON($event)\" aria-label=\"With textarea\"\n          formControlName=\"jsonString\"></textarea>\n\n        <button [disabled]=\"disabled\" type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button>\n        <div *ngIf=\"failedFile\" class=\"alert alert-warning fade show\" role=\"alert\">\n          File inputted is not of the right format!\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _put_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../put-data.service */ "./src/app/put-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FormComponent = /** @class */ (function () {
    function FormComponent(uploadFileService) {
        this.uploadFileService = uploadFileService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.failedFile = false;
        this.submitted = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            jsonString: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.jsonString = '';
        this.disabled = true;
    }
    FormComponent.prototype.checkJSON = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var type, jsonValue, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = event.target.type;
                        if (!(type === 'file')) return [3 /*break*/, 3];
                        file = void 0;
                        try {
                            file = event.srcElement.files[0];
                            this.file = file;
                        }
                        catch (e) {
                            console.error('Error reading file', e);
                        }
                        if (!file) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.readFile(file)];
                    case 1:
                        jsonValue = _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        jsonValue = event.target.value;
                        _a.label = 4;
                    case 4:
                        try {
                            this.data = JSON.parse(jsonValue);
                            this.disabled = false;
                        }
                        catch (ex) {
                            this.disabled = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FormComponent.prototype.readFile = function (inputFile) {
        var reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onerror = function () {
                reader.abort();
                reject(new DOMException('Problem parsing input file.'));
            };
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.readAsText(inputFile, 'UTF-8');
        });
    };
    FormComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.data);
    };
    FormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.sendMessage();
        var self = this;
        setTimeout(function () {
            if (!self.failedFile) {
                self.editedFile = _this.uploadFileService.uploadfile(_this.file);
            }
        }, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "messageEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "failedFile", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_put_data_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/get-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-data.service.ts ***!
  \*************************************/
/*! exports provided: GetFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFileService", function() { return GetFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetFileService = /** @class */ (function () {
    function GetFileService() {
    }
    GetFileService.prototype.getFile = function (type) {
        if (type === 'text') {
            fetch('https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/user-data.txt', {
                method: 'get',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (res) { return res.text(); })
                .then(function (str) {
                var blob = new Blob([str], {
                    type: 'text/plain'
                });
                file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](blob, 'edited-file.txt');
            })
                .catch(console.log);
        }
        else if (type === 'json') {
            fetch('https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/user-data.json', {
                method: 'get',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (res) {
                var blob = new Blob([JSON.stringify(res)], {
                    type: 'application/octet-stream'
                });
                file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](blob, 'edited-file.json');
            });
        }
        else {
            fetch('https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/user-data.xml', {
                method: 'get',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.text();
            }).then(function (res) {
                console.log(res);
                var blob = new Blob([res], {
                    type: 'application/octet-stream'
                });
                file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](blob, 'edited-file.xml');
            });
        }
    };
    GetFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GetFileService);
    return GetFileService;
}());



/***/ }),

/***/ "./src/app/put-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/put-data.service.ts ***!
  \*************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadFileService = /** @class */ (function () {
    function UploadFileService() {
    }
    UploadFileService.prototype.uploadfile = function (file) {
        fetch('https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/editme.json', {
            method: 'put',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: file
        })
            .then(function (response) {
            fetch('https://f15t14u2u4.execute-api.us-east-1.amazonaws.com/default/turnFileIntoTxt')
                .then(function (_) {
                console.log('All was successful.');
            })
                .catch(function (e) {
                return console.log('error in calling lambda to create other files', e);
            });
        })
            .catch(function (e) { return console.log('error in initial adding of file', e); });
    };
    UploadFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/reuseable-chart/reuseable-chart.component.css":
/*!***************************************************************!*\
  !*** ./src/app/reuseable-chart/reuseable-chart.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-row {\n  height: 100%;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n.row nav, .pagination {\n  justify-content: center;\n}"

/***/ }),

/***/ "./src/app/reuseable-chart/reuseable-chart.component.html":
/*!****************************************************************!*\
  !*** ./src/app/reuseable-chart/reuseable-chart.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row main-row\" [ngSwitch]=\"chartType\">\n  <div class=\"row\" *ngSwitchCase=\"'male-female-chart'\">\n    <div class=\"card my-3\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-center\">Percentage of Male and Female</h5>\n        <ngx-charts-pie-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"chartData\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\"\n          [labels]=\"showLabels\" [doughnut]=\"doughnut\" [gradient]=\"gradient\">\n        </ngx-charts-pie-chart>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngSwitchCase=\"'first-last-name-chart'\">\n    <div class=\"card my-3\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-center\">First Names</h5>\n        <ngx-charts-pie-grid [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"chartData1\">\n        </ngx-charts-pie-grid>\n      </div>\n    </div>\n    <div class=\"card my-3\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-center\">Last Names</h5>\n        <ngx-charts-pie-grid [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"chartData2\">\n        </ngx-charts-pie-grid>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngSwitchCase=\"'states-chart'\">\n    <div [ngSwitch]=\"currentChart\">\n      <div *ngSwitchCase=\"'female'\" class=\"card my-3\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Female Count</h5>\n          <ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"chartData1\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\">\n          </ngx-charts-bar-vertical>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'male'\" class=\"card my-3\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Male Count</h5>\n          <ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"chartData2\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\">\n          </ngx-charts-bar-vertical>\n        </div>\n      </div>\n      <div *ngSwitchDefault class=\"card my-3\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Overall Count</h5>\n          <ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"chartData3\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\">\n          </ngx-charts-bar-vertical>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <nav aria-label=\"Chart navigation\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\">\n            <a (click)=\"onClick($event, 'female')\" class=\"page-link\" href=\"#\">Female</a>\n          </li>\n          <li class=\"page-item\">\n            <a (click)=\"onClick($event, 'male')\" class=\"page-link\" href=\"#\">Male</a>\n          </li>\n          <li class=\"page-item\">\n            <a (click)=\"onClick($event, 'overall')\" class=\"page-link\" href=\"#\">Overall</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row\" *ngSwitchDefault>\n    <div class=\"card my-3\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-center\">Age Ranges of Data</h5>\n        <ngx-charts-tree-map [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"chartData\">\n        </ngx-charts-tree-map>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reuseable-chart/reuseable-chart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/reuseable-chart/reuseable-chart.component.ts ***!
  \**************************************************************/
/*! exports provided: ReuseableChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuseableChartComponent", function() { return ReuseableChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReuseableChartComponent = /** @class */ (function () {
    function ReuseableChartComponent(data) {
        this.data = data;
        this.view = [700, 400];
        this.colorScheme = {
            domain: [
                'rgb(85, 63, 122)',
                'rgb(254,227,138)',
                'rgb(50,108,153)',
                '#AAAAAA'
            ]
        };
        this.showLegend = true;
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.autoScale = true;
        this.xAxisLabel = 'State';
        this.yAxisLabel = 'Count';
        this.chartType = 'male-female-chart';
        this.currentChart = 'female';
    }
    ReuseableChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) {
            _this.chartType = message;
            _this.alterChartData(_this.chartType, _this.receivedData['results']);
        });
    };
    ReuseableChartComponent.prototype.alterChartData = function (type, data) {
        try {
            this.chartData = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createChartData"])(type, data);
        }
        catch (e) {
            this.data.changeMessage('wrong-file');
        }
        if (this.chartData.length === 3) {
            this.chartData1 = this.chartData[0];
            this.chartData2 = this.chartData[1];
            this.chartData3 = this.chartData[2];
        }
        else if (this.chartData.length === 2) {
            this.chartData1 = this.chartData[0];
            this.chartData2 = this.chartData[1];
        }
    };
    ReuseableChartComponent.prototype.onClick = function (_, type) {
        this.currentChart = type;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReuseableChartComponent.prototype, "receivedData", void 0);
    ReuseableChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reuseable-chart',
            template: __webpack_require__(/*! ./reuseable-chart.component.html */ "./src/app/reuseable-chart/reuseable-chart.component.html"),
            styles: [__webpack_require__(/*! ./reuseable-chart.component.css */ "./src/app/reuseable-chart/reuseable-chart.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ReuseableChartComponent);
    return ReuseableChartComponent;
}());



/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/side-navbar/side-navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/side-navbar/side-navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-nav\">\n  <nav class=\"navbar navbar-expand-sm px-0 flex-row flex-nowrap\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarWEX\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbarWEX\">\n      <div class=\"nav flex-sm-column flex-row\">\n        <div class=\"navbar-brand mx-auto my-4\" href=\"#\">\n          <img class=\"mx-auto\" width=\"100\" height=\"100\" src=\"/assets/json.png\" />\n        </div>\n        <h4 class=\"nav-item text-center my-4\">Charts:</h4>\n        <a href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"onClick($event, 'male-female-chart')\">Male/Female</a>\n        <a href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"onClick($event, 'first-last-name-chart')\">First/Last Name</a>\n        <a href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"onClick($event, 'states-chart')\">States</a>\n        <a href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"onClick($event, 'default')\">Age Ranges</a>\n        <a href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"onClick($event, 'reset')\">Reset Data</a>\n        <h4 *ngIf=\"fileDownload\" class=\"nav-item text-center my-4\">File Downloads</h4>\n        <a *ngIf=\"fileDownload\" href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"downloadFile($event, 'text')\">Download Edited File in Text</a>\n        <a *ngIf=\"fileDownload\" href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"downloadFile($event, 'json')\">Download Edited File in JSON</a>\n        <a *ngIf=\"fileDownload\" href=\"#\" class=\"nav-item nav-link text-center\" (click)=\"downloadFile($event, 'xml')\">Download Edited File in XML</a>\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/side-navbar/side-navbar.component.ts ***!
  \******************************************************/
/*! exports provided: SideNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavbarComponent", function() { return SideNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-data.service */ "./src/app/get-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavbarComponent = /** @class */ (function () {
    function SideNavbarComponent(data, getFileService) {
        this.data = data;
        this.getFileService = getFileService;
        this.fileDownload = false;
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return (_this.message = message); });
    };
    SideNavbarComponent.prototype.onClick = function (_, type) {
        this.data.changeMessage(type);
    };
    SideNavbarComponent.prototype.downloadFile = function (_, type) {
        console.log(type);
        this.getFileService.getFile(type);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SideNavbarComponent.prototype, "fileDownload", void 0);
    SideNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-navbar',
            template: __webpack_require__(/*! ./side-navbar.component.html */ "./src/app/side-navbar/side-navbar.component.html"),
            styles: [__webpack_require__(/*! ./side-navbar.component.css */ "./src/app/side-navbar/side-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetFileService"]])
    ], SideNavbarComponent);
    return SideNavbarComponent;
}());



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: separateMaleAndFemale, separateByName, separateByState, separateByAgeRanges, createChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateMaleAndFemale", function() { return separateMaleAndFemale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateByName", function() { return separateByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateByState", function() { return separateByState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateByAgeRanges", function() { return separateByAgeRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChartData", function() { return createChartData; });
function separateMaleAndFemale(data) {
    var currentUser;
    var females = [], males = [];
    for (var i = 0; i < data.length; i++) {
        currentUser = data[i];
        if (currentUser.gender === 'female') {
            females.push(true);
        }
        else {
            males.push(true);
        }
    }
    return [females, males];
}
function separateByName(data, firstOrLast) {
    var currentUser, name;
    var namesAtoM = [], namesNtoZ = [], namesDifferentASCII = [];
    var aASCIIValue = 97, mASCIIValue = 109, zASCIIValue = 122;
    for (var i = 0; i < data.length; i++) {
        currentUser = data[i];
        if (firstOrLast === 'first') {
            name = currentUser.name.first;
        }
        else {
            name = currentUser.name.last;
        }
        if (name.charCodeAt(0) >= aASCIIValue &&
            name.charCodeAt(0) <= mASCIIValue) {
            namesAtoM.push(true);
        }
        else if (name.charCodeAt(0) > mASCIIValue &&
            name.charCodeAt(0) <= zASCIIValue) {
            namesNtoZ.push(true);
        }
        else {
            namesDifferentASCII.push(true);
        }
    }
    return [namesAtoM, namesNtoZ, namesDifferentASCII];
}
function separateByState(data) {
    var currentUser, currentState, gender;
    var statesWithGenderCount = [];
    for (var i = 0; i < data.length; i++) {
        currentUser = data[i];
        currentState = currentUser.location.state;
        gender = currentUser.gender;
        if (!statesWithGenderCount[currentState]) {
            statesWithGenderCount[currentState] = {
                count: 1,
                male: 0,
                female: 0
            };
            statesWithGenderCount[currentState][gender] = 1;
        }
        else {
            statesWithGenderCount[currentState].count += 1;
            statesWithGenderCount[currentState][gender] += 1;
        }
    }
    return statesWithGenderCount;
}
function separateByAgeRanges(data) {
    var currentUser, age;
    var ageRanges = {
        Zero_to_twenty: 0,
        Twenty_One_to_Forty: 0,
        Forty_One_to_Sixty: 0,
        Sixty_One_to_Eighty: 0,
        Eighty_to_One_Hundred: 0,
        One_Hundred_Plus: 0
    };
    for (var i = 0; i < data.length; i++) {
        currentUser = data[i];
        age = currentUser.dob.age;
        if (age >= 0 && age <= 20) {
            ageRanges.Zero_to_twenty += 1;
        }
        else if (age > 20 && age <= 40) {
            ageRanges.Twenty_One_to_Forty += 1;
        }
        else if (age > 40 && age <= 60) {
            ageRanges.Forty_One_to_Sixty += 1;
        }
        else if (age > 60 && age <= 80) {
            ageRanges.Sixty_One_to_Eighty += 1;
        }
        else if (age > 80 && age <= 100) {
            ageRanges.Eighty_to_One_Hundred += 1;
        }
        else {
            ageRanges.One_Hundred_Plus += 1;
        }
    }
    return ageRanges;
}
function createChartData(type, data) {
    var finalData = [];
    switch (type) {
        case 'male-female-chart':
            var _a = separateMaleAndFemale(data), amountOfFemales = _a[0], amountOfMales = _a[1];
            var _b = getPercentage([
                amountOfFemales.length,
                amountOfMales.length
            ]), percentageOfFemales = _b[0], percentageOfMales = _b[1];
            var femaleChartObj = {
                name: 'Female',
                value: percentageOfFemales
            };
            finalData.push(femaleChartObj);
            var maleChartObj = {
                name: 'Male',
                value: percentageOfMales
            };
            finalData.push(maleChartObj);
            return finalData;
        case 'first-last-name-chart':
            var _c = separateByName(data, 'first'), firstnameAtoM = _c[0], firstnameMtoZ = _c[1], firstnameDifferentASCII = _c[2];
            var _d = separateByName(data, 'last'), lastnameAtoM = _d[0], lastnameMtoZ = _d[1], lastnameDifferentASCII = _d[2];
            var _e = getPercentage([
                firstnameAtoM.length,
                firstnameMtoZ.length,
                firstnameDifferentASCII.length
            ]), firstnameAtoMPercentage = _e[0], firstnameMtoZPercentage = _e[1], firstnameDifferentASCIIPercentage = _e[2];
            var _f = getPercentage([
                lastnameAtoM.length,
                lastnameMtoZ.length,
                lastnameDifferentASCII.length
            ]), lastnameAtoMPercentage = _f[0], lastnameMtoZPercentage = _f[1], lastnameDifferentASCIIPercentage = _f[2];
            var firstNameAtoMChartObj = {
                name: 'A to M',
                value: firstnameAtoMPercentage
            };
            finalData.push([]);
            finalData[0].push(firstNameAtoMChartObj);
            var firstNameMtoZChartObj = {
                name: 'M to Z',
                value: firstnameMtoZPercentage
            };
            finalData[0].push(firstNameMtoZChartObj);
            var firstNameDifferentASCIIChartObj = {
                name: 'Different ASCII',
                value: firstnameDifferentASCIIPercentage
            };
            finalData[0].push(firstNameDifferentASCIIChartObj);
            var lastnameAtoMChartObj = {
                name: 'A to M',
                value: lastnameAtoMPercentage
            };
            finalData.push([]);
            finalData[1].push(lastnameAtoMChartObj);
            var lastnameMtoZChartObj = {
                name: 'M to Z',
                value: lastnameMtoZPercentage
            };
            finalData[1].push(lastnameMtoZChartObj);
            var lastnameDifferentASCIIChartObj = {
                name: 'Different ASCII',
                value: lastnameDifferentASCIIPercentage
            };
            finalData[1].push(lastnameDifferentASCIIChartObj);
            return finalData;
        case 'states-chart':
            var statesData_1 = separateByState(data);
            var convertDataToArr_1 = [];
            Object.keys(statesData_1).forEach(function (state) {
                var stateObj = {
                    state: state,
                    count: statesData_1[state].count,
                    male: statesData_1[state].male,
                    female: statesData_1[state].female
                };
                convertDataToArr_1.push(stateObj);
            });
            var topTenByFemale = convertDataToArr_1.slice(0);
            topTenByFemale = topTenByFemale
                .sort(function (a, b) {
                return b.female - a.female;
            })
                .slice(0, 10);
            topTenByFemale = topTenByFemale.map(function (currentObj) {
                var newObj = {
                    name: currentObj.state,
                    value: currentObj.female
                };
                return newObj;
            });
            finalData.push(topTenByFemale);
            var topTenByMale = convertDataToArr_1.slice(0);
            topTenByMale = topTenByMale
                .sort(function (a, b) {
                return b.male - a.male;
            })
                .slice(0, 10);
            topTenByMale = topTenByMale.map(function (currentObj) {
                var newObj = {
                    name: currentObj.state,
                    value: currentObj.male
                };
                return newObj;
            });
            finalData.push(topTenByMale);
            var topTenOverall = convertDataToArr_1.slice(0);
            topTenOverall = topTenOverall
                .sort(function (a, b) {
                return b.count - a.count;
            })
                .slice(0, 10);
            topTenOverall = topTenOverall.map(function (currentObj) {
                var newObj = {
                    name: currentObj.state,
                    value: currentObj.count
                };
                return newObj;
            });
            finalData.push(topTenOverall);
            return finalData;
        default:
            var ageRangeData_1 = separateByAgeRanges(data);
            var keys = Object.keys(ageRangeData_1);
            var getValuesForPercentage_1 = [];
            keys.forEach(function (ageRange) {
                getValuesForPercentage_1.push(ageRangeData_1[ageRange]);
            });
            var percentages_1 = getPercentage(getValuesForPercentage_1);
            keys.forEach(function (ageRange, i) {
                var ageRangeObj = {
                    name: ageRange.split('_').join(' '),
                    value: percentages_1[i]
                };
                finalData.push(ageRangeObj);
            });
            return finalData;
    }
}
function getPercentage(comparedValues) {
    var valuesToPercentages = [];
    var sum = comparedValues.reduce(function (total, value) { return (total += value); }, 0);
    for (var i = 0; i < comparedValues.length; i++) {
        var currentValue = comparedValues[i];
        var percentage = currentValue / sum;
        valuesToPercentages.push(percentage);
    }
    return valuesToPercentages;
}


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/JJM/coding/nc-trial-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map