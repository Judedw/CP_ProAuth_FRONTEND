(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forms-forms-module"],{

/***/ "./src/app/views/forms/basic-form/basic-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/basic-form/basic-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n    <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Form validation</div>\r\n        <mat-divider></mat-divider>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"basicForm\">\r\n            <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                            <input\r\n                            matInput\r\n                            name=\"username\"\r\n                            formControlName=\"username\"\r\n                            placeholder=\"Username (Min Length: 4, Max Length: 9)\"\r\n                            value=\"\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['username'].hasError('minlength') && basicForm.controls['username'].touched\" \r\n                        class=\"form-error-msg\"> Username require at least {{basicForm.controls['username'].errors.minlength.requiredLength}} characters </small>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['username'].hasError('maxlength') && basicForm.controls['username'].touched\" \r\n                        class=\"form-error-msg\"> Username can not contain more than {{basicForm.controls['username'].errors.maxlength.requiredLength}} characters </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                            <input\r\n                            matInput\r\n                            name=\"firstname\"\r\n                            formControlName=\"firstname\"\r\n                            placeholder=\"First name\"\r\n                            value=\"\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['firstname'].hasError('required') && basicForm.controls['firstname'].touched\" \r\n                        class=\"form-error-msg\"> First name is required </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                        <input\r\n                            matInput\r\n                            type=\"email\"\r\n                            name=\"email\"\r\n                            formControlName=\"email\"\r\n                            placeholder=\"Your Email\"\r\n                            value=\"\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['email'].hasError('required') && basicForm.controls['email'].touched\" \r\n                        class=\"form-error-msg\"> Email is required </small>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['email'].hasError('email') && basicForm.controls['email'].touched\" \r\n                        class=\"form-error-msg\"> Invaild email address </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                        <input\r\n                            matInput\r\n                            name=\"website\"\r\n                            formControlName=\"website\"\r\n                            placeholder=\"Your Website (http://mhrafi.com)\"\r\n                            value=\"\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['website'].hasError('url') && basicForm.controls['website'].touched\" \r\n                        class=\"form-error-msg\"> Invaild web address </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                            <input \r\n                            matInput\r\n                            name=\"date\"\r\n                            formControlName=\"date\"\r\n                            placeholder=\"Date\" \r\n                            [matDatepicker]=\"appDatepicker\">\r\n                            \r\n                            <mat-datepicker-toggle matSuffix [for]=\"appDatepicker\"></mat-datepicker-toggle>\r\n                        </mat-form-field>\r\n                        <mat-datepicker #appDatepicker></mat-datepicker>\r\n                    </div>\r\n                </div>\r\n\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                            <input \r\n                            matInput\r\n                            name=\"cardno\"\r\n                            formControlName=\"cardno\"\r\n                            placeholder=\"Credit card number\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['cardno'].hasError('creditCard') && basicForm.controls['cardno'].touched\" \r\n                        class=\"form-error-msg\"> Invaild card number </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                            <input \r\n                            matInput\r\n                            name=\"phone\"\r\n                            formControlName=\"phone\"\r\n                            placeholder=\"Phone number\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['phone'].hasError('phone') && basicForm.controls['phone'].touched\" \r\n                        class=\"form-error-msg\"> Invaild phone number </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                        <input \r\n                            type=\"password\"\r\n                            name=\"password\"\r\n                            matInput\r\n                            formControlName=\"password\"\r\n                            placeholder=\"Password\" \r\n                            value=\"\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['password'].hasError('required') && basicForm.controls['password'].touched\" \r\n                        class=\"form-error-msg\"> Password is required </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <mat-form-field class=\"full-width\">\r\n                        <input\r\n                            type=\"password\"\r\n                            name=\"confirmPassword\"\r\n                            matInput\r\n                            appEqualValidator=\"password\"\r\n                            formControlName=\"confirmPassword\"\r\n                            placeholder=\"Confirm Password\"\r\n                            value=\"\">\r\n                        </mat-form-field>\r\n                        <small \r\n                        *ngIf=\"basicForm.controls['confirmPassword'].hasError('equalTo')\" \r\n                        class=\"form-error-msg\"> Password mismatch </small>\r\n                    </div>\r\n\r\n                    <div class=\"pb-1\">\r\n                        <Label>Gender*</Label>\r\n                        <mat-radio-group \r\n                        name=\"gender\" \r\n                        formControlName=\"gender\">\r\n                            <mat-radio-button value=\"male\">Male</mat-radio-button>\r\n                            <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                    \r\n                    <div class=\"pb-1 pt-05\">\r\n                        <mat-checkbox\r\n                        name=\"agreed\"\r\n                        formControlName=\"agreed\" \r\n                        class=\"pb-1\">I have read and agree to the terms of service.</mat-checkbox>\r\n\r\n                        <small \r\n                            *ngIf=\"basicForm.controls['agreed'].hasError('agreed') && basicForm.controls['agreed'].touched\" \r\n                            class=\"form-error-msg\"> You must agree to the terms and conditions </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button \r\n            mat-raised-button \r\n            color=\"primary\" \r\n            [disabled]=\"basicForm.invalid\">Submit</button>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/forms/basic-form/basic-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.ts ***!
  \****************************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent() {
        this.formData = {};
        this.console = console;
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(9)
            ]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].url),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            cardno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].creditCard
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].phone('BD')),
            password: password,
            confirmPassword: confirmPassword,
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
                var agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    };
    BasicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-form',
            template: __webpack_require__(/*! ./basic-form.component.html */ "./src/app/views/forms/basic-form/basic-form.component.html"),
            styles: [__webpack_require__(/*! ./basic-form.component.css */ "./src/app/views/forms/basic-form/basic-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/file-upload/file-upload.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/forms/file-upload/file-upload.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/file-upload/file-upload.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/forms/file-upload/file-upload.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">File upload</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n      <div class=\"mb-1\">\r\n        <p>Multiple</p>\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n\r\n        <p>Single</p>\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n      </div>\r\n\r\n      <div class=\"mb-1\">\r\n        <div ng2FileDrop\r\n        [ngClass]=\"{'dz-file-over': hasBaseDropZoneOver}\"\r\n        (fileOver)=\"fileOverBase($event)\"\r\n        [uploader]=\"uploader\"\r\n        class=\"fileupload-drop-zone\">\r\n        Drop file here\r\n        </div>\r\n      </div>\r\n\r\n      <table class=\"default-table mat-box-shadow\" style=\"width: 100%\">\r\n        <thead>\r\n        <tr>\r\n            <th width=\"30%\">Name</th>\r\n            <th>Size</th>\r\n            <th>Progress</th>\r\n            <th>Status</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"uploader.queue.length; else tableNoData\">\r\n        <tr *ngFor=\"let item of uploader.queue\">\r\n            <td>{{ item?.file?.name }}</td>\r\n            <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n            <td>\r\n                <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                    <mat-progress-bar\r\n                      class=\"\"\r\n                      color=\"primary\"\r\n                      mode=\"determinate\"\r\n                      [value]=\"item.progress\">\r\n                    </mat-progress-bar>\r\n                </div>\r\n            </td>\r\n            <td class=\"\">\r\n                <mat-icon *ngIf=\"item.isSuccess\">check</mat-icon>\r\n                <mat-icon *ngIf=\"item.isCancel\">cancel</mat-icon>\r\n                <mat-icon *ngIf=\"item.isError\">error</mat-icon>\r\n            </td>\r\n            <td nowrap>\r\n                <button \r\n                mat-raised-button\r\n                class=\"mat-primary\"\r\n                (click)=\"item.upload()\"\r\n                [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">Upload</button>\r\n                <button \r\n                mat-raised-button\r\n                class=\"mat-accent\"\r\n                (click)=\"item.cancel()\"\r\n                [disabled]=\"!item.isUploading\">Cancel</button>\r\n\r\n                <button \r\n                mat-raised-button\r\n                class=\"mat-warn\"\r\n                (click)=\"item.remove()\">Remove</button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n        <ng-template #tableNoData>\r\n          <p [ngStyle]=\"{padding: '0 1.2rem'}\">Queue is empty</p>\r\n        </ng-template>\r\n    </table>\r\n\r\n\r\n      <div>\r\n        <p>Queue progress:</p>\r\n        <div class=\"progress mb-1\" >\r\n            <mat-progress-bar\r\n              class=\"\"\r\n              color=\"primary\"\r\n              mode=\"determinate\"\r\n              [value]=\"uploader.progress\">\r\n            </mat-progress-bar>\r\n        </div>\r\n\r\n      <button \r\n      mat-raised-button\r\n      class=\"mat-primary\"\r\n      (click)=\"uploader.uploadAll()\"\r\n      [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\r\n\r\n      <button \r\n      mat-raised-button\r\n      class=\"mat-accent\"\r\n      (click)=\"uploader.cancelAll()\"\r\n      [disabled]=\"!uploader.isUploading\">Cancel all</button>\r\n\r\n      <button \r\n      mat-raised-button\r\n      class=\"mat-warn\"\r\n      (click)=\"uploader.clearQueue()\"\r\n      [disabled]=\"!uploader.queue.length\">Remove all</button>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/forms/file-upload/file-upload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/file-upload/file-upload.component.ts ***!
  \******************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: 'https://evening-anchorage-315.herokuapp.com/api/' });
        this.hasBaseDropZoneOver = false;
        this.console = console;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/views/forms/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/views/forms/file-upload/file-upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: AppFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormsModule", function() { return AppFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/views/forms/basic-form/basic-form.component.ts");
/* harmony import */ var _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rich-text-editor/rich-text-editor.component */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/views/forms/file-upload/file-upload.component.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms.routing */ "./src/app/views/forms/forms.routing.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/views/forms/wizard/wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppFormsModule = /** @class */ (function () {
    function AppFormsModule() {
    }
    AppFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_12__["FormsRoutes"])
            ],
            declarations: [_basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_9__["BasicFormComponent"], _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_10__["RichTextEditorComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__["FileUploadComponent"], _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"]]
        })
    ], AppFormsModule);
    return AppFormsModule;
}());



/***/ }),

/***/ "./src/app/views/forms/forms.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/views/forms/forms.routing.ts ***!
  \**********************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/views/forms/basic-form/basic-form.component.ts");
/* harmony import */ var _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rich-text-editor/rich-text-editor.component */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/views/forms/file-upload/file-upload.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/views/forms/wizard/wizard.component.ts");




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'basic',
                component: _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_0__["BasicFormComponent"],
                data: { title: 'Basic', breadcrumb: 'BASIC' }
            }, {
                path: 'editor',
                component: _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_1__["RichTextEditorComponent"],
                data: { title: 'Editor', breadcrumb: 'EDITOR' }
            }, {
                path: 'upload',
                component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["FileUploadComponent"],
                data: { title: 'Upload', breadcrumb: 'UPLOAD' }
            }, {
                path: 'wizard',
                component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"],
                data: { title: 'Wizard', breadcrumb: 'WIZARD' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/forms/rich-text-editor/rich-text-editor.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/forms/rich-text-editor/rich-text-editor.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  \r\n  <mat-card-content class=\"p-0\">\r\n    <quill-editor \r\n    theme=\"snow\" \r\n    [(ngModel)]=\"editorData\" \r\n    (onContentChanged)=\"onContentChanged()\" \r\n    onSelectionChanged=\"onSelectionChanged()\"></quill-editor>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts ***!
  \****************************************************************************/
/*! exports provided: RichTextEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorComponent", function() { return RichTextEditorComponent; });
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

var RichTextEditorComponent = /** @class */ (function () {
    function RichTextEditorComponent() {
        this.editorData = "<h1>Egret | Angular material admin</h1>\n  <p><a href=\"http://mhrafi.com\" target=\"_blank\"><strong>MH Rafi</strong></a></p>\n  <p><br></p><p><strong >Lorem Ipsum</strong>\n  <span>&nbsp;is simply dummy text of the printing and typesetting industry. \n  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a \n  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>";
    }
    RichTextEditorComponent.prototype.ngOnInit = function () {
    };
    RichTextEditorComponent.prototype.onContentChanged = function () { };
    RichTextEditorComponent.prototype.onSelectionChanged = function () { };
    RichTextEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rich-text-editor',
            template: __webpack_require__(/*! ./rich-text-editor.component.html */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.html"),
            styles: [__webpack_require__(/*! ./rich-text-editor.component.css */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RichTextEditorComponent);
    return RichTextEditorComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Horizontal</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-horizontal-stepper [linear]=\"true\">\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel>Fill out your name</ng-template>\r\n          <mat-form-field class=\"pt-1 pb-1\">\r\n            <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\">\r\n        <form [formGroup]=\"secondFormGroup\">\r\n          <ng-template matStepLabel>Fill out your address</ng-template>\r\n          <mat-form-field class=\"pt-1 pb-1\">\r\n            <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Done</ng-template>\r\n        <div>\r\n          <mat-icon class=\"pt-1\" [style.fontSize]=\"'36px'\">check</mat-icon>\r\n        </div>\r\n        <div class=\"pb-1 mb-1\"> You Are Done.</div>\r\n        <div>\r\n          <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n          <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Verticle</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-vertical-stepper [linear]=\"true\">\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel>Fill out your name</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\">\r\n        <form [formGroup]=\"secondFormGroup\">\r\n          <ng-template matStepLabel>Fill out your address</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Done</ng-template>\r\n        <div>\r\n          <mat-icon class=\"pt-1\" [style.fontSize]=\"'36px'\">check</mat-icon>\r\n        </div>\r\n        <div class=\"pb-1 mb-1\"> You Are Done.</div>\r\n        <div>\r\n          <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.ts ***!
  \********************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = /** @class */ (function () {
    function WizardComponent(fb) {
        this.fb = fb;
    }
    WizardComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.fb.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this.fb.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    WizardComponent.prototype.submit = function () {
        console.log(this.firstFormGroup.value);
        console.log(this.secondFormGroup.value);
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/views/forms/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/views/forms/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-forms-forms-module.js.map