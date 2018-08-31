(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-material-app-material-module"],{

/***/ "./src/app/views/material/app-autocomplete/app-autocomplete.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/material/app-autocomplete/app-autocomplete.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-autocomplete/app-autocomplete.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/material/app-autocomplete/app-autocomplete.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Autocomplete</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n    </mat-form-field>\r\n\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\r\n        {{ state }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-autocomplete/app-autocomplete.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/material/app-autocomplete/app-autocomplete.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAutocompleteComponent", function() { return AppAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppAutocompleteComponent = /** @class */ (function () {
    function AppAutocompleteComponent() {
        var _this = this;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterStates(name); }));
    }
    AppAutocompleteComponent.prototype.ngOnInit = function () {
    };
    AppAutocompleteComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp("^" + val, 'gi').test(s); })
            : this.states;
    };
    AppAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./app-autocomplete.component.html */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./app-autocomplete.component.css */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppAutocompleteComponent);
    return AppAutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-buttons/app-buttons.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/material/app-buttons/app-buttons.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-buttons/app-buttons.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/material/app-buttons/app-buttons.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Buttons</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"pb-1\">\r\n      <p>Basic buttons</p>\r\n      <button mat-button class=\"mr-1\">Default</button>\r\n      <button mat-button color=\"primary\" class=\"mr-1\">Primary</button>\r\n      <button mat-button color=\"accent\" class=\"mr-1\">Accent</button>\r\n      <button mat-button color=\"warn\" class=\"mr-1\">Warn</button>\r\n      <button mat-button disabled class=\"mr-1\">Disabled</button>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <p>Raised buttons</p>\r\n      <button mat-raised-button class=\"mr-1\">Default</button>\r\n      <button mat-raised-button color=\"primary\" class=\"mr-1\">Primary</button>\r\n      <button mat-raised-button color=\"accent\" class=\"mr-1\">Accent</button>\r\n      <button mat-raised-button color=\"warn\" class=\"mr-1\">Warn</button>\r\n      <button mat-raised-button disabled class=\"mr-1\">Disabled</button>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <p>Fab buttons</p>\r\n      <button mat-fab color=\"warn\" class=\"mr-1\"><mat-icon>create</mat-icon></button>\r\n      <button mat-mini-fab color=\"warn\" class=\"mr-1\"><mat-icon>create</mat-icon></button>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <p>Toggle buttons</p>\r\n      <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n        <mat-button-toggle value=\"left\">\r\n          <mat-icon>format_align_left</mat-icon>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"center\">\r\n          <mat-icon>format_align_center</mat-icon>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"right\">\r\n          <mat-icon>format_align_right</mat-icon>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"justify\" disabled>\r\n          <mat-icon>format_align_justify</mat-icon>\r\n        </mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-buttons/app-buttons.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/material/app-buttons/app-buttons.component.ts ***!
  \*********************************************************************/
/*! exports provided: AppButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppButtonsComponent", function() { return AppButtonsComponent; });
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

var AppButtonsComponent = /** @class */ (function () {
    function AppButtonsComponent() {
    }
    AppButtonsComponent.prototype.ngOnInit = function () {
    };
    AppButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./app-buttons.component.html */ "./src/app/views/material/app-buttons/app-buttons.component.html"),
            styles: [__webpack_require__(/*! ./app-buttons.component.css */ "./src/app/views/material/app-buttons/app-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppButtonsComponent);
    return AppButtonsComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-card/app-card.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-card/app-card.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-card/app-card.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-card/app-card.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"mat-bg-primary m-0\">\r\n        <div class=\"card-title-text\">\r\n          <span>Card with heading</span>\r\n          <span fxFlex></span>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu1\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu1=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>settings</mat-icon>\r\n              <span>Settings</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>notifications_off</mat-icon>\r\n              <span>Disable alerts</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n                <mat-icon>close</mat-icon>\r\n                <span>Remove panel</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <img mat-card-image src=\"assets/images/photo-2.jpg\">\r\n      <mat-card-content>\r\n        <p>\r\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur eveniet iste iusto\r\n          veritatis. Adipisci quas repellat sed. Quasi quaerat aut.\r\n        </p>\r\n        <mat-divider class=\"mb-1\"></mat-divider>\r\n        <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\r\n        <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"mat-bg-accent m-0\">\r\n        <div class=\"card-title-text\">\r\n          <span>Card with heading</span>\r\n          <span fxFlex></span>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu2\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu2=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>settings</mat-icon>\r\n              <span>Settings</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>notifications_off</mat-icon>\r\n              <span>Disable alerts</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>close</mat-icon>\r\n              <span>Remove panel</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <img mat-card-image src=\"assets/images/photo-1.jpg\">\r\n      <mat-card-content>\r\n        <p>\r\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur eveniet iste iusto\r\n          veritatis. Adipisci quas repellat sed. Quasi quaerat aut.\r\n        </p>\r\n        <mat-divider class=\"mb-1\"></mat-divider>\r\n        <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\r\n        <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"mat-bg-warn m-0\">\r\n        <div class=\"card-title-text\">\r\n          <span>Card with heading</span>\r\n          <span fxFlex></span>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu3\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu3=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>settings</mat-icon>\r\n              <span>Settings</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>notifications_off</mat-icon>\r\n              <span>Disable alerts</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>close</mat-icon>\r\n              <span>Remove panel</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <img mat-card-image src=\"assets/images/photo-3.jpg\">\r\n      <mat-card-content>\r\n        <p>\r\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur eveniet iste iusto\r\n          veritatis. Adipisci quas repellat sed. Quasi quaerat aut.\r\n        </p>\r\n        <mat-divider class=\"mb-1\"></mat-divider>\r\n        <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\r\n        <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div\r\n  fxFlex=\"100\" \r\n  fxFlex.gt-xs=\"50\">\r\n    <mat-card class=\"example-card\">\r\n      <img mat-card-image src=\"assets/images/photo-1.jpg\">\r\n      <mat-card-content>\r\n        <p>\r\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, \r\n          sapiente est atque tenetur eveniet iste iusto veritatis magni eum, sunt eius \r\n          laudantium adipisci repudiandae numquam, incidunt suscipit. Veritatis ea autem, \r\n          beatae quae quia cum tempora, voluptatum dignissimos. Reiciendis animi, quos sint. \r\n          Vero maxime molestiae.\r\n        </p>\r\n        <mat-divider class=\"mb-1\"></mat-divider>\r\n        <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n        <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div \r\n  fxFlex=\"100\"\r\n  fxFlex.gt-xs=\"50\">\r\n    <mat-card>\r\n      Super simple card\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Standard Card Title</mat-card-title>\r\n      <mat-card-subtitle>Card subtitle</mat-card-subtitle>\r\n      <mat-card-content>\r\n        <p>\r\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, \r\n          sapiente est atque tenetur eveniet iste iusto veritatis magni eum, sunt eius \r\n          laudantium adipisci repudiandae numquam, incidunt suscipit. Veritatis ea autem, \r\n          beatae quae quia cum tempora, voluptatum dignissimos. Reiciendis animi, quos sint. \r\n          Vero maxime molestiae.\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-divider></mat-divider>\r\n      <mat-card-actions>\r\n        <button color=\"warn\" mat-button>Favorite</button>\r\n        <button mat-button>Share</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/material/app-card/app-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-card/app-card.component.ts ***!
  \***************************************************************/
/*! exports provided: AppCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCardComponent", function() { return AppCardComponent; });
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

var AppCardComponent = /** @class */ (function () {
    function AppCardComponent() {
    }
    AppCardComponent.prototype.ngOnInit = function () {
    };
    AppCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./app-card.component.html */ "./src/app/views/material/app-card/app-card.component.html"),
            styles: [__webpack_require__(/*! ./app-card.component.css */ "./src/app/views/material/app-card/app-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppCardComponent);
    return AppCardComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-grid/app-grid.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-grid/app-grid.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-grid/app-grid.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-grid/app-grid.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Grids</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-tab-group>\r\n      <mat-tab label=\"Fixed Height\">\r\n        <br>\r\n        <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n          <mat-grid-tile\r\n              *ngFor=\"let fg of gridFixedHeight\"\r\n              [colspan]=\"fg.cols\"\r\n              [rowspan]=\"fg.rows\"\r\n              [style.background]=\"fg.color\"\r\n              [style.color]=\"'#ffffff'\">\r\n            {{fg.text}}\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-tab>\r\n      <mat-tab label=\"Ratio Height\">\r\n        <br>\r\n        <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n          <mat-grid-tile\r\n          *ngFor=\"let rg of gridRatioHeight\"\r\n          [style.background]=\"'#607d8b'\"\r\n          [style.color]=\"'#ffffff'\" >{{rg}}</mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-grid/app-grid.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-grid/app-grid.component.ts ***!
  \***************************************************************/
/*! exports provided: AppGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGridComponent", function() { return AppGridComponent; });
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

var AppGridComponent = /** @class */ (function () {
    function AppGridComponent() {
        this.gridFixedHeight = [
            { text: 'One', cols: 3, rows: 1, color: '#607d8b' },
            { text: 'Two', cols: 1, rows: 2, color: '#607d8b' },
            { text: 'Three', cols: 1, rows: 1, color: '#607d8b' },
            { text: 'Four', cols: 2, rows: 1, color: '#607d8b' },
        ];
        this.gridRatioHeight = ['Grid One', 'Grid Two', 'Grid Three', 'Grid Four'];
    }
    AppGridComponent.prototype.ngOnInit = function () {
    };
    AppGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./app-grid.component.html */ "./src/app/views/material/app-grid/app-grid.component.html"),
            styles: [__webpack_require__(/*! ./app-grid.component.css */ "./src/app/views/material/app-grid/app-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppGridComponent);
    return AppGridComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-list/app-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-list/app-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-list/app-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-list/app-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\" m-0\">\r\n    <div class=\"card-title-text\">\r\n      <span>Lists</span>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <mat-list>\r\n      <h3 matSubheader>Simple List</h3>\r\n      <mat-list-item>List Item 1</mat-list-item>\r\n      <mat-list-item>List Item 2</mat-list-item>\r\n      <mat-list-item>List Item 3</mat-list-item>\r\n    </mat-list>\r\n    <mat-divider class=\"mb-1\"></mat-divider>\r\n    <mat-list>\r\n      <h3 matSubheader>Top management</h3>\r\n      <mat-list-item>\r\n        <img mat-list-avatar src=\"assets/images/face-1.jpg\" alt=\"\">\r\n        <h3 matLine>Mark</h3>\r\n        <p matLine>CEO</p>\r\n      </mat-list-item>\r\n      <mat-list-item>\r\n        <img mat-list-avatar src=\"assets/images/face-2.jpg\" alt=\"\">\r\n        <h3 matLine>Gevorg Spartak</h3>\r\n        <p matLine>COO</p>\r\n      </mat-list-item>\r\n      <mat-list-item>\r\n        <img mat-list-avatar src=\"assets/images/face-3.jpg\" alt=\"\">\r\n        <h3 matLine>Petros Toros</h3>\r\n        <p matLine>CFO</p>\r\n      </mat-list-item>\r\n      <mat-divider class=\"mb-1\"></mat-divider>\r\n      <h3 matSubheader>Subordinates</h3>\r\n      <mat-list-item>\r\n        <img mat-list-avatar src=\"assets/images/face-4.jpg\" alt=\"\">\r\n        <h3 matLine>Roy</h3>\r\n        <p matLine>Marketing Manager</p>\r\n      </mat-list-item>\r\n      <mat-list-item>\r\n        <img mat-list-avatar src=\"assets/images/face-1.jpg\" alt=\"\">\r\n        <h3 matLine>Henrik Gevorg</h3>\r\n        <p matLine>Lead Developer</p>\r\n      </mat-list-item>\r\n      <mat-list-item>\r\n        <img mat-list-avatar src=\"assets/images/face-1.jpg\" alt=\"\">\r\n        <h3 matLine>Jhone Doe</h3>\r\n        <p matLine>Marketing manager</p>\r\n      </mat-list-item>\r\n    </mat-list>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-list/app-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-list/app-list.component.ts ***!
  \***************************************************************/
/*! exports provided: AppListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListComponent", function() { return AppListComponent; });
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

var AppListComponent = /** @class */ (function () {
    function AppListComponent() {
    }
    AppListComponent.prototype.ngOnInit = function () {
    };
    AppListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./app-list.component.html */ "./src/app/views/material/app-list/app-list.component.html"),
            styles: [__webpack_require__(/*! ./app-list.component.css */ "./src/app/views/material/app-list/app-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppListComponent);
    return AppListComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/material/app-material.module.ts ***!
  \*******************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-autocomplete/app-autocomplete.component */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.ts");
/* harmony import */ var _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-buttons/app-buttons.component */ "./src/app/views/material/app-buttons/app-buttons.component.ts");
/* harmony import */ var _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-card/app-card.component */ "./src/app/views/material/app-card/app-card.component.ts");
/* harmony import */ var _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-grid/app-grid.component */ "./src/app/views/material/app-grid/app-grid.component.ts");
/* harmony import */ var _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-list/app-list.component */ "./src/app/views/material/app-list/app-list.component.ts");
/* harmony import */ var _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-menu/app-menu.component */ "./src/app/views/material/app-menu/app-menu.component.ts");
/* harmony import */ var _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-progress/app-progress.component */ "./src/app/views/material/app-progress/app-progress.component.ts");
/* harmony import */ var _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-radio/app-radio.component */ "./src/app/views/material/app-radio/app-radio.component.ts");
/* harmony import */ var _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-select/app-select.component */ "./src/app/views/material/app-select/app-select.component.ts");
/* harmony import */ var _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-slider/app-slider.component */ "./src/app/views/material/app-slider/app-slider.component.ts");
/* harmony import */ var _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-snackbar/app-snackbar.component */ "./src/app/views/material/app-snackbar/app-snackbar.component.ts");
/* harmony import */ var _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-tab/app-tab.component */ "./src/app/views/material/app-tab/app-tab.component.ts");
/* harmony import */ var _app_material_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-material.routing */ "./src/app/views/material/app-material.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_app_material_routing__WEBPACK_IMPORTED_MODULE_18__["MaterialRoutes"])
            ],
            declarations: [
                _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AppAutocompleteComponent"],
                _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_7__["AppButtonsComponent"],
                _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_8__["AppCardComponent"],
                _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_9__["AppGridComponent"],
                _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_10__["AppListComponent"],
                _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_11__["AppMenuComponent"],
                _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_12__["AppProgressComponent"],
                _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_13__["AppRadioComponent"],
                _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_14__["AppSelectComponent"],
                _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_15__["AppSliderComponent"],
                _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_16__["AppSnackbarComponent"],
                _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_17__["AppTabComponent"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/views/material/app-material.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/views/material/app-material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-autocomplete/app-autocomplete.component */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.ts");
/* harmony import */ var _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-buttons/app-buttons.component */ "./src/app/views/material/app-buttons/app-buttons.component.ts");
/* harmony import */ var _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-card/app-card.component */ "./src/app/views/material/app-card/app-card.component.ts");
/* harmony import */ var _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-grid/app-grid.component */ "./src/app/views/material/app-grid/app-grid.component.ts");
/* harmony import */ var _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-list/app-list.component */ "./src/app/views/material/app-list/app-list.component.ts");
/* harmony import */ var _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-menu/app-menu.component */ "./src/app/views/material/app-menu/app-menu.component.ts");
/* harmony import */ var _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-progress/app-progress.component */ "./src/app/views/material/app-progress/app-progress.component.ts");
/* harmony import */ var _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-radio/app-radio.component */ "./src/app/views/material/app-radio/app-radio.component.ts");
/* harmony import */ var _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-select/app-select.component */ "./src/app/views/material/app-select/app-select.component.ts");
/* harmony import */ var _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-slider/app-slider.component */ "./src/app/views/material/app-slider/app-slider.component.ts");
/* harmony import */ var _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-snackbar/app-snackbar.component */ "./src/app/views/material/app-snackbar/app-snackbar.component.ts");
/* harmony import */ var _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-tab/app-tab.component */ "./src/app/views/material/app-tab/app-tab.component.ts");












var MaterialRoutes = [
    {
        path: '',
        data: { title: 'Material' },
        children: [{
                path: 'buttons',
                component: _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_1__["AppButtonsComponent"],
                data: { title: 'Buttons', breadcrumb: 'BUTTONS' }
            }, {
                path: 'cards',
                component: _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_2__["AppCardComponent"],
                data: { title: 'Cards', breadcrumb: 'CARDS' }
            }, {
                path: 'tabs',
                component: _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_11__["AppTabComponent"],
                data: { title: 'Tabs', breadcrumb: 'TABS' }
            }, {
                path: 'grids',
                component: _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_3__["AppGridComponent"],
                data: { title: 'Grids', breadcrumb: 'GRIDS' }
            }, {
                path: 'lists',
                component: _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_4__["AppListComponent"],
                data: { title: 'Lists', breadcrumb: 'LISTS' }
            }, {
                path: 'menu',
                component: _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_5__["AppMenuComponent"],
                data: { title: 'Menu', breadcrumb: 'MENU' }
            }, {
                path: 'select',
                component: _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_8__["AppSelectComponent"],
                data: { title: 'Select', breadcrumb: 'SELECT' }
            }, {
                path: 'radio',
                component: _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_7__["AppRadioComponent"],
                data: { title: 'Radio', breadcrumb: 'RADIO' }
            }, {
                path: 'snackbar',
                component: _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["AppSnackbarComponent"],
                data: { title: 'Snackbar', breadcrumb: 'SNACKBAR' }
            }, {
                path: 'autocomplete',
                component: _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__["AppAutocompleteComponent"],
                data: { title: 'Autocomplete', breadcrumb: 'AUTOCOMPLETE' }
            }, {
                path: 'slider',
                component: _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_9__["AppSliderComponent"],
                data: { title: 'Slider', breadcrumb: 'SLIDER' }
            }, {
                path: 'progress',
                component: _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_6__["AppProgressComponent"],
                data: { title: 'Progress', breadcrumb: 'PROGRESS' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/material/app-menu/app-menu.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-menu/app-menu.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-menu/app-menu.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-menu/app-menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\" m-0\">\r\n    <div class=\"card-title-text\">\r\n      <span>Menu</span>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <p class=\"mat-card-title mt-1\">Icon menu</p>\r\n    <mat-toolbar class=\"inbox-toolbar mt-1\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"iconMenu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <mat-menu #iconMenu=\"matMenu\">\r\n        <button mat-menu-item>\r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span>\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>notifications_off</mat-icon>\r\n            <span>Disable alerts</span>\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>close</mat-icon>\r\n            <span>Remove panel</span>\r\n        </button>\r\n      </mat-menu>\r\n    </mat-toolbar>\r\n\r\n    <p class=\"mat-card-title mt-1\">Menu without icon</p>\r\n    <mat-toolbar class=\"inbox-toolbar mt-1\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item>\r\n            <span>Settings</span>\r\n        </button>\r\n        <button mat-menu-item>\r\n              <span>Disable alerts</span>\r\n          </button>\r\n        <button mat-menu-item>\r\n            <span>Remove panel</span>\r\n        </button>\r\n      </mat-menu>\r\n    </mat-toolbar>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-menu/app-menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-menu/app-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: AppMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function() { return AppMenuComponent; });
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

var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent() {
    }
    AppMenuComponent.prototype.ngOnInit = function () {
    };
    AppMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./app-menu.component.html */ "./src/app/views/material/app-menu/app-menu.component.html"),
            styles: [__webpack_require__(/*! ./app-menu.component.css */ "./src/app/views/material/app-menu/app-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppMenuComponent);
    return AppMenuComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-progress/app-progress.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/material/app-progress/app-progress.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-progress/app-progress.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/material/app-progress/app-progress.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Progress</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"pb-1\">\r\n      <h6>Progress Spinner</h6>\r\n      <p class=\"text-muted\">Determinate</p>\r\n      <mat-progress-spinner\r\n      [color]=\"'primary'\"\r\n      [mode]=\"'determinate'\" \r\n      [value]=\"60\"></mat-progress-spinner>\r\n\r\n      <p class=\"text-muted pt-1\">Indeterminate</p>\r\n      <mat-progress-spinner \r\n      [color]=\"'primary'\"\r\n      [mode]=\"'indeterminate'\"></mat-progress-spinner>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <h6>Progress Bar</h6>\r\n      <p class=\"text-muted\">Determinate</p>\r\n      <mat-progress-bar\r\n      [mode]=\"'determinate'\"\r\n      [value]=\"60\">\r\n      </mat-progress-bar>\r\n\r\n      <p class=\"text-muted pt-1\">Buffer</p>\r\n      <mat-progress-bar\r\n      [mode]=\"'buffer'\"\r\n      [value]=\"40\"\r\n      [bufferValue]=\"70\">\r\n      </mat-progress-bar>\r\n\r\n      <p class=\"text-muted pt-1\">Indeterminate</p>\r\n      <mat-progress-bar\r\n      [mode]=\"'indeterminate'\">\r\n      </mat-progress-bar>\r\n\r\n      <p class=\"text-muted pt-1\">Query</p>\r\n      <mat-progress-bar\r\n      [mode]=\"'query'\">\r\n      </mat-progress-bar>\r\n\r\n    </div>\r\n    \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/material/app-progress/app-progress.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/material/app-progress/app-progress.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProgressComponent", function() { return AppProgressComponent; });
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

var AppProgressComponent = /** @class */ (function () {
    function AppProgressComponent() {
    }
    AppProgressComponent.prototype.ngOnInit = function () {
    };
    AppProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./app-progress.component.html */ "./src/app/views/material/app-progress/app-progress.component.html"),
            styles: [__webpack_require__(/*! ./app-progress.component.css */ "./src/app/views/material/app-progress/app-progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppProgressComponent);
    return AppProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-radio/app-radio.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/material/app-radio/app-radio.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-radio/app-radio.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/material/app-radio/app-radio.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"m-0\">\r\n    <div class=\"card-title-text\">\r\n      <span>Radio button</span>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <p class=\"mt-1\">Simple Radio buttons</p>\r\n\r\n    <mat-radio-group fxLayout=\"column\" class=\"mb-1\">\r\n      <mat-radio-button [style.marginBottom]=\"'.5rem'\" value=\"1\">Option 1</mat-radio-button>\r\n      <mat-radio-button [style.marginBottom]=\"'.5rem'\" value=\"2\">Option 2</mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n    \r\n    <p>Radios with ngModel</p>\r\n    <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"selectedSeason\">\r\n      <mat-radio-button \r\n      [style.marginBottom]=\"'.5rem'\" \r\n      *ngFor=\"let season of seasons\" \r\n      [value]=\"season\">\r\n        {{season}}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n    <div class=\"mt-1\">Your favorite season is: {{selectedSeason}}</div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/material/app-radio/app-radio.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-radio/app-radio.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRadioComponent", function() { return AppRadioComponent; });
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

var AppRadioComponent = /** @class */ (function () {
    function AppRadioComponent() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    AppRadioComponent.prototype.ngOnInit = function () {
    };
    AppRadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio',
            template: __webpack_require__(/*! ./app-radio.component.html */ "./src/app/views/material/app-radio/app-radio.component.html"),
            styles: [__webpack_require__(/*! ./app-radio.component.css */ "./src/app/views/material/app-radio/app-radio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppRadioComponent);
    return AppRadioComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-select/app-select.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/material/app-select/app-select.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-select/app-select.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/material/app-select/app-select.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">\r\n      <span>Dropdown select</span>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    \r\n    <form class=\"pt-1\">\r\n        <mat-select id=\"langToggle\" placeholder=\"\" [(ngModel)]=\"selectedValue\" name=\"food\" class=\"mb-1\">\r\n          <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\" ngDefaultControl>\r\n            {{food.viewValue}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <p> Selected value: {{selectedValue}} </p>\r\n    </form>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-select/app-select.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/material/app-select/app-select.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSelectComponent", function() { return AppSelectComponent; });
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

var AppSelectComponent = /** @class */ (function () {
    function AppSelectComponent() {
        this.selectedValue = 'pizza';
        this.foods = [
            { value: 'steak', viewValue: 'Steak' },
            { value: 'pizza', viewValue: 'Pizza' },
            { value: 'tacos', viewValue: 'Tacos' }
        ];
    }
    AppSelectComponent.prototype.ngOnInit = function () {
    };
    AppSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./app-select.component.html */ "./src/app/views/material/app-select/app-select.component.html"),
            styles: [__webpack_require__(/*! ./app-select.component.css */ "./src/app/views/material/app-select/app-select.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSelectComponent);
    return AppSelectComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-slider/app-slider.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/material/app-slider/app-slider.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-slider/app-slider.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/material/app-slider/app-slider.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Slider</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"pb-1\">\r\n      <h6>Default</h6>\r\n      <mat-slider [style.width]=\"'300px'\"></mat-slider>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <h6>Thumb Label</h6>\r\n      <mat-slider \r\n      color=\"primary\"\r\n      [style.width]=\"'300px'\"\r\n      [thumbLabel]=\"true\"></mat-slider>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <h6>Step</h6>\r\n      <mat-slider \r\n      [style.width]=\"'300px'\"\r\n      [step]=\"5\"></mat-slider>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <h6>Invert</h6>\r\n      <mat-slider \r\n      [style.width]=\"'300px'\"\r\n      [invert]=\"true\"></mat-slider>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <h6>Vertical</h6>\r\n      <mat-slider \r\n      [style.width]=\"'300px'\"\r\n      [vertical]=\"true\"></mat-slider>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <h6>Disabled</h6>\r\n      <mat-slider \r\n      [style.width]=\"'300px'\"\r\n      [disabled]=\"true\"></mat-slider>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/material/app-slider/app-slider.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/material/app-slider/app-slider.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSliderComponent", function() { return AppSliderComponent; });
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

var AppSliderComponent = /** @class */ (function () {
    function AppSliderComponent() {
    }
    AppSliderComponent.prototype.ngOnInit = function () {
    };
    AppSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./app-slider.component.html */ "./src/app/views/material/app-slider/app-slider.component.html"),
            styles: [__webpack_require__(/*! ./app-slider.component.css */ "./src/app/views/material/app-slider/app-slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSliderComponent);
    return AppSliderComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-snackbar/app-snackbar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/material/app-snackbar/app-snackbar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-snackbar/app-snackbar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/material/app-snackbar/app-snackbar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\" m-0\">\r\n    <div class=\"card-title-text\">\r\n      <span>Snack Bar</span>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <p class=\"mt-1\"><code>MdSnackBar</code> Service opens snack bar notification</p>\r\n    <br>\r\n    <button mat-raised-button (click)=\"openSnackBar()\">Open SnackBar</button>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/material/app-snackbar/app-snackbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/material/app-snackbar/app-snackbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSnackbarComponent", function() { return AppSnackbarComponent; });
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


var AppSnackbarComponent = /** @class */ (function () {
    function AppSnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    AppSnackbarComponent.prototype.openSnackBar = function () {
        console.log('test');
        this.snackBar.open('This is a message', 'close', { duration: 2000 });
    };
    AppSnackbarComponent.prototype.ngOnInit = function () {
    };
    AppSnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./app-snackbar.component.html */ "./src/app/views/material/app-snackbar/app-snackbar.component.html"),
            styles: [__webpack_require__(/*! ./app-snackbar.component.css */ "./src/app/views/material/app-snackbar/app-snackbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AppSnackbarComponent);
    return AppSnackbarComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-tab/app-tab.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/material/app-tab/app-tab.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-tab/app-tab.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-tab/app-tab.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-card-title class=\"\">\r\n    <div class=\"card-title-text\">Tabs</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-tab-group>\r\n      <mat-tab label=\"Tab 1\">\r\n        <p class=\"pt-1\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\r\n      </mat-tab>\r\n      <mat-tab label=\"Tab 2\">\r\n        <p class=\"pt-1\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\r\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-tab/app-tab.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/material/app-tab/app-tab.component.ts ***!
  \*************************************************************/
/*! exports provided: AppTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTabComponent", function() { return AppTabComponent; });
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

var AppTabComponent = /** @class */ (function () {
    function AppTabComponent() {
    }
    AppTabComponent.prototype.ngOnInit = function () {
    };
    AppTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./app-tab.component.html */ "./src/app/views/material/app-tab/app-tab.component.html"),
            styles: [__webpack_require__(/*! ./app-tab.component.css */ "./src/app/views/material/app-tab/app-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppTabComponent);
    return AppTabComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-material-app-material-module.js.map