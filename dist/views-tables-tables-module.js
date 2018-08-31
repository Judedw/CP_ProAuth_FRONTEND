(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-tables-tables-module"],{

/***/ "./src/app/views/tables/filter-table/filter-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/tables/filter-table/filter-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/tables/filter-table/filter-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/tables/filter-table/filter-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"margin-333\" style=\"width: 100%\">\r\n  <input \r\n  matInput \r\n  placeholder=\"Type to filter all columns\" \r\n  value=\"\"\r\n  (keyup)='updateFilter($event)'>\r\n</mat-form-field>\r\n\r\n<div class=\"mat-box-shadow margin-333\">\r\n    <ngx-datatable class=\"material bg-white\" \r\n    [columnMode]=\"'force'\"  \r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\" \r\n    [rowHeight]=\"50\"\r\n    [limit]=\"10\"\r\n    [rows]=\"rows\"\r\n    [columns]=\"columns\">\r\n    </ngx-datatable>\r\n</div>"

/***/ }),

/***/ "./src/app/views/tables/filter-table/filter-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/tables/filter-table/filter-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: FilterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableComponent", function() { return FilterTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables.service */ "./src/app/views/tables/tables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterTableComponent = /** @class */ (function () {
    function FilterTableComponent(service) {
        this.service = service;
        this.rows = [];
        this.columns = [];
        this.temp = [];
    }
    FilterTableComponent.prototype.ngOnInit = function () {
        this.columns = this.service.getDataConf();
        this.rows = this.temp = this.service.getAll();
    };
    FilterTableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temp[0]);
        // Removes last "$$index" from "column"
        columns.splice(columns.length - 1);
        // console.log(columns);
        if (!columns.length)
            return;
        var rows = this.temp.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.rows = rows;
    };
    FilterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-table',
            template: __webpack_require__(/*! ./filter-table.component.html */ "./src/app/views/tables/filter-table/filter-table.component.html"),
            styles: [__webpack_require__(/*! ./filter-table.component.css */ "./src/app/views/tables/filter-table/filter-table.component.css")],
            providers: [_tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]]
        }),
        __metadata("design:paramtypes", [_tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]])
    ], FilterTableComponent);
    return FilterTableComponent;
}());



/***/ }),

/***/ "./src/app/views/tables/fullscreen-table/fullscreen-table.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/views/tables/fullscreen-table/fullscreen-table.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/tables/fullscreen-table/fullscreen-table.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/tables/fullscreen-table/fullscreen-table.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-box-shadow margin-333\">\r\n    <ngx-datatable class=\"material fullscreen bg-white\" \r\n    [columnMode]=\"'force'\"  \r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"0\" \r\n    [rowHeight]=\"50\"\r\n    [scrollbarV]=\"true\"\r\n    [rows]=\"rows\"\r\n    [columns]=\"columns\">\r\n    </ngx-datatable>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/tables/fullscreen-table/fullscreen-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/tables/fullscreen-table/fullscreen-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FullscreenTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenTableComponent", function() { return FullscreenTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables.service */ "./src/app/views/tables/tables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullscreenTableComponent = /** @class */ (function () {
    function FullscreenTableComponent(service) {
        this.service = service;
        this.rows = [];
        this.columns = [];
    }
    FullscreenTableComponent.prototype.ngOnInit = function () {
        this.columns = this.service.getDataConf();
        this.rows = this.service.getAll();
    };
    FullscreenTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen-table',
            template: __webpack_require__(/*! ./fullscreen-table.component.html */ "./src/app/views/tables/fullscreen-table/fullscreen-table.component.html"),
            styles: [__webpack_require__(/*! ./fullscreen-table.component.css */ "./src/app/views/tables/fullscreen-table/fullscreen-table.component.css")],
            providers: [_tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]]
        }),
        __metadata("design:paramtypes", [_tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]])
    ], FullscreenTableComponent);
    return FullscreenTableComponent;
}());



/***/ }),

/***/ "./src/app/views/tables/paging-table/paging-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/tables/paging-table/paging-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/tables/paging-table/paging-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/tables/paging-table/paging-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-box-shadow margin-333\">\r\n    <ngx-datatable class=\"material bg-white\" \r\n    [columnMode]=\"'force'\"  \r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\" \r\n    [rowHeight]=\"50\"\r\n    [limit]=\"10\"\r\n    [rows]=\"rows\"\r\n    [columns]=\"columns\">\r\n    </ngx-datatable>\r\n</div>"

/***/ }),

/***/ "./src/app/views/tables/paging-table/paging-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/tables/paging-table/paging-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: PagingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingTableComponent", function() { return PagingTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables.service */ "./src/app/views/tables/tables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagingTableComponent = /** @class */ (function () {
    function PagingTableComponent(service) {
        this.service = service;
        this.rows = [];
        this.columns = [];
    }
    PagingTableComponent.prototype.ngOnInit = function () {
        this.columns = this.service.getDataConf();
        this.rows = this.service.getAll();
    };
    PagingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paging-table',
            template: __webpack_require__(/*! ./paging-table.component.html */ "./src/app/views/tables/paging-table/paging-table.component.html"),
            styles: [__webpack_require__(/*! ./paging-table.component.css */ "./src/app/views/tables/paging-table/paging-table.component.css")],
            providers: [_tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]]
        }),
        __metadata("design:paramtypes", [_tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]])
    ], PagingTableComponent);
    return PagingTableComponent;
}());



/***/ }),

/***/ "./src/app/views/tables/tables.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/tables/tables.module.ts ***!
  \***********************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-table/filter-table.component */ "./src/app/views/tables/filter-table/filter-table.component.ts");
/* harmony import */ var _fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullscreen-table/fullscreen-table.component */ "./src/app/views/tables/fullscreen-table/fullscreen-table.component.ts");
/* harmony import */ var _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paging-table/paging-table.component */ "./src/app/views/tables/paging-table/paging-table.component.ts");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tables.routing */ "./src/app/views/tables/tables.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_8__["TablesRoutes"])
            ],
            declarations: [_filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_5__["FilterTableComponent"], _fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_6__["FullscreenTableComponent"], _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_7__["PagingTableComponent"]]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/views/tables/tables.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/tables/tables.routing.ts ***!
  \************************************************/
/*! exports provided: TablesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutes", function() { return TablesRoutes; });
/* harmony import */ var _fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreen-table/fullscreen-table.component */ "./src/app/views/tables/fullscreen-table/fullscreen-table.component.ts");
/* harmony import */ var _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paging-table/paging-table.component */ "./src/app/views/tables/paging-table/paging-table.component.ts");
/* harmony import */ var _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-table/filter-table.component */ "./src/app/views/tables/filter-table/filter-table.component.ts");



var TablesRoutes = [
    {
        path: '',
        children: [{
                path: 'fullscreen',
                component: _fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_0__["FullscreenTableComponent"],
                data: { title: 'Fullscreen', breadcrumb: 'FULLSCREEN' }
            }, {
                path: 'paging',
                component: _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_1__["PagingTableComponent"],
                data: { title: 'Paging', breadcrumb: 'PAGING' }
            }, {
                path: 'filter',
                component: _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_2__["FilterTableComponent"],
                data: { title: 'Filter', breadcrumb: 'FILTER' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/tables/tables.service.ts":
/*!************************************************!*\
  !*** ./src/app/views/tables/tables.service.ts ***!
  \************************************************/
/*! exports provided: TablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return TablesService; });
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

var TablesService = /** @class */ (function () {
    function TablesService() {
    }
    TablesService.prototype.getDataConf = function () {
        return [
            {
                prop: 'id'
            },
            {
                prop: 'age',
                name: 'Age'
            },
            {
                prop: 'name',
                name: 'Name'
            },
            {
                prop: 'gender',
                name: 'Gender'
            },
            {
                prop: 'company',
                name: 'Company'
            },
            {
                prop: 'email',
                name: 'Email'
            }
        ];
    };
    TablesService.prototype.getAll = function () {
        return [
            {
                'id': 0,
                'age': 40,
                'name': 'Mclean Brady',
                'gender': 'male',
                'company': 'JAMNATION',
                'email': 'mcleanbrady@jamnation.com',
                'phone': '+1 (875) 472-2061',
                'registered': '2014-10-20T04:54:00 -06:00'
            },
            {
                'id': 1,
                'age': 39,
                'name': 'Dillon Ruiz',
                'gender': 'male',
                'company': 'ACRODANCE',
                'email': 'dillonruiz@acrodance.com',
                'phone': '+1 (858) 562-2261',
                'registered': '2016-08-07T12:15:31 -06:00'
            },
            {
                'id': 2,
                'age': 39,
                'name': 'Robyn Knox',
                'gender': 'female',
                'company': 'GLUID',
                'email': 'robynknox@gluid.com',
                'phone': '+1 (826) 491-3098',
                'registered': '2017-02-12T02:43:39 -06:00'
            },
            {
                'id': 3,
                'age': 32,
                'name': 'Santana Wagner',
                'gender': 'male',
                'company': 'INTRADISK',
                'email': 'santanawagner@intradisk.com',
                'phone': '+1 (841) 550-2276',
                'registered': '2016-03-28T11:22:15 -06:00'
            },
            {
                'id': 4,
                'age': 34,
                'name': 'Jennie Branch',
                'gender': 'female',
                'company': 'VERAQ',
                'email': 'jenniebranch@veraq.com',
                'phone': '+1 (895) 483-3982',
                'registered': '2015-03-16T01:30:06 -06:00'
            },
            {
                'id': 5,
                'age': 39,
                'name': 'Farrell Preston',
                'gender': 'male',
                'company': 'HONOTRON',
                'email': 'farrellpreston@honotron.com',
                'phone': '+1 (993) 534-2843',
                'registered': '2015-08-14T09:07:47 -06:00'
            },
            {
                'id': 6,
                'age': 38,
                'name': 'Garner Reyes',
                'gender': 'male',
                'company': 'VIOCULAR',
                'email': 'garnerreyes@viocular.com',
                'phone': '+1 (973) 495-3873',
                'registered': '2016-03-23T03:47:23 -06:00'
            },
            {
                'id': 7,
                'age': 32,
                'name': 'Ella Boone',
                'gender': 'female',
                'company': 'ARCHITAX',
                'email': 'ellaboone@architax.com',
                'phone': '+1 (945) 491-2580',
                'registered': '2015-07-01T09:35:10 -06:00'
            },
            {
                'id': 8,
                'age': 30,
                'name': 'Kathryn Owens',
                'gender': 'female',
                'company': 'CYCLONICA',
                'email': 'kathrynowens@cyclonica.com',
                'phone': '+1 (978) 598-2767',
                'registered': '2014-03-11T11:38:12 -06:00'
            },
            {
                'id': 9,
                'age': 22,
                'name': 'Byers Santana',
                'gender': 'male',
                'company': 'KAGGLE',
                'email': 'byerssantana@kaggle.com',
                'phone': '+1 (984) 546-3400',
                'registered': '2015-08-17T02:48:09 -06:00'
            },
            {
                'id': 10,
                'age': 30,
                'name': 'Nina Middleton',
                'gender': 'female',
                'company': 'ZINCA',
                'email': 'ninamiddleton@zinca.com',
                'phone': '+1 (829) 553-2060',
                'registered': '2014-12-20T09:53:27 -06:00'
            },
            {
                'id': 11,
                'age': 38,
                'name': 'Nixon Morrow',
                'gender': 'male',
                'company': 'CUBIX',
                'email': 'nixonmorrow@cubix.com',
                'phone': '+1 (825) 501-3712',
                'registered': '2014-09-10T10:23:34 -06:00'
            },
            {
                'id': 12,
                'age': 28,
                'name': 'Bonita Pate',
                'gender': 'female',
                'company': 'MAGNEATO',
                'email': 'bonitapate@magneato.com',
                'phone': '+1 (808) 497-3968',
                'registered': '2016-01-20T02:45:43 -06:00'
            },
            {
                'id': 13,
                'age': 30,
                'name': 'Amy Hyde',
                'gender': 'female',
                'company': 'UNDERTAP',
                'email': 'amyhyde@undertap.com',
                'phone': '+1 (867) 555-2669',
                'registered': '2015-04-12T08:39:31 -06:00'
            },
            {
                'id': 14,
                'age': 20,
                'name': 'Cortez Camacho',
                'gender': 'male',
                'company': 'IDEGO',
                'email': 'cortezcamacho@idego.com',
                'phone': '+1 (986) 546-3364',
                'registered': '2014-08-21T11:00:20 -06:00'
            },
            {
                'id': 15,
                'age': 29,
                'name': 'Castaneda Armstrong',
                'gender': 'male',
                'company': 'INTERFIND',
                'email': 'castanedaarmstrong@interfind.com',
                'phone': '+1 (975) 557-2651',
                'registered': '2014-11-15T10:38:24 -06:00'
            },
            {
                'id': 16,
                'age': 37,
                'name': 'Liza West',
                'gender': 'female',
                'company': 'COWTOWN',
                'email': 'lizawest@cowtown.com',
                'phone': '+1 (852) 415-2358',
                'registered': '2017-05-06T09:46:03 -06:00'
            },
            {
                'id': 17,
                'age': 37,
                'name': 'Roth Baird',
                'gender': 'male',
                'company': 'RODEMCO',
                'email': 'rothbaird@rodemco.com',
                'phone': '+1 (840) 417-3313',
                'registered': '2015-04-18T10:58:50 -06:00'
            },
            {
                'id': 18,
                'age': 26,
                'name': 'Alexis Blackburn',
                'gender': 'female',
                'company': 'PREMIANT',
                'email': 'alexisblackburn@premiant.com',
                'phone': '+1 (957) 576-2362',
                'registered': '2014-08-08T12:59:38 -06:00'
            },
            {
                'id': 19,
                'age': 35,
                'name': 'Sadie Tillman',
                'gender': 'female',
                'company': 'DUOFLEX',
                'email': 'sadietillman@duoflex.com',
                'phone': '+1 (843) 499-3330',
                'registered': '2016-02-21T09:25:03 -06:00'
            },
            {
                'id': 20,
                'age': 27,
                'name': 'Sharron Conley',
                'gender': 'female',
                'company': 'QUARMONY',
                'email': 'sharronconley@quarmony.com',
                'phone': '+1 (951) 459-2465',
                'registered': '2014-10-19T06:04:36 -06:00'
            },
            {
                'id': 21,
                'age': 27,
                'name': 'Jordan Mccoy',
                'gender': 'male',
                'company': 'ACCUSAGE',
                'email': 'jordanmccoy@accusage.com',
                'phone': '+1 (825) 568-3296',
                'registered': '2017-01-27T01:53:02 -06:00'
            },
            {
                'id': 22,
                'age': 35,
                'name': 'Rene House',
                'gender': 'female',
                'company': 'INSURETY',
                'email': 'renehouse@insurety.com',
                'phone': '+1 (838) 578-3190',
                'registered': '2015-11-07T10:07:58 -06:00'
            },
            {
                'id': 23,
                'age': 38,
                'name': 'Bernice Berry',
                'gender': 'female',
                'company': 'ROCKYARD',
                'email': 'berniceberry@rockyard.com',
                'phone': '+1 (885) 466-2145',
                'registered': '2014-04-17T07:43:02 -06:00'
            },
            {
                'id': 24,
                'age': 30,
                'name': 'Bowen Beach',
                'gender': 'male',
                'company': 'TETRATREX',
                'email': 'bowenbeach@tetratrex.com',
                'phone': '+1 (843) 493-3197',
                'registered': '2015-07-27T03:38:33 -06:00'
            },
            {
                'id': 25,
                'age': 31,
                'name': 'Monica Leblanc',
                'gender': 'female',
                'company': 'TALENDULA',
                'email': 'monicaleblanc@talendula.com',
                'phone': '+1 (911) 524-2349',
                'registered': '2016-04-10T08:33:17 -06:00'
            },
            {
                'id': 26,
                'age': 36,
                'name': 'Lina Rivas',
                'gender': 'female',
                'company': 'BOINK',
                'email': 'linarivas@boink.com',
                'phone': '+1 (983) 572-2470',
                'registered': '2014-08-28T09:44:32 -06:00'
            },
            {
                'id': 27,
                'age': 25,
                'name': 'Joyce Yang',
                'gender': 'female',
                'company': 'SPORTAN',
                'email': 'joyceyang@sportan.com',
                'phone': '+1 (807) 491-3917',
                'registered': '2015-07-22T12:58:31 -06:00'
            },
            {
                'id': 28,
                'age': 20,
                'name': 'Lana Joseph',
                'gender': 'female',
                'company': 'BOLAX',
                'email': 'lanajoseph@bolax.com',
                'phone': '+1 (942) 467-2363',
                'registered': '2016-10-30T06:13:50 -06:00'
            },
            {
                'id': 29,
                'age': 20,
                'name': 'Jimenez Guerrero',
                'gender': 'male',
                'company': 'INSURON',
                'email': 'jimenezguerrero@insuron.com',
                'phone': '+1 (991) 585-3706',
                'registered': '2016-09-15T01:35:16 -06:00'
            },
            {
                'id': 30,
                'age': 35,
                'name': 'Williams Bentley',
                'gender': 'male',
                'company': 'ZEAM',
                'email': 'williamsbentley@zeam.com',
                'phone': '+1 (837) 490-2610',
                'registered': '2014-01-06T01:04:11 -06:00'
            },
            {
                'id': 31,
                'age': 27,
                'name': 'Doreen Garrett',
                'gender': 'female',
                'company': 'ENERSAVE',
                'email': 'doreengarrett@enersave.com',
                'phone': '+1 (920) 522-2847',
                'registered': '2017-01-25T03:24:47 -06:00'
            },
            {
                'id': 32,
                'age': 34,
                'name': 'Shaw Cannon',
                'gender': 'male',
                'company': 'EBIDCO',
                'email': 'shawcannon@ebidco.com',
                'phone': '+1 (903) 530-2676',
                'registered': '2014-04-11T04:49:08 -06:00'
            },
            {
                'id': 33,
                'age': 25,
                'name': 'Sonya Skinner',
                'gender': 'female',
                'company': 'EXOSWITCH',
                'email': 'sonyaskinner@exoswitch.com',
                'phone': '+1 (923) 428-3014',
                'registered': '2014-02-09T11:59:54 -06:00'
            },
            {
                'id': 34,
                'age': 27,
                'name': 'Todd Potter',
                'gender': 'male',
                'company': 'MUSIX',
                'email': 'toddpotter@musix.com',
                'phone': '+1 (817) 491-2268',
                'registered': '2015-04-06T11:10:47 -06:00'
            },
            {
                'id': 35,
                'age': 21,
                'name': 'Celina Rose',
                'gender': 'female',
                'company': 'TWIIST',
                'email': 'celinarose@twiist.com',
                'phone': '+1 (863) 599-2063',
                'registered': '2015-09-04T07:59:29 -06:00'
            },
            {
                'id': 36,
                'age': 40,
                'name': 'Ingrid Day',
                'gender': 'female',
                'company': 'ZBOO',
                'email': 'ingridday@zboo.com',
                'phone': '+1 (921) 447-2312',
                'registered': '2016-10-01T08:26:07 -06:00'
            },
            {
                'id': 37,
                'age': 24,
                'name': 'Lynch Stark',
                'gender': 'male',
                'company': 'PYRAMIA',
                'email': 'lynchstark@pyramia.com',
                'phone': '+1 (995) 431-2354',
                'registered': '2014-01-26T11:38:48 -06:00'
            },
            {
                'id': 38,
                'age': 29,
                'name': 'Helga Mendez',
                'gender': 'female',
                'company': 'COMVEYER',
                'email': 'helgamendez@comveyer.com',
                'phone': '+1 (897) 418-3815',
                'registered': '2015-10-03T08:58:45 -06:00'
            },
            {
                'id': 39,
                'age': 30,
                'name': 'Corinne Calhoun',
                'gender': 'female',
                'company': 'ADORNICA',
                'email': 'corinnecalhoun@adornica.com',
                'phone': '+1 (841) 564-3617',
                'registered': '2016-05-24T10:42:36 -06:00'
            },
            {
                'id': 40,
                'age': 40,
                'name': 'Winifred Conrad',
                'gender': 'female',
                'company': 'SATIANCE',
                'email': 'winifredconrad@satiance.com',
                'phone': '+1 (885) 533-2416',
                'registered': '2017-03-01T06:12:08 -06:00'
            },
            {
                'id': 41,
                'age': 27,
                'name': 'Lawanda Stevenson',
                'gender': 'female',
                'company': 'ZILLACTIC',
                'email': 'lawandastevenson@zillactic.com',
                'phone': '+1 (823) 535-3187',
                'registered': '2014-07-07T05:26:22 -06:00'
            },
            {
                'id': 42,
                'age': 30,
                'name': 'Kirsten Long',
                'gender': 'female',
                'company': 'IMAGEFLOW',
                'email': 'kirstenlong@imageflow.com',
                'phone': '+1 (809) 592-2264',
                'registered': '2014-05-08T07:41:56 -06:00'
            },
            {
                'id': 43,
                'age': 39,
                'name': 'Summer Farley',
                'gender': 'female',
                'company': 'ENTOGROK',
                'email': 'summerfarley@entogrok.com',
                'phone': '+1 (814) 490-3578',
                'registered': '2016-10-28T10:02:34 -06:00'
            },
            {
                'id': 44,
                'age': 31,
                'name': 'Mendoza Randall',
                'gender': 'male',
                'company': 'COREPAN',
                'email': 'mendozarandall@corepan.com',
                'phone': '+1 (846) 501-2860',
                'registered': '2015-12-14T12:58:18 -06:00'
            },
            {
                'id': 45,
                'age': 27,
                'name': 'Marcy Doyle',
                'gender': 'female',
                'company': 'VORATAK',
                'email': 'marcydoyle@voratak.com',
                'phone': '+1 (848) 411-2728',
                'registered': '2014-02-12T10:46:27 -06:00'
            },
            {
                'id': 46,
                'age': 30,
                'name': 'Burch Walker',
                'gender': 'male',
                'company': 'COMVEYOR',
                'email': 'burchwalker@comveyor.com',
                'phone': '+1 (968) 445-2104',
                'registered': '2014-01-07T05:16:30 -06:00'
            },
            {
                'id': 47,
                'age': 31,
                'name': 'Solis Lester',
                'gender': 'male',
                'company': 'MACRONAUT',
                'email': 'solislester@macronaut.com',
                'phone': '+1 (857) 422-3242',
                'registered': '2016-10-20T09:40:51 -06:00'
            },
            {
                'id': 48,
                'age': 20,
                'name': 'Lorene Mooney',
                'gender': 'female',
                'company': 'ORGANICA',
                'email': 'lorenemooney@organica.com',
                'phone': '+1 (853) 406-2716',
                'registered': '2015-09-17T03:54:41 -06:00'
            },
            {
                'id': 49,
                'age': 34,
                'name': 'Rhodes Vega',
                'gender': 'male',
                'company': 'CHILLIUM',
                'email': 'rhodesvega@chillium.com',
                'phone': '+1 (863) 577-3562',
                'registered': '2016-06-15T05:36:10 -06:00'
            },
            {
                'id': 50,
                'age': 28,
                'name': 'Pruitt Merrill',
                'gender': 'male',
                'company': 'KYAGURU',
                'email': 'pruittmerrill@kyaguru.com',
                'phone': '+1 (910) 585-3659',
                'registered': '2017-04-02T09:36:00 -06:00'
            },
            {
                'id': 51,
                'age': 33,
                'name': 'Bernadine Hart',
                'gender': 'female',
                'company': 'BITTOR',
                'email': 'bernadinehart@bittor.com',
                'phone': '+1 (906) 446-3518',
                'registered': '2015-11-10T07:45:59 -06:00'
            },
            {
                'id': 52,
                'age': 22,
                'name': 'Carver Mckenzie',
                'gender': 'male',
                'company': 'LOCAZONE',
                'email': 'carvermckenzie@locazone.com',
                'phone': '+1 (803) 407-3142',
                'registered': '2015-06-24T07:16:02 -06:00'
            },
            {
                'id': 53,
                'age': 27,
                'name': 'Dean Cobb',
                'gender': 'male',
                'company': 'ASSISTIA',
                'email': 'deancobb@assistia.com',
                'phone': '+1 (877) 539-3346',
                'registered': '2016-12-02T01:14:47 -06:00'
            },
            {
                'id': 54,
                'age': 32,
                'name': 'Camacho Robinson',
                'gender': 'male',
                'company': 'INSURITY',
                'email': 'camachorobinson@insurity.com',
                'phone': '+1 (929) 430-3079',
                'registered': '2016-12-14T08:59:33 -06:00'
            },
            {
                'id': 55,
                'age': 36,
                'name': 'Nancy Rodgers',
                'gender': 'female',
                'company': 'COSMOSIS',
                'email': 'nancyrodgers@cosmosis.com',
                'phone': '+1 (873) 489-2643',
                'registered': '2014-08-21T02:19:28 -06:00'
            },
            {
                'id': 56,
                'age': 27,
                'name': 'June Henry',
                'gender': 'female',
                'company': 'PETIGEMS',
                'email': 'junehenry@petigems.com',
                'phone': '+1 (808) 536-2445',
                'registered': '2014-03-28T08:36:27 -06:00'
            },
            {
                'id': 57,
                'age': 26,
                'name': 'Rochelle Simmons',
                'gender': 'female',
                'company': 'DANJA',
                'email': 'rochellesimmons@danja.com',
                'phone': '+1 (936) 563-3886',
                'registered': '2015-12-07T08:01:18 -06:00'
            },
            {
                'id': 58,
                'age': 32,
                'name': 'Alice Thornton',
                'gender': 'female',
                'company': 'ISOSURE',
                'email': 'alicethornton@isosure.com',
                'phone': '+1 (962) 560-2318',
                'registered': '2015-06-07T08:09:50 -06:00'
            },
            {
                'id': 59,
                'age': 39,
                'name': 'Clara Downs',
                'gender': 'female',
                'company': 'ZANILLA',
                'email': 'claradowns@zanilla.com',
                'phone': '+1 (977) 595-2657',
                'registered': '2015-06-14T02:33:33 -06:00'
            }
        ];
    };
    TablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TablesService);
    return TablesService;
}());



/***/ })

}]);
//# sourceMappingURL=views-tables-tables-module.js.map