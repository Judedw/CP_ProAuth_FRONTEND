(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-survey-survey-module"],{

/***/ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/survey/answer-template-popup/answer-template-popup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\n<form [formGroup]=\"ansTemplateForm\" (ngSubmit)=\"submit()\">\n  <mat-dialog-content class=\"mat-typography\">\n\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\n\n      <div fxFlex=\"100\" class=\"pr-1\">\n        <div class=\"text-muted\">\n          Create your answer template by adding template name,type and answers. answers need to have a lable,value and option value\n        </div>\n      </div>\n\n      <div fxFlex=\"50\" class=\"pr-1\">\n        <mat-form-field class=\"full-width\">\n          <input matInput [formControl]=\"ansTemplateForm.controls['name']\" required name=\"name\" placeholder=\"Answer template name\">\n        </mat-form-field>\n      </div>\n\n      <div fxFlex=\"50\" class=\"pr-1\">\n        <mat-form-field class=\"full-width\">\n          <input matInput [formControl]=\"ansTemplateForm.controls['answerTemplateType']\" required name=\"answerTemplateType\" placeholder=\"Answer template type\">\n        </mat-form-field>\n      </div>\n\n\n\n      <div fxFlex=\"100\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" formArrayName='answers' *ngFor=\"let answer of ansTemplateForm.controls['answers'].controls; let i=index\">\n\n        <mat-card-title>\n          <small class=\"text-muted\"> Answer {{i + 1}}</small>\n        </mat-card-title>\n\n        <div [formGroupName]=\"i\">\n          <div fxFlex=\"25\" class=\"pr-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput formControlName='lable' required name=\"lable\" placeholder=\"Answer lable\">\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"25\" class=\"pr-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput formControlName='value' required name=\"value\" placeholder=\"Answer value\">\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"25\" class=\"pr-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput formControlName='option' required name=\"option\" placeholder=\"Answer option\">\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"25\" class=\"pr-1\">\n            <mat-button-toggle  (click)='addAnsTemplate()' value=\"add\">\n              <mat-icon>add</mat-icon>\n            </mat-button-toggle>\n            <mat-button-toggle *ngIf=\"ansTemplateForm.controls['answers'].controls.length > 1\" (click)=removeAnsTemplate(i) value=\"remove\">\n              <mat-icon>remove</mat-icon>\n            </mat-button-toggle>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </mat-dialog-content>\n\n\n  <mat-dialog-actions align=\"end\">\n    <button mat-raised-button color=\"primary\" [disabled]=\"ansTemplateForm.invalid\">Save</button>\n    <span fxFlex></span>\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\n  </mat-dialog-actions>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AnswerTemplatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerTemplatePopupComponent", function() { return AnswerTemplatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AnswerTemplatePopupComponent = /** @class */ (function () {
    function AnswerTemplatePopupComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
    }
    AnswerTemplatePopupComponent.prototype.ngOnInit = function () {
        this.buildAnsTemplateform(this.data.payload);
        this.hideRemoveButton();
    };
    AnswerTemplatePopupComponent.prototype.buildAnsTemplateform = function (fieldItem) {
        this.ansTemplateForm = this.fb.group({
            name: [fieldItem.name || ""],
            answerTemplateType: [fieldItem.answerTemplateType || ""],
            answers: this.fb.array([this.initAnswerTemplate(fieldItem)])
        });
    };
    AnswerTemplatePopupComponent.prototype.initAnswerTemplate = function (fieldItem) {
        if (fieldItem === void 0) { fieldItem = {}; }
        return this.fb.group({
            lable: ["test"],
            value: ["test"],
            option: ["test"]
        });
    };
    AnswerTemplatePopupComponent.prototype.addAnsTemplate = function () {
        var answer = this.ansTemplateForm.controls["answers"];
        answer.push(this.initAnswerTemplate());
    };
    AnswerTemplatePopupComponent.prototype.removeAnsTemplate = function (index) {
        var answer = this.ansTemplateForm.controls["answers"];
        answer.removeAt(index);
    };
    AnswerTemplatePopupComponent.prototype.hideRemoveButton = function () {
        return this.ansTemplateForm.controls["answers"].value.length > 1;
    };
    AnswerTemplatePopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.ansTemplateForm.value);
    };
    AnswerTemplatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-answer-template-popup",
            template: __webpack_require__(/*! ./answer-template-popup.component.html */ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AnswerTemplatePopupComponent);
    return AnswerTemplatePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-builder/survey-builder.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/survey/survey-builder/survey-builder.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\n  <mat-card-title>\n    <div class=\"card-title-text\">Survey Builder</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content class=\"p-0\">\n\n    <form [formGroup]=\"questionForm\" (ngSubmit)=\"submit()\">\n      <mat-horizontal-stepper linear #stepper>\n        <mat-step [stepControl]=\"questionForm\">\n\n          <ng-template matStepLabel>Setup your questions</ng-template>\n\n          <div class=\"text-right mb-1\">\n            <div class=\"m-333 text-right\">\n              <button  type='button' mat-raised-button class=\"mb-05\" (click)=\"addQuestion()\" color=\"accent\">Add Question</button>\n            </div>\n          </div>\n\n          <mat-card formArrayName='questions' *ngFor=\"let answer of questionForm.controls['questions'].controls; let i=index\" class=\"p-1\"\n            [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\n\n            <mat-card-title class=\"p-0\">\n              <small class=\"text-muted\"> Question {{i+1}} </small>\n            </mat-card-title>\n\n            <div [formGroupName]=\"i\">\n              <div fxFlex=\"100\" class=\"pr-1\">\n                <mat-form-field class=\"full-width\">\n                  <input matInput formControlName=\"name\" required name=\"lable\" placeholder=\"Type your Question\">\n                </mat-form-field>\n              </div>\n\n              <div fxFlex=\"50\" class=\"pr-1\">\n                <mat-form-field class=\"full-width\">\n                  <mat-select formControlName=\"answerTemplate\" required placeholder=\"Choose Answer Template\">\n                    <mat-option>None</mat-option>\n                    <mat-option value=\"product\">Product Survey</mat-option>\n                    <mat-option value=\"evote\">Evote Survey</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n\n              <div fxFlex=\"20\" class=\"pr-0\">\n                <button  type='button' mat-raised-button *ngIf=\"questionForm.controls['questions'].controls.length > 1\" (click)='removeQuestion(i)' color=\"warn\">Remove</button>\n              </div>\n\n            </div>\n          </mat-card>\n\n          <div>\n            <button type='button' color=\"primary\" [disabled]=\"questionForm.invalid\" mat-button matStepperNext>Next</button>\n          </div>\n\n\n        </mat-step>\n\n        <mat-step [optional]=\"isOptional\">\n\n          <ng-template matStepLabel>Review</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"Address\" required>\n          </mat-form-field>\n          <div>\n            <button type='button' mat-button color=\"primary\" matStepperPrevious>Back</button>\n            <button type='button' mat-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Done</ng-template>\n          You are now done.\n          <div>\n            <button type='button' mat-button color=\"primary\" matStepperPrevious>Back</button>\n            <button type='submit' mat-button color=\"primary\" (click)=\"stepper.reset()\">Submit</button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </form>\n\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/survey/survey-builder/survey-builder.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/survey/survey-builder/survey-builder.component.ts ***!
  \*************************************************************************/
/*! exports provided: SurveyBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBuilderComponent", function() { return SurveyBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
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



var SurveyBuilderComponent = /** @class */ (function () {
    function SurveyBuilderComponent(fb) {
        this.fb = fb;
        this.isOptional = false;
    }
    SurveyBuilderComponent.prototype.ngOnInit = function () {
        this.questionForm = this.fb.group({
            questions: this.fb.array([this.initQuestionTemplate()])
        });
    };
    SurveyBuilderComponent.prototype.initQuestionTemplate = function () {
        return this.fb.group({
            name: [],
            answerTemplate: []
        });
    };
    SurveyBuilderComponent.prototype.addQuestion = function () {
        var question = this.questionForm.controls["questions"];
        question.push(this.initQuestionTemplate());
    };
    SurveyBuilderComponent.prototype.removeQuestion = function (index) {
        var question = this.questionForm.controls["questions"];
        question.removeAt(index);
    };
    SurveyBuilderComponent.prototype.hideRemoveButton = function () {
        return this.questionForm.controls["answers"].value.length > 1;
    };
    SurveyBuilderComponent.prototype.submit = function () {
        console.log(JSON.stringify(this.questionForm.value));
    };
    SurveyBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-builder",
            template: __webpack_require__(/*! ./survey-builder.component.html */ "./src/app/views/survey/survey-builder/survey-builder.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SurveyBuilderComponent);
    return SurveyBuilderComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\n\n<form [formGroup]=\"surveyForm\" (ngSubmit)=\"submit()\">\n  <mat-dialog-content class=\"mat-typography\">\n\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\n      <div fxFlex=\"100\" class=\"pr-1\">\n        <mat-form-field class=\"full-width\">\n          <input matInput [formControl]=\"surveyForm.controls['name']\" required name=\"name\" placeholder=\"Survey name\">\n        </mat-form-field>\n      </div>\n\n      <div fxFlex=\"100\" class=\"pr-1\">\n        <mat-form-field class=\"full-width\">\n          <mat-select [formControl]=\"surveyForm.controls['surveyType']\" [(ngModel)]=\"selectedType\" required placeholder=\"Survey Type\">\n            <mat-option  *ngFor=\"let type of surveyTypes\" [value]=\"type\">{{type.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n\n  </mat-dialog-content>\n\n\n  <mat-dialog-actions align=\"end\">\n    <button mat-raised-button color=\"primary\" routerLink=\"/surveys/builder_v1\" [disabled]=\"surveyForm.invalid\">Save</button>\n    <span fxFlex></span>\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\n  </mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SurveyCreationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCreationPopupComponent", function() { return SurveyCreationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SurveyCreationPopupComponent = /** @class */ (function () {
    function SurveyCreationPopupComponent(data, fb, dialogRef, layout) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.layout = layout;
        this.surveyTypes = [
            {
                name: 'Product Survey',
                value: 'product'
            },
            {
                name: 'Evote Survey',
                value: 'evote'
            }
        ];
    }
    SurveyCreationPopupComponent.prototype.ngOnInit = function () {
        this.buildSurveyForm(this.data.payload);
        this.selectedType = this.data.payload.type;
        if (this.data.payload.type === this.surveyTypes[0]) {
            console.log('equals');
        }
        console.log(this.surveyTypes[0]);
        console.log(this.data.payload.type);
    };
    SurveyCreationPopupComponent.prototype.buildSurveyForm = function (fieldItem) {
        this.surveyForm = this.fb.group({
            name: [fieldItem.topic || ""],
            surveyType: [fieldItem.type || ""]
        });
    };
    SurveyCreationPopupComponent.prototype.submit = function () {
        this.layout.publishLayoutChange({
            sidebarStyle: "closed"
        });
        this.dialogRef.close(this.surveyForm.value);
    };
    SurveyCreationPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-creation-popup",
            template: __webpack_require__(/*! ./survey-creation-popup.component.html */ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]])
    ], SurveyCreationPopupComponent);
    return SurveyCreationPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-setting/survey-setting.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/survey/survey-setting/survey-setting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\n  <mat-card-title>\n    <div class=\"card-title-text\">Survey Settings</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content class=\"p-0\">\n    <div class=\"text-muted mb-1 m-1 text-left\">\n      you can configure your survey question answer with adding different options per answer. To setup your predefined answer template,\n      navigate to \"Answser template section \" by clicking \"Create Answer template\" button.\n    </div>\n    <div class=\"profile-actions text-right mb-1\">\n      <div class=\"m-333 text-right\">\n        <button mat-raised-button (click)=\"openAnswerTemplatePopup({},true)\" class=\"mb-05\" color=\"accent\">Create Answer template</button>\n      </div>\n    </div>\n\n    <mat-divider></mat-divider>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Answer templates\n          </mat-panel-title>\n          <mat-panel-description>\n            View or Edit Predefined Answer template\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n          [limit]=\"5\" [rows]=\"answerTemplates\">\n\n          <ngx-datatable-column name=\"Template Name\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row?.name}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Answer type\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row?.type}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/survey/survey-setting/survey-setting.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/survey/survey-setting/survey-setting.component.ts ***!
  \*************************************************************************/
/*! exports provided: SurveySettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveySettingComponent", function() { return SurveySettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../answer-template-popup/answer-template-popup.component */ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveySettingComponent = /** @class */ (function () {
    function SurveySettingComponent(dialog) {
        this.dialog = dialog;
        this.answerTemplates = [
            {
                name: "Dichotomous Survey Questions",
                type: "Yes/No"
            },
            {
                name: "Multiple Choice answers",
                type: "mcq"
            }
        ];
    }
    SurveySettingComponent.prototype.ngOnInit = function () { };
    SurveySettingComponent.prototype.openAnswerTemplatePopup = function (data, isNew) {
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add New Answer Template " : "Update Answer Template ";
        var dialogRef = this.dialog.open(_answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_3__["AnswerTemplatePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            console.log("input : ");
            console.log(JSON.stringify(res));
        });
    };
    SurveySettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-setting",
            template: __webpack_require__(/*! ./survey-setting.component.html */ "./src/app/views/survey/survey-setting/survey-setting.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], SurveySettingComponent);
    return SurveySettingComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-table/survey-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/survey/survey-table/survey-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" >\n  <mat-card-title>\n    <div class=\"card-title-text\">Survey Summary</div>\n    <mat-divider></mat-divider>\n\n    <div class=\"profile-actions text-right mb-1\">\n        <div class=\"m-333\">\n          <button mat-raised-button class=\"mb-05\" (click)='openSurveyPopup({},true)' color=\"primary\">Add Survey</button>\n        </div>\n      </div>\n\n\n  </mat-card-title>\n  <mat-card-content class=\"p-0\">\n    <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n      [limit]=\"5\" [rows]=\"surveyData\">\n      <ngx-datatable-column name=\"Survey Topic\" [flexGrow]=\"1\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row?.topic}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Survey Type\" [flexGrow]=\"1\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row?.type.name}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Survey Source\" [flexGrow]=\"1\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row?.source}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Start Date\" [flexGrow]=\"1\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row?.start}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"End Date\" [flexGrow]=\"1\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row?.end}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <button mat-icon-button mat-sm-button (click)='openSurveyPopup(row,false)' color=\"primary\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\n          <button mat-icon-button mat-sm-button color=\"warn\" class=\"mr-1\" ><mat-icon>delete</mat-icon></button>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/survey/survey-table/survey-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/survey/survey-table/survey-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: SurveyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTableComponent", function() { return SurveyTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey-creation-popup/survey-creation-popup.component */ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyTableComponent = /** @class */ (function () {
    function SurveyTableComponent(dialog) {
        this.dialog = dialog;
        this.surveyData = [
            {
                topic: "Addidas Air Survey",
                type: { name: "Product Survey", value: "product" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Evote Survey", value: "evote" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Evote Survey", value: "evote" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Product Survey", value: "product" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Product Survey", value: "product" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            }
        ];
    }
    SurveyTableComponent.prototype.ngOnInit = function () { };
    SurveyTableComponent.prototype.openSurveyPopup = function (data, isNew) {
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add New Survey " : "Update Survey ";
        var dialogRef = this.dialog.open(_survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_2__["SurveyCreationPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            console.log("input : ");
            console.log(JSON.stringify(res));
        });
    };
    SurveyTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-table",
            template: __webpack_require__(/*! ./survey-table.component.html */ "./src/app/views/survey/survey-table/survey-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SurveyTableComponent);
    return SurveyTableComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/survey/survey.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\n      <div class=\"propic text-center\">\n        <img src=\"assets/images/survey-icon.jpg\" alt=\"\">\n      </div>\n      <div class=\"profile-title text-center mb-1\">\n        <div class=\"main-title\">Survey Service</div>\n        <div class=\"subtitle mb-05\">Clear Picture Authentica</div>\n        <div class=\"text-muted\"> Provides the tools you need to easily create questionnaires.</div>\n      </div>\n\n      <div class=\"profile-nav\">\n        <mat-nav-list>\n          <mat-list-item routerLink=\"/surveys/summery\" routerLinkActive=\"list-item-active\">\n            <mat-icon>home</mat-icon>\n            Survey Summary\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item routerLink=\"/surveys/setting\" routerLinkActive=\"list-item-active\">\n            <mat-icon>settings</mat-icon>\n            Survey Settings\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item routerLink=\"/surveys/builder_v1\" routerLinkActive=\"list-item-active\">\n            <mat-icon>settings</mat-icon>\n            Survey Builder\n          </mat-list-item>\n          <mat-divider></mat-divider>\n        </mat-nav-list>\n      </div>\n    </mat-card>\n\n\n\n  </div>\n\n<!-- Profile Views -->\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/survey/survey.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/survey/survey.component.ts ***!
  \**************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(/*! ./survey.component.html */ "./src/app/views/survey/survey.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/survey/survey.module.ts ***!
  \***********************************************/
/*! exports provided: SurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _survey_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey.component */ "./src/app/views/survey/survey.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _survey_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey.routing */ "./src/app/views/survey/survey.routing.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./survey-table/survey-table.component */ "./src/app/views/survey/survey-table/survey-table.component.ts");
/* harmony import */ var _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./survey-setting/survey-setting.component */ "./src/app/views/survey/survey-setting/survey-setting.component.ts");
/* harmony import */ var _answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./answer-template-popup/answer-template-popup.component */ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts");
/* harmony import */ var _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./survey-creation-popup/survey-creation-popup.component */ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts");
/* harmony import */ var _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./survey-builder/survey-builder.component */ "./src/app/views/survey/survey-builder/survey-builder.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SurveyModule = /** @class */ (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_survey_routing__WEBPACK_IMPORTED_MODULE_4__["SurveyRoute"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"]
            ],
            declarations: [
                _survey_component__WEBPACK_IMPORTED_MODULE_2__["SurveyComponent"],
                _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_9__["SurveyTableComponent"],
                _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_10__["SurveySettingComponent"],
                _answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__["AnswerTemplatePopupComponent"],
                _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__["SurveyCreationPopupComponent"],
                _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_13__["SurveyBuilderComponent"]
            ],
            entryComponents: [_answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__["AnswerTemplatePopupComponent"], _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__["SurveyCreationPopupComponent"]],
            providers: []
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/survey/survey.routing.ts ***!
  \************************************************/
/*! exports provided: SurveyRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyRoute", function() { return SurveyRoute; });
/* harmony import */ var _survey_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey.component */ "./src/app/views/survey/survey.component.ts");
/* harmony import */ var _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-table/survey-table.component */ "./src/app/views/survey/survey-table/survey-table.component.ts");
/* harmony import */ var _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey-setting/survey-setting.component */ "./src/app/views/survey/survey-setting/survey-setting.component.ts");
/* harmony import */ var _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-builder/survey-builder.component */ "./src/app/views/survey/survey-builder/survey-builder.component.ts");




var SurveyRoute = [
    {
        path: "",
        component: _survey_component__WEBPACK_IMPORTED_MODULE_0__["SurveyComponent"],
        children: [
            {
                path: "summery",
                component: _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_1__["SurveyTableComponent"],
                data: { title: "Survey Summary", breadcrumb: "Summary" }
            },
            {
                path: "setting",
                component: _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_2__["SurveySettingComponent"],
                data: { title: "Survey Setting", breadcrumb: "Setting" }
            },
            {
                path: "builder_v1",
                component: _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_3__["SurveyBuilderComponent"],
                data: { title: "Survey Builder", breadcrumb: "Builder" }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-survey-survey-module.js.map