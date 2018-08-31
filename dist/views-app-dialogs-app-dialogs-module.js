(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-app-dialogs-app-dialogs-module"],{

/***/ "./src/app/views/app-dialogs/app-dialogs.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/app-dialogs/app-dialogs.module.ts ***!
  \*********************************************************/
/*! exports provided: AppDialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDialogsModule", function() { return AppDialogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader-dialog/loader-dialog.component */ "./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.ts");
/* harmony import */ var _app_dialogs_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-dialogs.routing */ "./src/app/views/app-dialogs/app-dialogs.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppDialogsModule = /** @class */ (function () {
    function AppDialogsModule() {
    }
    AppDialogsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_app_dialogs_routing__WEBPACK_IMPORTED_MODULE_8__["DialogsRoutes"])
            ],
            declarations: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], _loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoaderDialogComponent"]]
        })
    ], AppDialogsModule);
    return AppDialogsModule;
}());



/***/ }),

/***/ "./src/app/views/app-dialogs/app-dialogs.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/app-dialogs/app-dialogs.routing.ts ***!
  \**********************************************************/
/*! exports provided: DialogsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsRoutes", function() { return DialogsRoutes; });
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader-dialog/loader-dialog.component */ "./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.ts");


var DialogsRoutes = [
    {
        path: '',
        children: [{
                path: 'confirm',
                component: _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"],
                data: { title: 'Confirm', breadcrumb: 'CONFIRM' },
            }, {
                path: 'loader',
                component: _loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_1__["LoaderDialogComponent"],
                data: { title: 'Loader', breadcrumb: 'LOADER' },
            }]
    }
];


/***/ }),

/***/ "./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">\r\n      <span>Confirm Dialog</span>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"pb-1\">\r\n        <mat-form-field class=\"full-width\">\r\n            <input\r\n            matInput\r\n            name=\"title\"\r\n            placeholder=\"Title\"\r\n            [(ngModel)]=\"title\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n        <mat-form-field class=\"full-width\">\r\n            <input\r\n            matInput\r\n            name=\"text\"\r\n            placeholder=\"Text\"\r\n            [(ngModel)]=\"text\">\r\n        </mat-form-field>\r\n    </div>\r\n    <button mat-raised-button color=\"primary\" (click)=\"openDialog()\" class=\"mb-1\">Open dialog</button>\r\n    <p>You selected: {{selectedOption}}</p>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(confirmService) {
        this.confirmService = confirmService;
        this.title = 'Confirm dialog';
        this.text = 'Just click a button!';
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.openDialog = function () {
        var _this = this;
        this.confirmService.confirm({ title: this.title, message: this.text })
            .subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/views/app-dialogs/confirm-dialog/confirm-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_1__["AppConfirmService"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">\r\n      <span>Loader Dialog</span>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"pb-1\">\r\n        <mat-form-field class=\"full-width\">\r\n            <input\r\n            matInput\r\n            name=\"title\"\r\n            placeholder=\"Loader text\"\r\n            [(ngModel)]=\"title\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n        <mat-form-field class=\"full-width\">\r\n            <input\r\n            matInput\r\n            name=\"time\"\r\n            type=\"number\"\r\n            placeholder=\"Loading time (ms)\"\r\n            [(ngModel)]=\"loadingTime\">\r\n        </mat-form-field>\r\n    </div>\r\n    <button mat-raised-button color=\"primary\" (click)=\"openLoader()\" class=\"\">Show loader</button>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoaderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderDialogComponent", function() { return LoaderDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderDialogComponent = /** @class */ (function () {
    function LoaderDialogComponent(loader) {
        this.loader = loader;
        this.loadingTime = 3000;
        this.title = 'Please wait';
    }
    LoaderDialogComponent.prototype.ngOnInit = function () {
    };
    LoaderDialogComponent.prototype.openLoader = function () {
        var _this = this;
        this.loader.open(this.title);
        setTimeout(function () {
            _this.loader.close();
        }, this.loadingTime);
    };
    LoaderDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader-dialog',
            template: __webpack_require__(/*! ./loader-dialog.component.html */ "./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.html"),
            styles: [__webpack_require__(/*! ./loader-dialog.component.css */ "./src/app/views/app-dialogs/loader-dialog/loader-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_1__["AppLoaderService"]])
    ], LoaderDialogComponent);
    return LoaderDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-app-dialogs-app-dialogs-module.js.map