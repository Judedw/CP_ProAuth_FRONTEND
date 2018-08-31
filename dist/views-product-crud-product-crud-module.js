(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-product-crud-product-crud-module"],{

/***/ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js ***!
  \*******************************************************************************************/
/*! exports provided: MomentDateModule, MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateModule", function() { return MomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMomentDateModule", function() { return MatMomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS", function() { return MAT_MOMENT_DATE_ADAPTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY", function() { return MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateAdapter", function() { return MomentDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_FORMATS", function() { return MAT_MOMENT_DATE_FORMATS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment = moment__WEBPACK_IMPORTED_MODULE_3___default.a || moment__WEBPACK_IMPORTED_MODULE_3__;
/**
 * InjectionToken for moment date adapter to configure options.
 */
var /** @type {?} */ MAT_MOMENT_DATE_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    var /** @type {?} */ valuesArray = Array(length);
    for (var /** @type {?} */ i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts Moment.js Dates for use with Angular Material.
 */
var MomentDateAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MomentDateAdapter, _super);
    function MomentDateAdapter(dateLocale, options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.setLocale(dateLocale || moment.locale());
        return _this;
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    MomentDateAdapter.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        var /** @type {?} */ momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).year();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).month();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).date();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).day();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonthNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getDateNames = /**
     * @return {?}
     */
    function () {
        return this._localeData.dates;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeekNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        if (style == 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYearName = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format('YYYY');
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._localeData.firstDayOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getNumDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).daysInMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.clone().locale(this.locale);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var /** @type {?} */ result = this._createMoment({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.today = /**
     * @return {?}
     */
    function () {
        return this._createMoment().locale(this.locale);
    };
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.parse = /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    function (value, parseFormat) {
        if (value && typeof value == 'string') {
            return this._createMoment(value, parseFormat, this.locale);
        }
        return value ? this._createMoment(value).locale(this.locale) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.format = /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this.clone(date).add({ years: years });
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        return this.clone(date).add({ months: months });
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this.clone(date).add({ days: days });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format();
    };
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    MomentDateAdapter.prototype.deserialize = /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ date;
        if (value instanceof Date) {
            date = this._createMoment(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return date;
        }
        return _super.prototype.deserialize.call(this, value);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    MomentDateAdapter.prototype.isDateInstance = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return moment.isMoment(obj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).isValid();
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.invalid = /**
     * @return {?}
     */
    function () {
        return moment.invalid();
    };
    /**
     * Creates a Moment instance while respecting the current UTC settings.
     * @param {...?} args
     * @return {?}
     */
    MomentDateAdapter.prototype._createMoment = /**
     * Creates a Moment instance while respecting the current UTC settings.
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (this.options && this.options.useUtc) ? moment.utc.apply(moment, args) : moment.apply(void 0, args);
    };
    MomentDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    MomentDateAdapter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS,] },] },
    ]; };
    return MomentDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ MAT_MOMENT_DATE_FORMATS = {
    parse: {
        dateInput: 'l',
    },
    display: {
        dateInput: 'l',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MomentDateModule = /** @class */ (function () {
    function MomentDateModule() {
    }
    MomentDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    providers: [
                        {
                            provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                            useClass: MomentDateAdapter,
                            deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        }
                    ],
                },] },
    ];
    return MomentDateModule;
}());
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
var MatMomentDateModule = /** @class */ (function () {
    function MatMomentDateModule() {
    }
    MatMomentDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [MomentDateModule],
                    providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: ɵ0 }],
                },] },
    ];
    return MatMomentDateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=material-moment-adapter.es5.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.debounceTime = _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__["debounceTime"];
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/operator/distinctUntilChanged.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.distinctUntilChanged = _operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"];
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.switchMap = _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__["switchMap"];
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/debounceTime.js ***!
  \*****************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/distinctUntilChanged.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/distinctUntilChanged.js ***!
  \*************************************************************************/
/*! exports provided: distinctUntilChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return distinctUntilChanged; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/switchMap.js ***!
  \**************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(project)(this);
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/directives/DateValidator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/DateValidator.directive.ts ***!
  \*******************************************************/
/*! exports provided: DateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidator", function() { return DateValidator; });
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

var DateValidator = /** @class */ (function () {
    function DateValidator(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DateValidator.prototype.ngOnInit = function () {
        this.renderer.setElementProperty(this.el.nativeElement, "[min]", this.dateValidate());
    };
    DateValidator.prototype.dateValidate = function () {
        console.log("date validator");
        var today = new Date();
        var tomorrow = new Date(today.setDate(today.getDate() + 1));
        console.log(today);
        console.log(tomorrow);
        return tomorrow;
    };
    DateValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[dateValidator]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], DateValidator);
    return DateValidator;
}());



/***/ }),

/***/ "./src/app/directives/PositiveNumber.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/PositiveNumber.directive.ts ***!
  \********************************************************/
/*! exports provided: PositiveNumberOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositiveNumberOnly", function() { return PositiveNumberOnly; });
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

var PositiveNumberOnly = /** @class */ (function () {
    function PositiveNumberOnly(el) {
        this.el = el;
        // Allow positive number greater than 0
        this.regex = new RegExp(/^[+]?([1-9]+(?:[1-9]*)?|\.[1-9]+)$/);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ["Backspace", "Tab", "End", "Home"];
    }
    PositiveNumberOnly.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PositiveNumberOnly.prototype, "onKeyDown", null);
    PositiveNumberOnly = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[postiveNumberOnly]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PositiveNumberOnly);
    return PositiveNumberOnly;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-crud.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductCrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudModule", function() { return ProductCrudModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-filter-table/product-filter-table.component */ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_crud_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-crud.routing */ "./src/app/views/product-crud/product-crud.routing.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _product_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-filter-table/product-crud-popup/product-crud-popup.component */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _directives_PositiveNumber_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/PositiveNumber.directive */ "./src/app/directives/PositiveNumber.directive.ts");
/* harmony import */ var _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/DateValidator.directive */ "./src/app/directives/DateValidator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ProductCrudModule = /** @class */ (function () {
    function ProductCrudModule() {
    }
    ProductCrudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_crud_routing__WEBPACK_IMPORTED_MODULE_4__["ProductCrudRouts"])
            ],
            declarations: [
                _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_2__["ProductFilterTableComponent"],
                _product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__["ProductCrudPopupComponent"],
                _directives_PositiveNumber_directive__WEBPACK_IMPORTED_MODULE_12__["PositiveNumberOnly"],
                _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_13__["DateValidator"]
            ],
            providers: [_product_crud_service__WEBPACK_IMPORTED_MODULE_7__["ProductCrudService"], _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__["CrudService"]],
            entryComponents: [_product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__["ProductCrudPopupComponent"]]
        })
    ], ProductCrudModule);
    return ProductCrudModule;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-crud.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.routing.ts ***!
  \************************************************************/
/*! exports provided: ProductCrudRouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudRouts", function() { return ProductCrudRouts; });
/* harmony import */ var _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-filter-table/product-filter-table.component */ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts");

var ProductCrudRouts = [
    {
        path: 'show',
        component: _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_0__["ProductFilterTableComponent"],
        data: { title: 'Product Section', breadcrumb: 'Product' }
    }
];


/***/ }),

/***/ "./src/app/views/product-crud/product-crud.service.ts":
/*!************************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.service.ts ***!
  \************************************************************/
/*! exports provided: ProductCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudService", function() { return ProductCrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_Observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable/throw */ "./node_modules/rxjs-compat/_esm5/Observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductCrudService = /** @class */ (function () {
    function ProductCrudService(http) {
        this.http = http;
        this.productApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiURL + "products/";
        this.httpOptions = {
            headers: new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
            })
        };
    }
    ProductCrudService.prototype.updateProduct = function (id, item) {
        return this.http
            .put(this.productApiUrl + id, item, this.httpOptions)
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.addProduct = function (productObj, items) {
        return this.http
            .post(this.productApiUrl, productObj, this.httpOptions)
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getAllProducts = function () {
        return this.http.get(this.productApiUrl).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.removeProduct = function (row, items) {
        return this.http.delete(this.productApiUrl + row.id, this.httpOptions).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var i = items.indexOf(row);
            return items.splice(i, 1);
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.handleError = function (error) {
        //console.log(error)
        return Object(rxjs_Observable_throw__WEBPACK_IMPORTED_MODULE_4__["_throw"])(error);
    };
    ProductCrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductCrudService);
    return ProductCrudService;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\r\n<form [formGroup]=\"productForm\" (ngSubmit)=\"submit()\">\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n\r\n    <div fxFlex=\"34\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <mat-select [formControl]=\"productForm.controls['client']\" required placeholder=\"Select a Client\">\r\n          <mat-option *ngFor=\"let client of clients\" [value]=\"client\">\r\n            {{client.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput [formControl]=\"productForm.controls['code']\" required name=\"proCode\" placeholder=\"Product Code\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput [formControl]=\"productForm.controls['name']\" required name=\"name\" placeholder=\"Product Name\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"34\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput name=\"desc\" [formControl]=\"productForm.controls['description']\" required name=\"description\" placeholder=\"Description\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput name=\"batchNumber\" [formControl]=\"productForm.controls['batchNumber']\" required placeholder=\"Batch Number\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input type=\"number\" matInput name=\"quantity\" [formControl]=\"productForm.controls['quantity']\" min=\"1\" postiveNumberOnly\r\n          required placeholder=\"Quantity\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput name=\"expireDate\" [matDatepicker]=\"picker\"  [formControl]=\"productForm.controls['expireDate']\" required placeholder=\"Expire Date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n          <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n        </mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"productForm.invalid\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, ProductCrudPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudPopupComponent", function() { return ProductCrudPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
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








var MY_FORMATS = {
    parse: {
        dateInput: "YYYY-MM-DD"
    },
    display: {
        dateInput: "YYYY-MM-DD",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "YYYY-MM-DD",
        monthYearA11yLabel: "MMMM YYYY"
    }
};
var ProductCrudPopupComponent = /** @class */ (function () {
    function ProductCrudPopupComponent(data, dialogRef, clientService, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.clientService = clientService;
        this.fb = fb;
    }
    ProductCrudPopupComponent.prototype.ngOnInit = function () {
        this.getAllClients();
        this.buildProductForm(this.data.payload);
        this.getClientSuggestions();
    };
    ProductCrudPopupComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.clients.filter(function (option) {
            console.log(option);
            option.toLowerCase().includes(filterValue);
        });
    };
    ProductCrudPopupComponent.prototype.getClientSuggestions = function () {
        var _this = this;
        this.getClientSub = this.clientService.getClientSuggestions().subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCrudPopupComponent.prototype.getAllClients = function () {
        var _this = this;
        this.getClientSub = this.clientService.getItems().subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCrudPopupComponent.prototype.buildProductForm = function (fieldItem) {
        this.productForm = this.fb.group({
            clientName: [fieldItem.clientName || ""],
            client: [fieldItem.client || ""],
            code: [fieldItem.code || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [fieldItem.name || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [fieldItem.description || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            batchNumber: [fieldItem.batchNumber || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            quantity: [fieldItem.quantity || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expireDate: [fieldItem.expireDate || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ProductCrudPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.productForm.value);
    };
    ProductCrudPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-crud-popup",
            template: __webpack_require__(/*! ./product-crud-popup.component.html */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html"),
            providers: [
                {
                    provide: _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"],
                    deps: [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]]
                },
                { provide: _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProductCrudPopupComponent);
    return ProductCrudPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-filter-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"margin-333\" style=\"width: 99%\">\r\n  <input matInput placeholder=\"Type to filter all columns\" value=\"\" (keyup)='updateFilter($event)'>\r\n</mat-form-field>\r\n\r\n<div class=\"m-333\">\r\n  <!-- <span fxFlex></span> -->\r\n  <button mat-raised-button class=\"mb-05\" color=\"primary\" (click)=\"openProductPopup({}, true)\">Add Product</button>\r\n</div>\r\n\r\n\r\n<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n    <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [limit]=\"10\" [rows]=\"rows\" [columns]=\"\">\r\n\r\n      <ngx-datatable-column name=\"Client\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.client.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Product Code\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.code }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Product Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Batch Number\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.batchNumber }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Quantity\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.quantity }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Expire Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.expireDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openProductPopup(row)\"><mat-icon>edit</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" class=\"mr-1\" (click)=\"deleteProduct(row)\"><mat-icon>delete</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button   (click)=\"downloadCsv(row)\"><mat-icon>file_download</mat-icon></button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductFilterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterTableComponent", function() { return ProductFilterTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-crud-popup/product-crud-popup.component */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/file-download.service */ "./src/app/shared/services/file-download.service.ts");
/* harmony import */ var _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/data-conversion.service */ "./src/app/shared/services/data-conversion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductFilterTableComponent = /** @class */ (function () {
    function ProductFilterTableComponent(prodService, dialog, loader, errDialog, confirmService, downloadService, conversionService) {
        this.prodService = prodService;
        this.dialog = dialog;
        this.loader = loader;
        this.errDialog = errDialog;
        this.confirmService = confirmService;
        this.downloadService = downloadService;
        this.conversionService = conversionService;
        this.columns = [];
        this.temp = [];
    }
    ProductFilterTableComponent.prototype.ngOnInit = function () {
        this.getAllProduct();
    };
    ProductFilterTableComponent.prototype.ngOnDestroy = function () {
        if (this.getProductsSub) {
            this.getProductsSub.unsubscribe();
        }
    };
    ProductFilterTableComponent.prototype.downloadCsv = function (selectedRow) {
        var fileName = selectedRow.name + '_' + selectedRow.code + '_' + selectedRow.batchNumber;
        var csvData = this.conversionService.convertToCsv(selectedRow.productDetails);
        this.downloadService.downloadFile({ name: fileName, type: 'csv', data: csvData });
    };
    ProductFilterTableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temp[0]);
        columns.splice(columns.length - 1);
        if (!columns.length)
            return;
        var rows = this.temp.filter(function (data) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                if (data[column] &&
                    data[column]
                        .toString()
                        .toLowerCase()
                        .indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.rows = rows;
    };
    ProductFilterTableComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.getProductsSub = this.prodService.getAllProducts().subscribe(function (successResp) {
            _this.rows = _this.temp = successResp.content;
        }, function (error) {
            _this.loader.close();
            console.log(error);
            console.log(error.status);
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    ProductFilterTableComponent.prototype.deleteProduct = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.description + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.prodService.removeProduct(row, _this.rows).subscribe(function (data) {
                    _this.rows = data;
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
            }
        });
    };
    ProductFilterTableComponent.prototype.openProductPopup = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new Product" : "Update Product";
        var dialogRef = this.dialog.open(_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_3__["ProductCrudPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            _this.loader.open();
            console.log("RES obj :");
            console.log(res);
            res.expireDate = moment__WEBPACK_IMPORTED_MODULE_8__(res.expireDate).format("YYYY-MM-DD");
            if (isNew) {
                _this.prodService.addProduct(res, _this.rows).subscribe(function (data) {
                    _this.rows = data;
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
            }
            else {
                _this.prodService.updateProduct(data.id, res).subscribe(function (response) {
                    console.log(response.content);
                    _this.rows = _this.rows.map(function (i) {
                        if (i.id === data.id) {
                            return Object.assign({}, i, response.content);
                        }
                        return i;
                    });
                    _this.loader.close();
                    return _this.rows.slice();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
            }
        });
    };
    ProductFilterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-filter-table",
            template: __webpack_require__(/*! ./product-filter-table.component.html */ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_product_crud_service__WEBPACK_IMPORTED_MODULE_1__["ProductCrudService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"],
            _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_9__["AppFileDownloadService"],
            _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_10__["AppDataConversionService"]])
    ], ProductFilterTableComponent);
    return ProductFilterTableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-product-crud-product-crud-module.js.map