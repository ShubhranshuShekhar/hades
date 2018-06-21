webpackJsonp([3],{

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_edit__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileEditPageModule = (function () {
    function ProfileEditPageModule() {
    }
    ProfileEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_edit__["a" /* ProfileEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_edit__["a" /* ProfileEditPage */]),
            ],
        })
    ], ProfileEditPageModule);
    return ProfileEditPageModule;
}());

//# sourceMappingURL=profile-edit.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileEditPage = (function () {
    function ProfileEditPage(navCtrl, navParams, auth, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.afs = afs;
    }
    ProfileEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditPage');
    };
    ProfileEditPage.prototype.updateProfile = function (user) {
        console.log(this.newName, user);
        var ref = this.afs.collection('users').doc(user.uid);
        return ref.update({ displayName: this.newName });
    };
    ProfileEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-edit',template:/*ion-inline-start:"E:\Ionic\ionic-firestarter\src\pages\profile-edit\profile-edit.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit your Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ng-container *ngIf="auth.user | async as user">\n\n  <ion-list>\n\n      \n\n    <ion-item>\n\n      <ion-label floating>Display Name</ion-label>\n\n      <ion-input [(ngModel)]="newName" type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n\n\n  <button ion-button small (click)="updateProfile(user)">\n\n      Save Changes\n\n  </button>\n\n\n\n  </ng-container>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ionic\ionic-firestarter\src\pages\profile-edit\profile-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProfileEditPage);
    return ProfileEditPage;
}());

//# sourceMappingURL=profile-edit.js.map

/***/ })

});
//# sourceMappingURL=3.js.map