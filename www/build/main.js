webpackJsonp([10],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage(auth) {
        this.auth = auth;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'PostsCreatePage';
        this.tab3Root = 'UsersPage';
        this.tab4Root = 'ProfilePage';
    }
    TabsPage.prototype.ionViewCanEnter = function () {
        return this.auth.isLoggedIn();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab tabIcon="photos" tabTitle="Home" [root]="tab1Root"></ion-tab>\n\n  <ion-tab tabIcon="add-circle" tabTitle="Upload" [root]="tab2Root"></ion-tab>\n\n  <ion-tab tabIcon="contacts" tabTitle="Users" [root]="tab3Root"></ion-tab>\n\n  <ion-tab tabIcon="contact" tabTitle="Profile" [root]="tab4Root"></ion-tab>\n\n</ion-tabs>\n\n\n\n<fcm-handler></fcm-handler>'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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







var FcmProvider = (function () {
    function FcmProvider(firebaseNative, afs, platform, auth) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
        this.auth = auth;
    }
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, status_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is("cordova")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.firebaseNative.hasPermission()];
                    case 1:
                        status_1 = _a.sent();
                        if (status_1.isEnabled) {
                            console.log("already enabled");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 2:
                        token = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!this.platform.is("ios")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    // Saves the token to Firestore when refreshed
    FcmProvider.prototype.monitorTokenRefresh = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            return this.firebaseNative
                .onTokenRefresh()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (token) { return _this.saveTokenToFirestore(token); }));
        }
        else {
            // PWA implementation
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(null);
        }
    };
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var devicesRef, user, docData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!token)
                            return [2 /*return*/];
                        devicesRef = this.afs.collection("devices");
                        return [4 /*yield*/, this.auth.getCurrentUser()];
                    case 1:
                        user = _a.sent();
                        docData = {
                            token: token,
                            userId: user.uid
                        };
                        return [2 /*return*/, devicesRef.doc(token).set(docData)];
                }
            });
        });
    };
    FcmProvider.prototype.subscribeTo = function (topic) {
        return __awaiter(this, void 0, void 0, function () {
            var user, topics, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.auth.getCurrentUser()];
                    case 1:
                        user = _b.sent();
                        if (!this.platform.is("cordova")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.firebaseNative.subscribe(topic)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        topics = (_a = {}, _a[topic] = true, _a);
                        return [2 /*return*/, this.afs
                                .collection("users")
                                .doc(user.uid)
                                .set({ topics: topics }, { merge: true })];
                }
            });
        });
    };
    FcmProvider.prototype.unsubscribeFrom = function (topic) {
        return __awaiter(this, void 0, void 0, function () {
            var user, topics, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.auth.getCurrentUser()];
                    case 1:
                        user = _b.sent();
                        if (!this.platform.is("cordova")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.firebaseNative.unsubscribe(topic)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        topics = (_a = {}, _a[topic] = false, _a);
                        return [2 /*return*/, this.afs
                                .collection("users")
                                .doc(user.uid)
                                .set({ topics: topics }, { merge: true })];
                }
            });
        });
    };
    // Handle incoming messages
    FcmProvider.prototype.listenToNotifications = function () {
        if (this.platform.is("cordova")) {
            return this.firebaseNative.onNotificationOpen();
        }
        else {
            // PWA implementation
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(null);
        }
    };
    // Add this to the logout method to end notifications
    FcmProvider.prototype.stopNotifications = function () {
        return this.firebaseNative.unregister();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__auth_auth__["a" /* AuthProvider */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        // window.location.reload();
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        // this.menuCtrl.enable(true);
        console.log(this.menuCtrl.isEnabled());
        console.log("ionViewDidLoad DashboardPage");
        this.menuCtrl.swipeEnable(true);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomeworkStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeworkStudentPage = (function () {
    function HomeworkStudentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeworkStudentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeworkStudentPage');
    };
    HomeworkStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homework-student',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\homework-student\homework-student.html"*/'<!--\n  Generated template for the HomeworkStudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Homework</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <assignment-chart></assignment-chart>\n<ion-grid>\n  <ion-row justify-content-center align-items-bottom style="height: 30%;">\n\n  </ion-row>\n  <ion-row></ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\homework-student\homework-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomeworkStudentPage);
    return HomeworkStudentPage;
}());

//# sourceMappingURL=homework-student.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginSliderPage = (function () {
    function LoginSliderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginSliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginSliderPage');
    };
    LoginSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-slider',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\login-slider\login-slider.html"*/'<!-- Lets us put some sliders here -->\n\n<ion-content padding class="login-slider-main">\n  <ion-grid style="height: 100%">\n    <ion-row justify-content-center align-items-bottom style="height: 80%;">\n      <ion-slides pager="true">\n        <ion-slide>\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/rocket_200.png"></ion-img>\n          <p>Some fucking text goes here!!</p>\n        </ion-slide>\n        <ion-slide>\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/chemistry_200.png"></ion-img>\n          <p>Another fucking test</p>\n        </ion-slide>\n        <ion-slide>\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/last_icon_200.png"></ion-img>\n          <p>How your child becoms superhero using this app!!</p>\n        </ion-slide>\n      </ion-slides>\n      <email-login></email-login>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\login-slider\login-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginSliderPage);
    return LoginSliderPage;
}());

//# sourceMappingURL=login-slider.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsProvider = (function () {
    function AnalyticsProvider(app, auth, platform, firebaseNative) {
        this.platform = platform;
        this.firebaseNative = firebaseNative;
        if (platform.is('cordova')) {
            // Tracks the current page name
            app.viewDidEnter.subscribe(function (view) {
                firebaseNative.setScreenName(view.name);
                firebaseNative.logEvent('page_view', { page: view.name });
            });
            auth.user.subscribe(function (user) {
                var uid = user ? user.uid : 'guest';
                firebaseNative.setUserId(uid);
            });
        }
    }
    AnalyticsProvider.prototype.logEvent = function (event, data) {
        if (this.platform.is('cordova')) {
            console.log('analytics log...', event);
            return this.firebaseNative.logEvent(event, data);
        }
    };
    AnalyticsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */]])
    ], AnalyticsProvider);
    return AnalyticsProvider;
}());

//# sourceMappingURL=analytics.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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



var RemoteConfigProvider = (function () {
    function RemoteConfigProvider(firebaseNative, platform) {
        this.firebaseNative = firebaseNative;
        this.platform = platform;
        this.defaults = {
            profile_banner: 'Default Hello'
        };
    }
    RemoteConfigProvider.prototype.initialize = function () {
        if (this.platform.is('cordova')) {
            var win_1 = window;
            win_1.FirebasePlugin.fetch(600, function () {
                console.log('fetched remote config ');
                win_1.FirebasePlugin.activateFetched(function () {
                    console.log('activated remote config');
                }, function (error) {
                    console.error('error initializing remote config', error);
                });
            }, function (error) {
                console.error('error fetching remote config', error);
            });
        }
    };
    RemoteConfigProvider.prototype.getValue = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var win_2, remoteVal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        win_2 = window;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                win_2.FirebasePlugin.getValue(key, function (value) {
                                    console.log('value', value);
                                    resolve(value);
                                }, function (error) {
                                    console.log('error getting value' + error);
                                    reject(error);
                                });
                            })];
                    case 1:
                        remoteVal = _a.sent();
                        return [2 /*return*/, remoteVal || this.defaults[key]];
                    case 2: 
                    // PWA Implementation
                    return [2 /*return*/, this.defaults[key]];
                }
            });
        });
    };
    RemoteConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], RemoteConfigProvider);
    return RemoteConfigProvider;
}());

//# sourceMappingURL=remote-config.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		791,
		9
	],
	"../pages/home/home.module": [
		792,
		6
	],
	"../pages/homework-student/homework-student.module": [
		793,
		8
	],
	"../pages/login-modal/login-modal.module": [
		794,
		5
	],
	"../pages/login-slider/login-slider.module": [
		795,
		7
	],
	"../pages/posts-create/posts-create.module": [
		796,
		4
	],
	"../pages/profile-edit/profile-edit.module": [
		797,
		3
	],
	"../pages/profile/profile.module": [
		798,
		2
	],
	"../pages/user-posts/user-posts.module": [
		799,
		1
	],
	"../pages/users/users.module": [
		800,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 261;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\login\login.html"*/'\n\n\n\n\n\n<ion-content padding class="login-content">\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-bottom style="height: 70%;">\n\n<!-- <ion-col col-12 justify-content-center style="align-content: center"> -->\n\n      <ion-img style="background: transparent !important; position: absolute; bottom:35%" width="200" height="200" src="../../assets/imgs/school_logo_2.png"></ion-img>\n\n      <!-- <ion-col col-6>This column will take 6 columns</ion-col> -->\n\n    <!-- </ion-col> -->\n\n\n\n\n\n\n\n    </ion-row>\n\n    <ion-row justify-content-center align-items-top style="height: 30%; ">\n\n        <email-login></email-login>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chance__);
// This is the auth provider
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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









var AuthProvider = (function () {
    function AuthProvider(afAuth, afs, facebook, platform) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.facebook = facebook;
        this.platform = platform;
        this.user = this.afAuth.authState.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null);
            }
        }));
    }
    //// FACEBOOK ////
    AuthProvider.prototype.facebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is("cordova")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.nativeFacebookLogin()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.webFacebookLogin()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.nativeFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, facebookCredential, firebaseUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.facebook.login(["email", "public_profile"])];
                    case 1:
                        response = _a.sent();
                        facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]()
                                .signInWithCredential(facebookCredential)];
                    case 2:
                        firebaseUser = _a.sent();
                        return [4 /*yield*/, this.updateUserData(firebaseUser)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.webFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, credential, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        return [4 /*yield*/, this.updateUserData(credential.user)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Save custom user data in Firestore
    AuthProvider.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || new __WEBPACK_IMPORTED_MODULE_8_chance__().name({ prefix: true }),
            photoURL: user.photoURL || "https://goo.gl/7kz9qG"
        };
        return userRef.set(data, { merge: true });
    };
    //// ANONYMOUS ////
    AuthProvider.prototype.anonymousLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signInAnonymously()];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.updateUserData(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //// EMAIL ////
    AuthProvider.prototype.emailLogin = function (useremail, userpassword) {
        return __awaiter(this, void 0, void 0, function () {
            var myuser, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("i am in emailLogin function");
                        console.log(useremail);
                        console.log(userpassword);
                        myuser = {
                            "email": "ss@ss.ss",
                            "password": "Hello@123"
                        };
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(useremail, userpassword)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.updateUserData(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //// HELPERS ////
    AuthProvider.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.afAuth.auth.signOut()];
            });
        });
    };
    // Current user as a Promise. Useful for one-off operations.
    AuthProvider.prototype.getCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.user.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["first"])()).toPromise()];
            });
        });
    };
    // Current user as boolean Promise. Used in router guards
    AuthProvider.prototype.isLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, !!user];
                }
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anonymous_login_anonymous_login__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_logout_user_logout__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_feed_post_feed__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__heart_button_heart_button__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_relationship_user_relationship__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fcm_handler_fcm_handler__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fcm_topic_fcm_topic__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email_login_email_login__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assignment_chart_assignment_chart__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__anonymous_login_anonymous_login__["a" /* AnonymousLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_logout_user_logout__["a" /* UserLogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__post_feed_post_feed__["a" /* PostFeedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__heart_button_heart_button__["a" /* HeartButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_relationship_user_relationship__["a" /* UserRelationshipComponent */],
                __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__["a" /* ImageUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__["b" /* UploadModal */],
                __WEBPACK_IMPORTED_MODULE_10__fcm_handler_fcm_handler__["a" /* FcmHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__fcm_topic_fcm_topic__["a" /* FcmTopicComponent */],
                __WEBPACK_IMPORTED_MODULE_12__email_login_email_login__["a" /* EmailLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__assignment_chart_assignment_chart__["a" /* AssignmentChartComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__["a" /* FacebookLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__anonymous_login_anonymous_login__["a" /* AnonymousLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_logout_user_logout__["a" /* UserLogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__post_feed_post_feed__["a" /* PostFeedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__heart_button_heart_button__["a" /* HeartButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_relationship_user_relationship__["a" /* UserRelationshipComponent */],
                __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__["a" /* ImageUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__["b" /* UploadModal */],
                __WEBPACK_IMPORTED_MODULE_10__fcm_handler_fcm_handler__["a" /* FcmHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__fcm_topic_fcm_topic__["a" /* FcmTopicComponent */],
                __WEBPACK_IMPORTED_MODULE_12__email_login_email_login__["a" /* EmailLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__assignment_chart_assignment_chart__["a" /* AssignmentChartComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__["b" /* UploadModal */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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




/**
 * Generated class for the EmailLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EmailLoginComponent = (function () {
    function EmailLoginComponent(auth, navCtrl, loadingCtrl, modalCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        // console.log("Hello EmailLoginComponent Component");
        // this.text = "Hello Email controller";
    }
    EmailLoginComponent.prototype.openModal = function () {
        var data = { message: 'hello world' };
        var modalPage = this.modalCtrl.create('LoginModalPage');
        modalPage.present();
    };
    EmailLoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    EmailLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "email-login",template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\email-login\email-login.html"*/'<button ion-button icon-left full color="light" (tap)="openModal()">\n\n    <ion-icon name="lock" style="padding-right: 13px"></ion-icon>\n\n\n\n    Login\n\n  </button>\n\n\n\n  <!-- <button ion-button (click)="openModal()">Open Modal</button> -->\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\email-login\email-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], EmailLoginComponent);
    return EmailLoginComponent;
}());

//# sourceMappingURL=email-login.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AssignmentChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AssignmentChartComponent = (function () {
    function AssignmentChartComponent() {
        console.log('Hello AssignmentChartComponent Component');
        this.text = 'Hello World';
    }
    AssignmentChartComponent.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], AssignmentChartComponent.prototype, "barCanvas", void 0);
    AssignmentChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'assignment-chart',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\assignment-chart\assignment-chart.html"*/'<!-- Generated template for the AssignmentChartComponent component -->\n\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\assignment-chart\assignment-chart.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AssignmentChartComponent);
    return AssignmentChartComponent;
}());

//# sourceMappingURL=assignment-chart.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(497);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_homework_student_homework_student__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_slider_login_slider__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_admob_free__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_components_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_database_database__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_fcm_fcm__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_analytics_analytics__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_remote_config_remote_config__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// NgModules help organize an application into cohesive blocks of functionality.













/// DELETE this line
//import { firebaseConfig } from '../env';
/// ADD your firebase web credentials in the object below
var firebaseConfig = {
    apiKey: "AIzaSyAjS8xPmk31RBYrYKfpr3YrZkFJOUOOlc0",
    authDomain: "hades-1729.firebaseapp.com",
    databaseURL: "https://hades-1729.firebaseio.com",
    projectId: "hades-1729",
    storageBucket: "hades-1729.appspot.com",
    messagingSenderId: "145252880003"
};









// Add declarable classes—components, directives, and pipes—to a declarations list.
// Declare these classes in exactly one module of the application.
// Declare them in a module if they belong to that particular module.
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                // add the login page as declaration
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_login_slider_login_slider__["a" /* LoginSliderPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homework-student/homework-student.module#HomeworkStudentPageModule', name: 'HomeworkStudentPage', segment: 'homework-student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-modal/login-modal.module#LoginModalPageModule', name: 'LoginModalPage', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-slider/login-slider.module#LoginSliderPageModule', name: 'LoginSliderPage', segment: 'login-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/posts-create/posts-create.module#PostsCreatePageModule', name: 'PostsCreatePage', segment: 'posts-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-posts/user-posts.module#UserPostsPageModule', name: 'UserPostsPage', segment: 'user-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_login_slider_login_slider__["a" /* LoginSliderPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_21__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_22__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_analytics_analytics__["a" /* AnalyticsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_remote_config_remote_config__["a" /* RemoteConfigProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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




var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
    }
    FacebookLoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.facebookLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FacebookLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'facebook-login',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\facebook-login\facebook-login.html"*/'<button ion-button icon-left full (tap)="login()">\n\n  <ion-icon name="logo-facebook"></ion-icon>\n\n  \n\n  Login with Facebook\n\n</button>\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\facebook-login\facebook-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());

//# sourceMappingURL=facebook-login.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnonymousLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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





var AnonymousLoginComponent = (function () {
    function AnonymousLoginComponent(auth, navCtrl, loadingCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AnonymousLoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loader = this.loadingCtrl.create({
                            content: "Logging in anonymously..."
                        });
                        loader.present();
                        return [4 /*yield*/, this.auth.anonymousLogin()];
                    case 1:
                        _a.sent();
                        loader.dismiss();
                        return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnonymousLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'anonymous-login',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\anonymous-login\anonymous-login.html"*/'<button ion-button icon-left full color="light" (tap)="login()">\n\n  <ion-icon name="eye-off"></ion-icon>\n\n  \n\n  Login Anonymously\n\n</button>\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\anonymous-login\anonymous-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], AnonymousLoginComponent);
    return AnonymousLoginComponent;
}());

//# sourceMappingURL=anonymous-login.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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




var UserLogoutComponent = (function () {
    function UserLogoutComponent(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
    }
    UserLogoutComponent.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.logout()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserLogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-logout',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\user-logout\user-logout.html"*/'<button ion-button color="light" (tap)="logout()">\n\n  Logout\n\n</button>\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\user-logout\user-logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());

//# sourceMappingURL=user-logout.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostFeedComponent = (function () {
    function PostFeedComponent(db, auth) {
        this.db = db;
        this.auth = auth;
    }
    PostFeedComponent.prototype.ngOnInit = function () {
        this.posts = this.db.getRecentPosts().snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (arr) { return arr.map(function (doc) {
            return __assign({ id: doc.payload.doc.id }, doc.payload.doc.data());
        }); }));
    };
    PostFeedComponent.prototype.trackByFn = function (index, post) {
        return post.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PostFeedComponent.prototype, "userId", void 0);
    PostFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'post-feed',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\post-feed\post-feed.html"*/'<ng-container *ngIf="(auth.user | async) || {} as user">\n\n\n\n\n\n  <ion-card *ngFor="let post of posts | async; trackBy: trackByFn">\n\n    <img [src]="post.img || \'https://goo.gl/n62NG4\'" onError="this.src=\'https://goo.gl/LJagAi\'">\n\n    <ion-card-content>\n\n      {{ post.content }}\n\n\n\n      <hr>\n\n\n\n      <heart-button [userId]="user.uid" [post]="post"></heart-button>\n\n      \n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n</ng-container>'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\post-feed\post-feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], PostFeedComponent);
    return PostFeedComponent;
}());

//# sourceMappingURL=post-feed.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeartButtonComponent = (function () {
    function HeartButtonComponent(db) {
        this.db = db;
    }
    Object.defineProperty(HeartButtonComponent.prototype, "heartCount", {
        get: function () {
            return this.post.hearts ? Object.keys(this.post.hearts).length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeartButtonComponent.prototype, "isHearted", {
        get: function () {
            return !!(this.post.hearts && this.post.hearts[this.userId]);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeartButtonComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HeartButtonComponent.prototype, "post", void 0);
    HeartButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'heart-button',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\heart-button\heart-button.html"*/'\n\n\n\n<ion-icon name="heart-outline" \n\n          *ngIf="!isHearted"\n\n          (tap)="db.createHeart(userId, post)">\n\n        \n\n</ion-icon>     \n\n\n\n<ion-icon name="heart"\n\n          *ngIf="isHearted" \n\n          (tap)="db.removeHeart(userId, post)">\n\n        \n\n</ion-icon>\n\n\n\n\n\n{{ heartCount }}\n\n\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\heart-button\heart-button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */]])
    ], HeartButtonComponent);
    return HeartButtonComponent;
}());

//# sourceMappingURL=heart-button.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRelationshipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRelationshipComponent = (function () {
    function UserRelationshipComponent(db) {
        this.db = db;
    }
    UserRelationshipComponent.prototype.ngOnInit = function () {
        this.isOwner = this.currentUserId === this.followId;
        this.isFollowing = this.db.isFollowing(this.currentUserId, this.followId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserRelationshipComponent.prototype, "currentUserId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserRelationshipComponent.prototype, "followId", void 0);
    UserRelationshipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-relationship',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\user-relationship\user-relationship.html"*/'\n\n<ng-container *ngIf="isFollowing | async; then unfollow else follow">\n\n  <!-- button appears here -->\n\n</ng-container>\n\n\n\n<ng-template #unfollow>\n\n  <button ion-button round \n\n          (tap)="db.unfollow(currentUserId, followId)">\n\n\n\n    Unfollow\n\n  </button>\n\n</ng-template>\n\n\n\n\n\n<ng-template #follow>\n\n  <button ion-button round outline\n\n          (tap)="db.follow(currentUserId, followId)"\n\n          [disabled]="isOwner">\n\n\n\n      Follow\n\n  </button>\n\n</ng-template>\n\n\n\n\n\n\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\user-relationship\user-relationship.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */]])
    ], UserRelationshipComponent);
    return UserRelationshipComponent;
}());

//# sourceMappingURL=user-relationship.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UploadModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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





var ImageUploadComponent = (function () {
    function ImageUploadComponent(storage, modalCtrl, camera) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.uploadFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ImageUploadComponent.prototype.startUpload = function (file) {
        var _this = this;
        var path = this.userId + "/" + new Date().getTime();
        // The main task
        this.image = "data:image/jpg;base64," + file;
        this.task = this.storage.ref(path).putString(this.image, "data_url");
        // Define and present the modal component
        var uploadModal = this.modalCtrl.create(UploadModal, { task: this.task });
        uploadModal.present();
        // Listen to the progress, when 100% dismiss the modal
        this.task
            .percentageChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["filter"])(function (val) { return val === 100; }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (complete) {
            uploadModal.dismiss();
        }))
            .subscribe();
        // Listen for the Download URL
        this.task
            .downloadURL()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (url) { return _this.uploadFinished.emit(url); }))
            .subscribe();
    };
    ImageUploadComponent.prototype.captureAndUpload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            targetWidth: 500,
                            targetHeight: 500,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        base64 = _a.sent();
                        this.startUpload(base64);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageUploadComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ImageUploadComponent.prototype, "uploadFinished", void 0);
    ImageUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "image-upload",template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\image-upload\image-upload.html"*/'<button ion-fab mini (tap)="captureAndUpload()">\n\n  <ion-icon name="camera"></ion-icon>\n\n</button>'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\image-upload\image-upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());

var UploadModal = (function () {
    function UploadModal(params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.task = params.get("task");
        this.progress = this.task.percentageChanges();
    }
    UploadModal.prototype.cancel = function () {
        this.task.cancel();
        this.viewCtrl.dismiss();
    };
    UploadModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n\n  <ion-header>\n  \n    <ion-navbar>\n      <ion-title>Uploading to Firebase...</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n  <ion-content padding text-center>\n    <p>Upload is \n    \n      <ion-badge item-end>{{ progress | async | number }}%</ion-badge> complete\n      \n    </p>\n\n    <button ion-button color=\"danger\" (tap)=\"cancel()\">Cancel</button>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]])
    ], UploadModal);
    return UploadModal;
}());

//# sourceMappingURL=image-upload.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FcmHandlerComponent = (function () {
    function FcmHandlerComponent(fcm, toastCtrl) {
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
    }
    FcmHandlerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the initial token
        this.fcm.getToken();
        // Update on refresh
        this.fcm.monitorTokenRefresh().subscribe();
        // Listen to incoming messages
        this.fcm
            .listenToNotifications()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (msg) {
            // show a toast
            if (msg) {
                var toast = _this.toastCtrl.create({
                    message: msg.body,
                    duration: 3000
                });
                toast.present();
            }
        }))
            .subscribe();
    };
    FcmHandlerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "fcm-handler",template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\fcm-handler\fcm-handler.html"*/'<!-- Generated template for the FcmHandlerComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\fcm-handler\fcm-handler.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], FcmHandlerComponent);
    return FcmHandlerComponent;
}());

//# sourceMappingURL=fcm-handler.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FcmTopicComponent = (function () {
    function FcmTopicComponent(fcm, platform) {
        this.fcm = fcm;
        this.platform = platform;
    }
    Object.defineProperty(FcmTopicComponent.prototype, "isSubscribed", {
        get: function () {
            return this.user.topics && this.user.topics[this.topic];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FcmTopicComponent.prototype, "isSupportedPlatform", {
        get: function () {
            return this.platform.is('cordova');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FcmTopicComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FcmTopicComponent.prototype, "topic", void 0);
    FcmTopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fcm-topic',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\fcm-topic\fcm-topic.html"*/'<ng-container *ngIf="isSupportedPlatform; else notSupported">\n\n\n\n<button ion-button color="secondary" \n\n        *ngIf="!isSubscribed" \n\n        (tap)="fcm.subscribeTo(topic)">\n\n\n\n  Get {{ topic }} notifications\n\n</button>\n\n\n\n<button ion-button color="danger" \n\n        *ngIf="isSubscribed" \n\n        (tap)="fcm.unsubscribeFrom(topic)">\n\n\n\n  End {{ topic }} notifications \n\n</button>\n\n\n\n</ng-container>\n\n\n\n\n\n<ng-template #notSupported>\n\n  <em>You must be on a native device to subscribe to topic notifications</em>\n\n</ng-template>'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\fcm-topic\fcm-topic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
    ], FcmTopicComponent);
    return FcmTopicComponent;
}());

//# sourceMappingURL=fcm-topic.js.map

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 320,
	"./af.js": 320,
	"./ar": 321,
	"./ar-dz": 322,
	"./ar-dz.js": 322,
	"./ar-kw": 323,
	"./ar-kw.js": 323,
	"./ar-ly": 324,
	"./ar-ly.js": 324,
	"./ar-ma": 325,
	"./ar-ma.js": 325,
	"./ar-sa": 326,
	"./ar-sa.js": 326,
	"./ar-tn": 327,
	"./ar-tn.js": 327,
	"./ar.js": 321,
	"./az": 328,
	"./az.js": 328,
	"./be": 329,
	"./be.js": 329,
	"./bg": 330,
	"./bg.js": 330,
	"./bm": 331,
	"./bm.js": 331,
	"./bn": 332,
	"./bn.js": 332,
	"./bo": 333,
	"./bo.js": 333,
	"./br": 334,
	"./br.js": 334,
	"./bs": 335,
	"./bs.js": 335,
	"./ca": 336,
	"./ca.js": 336,
	"./cs": 337,
	"./cs.js": 337,
	"./cv": 338,
	"./cv.js": 338,
	"./cy": 339,
	"./cy.js": 339,
	"./da": 340,
	"./da.js": 340,
	"./de": 341,
	"./de-at": 342,
	"./de-at.js": 342,
	"./de-ch": 343,
	"./de-ch.js": 343,
	"./de.js": 341,
	"./dv": 344,
	"./dv.js": 344,
	"./el": 345,
	"./el.js": 345,
	"./en-au": 346,
	"./en-au.js": 346,
	"./en-ca": 347,
	"./en-ca.js": 347,
	"./en-gb": 348,
	"./en-gb.js": 348,
	"./en-ie": 349,
	"./en-ie.js": 349,
	"./en-il": 350,
	"./en-il.js": 350,
	"./en-nz": 351,
	"./en-nz.js": 351,
	"./eo": 352,
	"./eo.js": 352,
	"./es": 353,
	"./es-do": 354,
	"./es-do.js": 354,
	"./es-us": 355,
	"./es-us.js": 355,
	"./es.js": 353,
	"./et": 356,
	"./et.js": 356,
	"./eu": 357,
	"./eu.js": 357,
	"./fa": 358,
	"./fa.js": 358,
	"./fi": 359,
	"./fi.js": 359,
	"./fo": 360,
	"./fo.js": 360,
	"./fr": 361,
	"./fr-ca": 362,
	"./fr-ca.js": 362,
	"./fr-ch": 363,
	"./fr-ch.js": 363,
	"./fr.js": 361,
	"./fy": 364,
	"./fy.js": 364,
	"./gd": 365,
	"./gd.js": 365,
	"./gl": 366,
	"./gl.js": 366,
	"./gom-latn": 367,
	"./gom-latn.js": 367,
	"./gu": 368,
	"./gu.js": 368,
	"./he": 369,
	"./he.js": 369,
	"./hi": 370,
	"./hi.js": 370,
	"./hr": 371,
	"./hr.js": 371,
	"./hu": 372,
	"./hu.js": 372,
	"./hy-am": 373,
	"./hy-am.js": 373,
	"./id": 374,
	"./id.js": 374,
	"./is": 375,
	"./is.js": 375,
	"./it": 376,
	"./it.js": 376,
	"./ja": 377,
	"./ja.js": 377,
	"./jv": 378,
	"./jv.js": 378,
	"./ka": 379,
	"./ka.js": 379,
	"./kk": 380,
	"./kk.js": 380,
	"./km": 381,
	"./km.js": 381,
	"./kn": 382,
	"./kn.js": 382,
	"./ko": 383,
	"./ko.js": 383,
	"./ky": 384,
	"./ky.js": 384,
	"./lb": 385,
	"./lb.js": 385,
	"./lo": 386,
	"./lo.js": 386,
	"./lt": 387,
	"./lt.js": 387,
	"./lv": 388,
	"./lv.js": 388,
	"./me": 389,
	"./me.js": 389,
	"./mi": 390,
	"./mi.js": 390,
	"./mk": 391,
	"./mk.js": 391,
	"./ml": 392,
	"./ml.js": 392,
	"./mn": 393,
	"./mn.js": 393,
	"./mr": 394,
	"./mr.js": 394,
	"./ms": 395,
	"./ms-my": 396,
	"./ms-my.js": 396,
	"./ms.js": 395,
	"./mt": 397,
	"./mt.js": 397,
	"./my": 398,
	"./my.js": 398,
	"./nb": 399,
	"./nb.js": 399,
	"./ne": 400,
	"./ne.js": 400,
	"./nl": 401,
	"./nl-be": 402,
	"./nl-be.js": 402,
	"./nl.js": 401,
	"./nn": 403,
	"./nn.js": 403,
	"./pa-in": 404,
	"./pa-in.js": 404,
	"./pl": 405,
	"./pl.js": 405,
	"./pt": 406,
	"./pt-br": 407,
	"./pt-br.js": 407,
	"./pt.js": 406,
	"./ro": 408,
	"./ro.js": 408,
	"./ru": 409,
	"./ru.js": 409,
	"./sd": 410,
	"./sd.js": 410,
	"./se": 411,
	"./se.js": 411,
	"./si": 412,
	"./si.js": 412,
	"./sk": 413,
	"./sk.js": 413,
	"./sl": 414,
	"./sl.js": 414,
	"./sq": 415,
	"./sq.js": 415,
	"./sr": 416,
	"./sr-cyrl": 417,
	"./sr-cyrl.js": 417,
	"./sr.js": 416,
	"./ss": 418,
	"./ss.js": 418,
	"./sv": 419,
	"./sv.js": 419,
	"./sw": 420,
	"./sw.js": 420,
	"./ta": 421,
	"./ta.js": 421,
	"./te": 422,
	"./te.js": 422,
	"./tet": 423,
	"./tet.js": 423,
	"./tg": 424,
	"./tg.js": 424,
	"./th": 425,
	"./th.js": 425,
	"./tl-ph": 426,
	"./tl-ph.js": 426,
	"./tlh": 427,
	"./tlh.js": 427,
	"./tr": 428,
	"./tr.js": 428,
	"./tzl": 429,
	"./tzl.js": 429,
	"./tzm": 430,
	"./tzm-latn": 431,
	"./tzm-latn.js": 431,
	"./tzm.js": 430,
	"./ug-cn": 432,
	"./ug-cn.js": 432,
	"./uk": 433,
	"./uk.js": 433,
	"./ur": 434,
	"./ur.js": 434,
	"./uz": 435,
	"./uz-latn": 436,
	"./uz-latn.js": 436,
	"./uz.js": 435,
	"./vi": 437,
	"./vi.js": 437,
	"./x-pseudo": 438,
	"./x-pseudo.js": 438,
	"./yo": 439,
	"./yo.js": 439,
	"./zh-cn": 440,
	"./zh-cn.js": 440,
	"./zh-hk": 441,
	"./zh-hk.js": 441,
	"./zh-tw": 442,
	"./zh-tw.js": 442
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 754;

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_analytics_analytics__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_remote_config_remote_config__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_slider_login_slider__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_homework_student_homework_student__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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






// i need to import the providers





var MyApp = (function () {
    // these providers should be injected in constructor
    function MyApp(platform, statusBar, splashScreen, auth, analytics, remoteConfig, menuCtrl) {
        // this.counter = 0;
        var _this = this;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.rootPage = null;
        this.loggedIn = false;
        // menuController: menuCtrl;
        // when the platform is ready
        platform.ready().then(function () {
            _this.menuCtrl.swipeEnable(false);
            // we need to check if the user is logged in
            auth.getCurrentUser()
                .then(function (user) {
                _this.loggedIn = true;
                // this is a cool way of showing pages
                if (user) {
                    // if we have an observable - then show the tabs page
                    _this.menuCtrl.swipeEnable(true);
                    //   if (this.counter == 0) {
                    //   window.location.reload();
                    //   this.counter = + 1;
                    // }
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__["a" /* DashboardPage */];
                }
                else {
                    // else show the login page
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_slider_login_slider__["a" /* LoginSliderPage */];
                    // this.rootPage = LoginPage
                }
                statusBar.styleDefault();
                splashScreen.hide();
                remoteConfig.initialize();
            });
        });
    }
    MyApp.prototype.openPage = function () {
        console.log("open page has been clicked in app.c.t");
        // this.rootPage(LoginSliderPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */]);
        // this.rootPage(HomeworkStudentPage);
    };
    MyApp.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("User is logging out");
                        return [4 /*yield*/, this.auth.logout()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.rootPage(__WEBPACK_IMPORTED_MODULE_8__pages_login_slider_login_slider__["a" /* LoginSliderPage */])];
                    case 2:
                        _a.sent();
                        // await this.navCtrl.setRoot(LoginSliderPage)
                        window.location.reload();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header class="menu_header">\n    <ion-toolbar>\n      <ion-grid class="menu_header_grid">\n        <ion-row row-center>\n          <ion-col col-8 class="header_title">\n            <ion-label text-capitalize padding-top>danerys targerian</ion-label>\n          </ion-col>\n          <ion-col col-4>\n            <div>\n              <img id="profilepic" src="../assets/imgs/student_70.png" />\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list class="menu_wrapper">\n      <button ion-item class="menu_button">\n        <ion-icon name="home" class="menu_icon" color="primary"></ion-icon>\n        Home\n      </button>\n\n      <button ion-item class="menu_button">\n        <ion-icon name="notifications" class="menu_icon"></ion-icon>\n        Notifications\n      </button>\n      <button ion-item>\n        <ion-icon name="timer" class="menu_icon menu_lastitem"></ion-icon>\n        Time Table\n      </button>\n      <ion-item-divider></ion-item-divider>\n      <button ion-item>\n        <ion-icon name="bookmarks" class="menu_icon"></ion-icon>\n        Diary\n      </button>\n      <button ion-item>\n        <ion-icon name="book" class="menu_icon"></ion-icon>\n        Academics\n      </button>\n      <button menuClose ion-item (click)="openPage()">\n        <ion-icon name="flask" class="menu_icon"></ion-icon>\n        Subjects\n      </button>\n      <ion-item-divider></ion-item-divider>\n      <button ion-item>\n        <ion-icon name="images" class="menu_icon"></ion-icon>\n        Gallery\n      </button>\n      <button ion-item>\n        <ion-icon name="done-all" class="menu_icon"></ion-icon>\n        Fees\n      </button>\n      <button ion-item class="menu_lastitem">\n        <ion-icon name="call" class="menu_icon"></ion-icon>\n        Contact Us\n      </button>\n      <ion-item-divider></ion-item-divider>\n      <button ion-item>\n        <ion-label>\n          <ion-icon name="settings" class="menu_icon" color="primary"></ion-icon>\n          Settings\n        </ion-label>\n\n      </button>\n\n      <button ion-item (tap)="logOut()">\n          <ion-label>\n            <ion-icon name="log-out" class="menu_icon" color="primary" ></ion-icon>\n            Logout\n          </ion-label>\n\n        </button>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- <ion-nav id="nav" #content></ion-nav> -->\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_analytics_analytics__["a" /* AnalyticsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_remote_config_remote_config__["a" /* RemoteConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(93);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatabaseProvider = (function () {
    function DatabaseProvider(afs) {
        this.afs = afs;
        this.postsRef = this.afs.collection('posts');
    }
    DatabaseProvider.prototype.getRecentPosts = function () {
        return this.afs.collection('posts', function (ref) {
            return ref.orderBy('createdAt', 'desc').limit(10);
        });
    };
    DatabaseProvider.prototype.getUserPosts = function (userId) {
        return this.afs.collection('posts', function (ref) {
            return ref
                .orderBy('createdAt', 'desc')
                .where('userId', '==', userId)
                .limit(10);
        });
    };
    DatabaseProvider.prototype.createPost = function (userId, data) {
        var createdAt = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["firestore"].FieldValue.serverTimestamp();
        var doc = __assign({ userId: userId, createdAt: createdAt }, data);
        return this.postsRef.add(doc);
    };
    DatabaseProvider.prototype.deletePost = function (id) {
        return this.postsRef.doc(id).delete();
    };
    //// HEARTS ////
    DatabaseProvider.prototype.createHeart = function (userId, post) {
        var hearts = post.hearts || {};
        hearts[userId] = true;
        return this.afs.doc("posts/" + post.id).update({ hearts: hearts });
    };
    DatabaseProvider.prototype.removeHeart = function (userId, post) {
        var hearts = post.hearts;
        delete post.hearts[userId];
        return this.afs.doc("posts/" + post.id).update({ hearts: hearts });
    };
    //// RELATIONSHIPS ////
    DatabaseProvider.prototype.getUsers = function () {
        return this.afs.collection('users', function (ref) { return ref.limit(10); }).valueChanges();
    };
    DatabaseProvider.prototype.follow = function (followerId, followedId) {
        var docId = this.concatIds(followerId, followedId);
        var createdAt = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["firestore"].FieldValue.serverTimestamp();
        var data = {
            followerId: followerId,
            followedId: followedId,
            createdAt: createdAt
        };
        return this.afs
            .collection('relationships')
            .doc(docId)
            .set(data);
    };
    DatabaseProvider.prototype.unfollow = function (followerId, followedId) {
        var docId = this.concatIds(followerId, followedId);
        return this.afs
            .collection('relationships')
            .doc(docId)
            .delete();
    };
    DatabaseProvider.prototype.isFollowing = function (followerId, followedId) {
        var docId = this.concatIds(followerId, followedId);
        return this.afs
            .collection('relationships')
            .doc(docId)
            .valueChanges();
    };
    // Helper to format the docId for relationships
    DatabaseProvider.prototype.concatIds = function (a, b) {
        return a + "_" + b;
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[488]);
//# sourceMappingURL=main.js.map