webpackJsonp([17],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(36);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\code\hades\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab tabIcon="photos" tabTitle="Home" [root]="tab1Root"></ion-tab>\n\n  <ion-tab tabIcon="add-circle" tabTitle="Upload" [root]="tab2Root"></ion-tab>\n\n  <ion-tab tabIcon="contacts" tabTitle="Users" [root]="tab3Root"></ion-tab>\n\n  <ion-tab tabIcon="contact" tabTitle="Profile" [root]="tab4Root"></ion-tab>\n\n</ion-tabs>\n\n\n\n<fcm-handler></fcm-handler>'/*ion-inline-end:"C:\code\hades\src\pages\tabs\tabs.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth__ = __webpack_require__(36);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-diary',template:/*ion-inline-start:"C:\code\hades\src\pages\diary\diary.html"*/'<!--\n\n  Generated template for the DiaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Diary</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="dashbord-content">\n\n\n\n\n\n  <!-- Contenet of dashboard will go here -->\n\n\n\n  <ion-grid style="align-items: center; ">\n\n\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/noticeboard_200.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style=""></ion-row>\n\n        <ion-row class="dashboard-icon-row2">Noticeboard</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/syllabus_200.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Syllabus</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/faculty.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Faculty</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/leave.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row class="dashboard-icon-row2">Leave</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/extra.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Ex-Curricular</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/gallery.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Gallery</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Repeat I -->\n\n\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/last_icon.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row class="dashboard-icon-row2">Examination</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/grades.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Grades</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/timetable.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Routine</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Repeated stuffs go here  -->\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/diary.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style=""></ion-row>\n\n        <ion-row class="dashboard-icon-row2">Diary</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/classwork.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Classwork</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/homework.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Homework</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\diary\diary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DiaryPage);
    return DiaryPage;
}());

//# sourceMappingURL=diary.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diary_diary__ = __webpack_require__(201);
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
            selector: "page-dashboard",template:/*ion-inline-start:"C:\code\hades\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="dashbord-content">\n\n\n\n\n\n  <!-- Contenet of dashboard will go here -->\n\n\n\n  <ion-grid style="align-items: center; ">\n\n\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/noticeboard_200.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style=""></ion-row>\n\n        <ion-row class="dashboard-icon-row2">Noticeboard</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/syllabus_200.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Syllabus</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/faculty.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Faculty</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/leave.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row class="dashboard-icon-row2">Leave</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/extra.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Ex-Curricular</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/gallery.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Gallery</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Repeat I -->\n\n\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/last_icon.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row class="dashboard-icon-row2">Examination</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/grades.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Grades</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/timetable.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Routine</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Repeated stuffs go here  -->\n\n\n\n\n\n    <ion-row style="padding-top: 23px; border-bottom: 2px inset black;">\n\n\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/diary.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style=""></ion-row>\n\n        <ion-row class="dashboard-icon-row2">Diary</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col class="dashboard-icon-col">\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/classwork.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Classwork</ion-row>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-row class="dashboard-icon-row">\n\n          <ion-img class="dashboard-icons" src="../../assets/imgs/homework.png"></ion-img>\n\n        </ion-row>\n\n        <ion-row style="justify-content: center; padding-top: 7px">Homework</ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailsTogglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(75);
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
 * Generated class for the StudentDetailsTogglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentDetailsTogglePage = (function () {
    function StudentDetailsTogglePage(navCtrl, navParams, viewCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.attendance = new Map();
        console.log("##############88888888888888########");
        console.log(navParams.get('studentsData'));
        console.log(navParams.get('date'));
        console.log(navParams.get('month'));
        console.log(navParams.get('year'));
        console.log(navParams.get('day'));
        this.students = navParams.get('studentsData');
        if (this.students) {
            // console.log(this.students)
            this.students.forEach(function (student) {
                console.log(student.id);
                _this.attendance[student.id] = student.is_present;
            });
        }
    }
    StudentDetailsTogglePage.prototype.ngOnChanges = function () {
        if (this.students) {
            console.log("--------Changed Inside modal ----------");
            console.log(this.students);
        }
    };
    StudentDetailsTogglePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentDetailsTogglePage');
    };
    StudentDetailsTogglePage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    StudentDetailsTogglePage.prototype.allPresent = function () {
        this.check = true;
        console.log("Mark true button is clicked!!");
        for (var key in this.attendance) {
            this.attendance[key] = true;
        }
    };
    StudentDetailsTogglePage.prototype.allAbsent = function () {
        this.check = false;
        console.log("Mark false button is clicked!!");
        // console.log(this.attendance["fiddigl01"]);
        for (var key in this.attendance) {
            this.attendance[key] = false;
        }
    };
    StudentDetailsTogglePage.prototype.testData = function () {
        console.log("Test data has been clicked!");
        for (var key in this.attendance) {
            console.log(this.attendance[key]);
        }
    };
    StudentDetailsTogglePage.prototype.addAttendance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.createAttendanceStudent(this.attendance, "Monday", "14", "May", "2018", "IXA2018")];
                    case 1:
                        _a.sent();
                        console.log("Create Attendance has been clicked!!");
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentDetailsTogglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student-details-toggle',template:/*ion-inline-start:"C:\code\hades\src\pages\student-details-toggle\student-details-toggle.html"*/'<ion-content padding>\n\n  <button ion-button full (click)=\'addAttendance()\'>Save Attendance</button>\n\n  <button ion-button (click)=\'allPresent()\'>All Present</button>\n\n  <button ion-button (click)=\'allAbsent()\'>All Absent</button>\n\n  <button ion-button (click)=\'exit()\'>Exit</button>\n\n  <button ion-button (click)=\'testData()\'>Test</button>\n\n\n\n\n\n  <ion-list>\n\n    <div *ngFor="let student of students">\n\n      <ion-item class="itemClass">\n\n        <ion-label>{{student.first_name}} {{student.last_name}}</ion-label>\n\n        <!-- <ion-toggle checked="{{attendance[student.id]}}"></ion-toggle> -->\n\n        <ion-toggle [(ngModel)]="attendance[student.id]"></ion-toggle>\n\n        \n\n      </ion-item>\n\n    </div>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\code\hades\src\pages\student-details-toggle\student-details-toggle.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _d || Object])
    ], StudentDetailsTogglePage);
    return StudentDetailsTogglePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=student-details-toggle.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_popover__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_details_toggle_student_details_toggle__ = __webpack_require__(203);
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
    function AttendanceTeacherPage(navCtrl, navParams, auth, db, popoverCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.db = db;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.attendance = [];
        this.students = [];
        var students;
        var studentDocs = this.db.getStudentsByDivision("IXA2018");
        studentDocs
            .get()
            .then(function (snapshot) {
            console.log(snapshot);
            snapshot.forEach(function (doc) {
                // console.log(doc.data().first_name);
                var tempStudent = {
                    first_name: doc.data().first_name,
                    last_name: doc.data().last_name,
                    id: doc.data().id,
                    is_present: true
                };
                _this.students.push(tempStudent);
            });
            // var temp = [doc.data().first_name, doc.data().last_name];
            // var temp = doc.data().last_name;
            // console.log(students);
        })
            .catch(function (err) {
            console.log("I am in error -->", err);
        });
        // console.log(this.students);
        var attendanceDoc = this.db.getAttendancenyDivision("IXA2018");
        attendanceDoc
            .get()
            .then(function (snapshot) {
            // console.log(snapshot);
            snapshot.forEach(function (doc) {
                // console.log("--------------");
                // var test = "field1";
                var data = doc.data();
                // console.log(data.date);
                // console.log(data.present);
                var tempData = {
                    day: data.day,
                    date: data.date,
                    month: data.month,
                    absent: data.absent,
                    present: data.present,
                    day_view: true,
                    month_view: true
                };
                _this.attendance.push(tempData);
                // console.log(tempData);
            });
            // console.log(this.attendance);
        })
            .catch(function (err) {
            console.log(err);
        });
    }
    AttendanceTeacherPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AttendanceTeacherPage");
        // this.setSlideVars();
        // this.students = this.getStudentData("IXA2018");
        // var studentDocs = this.db.getStudentsByDivision("IXA2018");
    };
    AttendanceTeacherPage.prototype.getStudentData = function (division) {
        console.log(division);
        var temp;
        var Student;
        // Student = [
        //   {
        //     first_name: "Jack",
        //     last_name: "Daniels",
        //     id: "jackda01",
        //     is_present: true
        //   },
        //   {
        //     first_name: "Jhonny",
        //     last_name: "Wakcer",
        //     id: "wacher01",
        //     is_present: false
        //   },
        //   {
        //     first_name: "Jin",
        //     last_name: "Beam",
        //     id: "beamjin01",
        //     is_present: false
        //   },
        //   {
        //     first_name: "Glen",
        //     last_name: "Fiddicch",
        //     id: "fiddigl01",
        //     is_present: true
        //   }
        // ];
        return Student;
    };
    AttendanceTeacherPage.prototype.displayAttendance = function (attendance) {
        console.log("I am in parent");
        console.log(attendance);
    };
    AttendanceTeacherPage.prototype.displayFilter = function (val) {
        console.log("Got this from popover!");
    };
    AttendanceTeacherPage.prototype.presentPopover = function () {
        // var data = this.filterData;
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__popover_popover__["a" /* PopoverPage */], {}, { cssClass: "my-custom-popover" });
        popover.present();
        popover.onDidDismiss(function (data) {
            if (data) {
                _this.assign_filters(data);
            }
            // console.log(data);
            // this.filterData = data;
            // console.log("@@@@@@@@@@@@@@@@@@@@@@");
            // // console.log(this.filterData);
        });
    };
    AttendanceTeacherPage.prototype.assign_filters = function (inputfilters) {
        console.log("******************");
        console.log();
        var i = 0;
        this.attendance.forEach(function (data) {
            if (inputfilters[6] == "") {
                data.month_view = true;
            }
            else if (data.month == inputfilters[6]) {
                data.month_view = true;
            }
            else {
                data.month_view = false;
            }
            // console.log(inputfilters);
            switch (data.day) {
                case "Monday": {
                    if (inputfilters[0])
                        data.day_view = true;
                    else
                        data.day_view = false;
                    break;
                }
                case "Tuesday": {
                    if (inputfilters[1])
                        data.day_view = true;
                    else
                        data.day_view = false;
                    break;
                }
                case "Wednesday": {
                    if (inputfilters[2])
                        data.day_view = true;
                    else
                        data.day_view = false;
                    break;
                }
                case "Thursday": {
                    if (inputfilters[3])
                        data.day_view = true;
                    else
                        data.day_view = false;
                    break;
                }
                case "Friday": {
                    if (inputfilters[4])
                        data.day_view = true;
                    else
                        data.day_view = false;
                    break;
                }
                case "Saturday": {
                    if (inputfilters[5])
                        data.day_view = true;
                    else
                        data.day_view = false;
                    break;
                }
            }
            // for(i = 0; i<5; i++)    {
            // console.log(inputfilters[i])
        });
    };
    AttendanceTeacherPage.prototype.addAttendance = function () {
        console.log("Add attendance clicked!");
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__student_details_toggle_student_details_toggle__["a" /* StudentDetailsTogglePage */], {
            studentsData: this.students,
            date: "13",
            month: "July",
            year: "2018",
            day: "Monday"
        });
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Slides */]) === "function" && _a || Object)
    ], AttendanceTeacherPage.prototype, "slides", void 0);
    AttendanceTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-attendance-teacher",template:/*ion-inline-start:"C:\code\hades\src\pages\attendance-teacher\attendance-teacher.html"*/'<!--\n\n  Generated template for the AttendanceTeacherPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header> -->\n\n\n\n  <!-- <ion-navbar>\n\n    <ion-title>attendance-teacher</ion-title>\n\n\n\n  </ion-navbar> -->\n\n  <!-- <ion-label>Attendance</ion-label> -->\n\n  <!-- <button ion-button icon-only (click)="presentPopover($event)">\n\n      <ion-icon name="more"></ion-icon>\n\n    </button>\n\n</ion-header> -->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Attendance</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="presentPopover($event)">\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <button ion-button full (click)=\'addAttendance()\'>Add Attendance</button>\n\n    <!-- <button ion-button full (click)=\'presentPopover()\'>Add Filters</button> -->\n\n    <button ion-button full (click)=\'openModal()\'>Add Filters</button>\n\n\n\n  <list-display [attendanceData] = "attendance" class="listDisplay"></list-display>\n\n\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\attendance-teacher\attendance-teacher.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]) === "function" && _g || Object])
    ], AttendanceTeacherPage);
    return AttendanceTeacherPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=attendance-teacher.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.text = "hello";
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.monthSelect = "";
        this.resetFilters();
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PopoverPage");
    };
    PopoverPage.prototype.submitFilter = function () {
        console.log("Submit filter has been clicked!!");
        // console.log("All day =>" + this.allDay);
        // console.log(this.mondayToggle);
        // console.log(this.tuesdayToggle);
        // console.log(this.wednesdayToggle);
        // console.log(this.thursdayToggle);
        // console.log(this.fridayToggle);
        // console.log(this.saturdayToggle);
        console.log("^^^^^^^^^^^^^^^^^^^^");
        this.filter = [this.mondayToggle, this.tuesdayToggle, this.wednesdayToggle, this.thursdayToggle, this.fridayToggle, this.saturdayToggle, this.monthSelect];
        console.log(this.filter);
        // console.log(this.monthSelect);
        this.viewCtrl.dismiss(this.filter);
    };
    PopoverPage.prototype.ngOnChanges = function () {
    };
    // Toggle logic
    PopoverPage.prototype.resetFilters = function () {
        this.allDaysToggle = true;
        this.mondayToggle = true;
        this.tuesdayToggle = true;
        this.wednesdayToggle = true;
        this.thursdayToggle = true;
        this.fridayToggle = true;
        this.saturdayToggle = true;
        this.filter = [this.mondayToggle, this.tuesdayToggle, this.wednesdayToggle, this.thursdayToggle, this.fridayToggle, this.saturdayToggle, this.monthSelect];
    };
    PopoverPage.prototype.allDay = function () {
        // console.log(event);
        // console.log(this.allDay);
        if (this.allDaysToggle == false) {
            this.mondayToggle = false;
            this.tuesdayToggle = false;
            this.wednesdayToggle = false;
            this.thursdayToggle = false;
            this.fridayToggle = false;
            this.saturdayToggle = false;
        }
        if (this.allDaysToggle == true) {
            this.mondayToggle = true;
            this.tuesdayToggle = true;
            this.wednesdayToggle = true;
            this.thursdayToggle = true;
            this.fridayToggle = true;
            this.saturdayToggle = true;
        }
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-popover",template:/*ion-inline-start:"C:\code\hades\src\pages\popover\popover.html"*/'<ion-list class="list-popover">\n\n  <!-- <ion-list-header>\n\n        Filters\n\n      </ion-list-header> -->\n\n  <ion-item class="item-leave-height">\n\n    <ion-label>Month</ion-label>\n\n    <ion-select [(ngModel)]="monthSelect">\n\n      <ion-option *ngFor="let month of months">{{month}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <!-- <ion-item-divider>\n\n        Item Divider\n\n      </ion-item-divider> -->\n\n  <!-- <ion-label>Days</ion-label> -->\n\n  <ion-item>\n\n    <ion-label>All Days</ion-label>\n\n    <ion-toggle [(ngModel)]="allDaysToggle" (ionChange)="allDay($event)"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Monday</ion-label>\n\n    <ion-toggle [(ngModel)]="mondayToggle"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Tuesday</ion-label>\n\n    <ion-toggle [(ngModel)]="tuesdayToggle" ></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Wednesday</ion-label>\n\n    <ion-toggle [(ngModel)]="wednesdayToggle"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Thursday</ion-label>\n\n    <ion-toggle [(ngModel)]="thursdayToggle"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Friday</ion-label>\n\n    <ion-toggle [(ngModel)]="fridayToggle"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Saturday</ion-label>\n\n    <ion-toggle [(ngModel)]="saturdayToggle"></ion-toggle>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n<ion-grid>\n\n  <ion-row class="leave-margin">\n\n    <button ion-button (click)="resetFilters()">Reset</button>\n\n    <button ion-button (click)="submitFilter()">Submit</button>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\popover\popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(318);
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
            selector: 'page-homework-student',template:/*ion-inline-start:"C:\code\hades\src\pages\homework-student\homework-student.html"*/'<!--\n\n  Generated template for the HomeworkStudentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Homework</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row justify-content-center align-items-bottom style="height: 30%;">\n\n      <canvas #barCanvas></canvas>\n\n    </ion-row>\n\n    <ion-row style="width: 100%">\n\n      <!-- <ion-list inset>\n\n        <ion-buttons>This is a button</ion-buttons>\n\n        <ion-item>Something goes here</ion-item>\n\n        <p>Write table of 19</p>\n\n        <p>test 1</p>\n\n        <p>test 1</p>\n\n        <p>test 1</p>\n\n        <p>test 1test 1test 1test 1test 1</p>\n\n\n\n        </ion-list> -->\n\n      <ion-list style="width: 100%">\n\n        <ion-item-group>\n\n          <ion-item-divider color="light">April</ion-item-divider>\n\n          <ion-row class="assignments" (tap)="openModal()">\n\n            <ion-col col-1 class="color-col"></ion-col>\n\n            <ion-col col-11>\n\n              <ion-item class="assignment-list">\n\n                <h2>Write states and capital of india</h2>\n\n                <p>\n\n                  <b>Tuesday, 20th May\n\n                    <!-- <span style="color: plum">New</span> -->\n\n                  </b>\n\n                </p>\n\n                <!-- <button ion-button clear item-end>View</button> -->\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n<!-- Delete from here -->\n\n<ion-row class="assignments" (tap)="openModal()">\n\n    <ion-col col-1 class="color-col" style="background-color: palevioletred !important"></ion-col>\n\n    <ion-col col-11>\n\n      <ion-item class="assignment-list">\n\n        <h2>Write states and capital of india</h2>\n\n        <p>\n\n          <b>Tuesday, 20th May\n\n            <!-- <span style="color: plum">New</span> -->\n\n          </b>\n\n        </p>\n\n        <!-- <button ion-button clear item-end>View</button> -->\n\n      </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="assignments" (tap)="openModal()">\n\n      <ion-col col-1 class="color-col"></ion-col>\n\n      <ion-col col-11>\n\n        <ion-item class="assignment-list">\n\n          <h2>Write states and capital of india</h2>\n\n          <p>\n\n            <b>Tuesday, 20th May\n\n              <!-- <span style="color: plum">New</span> -->\n\n            </b>\n\n          </p>\n\n          <!-- <button ion-button clear item-end>View</button> -->\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="assignments" (tap)="openModal()">\n\n        <ion-col col-1 class="color-col"></ion-col>\n\n        <ion-col col-11>\n\n          <ion-item class="assignment-list">\n\n            <h2>Write states and capital of india</h2>\n\n            <p>\n\n              <b>Tuesday, 20th May\n\n                <!-- <span style="color: plum">New</span> -->\n\n              </b>\n\n            </p>\n\n            <!-- <button ion-button clear item-end>View</button> -->\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="assignments" (tap)="openModal()">\n\n          <ion-col col-1 class="color-col"></ion-col>\n\n          <ion-col col-11>\n\n            <ion-item class="assignment-list">\n\n              <h2>Write states and capital of india</h2>\n\n              <p>\n\n                <b>Tuesday, 20th May\n\n                  <!-- <span style="color: plum">New</span> -->\n\n                </b>\n\n              </p>\n\n              <!-- <button ion-button clear item-end>View</button> -->\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="assignments" (tap)="openModal()">\n\n            <ion-col col-1 class="color-col"></ion-col>\n\n            <ion-col col-11>\n\n              <ion-item class="assignment-list">\n\n                <h2>Write states and capital of india</h2>\n\n                <p>\n\n                  <b>Tuesday, 20th May\n\n                    <!-- <span style="color: plum">New</span> -->\n\n                  </b>\n\n                </p>\n\n                <!-- <button ion-button clear item-end>View</button> -->\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="assignments" (tap)="openModal()">\n\n              <ion-col col-1 class="color-col"></ion-col>\n\n              <ion-col col-11>\n\n                <ion-item class="assignment-list">\n\n                  <h2>Write states and capital of india</h2>\n\n                  <p>\n\n                    <b>Tuesday, 20th May\n\n                      <!-- <span style="color: plum">New</span> -->\n\n                    </b>\n\n                  </p>\n\n                  <!-- <button ion-button clear item-end>View</button> -->\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row class="assignments" (tap)="openModal()">\n\n                <ion-col col-1 class="color-col"></ion-col>\n\n                <ion-col col-11>\n\n                  <ion-item class="assignment-list">\n\n                    <h2>Write states and capital of india</h2>\n\n                    <p>\n\n                      <b>Tuesday, 20th May\n\n                        <!-- <span style="color: plum">New</span> -->\n\n                      </b>\n\n                    </p>\n\n                    <!-- <button ion-button clear item-end>View</button> -->\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row class="assignments" (tap)="openModal()">\n\n                  <ion-col col-1 class="color-col"></ion-col>\n\n                  <ion-col col-11>\n\n                    <ion-item class="assignment-list">\n\n                      <h2>Write states and capital of india</h2>\n\n                      <p>\n\n                        <b>Tuesday, 20th May\n\n                          <!-- <span style="color: plum">New</span> -->\n\n                        </b>\n\n                      </p>\n\n                      <!-- <button ion-button clear item-end>View</button> -->\n\n                    </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row class="assignments" (tap)="openModal()">\n\n                    <ion-col col-1 class="color-col"></ion-col>\n\n                    <ion-col col-11>\n\n                      <ion-item class="assignment-list">\n\n                        <h2>Write states and capital of india</h2>\n\n                        <p>\n\n                          <b>Tuesday, 20th May\n\n                            <!-- <span style="color: plum">New</span> -->\n\n                          </b>\n\n                        </p>\n\n                        <!-- <button ion-button clear item-end>View</button> -->\n\n                      </ion-item>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row class="assignments" (tap)="openModal()">\n\n                      <ion-col col-1 class="color-col"></ion-col>\n\n                      <ion-col col-11>\n\n                        <ion-item class="assignment-list">\n\n                          <h2>Write states and capital of india</h2>\n\n                          <p>\n\n                            <b>Tuesday, 20th May\n\n                              <!-- <span style="color: plum">New</span> -->\n\n                            </b>\n\n                          </p>\n\n                          <!-- <button ion-button clear item-end>View</button> -->\n\n                        </ion-item>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                    <ion-row class="assignments" (tap)="openModal()">\n\n                        <ion-col col-1 class="color-col"></ion-col>\n\n                        <ion-col col-11>\n\n                          <ion-item class="assignment-list">\n\n                            <h2>Write states and capital of india</h2>\n\n                            <p>\n\n                              <b>Tuesday, 20th May\n\n                                <!-- <span style="color: plum">New</span> -->\n\n                              </b>\n\n                            </p>\n\n                            <!-- <button ion-button clear item-end>View</button> -->\n\n                          </ion-item>\n\n                        </ion-col>\n\n                      </ion-row>\n\n\n\n\n\n<!-- Till here -->\n\n\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\homework-student\homework-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */]])
    ], HomeworkStudentPage);
    return HomeworkStudentPage;
}());

//# sourceMappingURL=homework-student.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(36);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-login-slider',template:/*ion-inline-start:"C:\code\hades\src\pages\login-slider\login-slider.html"*/'<!-- Lets us put some sliders here -->\n\n\n\n<ion-content padding class="login-slider-main">\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-bottom style="height: 80%;">\n\n      <ion-slides pager="true">\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/rocket_200.png"></ion-img>\n\n          <p>Some fucking text goes here!!</p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/chemistry_200.png"></ion-img>\n\n          <p>Another fucking test</p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/last_icon_200.png"></ion-img>\n\n          <p>How your child becoms superhero using this app!!</p>\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <email-login></email-login>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\login-slider\login-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginSliderPage);
    return LoginSliderPage;
}());

//# sourceMappingURL=login-slider.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 220:
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
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assignment-modal/assignment-modal.module": [
		803,
		7
	],
	"../pages/attendance-teacher/attendance-teacher.module": [
		804,
		16
	],
	"../pages/dashboard-teacher/dashboard-teacher.module": [
		805,
		15
	],
	"../pages/dashboard/dashboard.module": [
		807,
		14
	],
	"../pages/diary/diary.module": [
		806,
		13
	],
	"../pages/home/home.module": [
		808,
		6
	],
	"../pages/homework-student/homework-student.module": [
		809,
		12
	],
	"../pages/login-modal/login-modal.module": [
		810,
		5
	],
	"../pages/login-slider/login-slider.module": [
		818,
		11
	],
	"../pages/popover/popover.module": [
		811,
		10
	],
	"../pages/posts-create/posts-create.module": [
		812,
		4
	],
	"../pages/profile-edit/profile-edit.module": [
		813,
		3
	],
	"../pages/profile/profile.module": [
		819,
		2
	],
	"../pages/student-details-toggle/student-details-toggle.module": [
		816,
		9
	],
	"../pages/teststuffs/teststuffs.module": [
		814,
		8
	],
	"../pages/user-posts/user-posts.module": [
		815,
		1
	],
	"../pages/users/users.module": [
		817,
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
webpackAsyncContext.id = 265;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\code\hades\src\pages\login\login.html"*/'\n\n\n\n\n\n<ion-content padding class="login-content">\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-bottom style="height: 70%;">\n\n<!-- <ion-col col-12 justify-content-center style="align-content: center"> -->\n\n      <ion-img style="background: transparent !important; position: absolute; bottom:35%" width="200" height="200" src="../../assets/imgs/school_logo_2.png"></ion-img>\n\n      <!-- <ion-col col-6>This column will take 6 columns</ion-col> -->\n\n    <!-- </ion-col> -->\n\n\n\n\n\n\n\n    </ion-row>\n\n    <ion-row justify-content-center align-items-top style="height: 30%; ">\n\n        <email-login></email-login>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance__ = __webpack_require__(702);
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

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anonymous_login_anonymous_login__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_logout_user_logout__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_feed_post_feed__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__heart_button_heart_button__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_relationship_user_relationship__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_upload_image_upload__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fcm_handler_fcm_handler__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fcm_topic_fcm_topic__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email_login_email_login__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assignment_chart_assignment_chart__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_attendance_add_attendance__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__student_selector_student_selector__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__list_display_list_display__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__popover_popover__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__attendance_filter_attendance_filter__ = __webpack_require__(783);
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
                __WEBPACK_IMPORTED_MODULE_16__list_display_list_display__["a" /* ListDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_17__popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_18__attendance_filter_attendance_filter__["a" /* AttendanceFilterComponent */],
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
                __WEBPACK_IMPORTED_MODULE_16__list_display_list_display__["a" /* ListDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_17__popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_18__attendance_filter_attendance_filter__["a" /* AttendanceFilterComponent */],
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

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
            selector: "email-login",template:/*ion-inline-start:"C:\code\hades\src\components\email-login\email-login.html"*/'<button ion-button icon-left full color="light" (tap)="openModal()">\n\n    <ion-icon name="lock" style="padding-right: 13px"></ion-icon>\n\n\n\n    Login\n\n  </button>\n\n\n\n  <!-- <button ion-button (click)="openModal()">Open Modal</button> -->\n\n'/*ion-inline-end:"C:\code\hades\src\components\email-login\email-login.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(318);
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
            selector: "assignment-chart",template:/*ion-inline-start:"C:\code\hades\src\components\assignment-chart\assignment-chart.html"*/'<!-- Generated template for the AssignmentChartComponent component -->\n\n<div>\n\n  <p>hello i am here</p>\n\n<canvas #barCanvas1></canvas>\n\n</div>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\code\hades\src\components\assignment-chart\assignment-chart.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-dashboard-teacher',template:/*ion-inline-start:"C:\code\hades\src\pages\dashboard-teacher\dashboard-teacher.html"*/'<!--\n\n  Generated template for the DashboardTeacherPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>dashboard-teacher</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\code\hades\src\pages\dashboard-teacher\dashboard-teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DashboardTeacherPage);
    return DashboardTeacherPage;
}());

//# sourceMappingURL=dashboard-teacher.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeststuffsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the TeststuffsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeststuffsPage = (function () {
    function TeststuffsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeststuffsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeststuffsPage');
    };
    TeststuffsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teststuffs',template:/*ion-inline-start:"C:\code\hades\src\pages\teststuffs\teststuffs.html"*/'<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n  <button class="calendar_plan" style="width: 100% !important">\n\n    <div class="cl_plan">\n\n      <div class="cl_title">Today</div>\n\n      <div class="cl_copy">22nd  April  2018</div>\n\n      <div class="cl_add">\n\n        <i class="fas fa-plus"></i>\n\n      </div>\n\n    </div>\n\n  </button>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\code\hades\src\pages\teststuffs\teststuffs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeststuffsPage);
    return TeststuffsPage;
}());

//# sourceMappingURL=teststuffs.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(504);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_student_details_toggle_student_details_toggle__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_teststuffs_teststuffs__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_popover_popover__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_attendance_teacher_attendance_teacher__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_diary_diary__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_homework_student_homework_student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_slider_login_slider__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_teacher_dashboard_teacher__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_sort_sort__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_admob_free__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_components_module__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_database_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_fcm_fcm__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_analytics_analytics__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_remote_config_remote_config__ = __webpack_require__(209);
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
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                // add the login page as declaration
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                // adding both types of dashboard
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_teacher_dashboard_teacher__["a" /* DashboardTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_popover_popover__["a" /* PopoverPage */],
                // attendacne page
                __WEBPACK_IMPORTED_MODULE_3__pages_attendance_teacher_attendance_teacher__["a" /* AttendanceTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_teststuffs_teststuffs__["a" /* TeststuffsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_slider_login_slider__["a" /* LoginSliderPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_diary_diary__["a" /* DiaryPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_student_details_toggle_student_details_toggle__["a" /* StudentDetailsTogglePage */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_sort_sort__["a" /* SortPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/assignment-modal/assignment-modal.module#AssignmentModalPageModule', name: 'AssignmentModalPage', segment: 'assignment-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attendance-teacher/attendance-teacher.module#AttendanceTeacherPageModule', name: 'AttendanceTeacherPage', segment: 'attendance-teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard-teacher/dashboard-teacher.module#DashboardTeacherPageModule', name: 'DashboardTeacherPage', segment: 'dashboard-teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diary/diary.module#DiaryPageModule', name: 'DiaryPage', segment: 'diary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homework-student/homework-student.module#HomeworkStudentPageModule', name: 'HomeworkStudentPage', segment: 'homework-student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-modal/login-modal.module#LoginModalPageModule', name: 'LoginModalPage', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/posts-create/posts-create.module#PostsCreatePageModule', name: 'PostsCreatePage', segment: 'posts-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teststuffs/teststuffs.module#TeststuffsPageModule', name: 'TeststuffsPage', segment: 'teststuffs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-posts/user-posts.module#UserPostsPageModule', name: 'UserPostsPage', segment: 'user-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-details-toggle/student-details-toggle.module#StudentDetailsTogglePageModule', name: 'StudentDetailsTogglePage', segment: 'student-details-toggle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-slider/login-slider.module#LoginSliderPageModule', name: 'LoginSliderPage', segment: 'login-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_27__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_teacher_dashboard_teacher__["a" /* DashboardTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_teststuffs_teststuffs__["a" /* TeststuffsPage */],
                // Attendance
                __WEBPACK_IMPORTED_MODULE_3__pages_attendance_teacher_attendance_teacher__["a" /* AttendanceTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_student_details_toggle_student_details_toggle__["a" /* StudentDetailsTogglePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_slider_login_slider__["a" /* LoginSliderPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_homework_student_homework_student__["a" /* HomeworkStudentPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_diary_diary__["a" /* DiaryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_28__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_29__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_analytics_analytics__["a" /* AnalyticsProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_remote_config_remote_config__["a" /* RemoteConfigProvider */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
            selector: 'facebook-login',template:/*ion-inline-start:"C:\code\hades\src\components\facebook-login\facebook-login.html"*/'<button ion-button icon-left full (tap)="login()">\n\n  <ion-icon name="logo-facebook"></ion-icon>\n\n  \n\n  Login with Facebook\n\n</button>\n\n'/*ion-inline-end:"C:\code\hades\src\components\facebook-login\facebook-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());

//# sourceMappingURL=facebook-login.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnonymousLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
            selector: 'anonymous-login',template:/*ion-inline-start:"C:\code\hades\src\components\anonymous-login\anonymous-login.html"*/'<button ion-button icon-left full color="light" (tap)="login()">\n\n  <ion-icon name="eye-off"></ion-icon>\n\n  \n\n  Login Anonymously\n\n</button>\n\n'/*ion-inline-end:"C:\code\hades\src\components\anonymous-login\anonymous-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], AnonymousLoginComponent);
    return AnonymousLoginComponent;
}());

//# sourceMappingURL=anonymous-login.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(306);
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
            selector: 'user-logout',template:/*ion-inline-start:"C:\code\hades\src\components\user-logout\user-logout.html"*/'<button ion-button color="light" (tap)="logout()">\n\n  Logout\n\n</button>\n\n'/*ion-inline-end:"C:\code\hades\src\components\user-logout\user-logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());

//# sourceMappingURL=user-logout.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(72);
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
            selector: 'post-feed',template:/*ion-inline-start:"C:\code\hades\src\components\post-feed\post-feed.html"*/'<ng-container *ngIf="(auth.user | async) || {} as user">\n\n\n\n\n\n  <ion-card *ngFor="let post of posts | async; trackBy: trackByFn">\n\n    <img [src]="post.img || \'https://goo.gl/n62NG4\'" onError="this.src=\'https://goo.gl/LJagAi\'">\n\n    <ion-card-content>\n\n      {{ post.content }}\n\n\n\n      <hr>\n\n\n\n      <heart-button [userId]="user.uid" [post]="post"></heart-button>\n\n      \n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n</ng-container>'/*ion-inline-end:"C:\code\hades\src\components\post-feed\post-feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], PostFeedComponent);
    return PostFeedComponent;
}());

//# sourceMappingURL=post-feed.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(75);
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
            selector: 'heart-button',template:/*ion-inline-start:"C:\code\hades\src\components\heart-button\heart-button.html"*/'\n\n\n\n<ion-icon name="heart-outline" \n\n          *ngIf="!isHearted"\n\n          (tap)="db.createHeart(userId, post)">\n\n        \n\n</ion-icon>     \n\n\n\n<ion-icon name="heart"\n\n          *ngIf="isHearted" \n\n          (tap)="db.removeHeart(userId, post)">\n\n        \n\n</ion-icon>\n\n\n\n\n\n{{ heartCount }}\n\n\n\n'/*ion-inline-end:"C:\code\hades\src\components\heart-button\heart-button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */]])
    ], HeartButtonComponent);
    return HeartButtonComponent;
}());

//# sourceMappingURL=heart-button.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRelationshipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(75);
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
            selector: 'user-relationship',template:/*ion-inline-start:"C:\code\hades\src\components\user-relationship\user-relationship.html"*/'\n\n<ng-container *ngIf="isFollowing | async; then unfollow else follow">\n\n  <!-- button appears here -->\n\n</ng-container>\n\n\n\n<ng-template #unfollow>\n\n  <button ion-button round \n\n          (tap)="db.unfollow(currentUserId, followId)">\n\n\n\n    Unfollow\n\n  </button>\n\n</ng-template>\n\n\n\n\n\n<ng-template #follow>\n\n  <button ion-button round outline\n\n          (tap)="db.follow(currentUserId, followId)"\n\n          [disabled]="isOwner">\n\n\n\n      Follow\n\n  </button>\n\n</ng-template>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\code\hades\src\components\user-relationship\user-relationship.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */]])
    ], UserRelationshipComponent);
    return UserRelationshipComponent;
}());

//# sourceMappingURL=user-relationship.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UploadModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(308);
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
            selector: "image-upload",template:/*ion-inline-start:"C:\code\hades\src\components\image-upload\image-upload.html"*/'<button ion-fab mini (tap)="captureAndUpload()">\n\n  <ion-icon name="camera"></ion-icon>\n\n</button>'/*ion-inline-end:"C:\code\hades\src\components\image-upload\image-upload.html"*/
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */]])
    ], UploadModal);
    return UploadModal;
}());

//# sourceMappingURL=image-upload.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(72);
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
            selector: "fcm-handler",template:/*ion-inline-start:"C:\code\hades\src\components\fcm-handler\fcm-handler.html"*/'<!-- Generated template for the FcmHandlerComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"C:\code\hades\src\components\fcm-handler\fcm-handler.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
    ], FcmHandlerComponent);
    return FcmHandlerComponent;
}());

//# sourceMappingURL=fcm-handler.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
            selector: 'fcm-topic',template:/*ion-inline-start:"C:\code\hades\src\components\fcm-topic\fcm-topic.html"*/'<ng-container *ngIf="isSupportedPlatform; else notSupported">\n\n\n\n<button ion-button color="secondary" \n\n        *ngIf="!isSubscribed" \n\n        (tap)="fcm.subscribeTo(topic)">\n\n\n\n  Get {{ topic }} notifications\n\n</button>\n\n\n\n<button ion-button color="danger" \n\n        *ngIf="isSubscribed" \n\n        (tap)="fcm.unsubscribeFrom(topic)">\n\n\n\n  End {{ topic }} notifications \n\n</button>\n\n\n\n</ng-container>\n\n\n\n\n\n<ng-template #notSupported>\n\n  <em>You must be on a native device to subscribe to topic notifications</em>\n\n</ng-template>'/*ion-inline-end:"C:\code\hades\src\components\fcm-topic\fcm-topic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
    ], FcmTopicComponent);
    return FcmTopicComponent;
}());

//# sourceMappingURL=fcm-topic.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(289);
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
    DatabaseProvider.prototype.getAttendancenyDivision = function (division) {
        return this.afs.collection("attendance").ref.where("division", "==", division);
    };
    // createAttendanceStudent(day: string, date: string, month: string, year: string, user_id: string, division: string, present: boolean) {
    DatabaseProvider.prototype.createAttendanceStudent = function (details, day, date, month, year, division) {
        var batch = this.afs.firestore.batch();
        var collectionRef = this.afs.collection("attendanceList");
        console.log(" i am in DB create attendance");
        // console.log(details);
        for (var key in details) {
            console.log(details[key]);
            var docId = key + "_" + date + "-" + month + "-" + year;
            var doc = collectionRef.doc(docId);
            doc.set({
                "student_id": key,
                "present": details[key],
                "date": date,
                "day": day,
                "month": month,
                "year": year,
                "divsion": division,
            });
        }
        var attendance = {};
        batch.commit().then(function (data) {
            return data;
        })
            .then(function (err) {
            return err;
        });
        // return ("Successful");
        // return this.afs.collection("attendanceList").ref.add(attendance);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], DatabaseProvider);
    return DatabaseProvider;
    var _a;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 325,
	"./af.js": 325,
	"./ar": 326,
	"./ar-dz": 327,
	"./ar-dz.js": 327,
	"./ar-kw": 328,
	"./ar-kw.js": 328,
	"./ar-ly": 329,
	"./ar-ly.js": 329,
	"./ar-ma": 330,
	"./ar-ma.js": 330,
	"./ar-sa": 331,
	"./ar-sa.js": 331,
	"./ar-tn": 332,
	"./ar-tn.js": 332,
	"./ar.js": 326,
	"./az": 333,
	"./az.js": 333,
	"./be": 334,
	"./be.js": 334,
	"./bg": 335,
	"./bg.js": 335,
	"./bm": 336,
	"./bm.js": 336,
	"./bn": 337,
	"./bn.js": 337,
	"./bo": 338,
	"./bo.js": 338,
	"./br": 339,
	"./br.js": 339,
	"./bs": 340,
	"./bs.js": 340,
	"./ca": 341,
	"./ca.js": 341,
	"./cs": 342,
	"./cs.js": 342,
	"./cv": 343,
	"./cv.js": 343,
	"./cy": 344,
	"./cy.js": 344,
	"./da": 345,
	"./da.js": 345,
	"./de": 346,
	"./de-at": 347,
	"./de-at.js": 347,
	"./de-ch": 348,
	"./de-ch.js": 348,
	"./de.js": 346,
	"./dv": 349,
	"./dv.js": 349,
	"./el": 350,
	"./el.js": 350,
	"./en-au": 351,
	"./en-au.js": 351,
	"./en-ca": 352,
	"./en-ca.js": 352,
	"./en-gb": 353,
	"./en-gb.js": 353,
	"./en-ie": 354,
	"./en-ie.js": 354,
	"./en-il": 355,
	"./en-il.js": 355,
	"./en-nz": 356,
	"./en-nz.js": 356,
	"./eo": 357,
	"./eo.js": 357,
	"./es": 358,
	"./es-do": 359,
	"./es-do.js": 359,
	"./es-us": 360,
	"./es-us.js": 360,
	"./es.js": 358,
	"./et": 361,
	"./et.js": 361,
	"./eu": 362,
	"./eu.js": 362,
	"./fa": 363,
	"./fa.js": 363,
	"./fi": 364,
	"./fi.js": 364,
	"./fo": 365,
	"./fo.js": 365,
	"./fr": 366,
	"./fr-ca": 367,
	"./fr-ca.js": 367,
	"./fr-ch": 368,
	"./fr-ch.js": 368,
	"./fr.js": 366,
	"./fy": 369,
	"./fy.js": 369,
	"./gd": 370,
	"./gd.js": 370,
	"./gl": 371,
	"./gl.js": 371,
	"./gom-latn": 372,
	"./gom-latn.js": 372,
	"./gu": 373,
	"./gu.js": 373,
	"./he": 374,
	"./he.js": 374,
	"./hi": 375,
	"./hi.js": 375,
	"./hr": 376,
	"./hr.js": 376,
	"./hu": 377,
	"./hu.js": 377,
	"./hy-am": 378,
	"./hy-am.js": 378,
	"./id": 379,
	"./id.js": 379,
	"./is": 380,
	"./is.js": 380,
	"./it": 381,
	"./it.js": 381,
	"./ja": 382,
	"./ja.js": 382,
	"./jv": 383,
	"./jv.js": 383,
	"./ka": 384,
	"./ka.js": 384,
	"./kk": 385,
	"./kk.js": 385,
	"./km": 386,
	"./km.js": 386,
	"./kn": 387,
	"./kn.js": 387,
	"./ko": 388,
	"./ko.js": 388,
	"./ky": 389,
	"./ky.js": 389,
	"./lb": 390,
	"./lb.js": 390,
	"./lo": 391,
	"./lo.js": 391,
	"./lt": 392,
	"./lt.js": 392,
	"./lv": 393,
	"./lv.js": 393,
	"./me": 394,
	"./me.js": 394,
	"./mi": 395,
	"./mi.js": 395,
	"./mk": 396,
	"./mk.js": 396,
	"./ml": 397,
	"./ml.js": 397,
	"./mn": 398,
	"./mn.js": 398,
	"./mr": 399,
	"./mr.js": 399,
	"./ms": 400,
	"./ms-my": 401,
	"./ms-my.js": 401,
	"./ms.js": 400,
	"./mt": 402,
	"./mt.js": 402,
	"./my": 403,
	"./my.js": 403,
	"./nb": 404,
	"./nb.js": 404,
	"./ne": 405,
	"./ne.js": 405,
	"./nl": 406,
	"./nl-be": 407,
	"./nl-be.js": 407,
	"./nl.js": 406,
	"./nn": 408,
	"./nn.js": 408,
	"./pa-in": 409,
	"./pa-in.js": 409,
	"./pl": 410,
	"./pl.js": 410,
	"./pt": 411,
	"./pt-br": 412,
	"./pt-br.js": 412,
	"./pt.js": 411,
	"./ro": 413,
	"./ro.js": 413,
	"./ru": 414,
	"./ru.js": 414,
	"./sd": 415,
	"./sd.js": 415,
	"./se": 416,
	"./se.js": 416,
	"./si": 417,
	"./si.js": 417,
	"./sk": 418,
	"./sk.js": 418,
	"./sl": 419,
	"./sl.js": 419,
	"./sq": 420,
	"./sq.js": 420,
	"./sr": 421,
	"./sr-cyrl": 422,
	"./sr-cyrl.js": 422,
	"./sr.js": 421,
	"./ss": 423,
	"./ss.js": 423,
	"./sv": 424,
	"./sv.js": 424,
	"./sw": 425,
	"./sw.js": 425,
	"./ta": 426,
	"./ta.js": 426,
	"./te": 427,
	"./te.js": 427,
	"./tet": 428,
	"./tet.js": 428,
	"./tg": 429,
	"./tg.js": 429,
	"./th": 430,
	"./th.js": 430,
	"./tl-ph": 431,
	"./tl-ph.js": 431,
	"./tlh": 432,
	"./tlh.js": 432,
	"./tr": 433,
	"./tr.js": 433,
	"./tzl": 434,
	"./tzl.js": 434,
	"./tzm": 435,
	"./tzm-latn": 436,
	"./tzm-latn.js": 436,
	"./tzm.js": 435,
	"./ug-cn": 437,
	"./ug-cn.js": 437,
	"./uk": 438,
	"./uk.js": 438,
	"./ur": 439,
	"./ur.js": 439,
	"./uz": 440,
	"./uz-latn": 441,
	"./uz-latn.js": 441,
	"./uz.js": 440,
	"./vi": 442,
	"./vi.js": 442,
	"./x-pseudo": 443,
	"./x-pseudo.js": 443,
	"./yo": 444,
	"./yo.js": 444,
	"./zh-cn": 445,
	"./zh-cn.js": 445,
	"./zh-hk": 446,
	"./zh-hk.js": 446,
	"./zh-tw": 447,
	"./zh-tw.js": 447
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
webpackContext.id = 760;

/***/ }),

/***/ 779:
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
            selector: 'add-attendance',template:/*ion-inline-start:"C:\code\hades\src\components\add-attendance\add-attendance.html"*/'<ion-content padding class="login-slider-main">\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-bottom style="height: 80%;">\n\n      <ion-slides pager="true">\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/rocket_200.png"></ion-img>\n\n          <p>Some fucking text goes here!!</p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/chemistry_200.png"></ion-img>\n\n          <p>Another fucking test</p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-img style="background: transparent !important;  bottom:35%" width="200" height="200" src="../../assets/imgs/last_icon_200.png"></ion-img>\n\n          <p>How your child becoms superhero using this app!!</p>\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <email-login></email-login>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\code\hades\src\components\add-attendance\add-attendance.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AddAttendanceComponent);
    return AddAttendanceComponent;
}());

//# sourceMappingURL=add-attendance.js.map

/***/ }),

/***/ 780:
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
        this.attendanceMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.attendance = new Map();
        console.log("Hello StudentSelectorComponent Component");
        this.text = "Hello World";
        this.todays_date = "21st June";
        // this.students ="HAGH";
        console.log("-----------");
        console.log(this.students);
        // console.log(this.students)
    }
    StudentSelectorComponent.prototype.ngOnInit = function () {
    };
    StudentSelectorComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log("--------Changed----------");
        if (this.students) {
            // console.log(this.students)
            this.students.forEach(function (student) {
                console.log(student.id);
                _this.attendance[student.id] = student.is_present;
            });
        }
        console.log("++++++++++++");
        console.log(this.attendance);
    };
    StudentSelectorComponent.prototype.getDate = function () { };
    StudentSelectorComponent.prototype.buttonClick = function () {
        console.log("item is clicked!!");
    };
    StudentSelectorComponent.prototype.markTrue = function () {
        this.check = true;
        console.log("Mark true button is clicked!!");
        for (var key in this.attendance) {
            this.attendance[key] = true;
        }
    };
    StudentSelectorComponent.prototype.markFalse = function () {
        this.check = false;
        console.log("Mark false button is clicked!!");
        // console.log(this.attendance["fiddigl01"]);
        for (var key in this.attendance) {
            this.attendance[key] = false;
        }
    };
    StudentSelectorComponent.prototype.reloadAttendance = function () {
        var _this = this;
        if (this.students) {
            // console.log(this.students)
            this.students.forEach(function (student) {
                console.log(student.id);
                _this.attendance[student.id] = student.is_present;
            });
        }
    };
    StudentSelectorComponent.prototype.submitAttendance = function () {
        console.log("Submit attendance has been clicked!!");
        this.attendanceMap.emit(this.attendance);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], StudentSelectorComponent.prototype, "students", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], StudentSelectorComponent.prototype, "attendanceMap", void 0);
    StudentSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "student-selector",template:/*ion-inline-start:"C:\code\hades\src\components\student-selector\student-selector.html"*/'<ion-list>\n\n  <h1>{{students}}</h1>\n\n  <div *ngFor="let student of students">\n\n    <ion-item class="itemClass">\n\n      <ion-label>{{student.id}} {{student.first_name}} {{student.last_name}}</ion-label>\n\n      <ion-toggle  checked="{{attendance[student.id]}}" ></ion-toggle>\n\n    </ion-item>\n\n</div>\n\n</ion-list>\n\n\n\n\n\n\n\n<ion-list>\n\n  <button (click)="markTrue()" >\n\n    True\n\n  </button>\n\n\n\n  <button (click)="markFalse()" >\n\n      False\n\n\n\n    </button>\n\n    <button (click)="reloadAttendance()" >\n\n      Reload\n\n\n\n    </button>\n\n    <button (click)="submitAttendance()" >\n\n      Submit\n\n\n\n    </button>\n\n\n\n</ion-list>\n\n'/*ion-inline-end:"C:\code\hades\src\components\student-selector\student-selector.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StudentSelectorComponent);
    return StudentSelectorComponent;
}());

//# sourceMappingURL=student-selector.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDisplayComponent; });
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
 * Generated class for the ListDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ListDisplayComponent = (function () {
    function ListDisplayComponent() {
        this.attendanceData = [];
        this.attendanceList = [];
        console.log("Hello ListDisplayComponent Component");
        this.text = "Hello World";
        // this.attendanceData = [1,2,3];
        console.log(this.attendanceData);
        this.attendanceData.sort(function (obj1, obj2) {
            console.log("==================");
            if (obj1.present > obj2.present) {
                return 1;
            }
            if (obj1.present < obj2.present) {
                return -1;
            }
            return 0;
        });
    }
    ListDisplayComponent.prototype.ngOnChanges = function () {
        if (this.attendanceData) {
            console.log("Value has changed ---------");
            console.log(this.attendanceData);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ListDisplayComponent.prototype, "attendanceData", void 0);
    ListDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "list-display",template:/*ion-inline-start:"C:\code\hades\src\components\list-display\list-display.html"*/'<ion-list class="listClass">\n\n\n\n  <div *ngFor="let attendance of attendanceData">\n\n\n\n      <!-- <button ion-item *ngIf="attendance.day_view == \'true\' && attendance.month_view == \'true\'"> -->\n\n      <button ion-item *ngIf="attendance.day_view && attendance.month_view">\n\n\n\n        <ion-label>{{attendance.day + " " + attendance.date + "-" + attendance.month}}</ion-label>\n\n        <ion-label class="displayLabel">\n\n          <b>{{attendance.present +"/" + attendance.absent}}</b>\n\n        </ion-label>\n\n        <!-- <ion-label>{{attendance.month_view}}</ion-label>\n\n        <ion-label>{{attendance.day_view}}</ion-label> -->\n\n      </button>\n\n    </div>\n\n\n\n</ion-list>\n\n'/*ion-inline-end:"C:\code\hades\src\components\list-display\list-display.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ListDisplayComponent);
    return ListDisplayComponent;
}());

//# sourceMappingURL=list-display.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
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
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = (function () {
    function PopoverComponent() {
        console.log('Hello PopoverComponent Component');
        this.text = 'Hello World';
    }
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"C:\code\hades\src\components\popover\popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"C:\code\hades\src\components\popover\popover.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceFilterComponent; });
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
 * Generated class for the AttendanceFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AttendanceFilterComponent = (function () {
    function AttendanceFilterComponent() {
        console.log('Hello AttendanceFilterComponent Component');
        this.text = 'Hello World';
    }
    AttendanceFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'attendance-filter',template:/*ion-inline-start:"C:\code\hades\src\components\attendance-filter\attendance-filter.html"*/'<ion-list class="list-popover">\n\n    <!-- <ion-list-header>\n\n          Filters\n\n        </ion-list-header> -->\n\n    <ion-item class="item-leave-height">\n\n      <ion-label>Month</ion-label>\n\n      <ion-select>\n\n        <ion-option value="CASUAL LEAVE">Jan</ion-option>\n\n        <ion-option value="COMP OFF">Feb</ion-option>\n\n        <ion-option value="EARNED LEAVE">Mar</ion-option>\n\n        <ion-option value="SICK LEAVE">April</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- <ion-item-divider>\n\n          Item Divider\n\n        </ion-item-divider> -->\n\n    <!-- <ion-label>Days</ion-label> -->\n\n    <ion-item>\n\n      <ion-label>All Days</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Monday</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Tuesday</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Wednesday</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Thursday</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Friday</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Saturday</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-grid>\n\n    <ion-row  class="leave-margin">\n\n  <button ion-button>Cancel</button>\n\n  <button ion-button (click)="submitFilter()">Submit</button>\n\n  </ion-row>\n\n  </ion-grid>\n\n'/*ion-inline-end:"C:\code\hades\src\components\attendance-filter\attendance-filter.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AttendanceFilterComponent);
    return AttendanceFilterComponent;
}());

//# sourceMappingURL=attendance-filter.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_homework_student_homework_student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_dashboard__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_attendance_teacher_attendance_teacher__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_analytics_analytics__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_remote_config_remote_config__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_slider_login_slider__ = __webpack_require__(208);
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
                        // this.rootPage = TeststuffsPage;
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\code\hades\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header class="menu_header">\n\n    <ion-toolbar>\n\n      <ion-grid class="menu_header_grid">\n\n        <ion-row row-center>\n\n          <ion-col col-8 class="header_title">\n\n            <ion-label text-capitalize padding-top>danerys targerian</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <div>\n\n              <img id="profilepic" src="../assets/imgs/student_70.png" />\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <ion-list class="menu_wrapper">\n\n      <button ion-item class="menu_button">\n\n        <ion-icon name="home" class="menu_icon" color="primary"></ion-icon>\n\n        Home\n\n      </button>\n\n\n\n      <button ion-item class="menu_button">\n\n        <ion-icon name="notifications" class="menu_icon"></ion-icon>\n\n        Notifications\n\n      </button>\n\n      <button ion-item>\n\n        <ion-icon name="timer" class="menu_icon menu_lastitem"></ion-icon>\n\n        Time Table\n\n      </button>\n\n      <ion-item-divider></ion-item-divider>\n\n      <button ion-item>\n\n        <ion-icon name="bookmarks" class="menu_icon"></ion-icon>\n\n        Diary\n\n      </button>\n\n      <button ion-item>\n\n        <ion-icon name="book" class="menu_icon"></ion-icon>\n\n        Academics\n\n      </button>\n\n      <button menuClose ion-item (click)="openPage()">\n\n        <ion-icon name="flask" class="menu_icon"></ion-icon>\n\n        Subjects\n\n      </button>\n\n      <ion-item-divider></ion-item-divider>\n\n      <button ion-item>\n\n        <ion-icon name="images" class="menu_icon"></ion-icon>\n\n        Gallery\n\n      </button>\n\n      <button ion-item>\n\n        <ion-icon name="done-all" class="menu_icon"></ion-icon>\n\n        Fees\n\n      </button>\n\n      <button ion-item class="menu_lastitem">\n\n        <ion-icon name="call" class="menu_icon"></ion-icon>\n\n        Contact Us\n\n      </button>\n\n      <ion-item-divider></ion-item-divider>\n\n      <button ion-item>\n\n        <ion-label>\n\n          <ion-icon name="settings" class="menu_icon" color="primary"></ion-icon>\n\n          Settings\n\n        </ion-label>\n\n\n\n      </button>\n\n\n\n      <button ion-item (tap)="logOut()">\n\n          <ion-label>\n\n            <ion-icon name="log-out" class="menu_icon" color="primary" ></ion-icon>\n\n            Logout\n\n          </ion-label>\n\n\n\n        </button>\n\n\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- <ion-nav id="nav" #content></ion-nav> -->\n\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\code\hades\src\app\app.html"*/
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

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ })

},[495]);
//# sourceMappingURL=main.js.map