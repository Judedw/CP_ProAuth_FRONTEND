(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sessions-sessions-module"],{

/***/ "./src/app/views/sessions/error/error.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/error/error.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 default-bg\">\r\n  <div class=\"app-error\">\r\n    <div class=\"fix\">\r\n      <mat-icon class=\"error-icon\" color=\"warn\">warning</mat-icon>\r\n      <div class=\"error-text\">\r\n        <h1 class=\"error-title\">500</h1>\r\n        <div class=\"error-subtitle\">Server Error!</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"error-actions\">\r\n      <button \r\n      mat-raised-button \r\n      color=\"primary\"\r\n      class=\"mb-1 mr-05\"\r\n      [routerLink]=\"['/dashboard']\">Back to Dashboard</button>\r\n      <button \r\n      mat-raised-button \r\n      color=\"warn\">Report this Problem</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/sessions/error/error.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/views/sessions/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/views/sessions/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/forgot-password/forgot-password.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/views/sessions/forgot-password/forgot-password.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/forgot-password/forgot-password.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/sessions/forgot-password/forgot-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 mat-bg-primary\">\r\n  <div class=\"session-form-hold\">\r\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div class=\"text-center pb-1\">\r\n          <img src=\"assets/images/logo-full.png\" alt=\"\" class=\"mb-05\">\r\n          <p class=\"text-muted m-0\">New password will be sent to your email address</p>\r\n        </div>\r\n        <form #fpForm=\"ngForm\" (ngSubmit)=\"submitEmail()\">\r\n\r\n          <div class=\"\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"email\"\r\n                required\r\n                [(ngModel)]=\"userEmail\"\r\n                #email=\"ngModel\"\r\n                placeholder=\"Email\"\r\n                value=\"\">\r\n            </mat-form-field>\r\n            <small \r\n              *ngIf=\"email.errors && (email.dirty || email.touched) && (email.errors.required)\" \r\n              class=\"form-error-msg\"> Email is required </small>\r\n          </div>\r\n\r\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" [disabled]=\"fpForm.invalid\">Submit</button>\r\n          <div class=\"text-center\">\r\n            <a [routerLink]=\"'/sessions/signin'\" class=\"mat-primary text-center full-width\">Sign in</a>\r\n            <span fxFlex></span>\r\n            <a [routerLink]=\"'/sessions/signup'\" class=\"mat-primary text-center full-width\">Create a new account</a>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/sessions/forgot-password/forgot-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/sessions/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submitEmail = function () {
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], ForgotPasswordComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], ForgotPasswordComponent.prototype, "submitButton", void 0);
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/views/sessions/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/views/sessions/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/lockscreen/lockscreen.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/sessions/lockscreen/lockscreen.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/lockscreen/lockscreen.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/sessions/lockscreen/lockscreen.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 mat-bg-primary\">\r\n  <div class=\"session-form-hold session-lockscreen\">\r\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div fxFlex=\"column\" fxFlexWrap=\"wrap\">\r\n          <div fxFlexWrap=\"wrap\" class=\"lockscreen-user\">\r\n            <img class=\"lockscreen-face\" src=\"assets/images/face-3.jpg\" alt=\"\">\r\n            <h5 class=\"m-0 font-normal\">John Doe</h5>\r\n            <small class=\"text-muted\">Last seen 1 hour ago</small>\r\n          </div>\r\n          <form #lockscreenForm=\"ngForm\" (ngSubmit)=\"unlock()\">\r\n            <div class=\"\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input \r\n                  type=\"password\"\r\n                  name=\"password\"\r\n                  required\r\n                  matInput\r\n                  [(ngModel)]=\"lockscreenData.password\"\r\n                  #password=\"ngModel\"\r\n                  placeholder=\"Password\">\r\n              </mat-form-field>\r\n              <small \r\n                *ngIf=\"password.errors && (password.dirty || password.touched) && (password.errors.required)\" \r\n                class=\"form-error-msg\"> Password is required </small>\r\n            </div>\r\n            \r\n            <button mat-raised-button class=\"mat-primary full-width mb-05\" [disabled]=\"lockscreenForm.invalid\">Unlock</button>\r\n            <button mat-raised-button [routerLink]=\"'/sessions/signin'\" color=\"accent\" class=\"mat-primary full-width\">It's Not Me!</button>\r\n          </form>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/sessions/lockscreen/lockscreen.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/sessions/lockscreen/lockscreen.component.ts ***!
  \*******************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent() {
        this.lockscreenData = {
            password: ''
        };
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent.prototype.unlock = function () {
        console.log(this.lockscreenData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], LockscreenComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], LockscreenComponent.prototype, "submitButton", void 0);
    LockscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__(/*! ./lockscreen.component.html */ "./src/app/views/sessions/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__(/*! ./lockscreen.component.css */ "./src/app/views/sessions/lockscreen/lockscreen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/not-found/not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/not-found/not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 default-bg\">\r\n  <div class=\"app-error\">\r\n    <div class=\"fix\">\r\n      <mat-icon class=\"error-icon\" color=\"warn\">error</mat-icon>\r\n      <div class=\"error-text\">\r\n        <h1 class=\"error-title\">404</h1>\r\n        <div class=\"error-subtitle\">Page Not Found!</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"error-actions\">\r\n      <button \r\n      mat-raised-button \r\n      color=\"primary\"\r\n      class=\"mb-1 mr-05\"\r\n      [routerLink]=\"['/dashboard']\">Back to Dashboard</button>\r\n      \r\n      <button \r\n      mat-raised-button \r\n      color=\"warn\">Report this Problem</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/sessions/not-found/not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/views/sessions/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/views/sessions/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/sessions.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/sessions/sessions.module.ts ***!
  \***************************************************/
/*! exports provided: SessionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsModule", function() { return SessionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/views/sessions/forgot-password/forgot-password.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/views/sessions/lockscreen/lockscreen.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/views/sessions/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/views/sessions/signup/signup.component.ts");
/* harmony import */ var _sessions_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sessions.routing */ "./src/app/views/sessions/sessions.routing.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/views/sessions/not-found/not-found.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/views/sessions/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';







var SessionsModule = /** @class */ (function () {
    function SessionsModule() {
    }
    SessionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_10__["SessionsRoutes"])
            ],
            declarations: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_7__["LockscreenComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]]
        })
    ], SessionsModule);
    return SessionsModule;
}());



/***/ }),

/***/ "./src/app/views/sessions/sessions.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/views/sessions/sessions.routing.ts ***!
  \****************************************************/
/*! exports provided: SessionsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsRoutes", function() { return SessionsRoutes; });
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/views/sessions/forgot-password/forgot-password.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/views/sessions/lockscreen/lockscreen.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/views/sessions/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/views/sessions/signup/signup.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/views/sessions/not-found/not-found.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/views/sessions/error/error.component.ts");






var SessionsRoutes = [
    {
        path: '',
        children: [{
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
                data: { title: 'Signup' }
            }, {
                path: 'signin',
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
                data: { title: 'Signin' }
            }, {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"],
                data: { title: 'Forgot password' }
            }, {
                path: 'lockscreen',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_1__["LockscreenComponent"],
                data: { title: 'Lockscreen' }
            }, {
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                data: { title: 'Not Found' }
            }, {
                path: 'error',
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
                data: { title: 'Error' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 mat-bg-primary\">\r\n  <div class=\"session-form-hold\">\r\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div class=\"text-center pb-1\">\r\n          <img src=\"assets/images/logo-full.png\" alt=\"\" class=\"mb-05\">\r\n          <p class=\"text-muted m-0\">Sign in to your account</p>\r\n        </div>\r\n        <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n          <div class=\"\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"username\"\r\n                [formControl]=\"signinForm.controls['username']\"\r\n                placeholder=\"Username\"\r\n                value=\"\">\r\n            </mat-form-field>\r\n            <small \r\n              *ngIf=\"signinForm.controls['username'].hasError('required') && signinForm.controls['username'].touched\" \r\n              class=\"form-error-msg\"> Username is required </small>\r\n          </div>\r\n\r\n          <div class=\"\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input \r\n                type=\"password\"\r\n                name=\"password\"\r\n                matInput\r\n                [formControl]=\"signinForm.controls['password']\"\r\n                placeholder=\"Password\" \r\n                value=\"\">\r\n            </mat-form-field>\r\n            <small \r\n              *ngIf=\"signinForm.controls['password'].hasError('required') && signinForm.controls['password'].touched\" \r\n              class=\"form-error-msg\"> Password is required </small>\r\n          </div>\r\n          \r\n          <div class=\"pb-1\">\r\n            <mat-checkbox\r\n              name=\"rememberMe\"\r\n              [formControl]=\"signinForm.controls['rememberMe']\"\r\n              class=\"pb-1\">Remember this computer</mat-checkbox>\r\n          </div>\r\n          \r\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" [disabled]=\"signinForm.invalid\">Sign in</button>\r\n          <div class=\"text-center\">\r\n            <a [routerLink]=\"'/sessions/forgot-password'\" class=\"mat-primary text-center full-width\">Forgot password</a>\r\n            <span fxFlex></span>\r\n            <a [routerLink]=\"'/sessions/signup'\" class=\"mat-primary text-center full-width\">Create a new account</a>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
    };
    SigninComponent.prototype.signin = function () {
        var signinData = this.signinForm.value;
        console.log(signinData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], SigninComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], SigninComponent.prototype, "submitButton", void 0);
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/views/sessions/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/views/sessions/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 mat-bg-primary\">\r\n  <div class=\"session-form-hold\">\r\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div class=\"text-center pb-1\">\r\n          <img src=\"assets/images/logo-full.png\" alt=\"\" class=\"mb-05\">\r\n          <p class=\"text-muted m-0\">Sign up to use our service</p>\r\n        </div>\r\n        <form [formGroup]=\"signupForm\"  (ngSubmit)=\"signup()\">\r\n          <div class=\"\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                type=\"email\"\r\n                name=\"email\"\r\n                [formControl]=\"signupForm.controls['email']\"\r\n                placeholder=\"Your Email\"\r\n                value=\"\">\r\n            </mat-form-field>\r\n            <small \r\n              *ngIf=\"signupForm.controls['email'].hasError('required') && signupForm.controls['email'].touched\" \r\n              class=\"form-error-msg\"> Email is required </small>\r\n\r\n              <small \r\n                *ngIf=\"signupForm.controls['email'].hasError('email') && signupForm.controls['email'].touched\" \r\n                class=\"form-error-msg\"> Invaild email address </small>\r\n          </div>\r\n\r\n          <div class=\"\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input \r\n                type=\"password\"\r\n                name=\"password\"\r\n                matInput\r\n                [formControl]=\"signupForm.controls['password']\"\r\n                placeholder=\"Password\" \r\n                value=\"\">\r\n            </mat-form-field>\r\n            <small \r\n              *ngIf=\"signupForm.controls['password'].hasError('required') && signupForm.controls['password'].touched\" \r\n              class=\"form-error-msg\"> Password is required </small>\r\n          </div>\r\n          \r\n          <div class=\"\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                type=\"password\"\r\n                name=\"confirmPassword\"\r\n                matInput\r\n                [formControl]=\"signupForm.controls['confirmPassword']\"\r\n                placeholder=\"Confirm Password\"\r\n                value=\"\">\r\n            </mat-form-field>\r\n            <small *ngIf=\"signupForm.controls['confirmPassword'].hasError('required') && signupForm.controls['confirmPassword'].touched\" class=\"form-error-msg\">Confirm password is required.</small>\r\n            <small *ngIf=\"signupForm.controls['confirmPassword'].hasError('equalTo')\" class=\"form-error-msg\">Passwords do not math.</small>\r\n          </div>\r\n          \r\n          <div class=\"pb-1\">\r\n            <mat-checkbox\r\n              name=\"agreed\"\r\n              [formControl]=\"signupForm.controls['agreed']\"\r\n              class=\"pb-1\">I have read and agree to the terms of service.</mat-checkbox>\r\n\r\n              <small \r\n                *ngIf=\"signupForm.controls['agreed'].hasError('agreed') && signupForm.controls['agreed'].touched\" \r\n                class=\"form-error-msg\"> You must agree to the terms and conditions </small>\r\n          </div>\r\n\r\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" [disabled]=\"signupForm.invalid\">Sign up</button>\r\n          <div class=\"text-center\">\r\n            <a [routerLink]=\"'/sessions/signin'\" class=\"mat-primary text-center full-width\">Sign in to existing account</a>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].equalTo(password));
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: password,
            confirmPassword: confirmPassword,
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', function (control) {
                var agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    };
    SignupComponent.prototype.signup = function () {
        var signupData = this.signupForm.value;
        console.log(signupData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], SignupComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], SignupComponent.prototype, "submitButton", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/views/sessions/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/views/sessions/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-sessions-sessions-module.js.map