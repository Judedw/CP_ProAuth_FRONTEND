(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-charts-charts-module"],{

/***/ "./src/app/views/charts/charts.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/charts/charts.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/charts.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/charts/charts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Vertical Bar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas  \r\n          baseChart \r\n          class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [colors]=\"chartColors\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Horizontal Bar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas  \r\n          baseChart \r\n          class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartHorizontalOptions\"\r\n          [colors]=\"chartColors\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartHorizontalType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Stacked Bar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas  \r\n          baseChart class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartStackedOptions\"\r\n          [colors]=\"chartColors\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Basic Line chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas \r\n          baseChart \r\n          class=\"chart\"\r\n          [datasets]=\"lineChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"chartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Point Line chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas \r\n          baseChart \r\n          class=\"chart\"\r\n          [datasets]=\"lineChartPointsData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartPointsOptions\"\r\n          [colors]=\"chartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Bubble chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas \r\n          baseChart \r\n          class=\"chart\"\r\n          [datasets]=\"bubbleChartData\"\r\n          [labels]=\"bubbleChartLabels\"\r\n          [options]=\"bubbleChartOptions\"\r\n          [legend]=\"bubbleChartLegend\"\r\n          [chartType]=\"bubbleChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  \r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Doughnut chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas \r\n          baseChart \r\n          class=\"chart\"\r\n          [data]=\"doughnutChartData\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [options]=\"doughnutOptions\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [chartType]=\"doughnutChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Pie chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas \r\n        class=\"chart\"\r\n        baseChart\r\n        [data]=\"pieChartData\"\r\n        [labels]=\"pieChartLabels\"\r\n        [options]=\"doughnutOptions\"\r\n        [colors]=\"doughnutChartColors\"\r\n        [chartType]=\"pieChartType\"\r\n        (chartHover)=\"pieChartHovered($event)\"\r\n        (chartClick)=\"pieChartClicked($event)\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n    <mat-card class=\"p-0\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Radar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas\r\n        class=\"chart\" \r\n        baseChart\r\n        [datasets]=\"radarChartData\"\r\n        [labels]=\"radarChartLabels\"\r\n        [legend]=\"false\"\r\n        [colors]=\"chartColors\"\r\n        [chartType]=\"radarChartType\"\r\n        (chartHover)=\"radarChartHovered($event)\"\r\n        (chartClick)=\"radarChartClicked($event)\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/charts/charts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
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

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.sharedChartOptions = {
            responsive: true,
            // maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.chartColors = [{
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        /*
        * Bar Chart
        */
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [5, 6, 7, 8, 4, 5, 5],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 3, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }]
            }
        }, this.sharedChartOptions);
        // Horizontal Bar Chart
        this.barChartHorizontalType = 'horizontalBar';
        this.barChartHorizontalOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }]
            }
        }, this.sharedChartOptions);
        // Bar Chart Stacked
        this.barChartStackedOptions = Object.assign({
            scaleShowVerticalLines: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true
                    }]
            }
        }, this.sharedChartOptions);
        /*
        * Line Chart Options
        */
        this.lineChartData = [{
                data: [5, 5, 7, 8, 4, 5, 5],
                label: 'Series A',
                borderWidth: 1
            }, {
                data: [5, 4, 4, 3, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1
            }];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.lineChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.sharedChartOptions);
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartPointsData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }];
        this.lineChartPointsOptions = Object.assign({
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            },
            elements: {
                point: {
                    pointStyle: 'rectRot',
                }
            }
        }, this.sharedChartOptions);
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 4,
                        y: 4,
                        r: 15,
                    }, {
                        x: 6,
                        y: 12,
                        r: 30,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 7,
                        y: 8,
                        r: 4,
                    }, {
                        x: 3,
                        y: 13,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 7,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        this.bubbleChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.bubbleChartLegend = true;
        this.bubbleChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.sharedChartOptions);
        // Doughnut
        this.doughnutChartColors = [{
                backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
            }];
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = Object.assign({
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }, this.sharedChartOptions);
        /*
        * Radar Chart Options
        */
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A', borderWidth: 1 },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', borderWidth: 1 }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: 'rgba(36, 123, 160, 0.2)',
                borderColor: 'rgba(36, 123, 160, 0.6)',
                pointBackgroundColor: 'rgba(36, 123, 160, 0.8)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(36, 123, 160, 0.8)'
            },
            {
                backgroundColor: 'rgba(244, 67, 54, 0.2)',
                borderColor: 'rgba(244, 67, 54, .8)',
                pointBackgroundColor: 'rgba(244, 67, 54, .8)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(244, 67, 54, 1)'
            }
        ];
        /*
        * Pie Chart Options
        */
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.pieChartColors = [{
                backgroundColor: ['rgba(255, 217, 125, 0.8)', 'rgba(36, 123, 160, 0.8)', 'rgba(244, 67, 54, 0.8)']
            }];
    }
    ChartsComponent.prototype.ngOnInit = function () { };
    /*
    * Bar Chart Event Handler
    */
    ChartsComponent.prototype.barChartClicked = function (e) {
    };
    ChartsComponent.prototype.barChartHovered = function (e) {
    };
    /*
    * Line Chart Event Handler
    */
    ChartsComponent.prototype.lineChartClicked = function (e) {
    };
    ChartsComponent.prototype.lineChartHovered = function (e) {
    };
    /*
    * Doughnut Chart Event Handler
    */
    ChartsComponent.prototype.doughnutChartClicked = function (e) {
    };
    ChartsComponent.prototype.doughnutChartHovered = function (e) {
    };
    /*
    * Rader Chart Event Handler
    */
    ChartsComponent.prototype.radarChartClicked = function (e) {
    };
    ChartsComponent.prototype.radarChartHovered = function (e) {
    };
    /*
    * Pie Chart Event Handler
    */
    ChartsComponent.prototype.pieChartClicked = function (e) {
    };
    ChartsComponent.prototype.pieChartHovered = function (e) {
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/views/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.css */ "./src/app/views/charts/charts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: AppChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppChartsModule", function() { return AppChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts.component */ "./src/app/views/charts/charts.component.ts");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts.routing */ "./src/app/views/charts/charts.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppChartsModule = /** @class */ (function () {
    function AppChartsModule() {
    }
    AppChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_7__["ChartsRoutes"])
            ],
            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"]]
        })
    ], AppChartsModule);
    return AppChartsModule;
}());



/***/ }),

/***/ "./src/app/views/charts/charts.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/charts/charts.routing.ts ***!
  \************************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ "./src/app/views/charts/charts.component.ts");

var ChartsRoutes = [
    { path: '', component: _charts_component__WEBPACK_IMPORTED_MODULE_0__["ChartsComponent"], data: { title: 'Charts' } }
];


/***/ })

}]);
//# sourceMappingURL=views-charts-charts-module.js.map