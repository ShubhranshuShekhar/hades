webpackJsonp([14],{

/***/ 175:
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the DiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiaryPage = (function () {
    function DiaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiaryPage');
    };
    DiaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-diary',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\diary\diary.html"*/'<!--\n  Generated template for the DiaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Diary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="dashbord-content">\n\n\n  <!-- Contenet of dashboard will go here -->\n\n  <ion-grid style="align-items: center; ">\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/noticeboard_200.png"></ion-img>\n        </ion-row>\n        <ion-row style=""></ion-row>\n        <ion-row class="dashboard-icon-row2">Noticeboard</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/syllabus_200.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Syllabus</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/faculty.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Faculty</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/leave.png"></ion-img>\n        </ion-row>\n        <ion-row class="dashboard-icon-row2">Leave</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/extra.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Ex-Curricular</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/gallery.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Gallery</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Repeat I -->\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/last_icon.png"></ion-img>\n        </ion-row>\n        <ion-row class="dashboard-icon-row2">Examination</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/grades.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Grades</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/timetable.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Routine</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n<!-- Repeated stuffs go here  -->\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/diary.png"></ion-img>\n        </ion-row>\n        <ion-row style=""></ion-row>\n        <ion-row class="dashboard-icon-row2">Diary</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/classwork.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Classwork</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/homework.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Homework</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\diary\diary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DiaryPage);
    return DiaryPage;
}());

//# sourceMappingURL=diary.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diary_diary__ = __webpack_require__(202);
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
    DashboardPage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__diary_diary__["a" /* DiaryPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="dashbord-content">\n\n\n  <!-- Contenet of dashboard will go here -->\n\n  <ion-grid style="align-items: center; ">\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/noticeboard_200.png"></ion-img>\n        </ion-row>\n        <ion-row style=""></ion-row>\n        <ion-row class="dashboard-icon-row2">Noticeboard</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/syllabus_200.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Syllabus</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/faculty.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Faculty</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/leave.png"></ion-img>\n        </ion-row>\n        <ion-row class="dashboard-icon-row2">Leave</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/extra.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Ex-Curricular</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/gallery.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Gallery</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Repeat I -->\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/last_icon.png"></ion-img>\n        </ion-row>\n        <ion-row class="dashboard-icon-row2">Examination</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/grades.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Grades</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/timetable.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Routine</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n<!-- Repeated stuffs go here  -->\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/diary.png"></ion-img>\n        </ion-row>\n        <ion-row style=""></ion-row>\n        <ion-row class="dashboard-icon-row2">Diary</ion-row>\n\n      </ion-col>\n\n      <ion-col class="dashboard-icon-col">\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/classwork.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Classwork</ion-row>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-row class="dashboard-icon-row">\n          <ion-img class="dashboard-icons" src="../../assets/imgs/homework.png"></ion-img>\n        </ion-row>\n        <ion-row style="justify-content: center; padding-top: 7px">Homework</ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the AttendanceTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendanceTeacherPage = (function () {
    function AttendanceTeacherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AttendanceTeacherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendanceTeacherPage');
    };
    AttendanceTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance-teacher',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\attendance-teacher\attendance-teacher.html"*/'<!--\n  Generated template for the AttendanceTeacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>attendance-teacher</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\attendance-teacher\attendance-teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AttendanceTeacherPage);
    return AttendanceTeacherPage;
}());

//# sourceMappingURL=attendance-teacher.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
    function HomeworkStudentPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    HomeworkStudentPage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: "bar",
            data: {
                // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                labels: ["A+", "A", "B", "C", "D"],
                datasets: [
                    {
                        label: "My Homeworks",
                        data: [32, 19, 13, 5, 2],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
    };
    HomeworkStudentPage.prototype.openModal = function () {
        console.log("Modal in assignment has been clicked!!");
        // var data = { message : 'hello world' };
        var modalPage = this.modalCtrl.create('AssignmentModalPage');
        modalPage.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])("barCanvas"),
        __metadata("design:type", Object)
    ], HomeworkStudentPage.prototype, "barCanvas", void 0);
    HomeworkStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-homework-student',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\homework-student\homework-student.html"*/'<!--\n  Generated template for the HomeworkStudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Homework</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n  <ion-grid>\n    <ion-row justify-content-center align-items-bottom style="height: 30%;">\n      <canvas #barCanvas></canvas>\n    </ion-row>\n    <ion-row style="width: 100%">\n      <!-- <ion-list inset>\n        <ion-buttons>This is a button</ion-buttons>\n        <ion-item>Something goes here</ion-item>\n        <p>Write table of 19</p>\n        <p>test 1</p>\n        <p>test 1</p>\n        <p>test 1</p>\n        <p>test 1test 1test 1test 1test 1</p>\n\n        </ion-list> -->\n      <ion-list style="width: 100%">\n        <ion-item-group>\n          <ion-item-divider color="light">April</ion-item-divider>\n          <ion-row class="assignments" (tap)="openModal()">\n            <ion-col col-1 class="color-col"></ion-col>\n            <ion-col col-11>\n              <ion-item class="assignment-list">\n                <h2>Write states and capital of india</h2>\n                <p>\n                  <b>Tuesday, 20th May\n                    <!-- <span style="color: plum">New</span> -->\n                  </b>\n                </p>\n                <!-- <button ion-button clear item-end>View</button> -->\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n<!-- Delete from here -->\n<ion-row class="assignments" (tap)="openModal()">\n    <ion-col col-1 class="color-col" style="background-color: palevioletred !important"></ion-col>\n    <ion-col col-11>\n      <ion-item class="assignment-list">\n        <h2>Write states and capital of india</h2>\n        <p>\n          <b>Tuesday, 20th May\n            <!-- <span style="color: plum">New</span> -->\n          </b>\n        </p>\n        <!-- <button ion-button clear item-end>View</button> -->\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class="assignments" (tap)="openModal()">\n      <ion-col col-1 class="color-col"></ion-col>\n      <ion-col col-11>\n        <ion-item class="assignment-list">\n          <h2>Write states and capital of india</h2>\n          <p>\n            <b>Tuesday, 20th May\n              <!-- <span style="color: plum">New</span> -->\n            </b>\n          </p>\n          <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class="assignments" (tap)="openModal()">\n        <ion-col col-1 class="color-col"></ion-col>\n        <ion-col col-11>\n          <ion-item class="assignment-list">\n            <h2>Write states and capital of india</h2>\n            <p>\n              <b>Tuesday, 20th May\n                <!-- <span style="color: plum">New</span> -->\n              </b>\n            </p>\n            <!-- <button ion-button clear item-end>View</button> -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class="assignments" (tap)="openModal()">\n          <ion-col col-1 class="color-col"></ion-col>\n          <ion-col col-11>\n            <ion-item class="assignment-list">\n              <h2>Write states and capital of india</h2>\n              <p>\n                <b>Tuesday, 20th May\n                  <!-- <span style="color: plum">New</span> -->\n                </b>\n              </p>\n              <!-- <button ion-button clear item-end>View</button> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="assignments" (tap)="openModal()">\n            <ion-col col-1 class="color-col"></ion-col>\n            <ion-col col-11>\n              <ion-item class="assignment-list">\n                <h2>Write states and capital of india</h2>\n                <p>\n                  <b>Tuesday, 20th May\n                    <!-- <span style="color: plum">New</span> -->\n                  </b>\n                </p>\n                <!-- <button ion-button clear item-end>View</button> -->\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class="assignments" (tap)="openModal()">\n              <ion-col col-1 class="color-col"></ion-col>\n              <ion-col col-11>\n                <ion-item class="assignment-list">\n                  <h2>Write states and capital of india</h2>\n                  <p>\n                    <b>Tuesday, 20th May\n                      <!-- <span style="color: plum">New</span> -->\n                    </b>\n                  </p>\n                  <!-- <button ion-button clear item-end>View</button> -->\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class="assignments" (tap)="openModal()">\n                <ion-col col-1 class="color-col"></ion-col>\n                <ion-col col-11>\n                  <ion-item class="assignment-list">\n                    <h2>Write states and capital of india</h2>\n                    <p>\n                      <b>Tuesday, 20th May\n                        <!-- <span style="color: plum">New</span> -->\n                      </b>\n                    </p>\n                    <!-- <button ion-button clear item-end>View</button> -->\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row class="assignments" (tap)="openModal()">\n                  <ion-col col-1 class="color-col"></ion-col>\n                  <ion-col col-11>\n                    <ion-item class="assignment-list">\n                      <h2>Write states and capital of india</h2>\n                      <p>\n                        <b>Tuesday, 20th May\n                          <!-- <span style="color: plum">New</span> -->\n                        </b>\n                      </p>\n                      <!-- <button ion-button clear item-end>View</button> -->\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class="assignments" (tap)="openModal()">\n                    <ion-col col-1 class="color-col"></ion-col>\n                    <ion-col col-11>\n                      <ion-item class="assignment-list">\n                        <h2>Write states and capital of india</h2>\n                        <p>\n                          <b>Tuesday, 20th May\n                            <!-- <span style="color: plum">New</span> -->\n                          </b>\n                        </p>\n                        <!-- <button ion-button clear item-end>View</button> -->\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class="assignments" (tap)="openModal()">\n                      <ion-col col-1 class="color-col"></ion-col>\n                      <ion-col col-11>\n                        <ion-item class="assignment-list">\n                          <h2>Write states and capital of india</h2>\n                          <p>\n                            <b>Tuesday, 20th May\n                              <!-- <span style="color: plum">New</span> -->\n                            </b>\n                          </p>\n                          <!-- <button ion-button clear item-end>View</button> -->\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row class="assignments" (tap)="openModal()">\n                        <ion-col col-1 class="color-col"></ion-col>\n                        <ion-col col-11>\n                          <ion-item class="assignment-list">\n                            <h2>Write states and capital of india</h2>\n                            <p>\n                              <b>Tuesday, 20th May\n                                <!-- <span style="color: plum">New</span> -->\n                              </b>\n                            </p>\n                            <!-- <button ion-button clear item-end>View</button> -->\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n\n\n<!-- Till here -->\n\n        </ion-item-group>\n      </ion-list>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\homework-student\homework-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */]])
    ], HomeworkStudentPage);
    return HomeworkStudentPage;
}());

//# sourceMappingURL=homework-student.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assignment-modal/assignment-modal.module": [
		795,
		7
	],
	"../pages/attendance-teacher/attendance-teacher.module": [
		796,
		13
	],
	"../pages/dashboard-teacher/dashboard-teacher.module": [
		797,
		12
	],
	"../pages/dashboard/dashboard.module": [
		798,
		11
	],
	"../pages/diary/diary.module": [
		799,
		10
	],
	"../pages/home/home.module": [
		800,
		6
	],
	"../pages/homework-student/homework-student.module": [
		801,
		9
	],
	"../pages/login-modal/login-modal.module": [
		802,
		5
	],
	"../pages/login-slider/login-slider.module": [
		803,
		8
	],
	"../pages/posts-create/posts-create.module": [
		804,
		4
	],
	"../pages/profile-edit/profile-edit.module": [
		805,
		3
	],
	"../pages/profile/profile.module": [
		806,
		2
	],
	"../pages/user-posts/user-posts.module": [
		807,
		1
	],
	"../pages/users/users.module": [
		808,
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
webpackAsyncContext.id = 264;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance__ = __webpack_require__(698);
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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anonymous_login_anonymous_login__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_logout_user_logout__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_feed_post_feed__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__heart_button_heart_button__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_relationship_user_relationship__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fcm_handler_fcm_handler__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fcm_topic_fcm_topic__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email_login_email_login__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assignment_chart_assignment_chart__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_attendance_add_attendance__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__student_selector_student_selector__ = __webpack_require__(776);
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
                __WEBPACK_IMPORTED_MODULE_14__add_attendance_add_attendance__["a" /* AddAttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__student_selector_student_selector__["a" /* StudentSelectorComponent */],
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
                __WEBPACK_IMPORTED_MODULE_14__add_attendance_add_attendance__["a" /* AddAttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__student_selector_student_selector__["a" /* StudentSelectorComponent */],
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

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the DashboardTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardTeacherPage = (function () {
    function DashboardTeacherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardTeacherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardTeacherPage');
    };
    DashboardTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard-teacher',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\dashboard-teacher\dashboard-teacher.html"*/'<!--\n  Generated template for the DashboardTeacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>dashboard-teacher</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\dashboard-teacher\dashboard-teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DashboardTeacherPage);
    return DashboardTeacherPage;
}());

//# sourceMappingURL=dashboard-teacher.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(316);
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
    }
    AssignmentChartComponent.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("barCanvas1"),
        __metadata("design:type", Object)
    ], AssignmentChartComponent.prototype, "barCanvas", void 0);
    AssignmentChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "assignment-chart",template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\assignment-chart\assignment-chart.html"*/'<!-- Generated template for the AssignmentChartComponent component -->\n<div>\n  <p>hello i am here</p>\n<canvas #barCanvas1></canvas>\n</div>\n\n\n\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\assignment-chart\assignment-chart.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AssignmentChartComponent);
    return AssignmentChartComponent;
}());

//# sourceMappingURL=assignment-chart.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(499);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_attendance_teacher_attendance_teacher__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_diary_diary__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_homework_student_homework_student__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_slider_login_slider__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_teacher_dashboard_teacher__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_admob_free__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_components_module__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_database_database__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_fcm_fcm__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_analytics_analytics__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_remote_config_remote_config__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Dashboard


//Attendance
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
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                // add the login page as declaration
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                // adding both types of dashboard
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_teacher_dashboard_teacher__["a" /* DashboardTeacherPage */],
                // attendacne page
                __WEBPACK_IMPORTED_MODULE_0__pages_attendance_teacher_attendance_teacher__["a" /* AttendanceTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_slider_login_slider__["a" /* LoginSliderPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_diary_diary__["a" /* DiaryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/assignment-modal/assignment-modal.module#AssignmentModalPageModule', name: 'AssignmentModalPage', segment: 'assignment-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attendance-teacher/attendance-teacher.module#AttendanceTeacherPageModule', name: 'AttendanceTeacherPage', segment: 'attendance-teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard-teacher/dashboard-teacher.module#DashboardTeacherPageModule', name: 'DashboardTeacherPage', segment: 'dashboard-teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diary/diary.module#DiaryPageModule', name: 'DiaryPage', segment: 'diary', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_23__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_teacher_dashboard_teacher__["a" /* DashboardTeacherPage */],
                // Attendance
                __WEBPACK_IMPORTED_MODULE_0__pages_attendance_teacher_attendance_teacher__["a" /* AttendanceTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_slider_login_slider__["a" /* LoginSliderPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_diary_diary__["a" /* DiaryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_24__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_25__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_analytics_analytics__["a" /* AnalyticsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_remote_config_remote_config__["a" /* RemoteConfigProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(175);
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

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnonymousLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(175);
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

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(304);
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

/***/ 705:
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

/***/ 706:
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

/***/ 707:
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

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UploadModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(306);
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

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 323,
	"./af.js": 323,
	"./ar": 324,
	"./ar-dz": 325,
	"./ar-dz.js": 325,
	"./ar-kw": 326,
	"./ar-kw.js": 326,
	"./ar-ly": 327,
	"./ar-ly.js": 327,
	"./ar-ma": 328,
	"./ar-ma.js": 328,
	"./ar-sa": 329,
	"./ar-sa.js": 329,
	"./ar-tn": 330,
	"./ar-tn.js": 330,
	"./ar.js": 324,
	"./az": 331,
	"./az.js": 331,
	"./be": 332,
	"./be.js": 332,
	"./bg": 333,
	"./bg.js": 333,
	"./bm": 334,
	"./bm.js": 334,
	"./bn": 335,
	"./bn.js": 335,
	"./bo": 336,
	"./bo.js": 336,
	"./br": 337,
	"./br.js": 337,
	"./bs": 338,
	"./bs.js": 338,
	"./ca": 339,
	"./ca.js": 339,
	"./cs": 340,
	"./cs.js": 340,
	"./cv": 341,
	"./cv.js": 341,
	"./cy": 342,
	"./cy.js": 342,
	"./da": 343,
	"./da.js": 343,
	"./de": 344,
	"./de-at": 345,
	"./de-at.js": 345,
	"./de-ch": 346,
	"./de-ch.js": 346,
	"./de.js": 344,
	"./dv": 347,
	"./dv.js": 347,
	"./el": 348,
	"./el.js": 348,
	"./en-au": 349,
	"./en-au.js": 349,
	"./en-ca": 350,
	"./en-ca.js": 350,
	"./en-gb": 351,
	"./en-gb.js": 351,
	"./en-ie": 352,
	"./en-ie.js": 352,
	"./en-il": 353,
	"./en-il.js": 353,
	"./en-nz": 354,
	"./en-nz.js": 354,
	"./eo": 355,
	"./eo.js": 355,
	"./es": 356,
	"./es-do": 357,
	"./es-do.js": 357,
	"./es-us": 358,
	"./es-us.js": 358,
	"./es.js": 356,
	"./et": 359,
	"./et.js": 359,
	"./eu": 360,
	"./eu.js": 360,
	"./fa": 361,
	"./fa.js": 361,
	"./fi": 362,
	"./fi.js": 362,
	"./fo": 363,
	"./fo.js": 363,
	"./fr": 364,
	"./fr-ca": 365,
	"./fr-ca.js": 365,
	"./fr-ch": 366,
	"./fr-ch.js": 366,
	"./fr.js": 364,
	"./fy": 367,
	"./fy.js": 367,
	"./gd": 368,
	"./gd.js": 368,
	"./gl": 369,
	"./gl.js": 369,
	"./gom-latn": 370,
	"./gom-latn.js": 370,
	"./gu": 371,
	"./gu.js": 371,
	"./he": 372,
	"./he.js": 372,
	"./hi": 373,
	"./hi.js": 373,
	"./hr": 374,
	"./hr.js": 374,
	"./hu": 375,
	"./hu.js": 375,
	"./hy-am": 376,
	"./hy-am.js": 376,
	"./id": 377,
	"./id.js": 377,
	"./is": 378,
	"./is.js": 378,
	"./it": 379,
	"./it.js": 379,
	"./ja": 380,
	"./ja.js": 380,
	"./jv": 381,
	"./jv.js": 381,
	"./ka": 382,
	"./ka.js": 382,
	"./kk": 383,
	"./kk.js": 383,
	"./km": 384,
	"./km.js": 384,
	"./kn": 385,
	"./kn.js": 385,
	"./ko": 386,
	"./ko.js": 386,
	"./ky": 387,
	"./ky.js": 387,
	"./lb": 388,
	"./lb.js": 388,
	"./lo": 389,
	"./lo.js": 389,
	"./lt": 390,
	"./lt.js": 390,
	"./lv": 391,
	"./lv.js": 391,
	"./me": 392,
	"./me.js": 392,
	"./mi": 393,
	"./mi.js": 393,
	"./mk": 394,
	"./mk.js": 394,
	"./ml": 395,
	"./ml.js": 395,
	"./mn": 396,
	"./mn.js": 396,
	"./mr": 397,
	"./mr.js": 397,
	"./ms": 398,
	"./ms-my": 399,
	"./ms-my.js": 399,
	"./ms.js": 398,
	"./mt": 400,
	"./mt.js": 400,
	"./my": 401,
	"./my.js": 401,
	"./nb": 402,
	"./nb.js": 402,
	"./ne": 403,
	"./ne.js": 403,
	"./nl": 404,
	"./nl-be": 405,
	"./nl-be.js": 405,
	"./nl.js": 404,
	"./nn": 406,
	"./nn.js": 406,
	"./pa-in": 407,
	"./pa-in.js": 407,
	"./pl": 408,
	"./pl.js": 408,
	"./pt": 409,
	"./pt-br": 410,
	"./pt-br.js": 410,
	"./pt.js": 409,
	"./ro": 411,
	"./ro.js": 411,
	"./ru": 412,
	"./ru.js": 412,
	"./sd": 413,
	"./sd.js": 413,
	"./se": 414,
	"./se.js": 414,
	"./si": 415,
	"./si.js": 415,
	"./sk": 416,
	"./sk.js": 416,
	"./sl": 417,
	"./sl.js": 417,
	"./sq": 418,
	"./sq.js": 418,
	"./sr": 419,
	"./sr-cyrl": 420,
	"./sr-cyrl.js": 420,
	"./sr.js": 419,
	"./ss": 421,
	"./ss.js": 421,
	"./sv": 422,
	"./sv.js": 422,
	"./sw": 423,
	"./sw.js": 423,
	"./ta": 424,
	"./ta.js": 424,
	"./te": 425,
	"./te.js": 425,
	"./tet": 426,
	"./tet.js": 426,
	"./tg": 427,
	"./tg.js": 427,
	"./th": 428,
	"./th.js": 428,
	"./tl-ph": 429,
	"./tl-ph.js": 429,
	"./tlh": 430,
	"./tlh.js": 430,
	"./tr": 431,
	"./tr.js": 431,
	"./tzl": 432,
	"./tzl.js": 432,
	"./tzm": 433,
	"./tzm-latn": 434,
	"./tzm-latn.js": 434,
	"./tzm.js": 433,
	"./ug-cn": 435,
	"./ug-cn.js": 435,
	"./uk": 436,
	"./uk.js": 436,
	"./ur": 437,
	"./ur.js": 437,
	"./uz": 438,
	"./uz-latn": 439,
	"./uz-latn.js": 439,
	"./uz.js": 438,
	"./vi": 440,
	"./vi.js": 440,
	"./x-pseudo": 441,
	"./x-pseudo.js": 441,
	"./yo": 442,
	"./yo.js": 442,
	"./zh-cn": 443,
	"./zh-cn.js": 443,
	"./zh-hk": 444,
	"./zh-hk.js": 444,
	"./zh-tw": 445,
	"./zh-tw.js": 445
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
webpackContext.id = 756;

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the AddAttendanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddAttendanceComponent = (function () {
    function AddAttendanceComponent() {
        console.log('Hello AddAttendanceComponent Component');
        this.text = 'Hello World';
    }
    AddAttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-attendance',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\add-attendance\add-attendance.html"*/'<ion-content padding class="login-slider-main">\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-bottom style="height: 80%;">\n\n      <ion-slides pager="true">\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/rocket_200.png"></ion-img>\n\n          <p>Some fucking text goes here!!</p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/chemistry_200.png"></ion-img>\n\n          <p>Another fucking test</p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/last_icon_200.png"></ion-img>\n\n          <p>How your child becoms superhero using this app!!</p>\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <email-login></email-login>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\add-attendance\add-attendance.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AddAttendanceComponent);
    return AddAttendanceComponent;
}());

//# sourceMappingURL=add-attendance.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the StudentSelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var StudentSelectorComponent = (function () {
    function StudentSelectorComponent() {
        console.log('Hello StudentSelectorComponent Component');
        this.text = 'Hello World';
        // this.students ="HAGH";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], StudentSelectorComponent.prototype, "students", void 0);
    StudentSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'student-selector',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\components\student-selector\student-selector.html"*/'<!-- Generated template for the StudentSelectorComponent component -->\n<div>\n  {{text}}\n  {{students}}\n</div>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\components\student-selector\student-selector.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StudentSelectorComponent);
    return StudentSelectorComponent;
}());

//# sourceMappingURL=student-selector.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_homework_student_homework_student__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_attendance_teacher_attendance_teacher__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_analytics_analytics__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_remote_config_remote_config__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_slider_login_slider__ = __webpack_require__(206);
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

// Dashboard

//Attendance






// i need to import the providers




var MyApp = (function () {
    // these providers should be injected in constructor
    function MyApp(platform, statusBar, splashScreen, auth, analytics, remoteConfig, menuCtrl) {
        var _this = this;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.rootPage = null;
        this.loggedIn = false;
        // when the platform is ready
        platform.ready().then(function () {
            // Disable swipe so that menu is not accessible before login
            _this.menuCtrl.swipeEnable(false);
            // we need to check if the user is logged in
            auth.getCurrentUser().then(function (user) {
                _this.loggedIn = true;
                // now we have the user field; lets trace it
                if (user) {
                    // if we have an observable - then show the menu
                    _this.menuCtrl.swipeEnable(true);
                    // let us determine the role of user and show pages accordingly
                    if (user.role == "student") {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_dashboard__["a" /* DashboardPage */];
                    }
                    if (user.role == "teacher") {
                        // this.rootPage = DashboardTeacherPage;
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_attendance_teacher_attendance_teacher__["a" /* AttendanceTeacherPage */];
                    }
                    // this.rootPage = DashboardTeacherPage;
                    // this.rootPage = HomeworkStudentPage;
                }
                else {
                    // else show the login page
                    // TODO: Disbale this
                    _this.menuCtrl.swipeEnable(true);
                    // this.rootPage = DashboardPage;
                    // this.rootPage = HomeworkStudentPage;
                    // TODO: Enable this
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_slider_login_slider__["a" /* LoginSliderPage */];
                    // this.rootPage = LoginPage
                }
                // console.log(user.role);
                statusBar.styleDefault();
                splashScreen.hide();
                remoteConfig.initialize();
            });
        });
    }
    MyApp.prototype.openPage = function () {
        console.log("open page has been clicked in app.c.t");
        // this.rootPage(LoginSliderPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */]);
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
                        return [4 /*yield*/, this.rootPage(__WEBPACK_IMPORTED_MODULE_10__pages_login_slider_login_slider__["a" /* LoginSliderPage */])];
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header class="menu_header">\n    <ion-toolbar>\n      <ion-grid class="menu_header_grid">\n        <ion-row row-center>\n          <ion-col col-8 class="header_title">\n            <ion-label text-capitalize padding-top>danerys targerian</ion-label>\n          </ion-col>\n          <ion-col col-4>\n            <div>\n              <img id="profilepic" src="../assets/imgs/student_70.png" />\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list class="menu_wrapper">\n      <button ion-item class="menu_button">\n        <ion-icon name="home" class="menu_icon" color="primary"></ion-icon>\n        Home\n      </button>\n\n      <button ion-item class="menu_button">\n        <ion-icon name="notifications" class="menu_icon"></ion-icon>\n        Notifications\n      </button>\n      <button ion-item>\n        <ion-icon name="timer" class="menu_icon menu_lastitem"></ion-icon>\n        Time Table\n      </button>\n      <ion-item-divider></ion-item-divider>\n      <button ion-item>\n        <ion-icon name="bookmarks" class="menu_icon"></ion-icon>\n        Diary\n      </button>\n      <button ion-item>\n        <ion-icon name="book" class="menu_icon"></ion-icon>\n        Academics\n      </button>\n      <button menuClose ion-item (click)="openPage()">\n        <ion-icon name="flask" class="menu_icon"></ion-icon>\n        Subjects\n      </button>\n      <ion-item-divider></ion-item-divider>\n      <button ion-item>\n        <ion-icon name="images" class="menu_icon"></ion-icon>\n        Gallery\n      </button>\n      <button ion-item>\n        <ion-icon name="done-all" class="menu_icon"></ion-icon>\n        Fees\n      </button>\n      <button ion-item class="menu_lastitem">\n        <ion-icon name="call" class="menu_icon"></ion-icon>\n        Contact Us\n      </button>\n      <ion-item-divider></ion-item-divider>\n      <button ion-item>\n        <ion-label>\n          <ion-icon name="settings" class="menu_icon" color="primary"></ion-icon>\n          Settings\n        </ion-label>\n\n      </button>\n\n      <button ion-item (tap)="logOut()">\n          <ion-label>\n            <ion-icon name="log-out" class="menu_icon" color="primary" ></ion-icon>\n            Logout\n          </ion-label>\n\n        </button>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- <ion-nav id="nav" #content></ion-nav> -->\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_analytics_analytics__["a" /* AnalyticsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_remote_config_remote_config__["a" /* RemoteConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* MenuController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(290);
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
        this.postsRef = this.afs.collection("posts");
        this.namelistRef = this.afs.collection("namelist");
    }
    DatabaseProvider.prototype.getNameList = function () {
        return this.afs.collection("namelist").doc("IXA2018");
        //   return this.afs.collection<NameList>('namelist', ref =>
        //   ref
        //     .where('userId', '==', userId)
        //  );
    };
    DatabaseProvider.prototype.getStudentsByDivision = function (division) {
        return this.afs
            .collection("students")
            .ref.where("division", "==", division);
    };
    DatabaseProvider.prototype.getRecentPosts = function () {
        return this.afs.collection("posts", function (ref) {
            return ref.orderBy("createdAt", "desc").limit(10);
        });
    };
    DatabaseProvider.prototype.getUserPosts = function (userId) {
        return this.afs.collection("posts", function (ref) {
            return ref
                .orderBy("createdAt", "desc")
                .where("userId", "==", userId)
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
        return this.afs.collection("users", function (ref) { return ref.limit(10); }).valueChanges();
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
            .collection("relationships")
            .doc(docId)
            .set(data);
    };
    DatabaseProvider.prototype.unfollow = function (followerId, followedId) {
        var docId = this.concatIds(followerId, followedId);
        return this.afs
            .collection("relationships")
            .doc(docId)
            .delete();
    };
    DatabaseProvider.prototype.isFollowing = function (followerId, followedId) {
        var docId = this.concatIds(followerId, followedId);
        return this.afs
            .collection("relationships")
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

},[492]);
//# sourceMappingURL=main.js.map