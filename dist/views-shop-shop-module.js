(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-shop-shop-module"],{

/***/ "./node_modules/angular-star-rating/index.js":
/*!***************************************************!*\
  !*** ./node_modules/angular-star-rating/index.js ***!
  \***************************************************/
/*! exports provided: StarRatingModule, StarRatingComponent, StarRatingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return StarRatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingConfig", function() { return StarRatingConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




/**
 * Configuration service for the StarRating component.
You can inject this service, typically in your root component, and customize the values of its properties in
order to provide default values for all the star ratings used in the application.
 */
var StarRatingConfig = (function () {
    function StarRatingConfig() {
        this.classEmpty = "default-star-empty-icon";
        this.classHalf = "default-star-half-icon";
        this.classFilled = "default-star-filled-icon";
        this.numOfStars = 5;
        this.size = "medium";
        this.speed = "noticeable";
        this.labelPosition = "left";
        this.starType = "svg";
        this.assetsPath = "assets/images/";
        this.svgPath = this.assetsPath + "star-rating.icons.svg";
        this.svgEmptySymbolId = "star-empty";
        this.svgHalfSymbolId = "star-half";
        this.svgFilledSymbolId = "star-filled";
        this.svgPathEmpty = this.svgPath + "#" + this.svgEmptySymbolId;
        this.svgPathHalf = this.svgPath + "#" + this.svgHalfSymbolId;
        this.svgPathFilled = this.svgPath + "#" + this.svgFilledSymbolId;
    }
    /**
     * @param {?} rating
     * @param {?} numOfStars
     * @param {?=} staticColor
     * @return {?}
     */
    StarRatingConfig.prototype.getColor = function (rating, numOfStars, staticColor) {
        rating = rating || 0;
        // if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }
        // calculate size of smallest fraction
        var /** @type {?} */ fractionSize = numOfStars / 3;
        // apply color by fraction
        var /** @type {?} */ color = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }
        return color;
    };
    /**
     * @param {?} rating
     * @return {?}
     */
    StarRatingConfig.prototype.getHalfStarVisible = function (rating) {
        return Math.abs(rating % 1) > 0;
    };
    return StarRatingConfig;
}());

var StarRatingUtils = (function () {
    function StarRatingUtils() {
    }
    /**
     * getStarsArray
    
    returns an array of increasing numbers starting at 1
    
    \@param numOfStars
    \@returns {Array}
     * @param {?} numOfStars
     * @return {?}
     */
    StarRatingUtils.getStarsArray = function (numOfStars) {
        var /** @type {?} */ stars = [];
        for (var /** @type {?} */ i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    };
    /**
     * getHalfStarVisible
    
    Returns true if there should be a half star visible, and false if not.
    
    \@param rating
    \@returns {boolean}
     * @param {?} rating
     * @return {?}
     */
    StarRatingUtils.getHalfStarVisible = function (rating) {
        return Math.abs(rating % 1) > 0;
    };
    /**
     * getColor
    
    The default function for color calculation
    based on the current rating and the the number of stars possible.
    If a staticColor is set the function will use it as return value.
    
    \@param rating
    \@param numOfStars
    \@param staticColor
    \@returns {starRatingColor}
     * @param {?} rating
     * @param {?} numOfStars
     * @param {?=} staticColor
     * @return {?}
     */
    StarRatingUtils.getColor = function (rating, numOfStars, staticColor) {
        rating = rating || 0;
        //if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }
        //calculate size of smallest fraction
        var /** @type {?} */ fractionSize = numOfStars / 3;
        //apply color by fraction
        var /** @type {?} */ color = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }
        return color;
    };
    return StarRatingUtils;
}());
/**
 * isDigitKeyEventCode
detects digit key event sodes
\@param eventCode
\@returns {boolean}
 */
StarRatingUtils.isDigitKeyEventCode = function (eventCode) {
    return eventCode.indexOf('Digit') === 0;
};

var StarRating = (function () {
    function StarRating() {
        var config = new StarRatingConfig();
        //set default ctrl props
        this.classEmpty = config.classEmpty;
        this.classHalf = config.classHalf;
        this.classFilled = config.classFilled;
        this.pathEmpty = config.svgPathEmpty;
        this.pathHalf = config.svgPathHalf;
        this.pathFilled = config.svgPathFilled;
        //set default Component Inputs
        if ('getColor' in config && typeof config.getColor === "function") {
            this.getColor = config.getColor;
        }
        if ('getHalfStarVisible' in config && typeof config.getHalfStarVisible === "function") {
            this.getHalfStarVisible = config.getHalfStarVisible;
        }
        this.numOfStars = config.numOfStars;
        this.rating = 0;
        this.step = 1;
    }
    Object.defineProperty(StarRating.prototype, "id", {
        /**
         * @return {?}
         */
        get: function () {
            return this._id;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._id = value || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "focus", {
        /**
         * @return {?}
         */
        get: function () {
            return this._focus;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._focus = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "labelText", {
        /**
         * @return {?}
         */
        get: function () {
            return this._labelText;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "labelPosition", {
        /**
         * @return {?}
         */
        get: function () {
            return this._labelPosition;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._labelPosition = value || this.config.labelPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "labelVisible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._labelVisible;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._labelVisible = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "hoverEnabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._hoverEnabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._hoverEnabled = (value !== undefined) ? !!value : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "staticColor", {
        /**
         * @return {?}
         */
        get: function () {
            return this._staticColor;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._staticColor = value || undefined;
            //update color.
            this.setColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this._direction;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._direction = value || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "numOfStars", {
        /**
         * @return {?}
         */
        get: function () {
            return this._numOfStars;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._numOfStars = (value > 0) ? value : this.config.numOfStars;
            //update stars array
            this.stars = StarRatingUtils.getStarsArray(this.numOfStars);
            //update color
            this.setColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "hoverRating", {
        /**
         * @return {?}
         */
        get: function () {
            return this._hoverRating;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._hoverRating = (value > 0) ? value : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "speed", {
        /**
         * @return {?}
         */
        get: function () {
            return this._speed;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._speed = value || this.config.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "size", {
        /**
         * @return {?}
         */
        get: function () {
            return this._size;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._size = value || this.config.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "starType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._starType;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._starType = value || this.config.starType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "space", {
        /**
         * @return {?}
         */
        get: function () {
            return this._space;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._space = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "readOnly", {
        /**
         * @return {?}
         */
        get: function () {
            return this._readOnly;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._readOnly = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "step", {
        /**
         * @return {?}
         */
        get: function () {
            return this._step;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._step = (value > 0 ? value : 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "rating", {
        /**
         * @return {?}
         */
        get: function () {
            return this._rating;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.setRating(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * setRating
    I use a setter function instead of a set method to enable overrides for this function.
    \@param value
     * @param {?} value
     * @return {?}
     */
    StarRating.prototype.setRating = function (value) {
        //validate and apply newRating
        var /** @type {?} */ newRating = 0;
        if (value >= 0
            && value <= this.numOfStars) {
            newRating = value;
        }
        //limit max value to max number of stars
        if (value > this.numOfStars) {
            newRating = this.numOfStars;
        }
        this._rating = newRating;
        //update ratingAsInteger. rating parsed to int for the value-[n] modifier
        this.ratingAsInteger = parseInt(this._rating.toString());
        //update halfStarsVisible
        this.setHalfStarVisible();
        //update calculated Color
        this.setColor();
    };
    Object.defineProperty(StarRating.prototype, "showHalfStars", {
        /**
         * @return {?}
         */
        get: function () {
            return this._showHalfStars;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._showHalfStars = !!value;
            //update halfStarVisible
            this.setHalfStarVisible();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StarRating.prototype.svgVisible = function () {
        return this.starType === "svg";
    };
    /**
     * @return {?}
     */
    StarRating.prototype.interactionPossible = function () {
        return !this.readOnly && !this.disabled;
    };
    /**
     * @return {?}
     */
    StarRating.prototype.setColor = function () {
        //check if custom function is given
        if (typeof this.getColor === "function") {
            this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
        }
        else {
            this.color = StarRatingUtils.getColor(this.rating, this.numOfStars, this.staticColor);
        }
    };
    /**
     * @return {?}
     */
    StarRating.prototype.setHalfStarVisible = function () {
        //update halfStarVisible
        if (this.showHalfStars) {
            //check if custom function is given
            if (typeof this.getHalfStarVisible === "function") {
                this.halfStarVisible = this.getHalfStarVisible(this.rating);
            }
            else {
                this.halfStarVisible = StarRatingUtils.getHalfStarVisible(this.rating);
            }
        }
        else {
            this.halfStarVisible = false;
        }
    };
    /**
     * @return {?}
     */
    StarRating.prototype.getComponentClassNames = function () {
        var /** @type {?} */ classNames = [];
        classNames.push(this.rating ? 'value-' + this.ratingAsInteger : 'value-0');
        classNames.push(this.halfStarVisible ? 'half' : '');
        classNames.push(this.hoverEnabled ? 'hover' : '');
        var /** @type {?} */ hoverRating = (this.hoverRating ? 'hover-' + this.hoverRating : 'hover-0');
        classNames.push(this.hoverEnabled ? hoverRating : '');
        classNames.push(this.space ? 'space-' + this.space : '');
        classNames.push(this.labelPosition ? 'label-' + this.labelPosition : '');
        classNames.push(this.color ? 'color-' + this.color : '');
        classNames.push(this.starType ? 'star-' + this.starType : '');
        classNames.push(this.speed);
        classNames.push(this.size);
        classNames.push(this.readOnly ? 'read-only' : '');
        classNames.push(this.disabled ? 'disabled' : '');
        classNames.push(this.direction ? 'direction-' + this.direction : '');
        return classNames.join(' ');
    };
    /**
     * @return {?}
     */
    StarRating.prototype.increment = function () {
        //increment to next higher step
        var /** @type {?} */ absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating + (absDiff > 0 ? this.step - absDiff : this.step);
    };
    /**
     * @return {?}
     */
    StarRating.prototype.decrement = function () {
        //decrement to next lower step
        var /** @type {?} */ absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating - (absDiff > 0 ? absDiff : this.step);
    };
    /**
     * @return {?}
     */
    StarRating.prototype.reset = function () {
        this.rating = 0;
    };
    return StarRating;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var STAR_RATING_CONTROL_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return StarRatingComponent; }),
    multi: true
};
var StarRatingComponent = (function (_super) {
    __extends(StarRatingComponent, _super);
    function StarRatingComponent() {
        var _this = _super.call(this) || this;
        //Outputs
        ///////////////////////////////////////////////////////////////////////////////////////////
        _this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onRatingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onHoverRatingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onModelChangeRegistered = false;
        _this.onTouchRegistered = false;
        return _this;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    StarRatingComponent.prototype.saveOnClick = function ($event) {
        if (this.onClick) {
            this.onClick.emit($event);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StarRatingComponent.prototype.saveOnRatingChange = function ($event) {
        if (this.onRatingChange) {
            this.onRatingChange.emit($event);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StarRatingComponent.prototype.saveOnHover = function ($event) {
        if (this.onHoverRatingChange) {
            this.onHoverRatingChange.emit($event);
        }
    };
    /**
     * @return {?}
     */
    StarRatingComponent.prototype.saveOnTouch = function () {
        if (this.onTouchRegistered) {
            this.onTouch();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StarRatingComponent.prototype.saveOnModelChange = function (value) {
        if (this.onModelChangeRegistered) {
            this.onModelChange(value);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StarRatingComponent.prototype.onKeyDown = function (event) {
        var _this = this;
        var /** @type {?} */ handlers = {
            //Decrement
            Minus: function () { return _this.decrement(); },
            ArrowDown: function () { return _this.decrement(); },
            ArrowLeft: function () { return _this.decrement(); },
            //Increment
            Plus: function () { return _this.increment(); },
            ArrowRight: function () { return _this.increment(); },
            ArrowUp: function () { return _this.increment(); },
            //Reset
            Backspace: function () { return _this.reset(); },
            Delete: function () { return _this.reset(); },
            Digit0: function () { return _this.reset(); }
        };
        var /** @type {?} */ handleDigits = function (eventCode) {
            var /** @type {?} */ dStr = "Digit";
            var /** @type {?} */ digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1));
            _this.rating = digit;
        };
        if (handlers[event['code']] || StarRatingUtils.isDigitKeyEventCode(event['code'])) {
            if (StarRatingUtils.isDigitKeyEventCode(event['code'])) {
                handleDigits(event['code']);
            }
            else {
                handlers[event['code']]();
            }
            event.preventDefault();
            event.stopPropagation();
        }
        this.saveOnTouch();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StarRatingComponent.prototype.onBlur = function (event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StarRatingComponent.prototype.onFocus = function (event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    };
    /**
     * @param {?=} rating
     * @return {?}
     */
    StarRatingComponent.prototype.onStarHover = function (rating) {
        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }
        this.hoverRating = rating ? parseInt(rating.toString()) : 0;
        //fire onHoverRatingChange event
        var /** @type {?} */ $event = { hoverRating: this.hoverRating };
        this.saveOnHover($event);
    };
    /**
     * Form Control - ControlValueAccessor implementation*
     * @param {?} obj
     * @return {?}
     */
    StarRatingComponent.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StarRatingComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
        this.onModelChangeRegistered = true;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StarRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
        this.onTouchRegistered = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StarRatingComponent.prototype.setRating = function (value) {
        var /** @type {?} */ initValue = this.rating;
        _super.prototype.setRating.call(this, value);
        //if value changed trigger valueAccessor events and outputs
        if (initValue !== this.rating) {
            var /** @type {?} */ $event = { rating: this.rating };
            this.saveOnRatingChange($event);
            this.saveOnModelChange(this.rating);
        }
    };
    
    /**
     * onStarClicked
    
    Is fired when a star is clicked. And updated the rating value.
    This function returns if the disabled or readOnly
    property is set. If provided it emits the onClick event
    handler with the actual rating value.
    
    \@param rating
     * @param {?} rating
     * @return {?}
     */
    StarRatingComponent.prototype.onStarClicked = function (rating) {
        //fire onClick event
        if (!this.interactionPossible()) {
            return;
        }
        this.rating = rating;
        var /** @type {?} */ onClickEventObject = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);
    };
    /**
     * ngOnChanges
    \@param changes
     * @param {?} changes
     * @return {?}
     */
    StarRatingComponent.prototype.ngOnChanges = function (changes) {
    };
    return StarRatingComponent;
}(StarRating));
StarRatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'star-rating-comp',
                providers: [STAR_RATING_CONTROL_ACCESSOR],
                inputs: [
                    'getHalfStarVisible',
                    'getColor',
                    'showHalfStars',
                    'hoverEnabled',
                    'rating',
                    'step',
                    'disabled',
                    'readOnly',
                    'space',
                    'starType',
                    'size',
                    'speed',
                    'numOfStars',
                    'direction',
                    'staticColor'
                    //, 'labelVisible'
                    ,
                    'labelPosition',
                    'labelText',
                    'id'
                ],
                outputs: [
                    'onClick',
                    'onRatingChange',
                    'onHoverRatingChange'
                ],
                template: "<div id=\"{{id}}\" class=\"rating {{getComponentClassNames()}}\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\" (blur)=\"onBlur($event)\" (focus)=\"onFocus($event)\" (mouseleave)=\"onStarHover(0)\"> <div *ngIf=\"labelText\" class=\"label-value\">{{labelText}}</div> <div class=\"star-container\"> <div class=\"star\" (mouseenter)=\"onStarHover(star)\" *ngFor=\"let star of stars\" (click)=\"onStarClicked(star)\"> <i *ngIf=\"!svgVisible()\" class=\"star-empty {{classEmpty}}\"></i> <i *ngIf=\"!svgVisible()\" class=\"star-empty {{classHalf}}\"></i> <i *ngIf=\"!svgVisible()\" class=\"star-filled {{classFilled}}\"></i> <svg *ngIf=\"svgVisible()\" class=\"star-empty default-star-empty-icon\"> <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathEmpty\"></use> </svg> <svg *ngIf=\"svgVisible()\" class=\"star-half default-star-half-icon\"> <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathHalf\"></use> </svg> <svg *ngIf=\"svgVisible()\" class=\"star-filled default-star-filled-icon\"> <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathFilled\"></use> </svg> </div> </div> </div>"
            },] },
];
/**
 * @nocollapse
 */
StarRatingComponent.ctorParameters = function () { return []; };

var EXPORTS = [StarRatingComponent];
var StarRatingModule = (function () {
    function StarRatingModule() {
    }
    /**
     * @return {?}
     */
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule,
            providers: [StarRatingConfig]
        };
    };
    return StarRatingModule;
}());
StarRatingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [EXPORTS],
                declarations: [EXPORTS]
            },] },
];
/**
 * @nocollapse
 */
StarRatingModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/shared/fake-db/countries.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/fake-db/countries.ts ***!
  \*********************************************/
/*! exports provided: CountryDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDB", function() { return CountryDB; });
var CountryDB = /** @class */ (function () {
    function CountryDB() {
        this.countries = [
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Åland Islands', code: 'AX' },
            { name: 'Albania', code: 'AL' },
            { name: 'Algeria', code: 'DZ' },
            { name: 'American Samoa', code: 'AS' },
            { name: 'AndorrA', code: 'AD' },
            { name: 'Angola', code: 'AO' },
            { name: 'Anguilla', code: 'AI' },
            { name: 'Antarctica', code: 'AQ' },
            { name: 'Antigua and Barbuda', code: 'AG' },
            { name: 'Argentina', code: 'AR' },
            { name: 'Armenia', code: 'AM' },
            { name: 'Aruba', code: 'AW' },
            { name: 'Australia', code: 'AU' },
            { name: 'Austria', code: 'AT' },
            { name: 'Azerbaijan', code: 'AZ' },
            { name: 'Bahamas', code: 'BS' },
            { name: 'Bahrain', code: 'BH' },
            { name: 'Bangladesh', code: 'BD' },
            { name: 'Barbados', code: 'BB' },
            { name: 'Belarus', code: 'BY' },
            { name: 'Belgium', code: 'BE' },
            { name: 'Belize', code: 'BZ' },
            { name: 'Benin', code: 'BJ' },
            { name: 'Bermuda', code: 'BM' },
            { name: 'Bhutan', code: 'BT' },
            { name: 'Bolivia', code: 'BO' },
            { name: 'Bosnia and Herzegovina', code: 'BA' },
            { name: 'Botswana', code: 'BW' },
            { name: 'Bouvet Island', code: 'BV' },
            { name: 'Brazil', code: 'BR' },
            { name: 'British Indian Ocean Territory', code: 'IO' },
            { name: 'Brunei Darussalam', code: 'BN' },
            { name: 'Bulgaria', code: 'BG' },
            { name: 'Burkina Faso', code: 'BF' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Cambodia', code: 'KH' },
            { name: 'Cameroon', code: 'CM' },
            { name: 'Canada', code: 'CA' },
            { name: 'Cape Verde', code: 'CV' },
            { name: 'Cayman Islands', code: 'KY' },
            { name: 'Central African Republic', code: 'CF' },
            { name: 'Chad', code: 'TD' },
            { name: 'Chile', code: 'CL' },
            { name: 'China', code: 'CN' },
            { name: 'Christmas Island', code: 'CX' },
            { name: 'Cocos (Keeling) Islands', code: 'CC' },
            { name: 'Colombia', code: 'CO' },
            { name: 'Comoros', code: 'KM' },
            { name: 'Congo', code: 'CG' },
            { name: 'Congo, The Democratic Republic of the', code: 'CD' },
            { name: 'Cook Islands', code: 'CK' },
            { name: 'Costa Rica', code: 'CR' },
            { name: 'Cote D\'Ivoire', code: 'CI' },
            { name: 'Croatia', code: 'HR' },
            { name: 'Cuba', code: 'CU' },
            { name: 'Cyprus', code: 'CY' },
            { name: 'Czech Republic', code: 'CZ' },
            { name: 'Denmark', code: 'DK' },
            { name: 'Djibouti', code: 'DJ' },
            { name: 'Dominica', code: 'DM' },
            { name: 'Dominican Republic', code: 'DO' },
            { name: 'Ecuador', code: 'EC' },
            { name: 'Egypt', code: 'EG' },
            { name: 'El Salvador', code: 'SV' },
            { name: 'Equatorial Guinea', code: 'GQ' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Estonia', code: 'EE' },
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Falkland Islands (Malvinas)', code: 'FK' },
            { name: 'Faroe Islands', code: 'FO' },
            { name: 'Fiji', code: 'FJ' },
            { name: 'Finland', code: 'FI' },
            { name: 'France', code: 'FR' },
            { name: 'French Guiana', code: 'GF' },
            { name: 'French Polynesia', code: 'PF' },
            { name: 'French Southern Territories', code: 'TF' },
            { name: 'Gabon', code: 'GA' },
            { name: 'Gambia', code: 'GM' },
            { name: 'Georgia', code: 'GE' },
            { name: 'Germany', code: 'DE' },
            { name: 'Ghana', code: 'GH' },
            { name: 'Gibraltar', code: 'GI' },
            { name: 'Greece', code: 'GR' },
            { name: 'Greenland', code: 'GL' },
            { name: 'Grenada', code: 'GD' },
            { name: 'Guadeloupe', code: 'GP' },
            { name: 'Guam', code: 'GU' },
            { name: 'Guatemala', code: 'GT' },
            { name: 'Guernsey', code: 'GG' },
            { name: 'Guinea', code: 'GN' },
            { name: 'Guinea-Bissau', code: 'GW' },
            { name: 'Guyana', code: 'GY' },
            { name: 'Haiti', code: 'HT' },
            { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
            { name: 'Holy See (Vatican City State)', code: 'VA' },
            { name: 'Honduras', code: 'HN' },
            { name: 'Hong Kong', code: 'HK' },
            { name: 'Hungary', code: 'HU' },
            { name: 'Iceland', code: 'IS' },
            { name: 'India', code: 'IN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Iran, Islamic Republic Of', code: 'IR' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Ireland', code: 'IE' },
            { name: 'Isle of Man', code: 'IM' },
            { name: 'Israel', code: 'IL' },
            { name: 'Italy', code: 'IT' },
            { name: 'Jamaica', code: 'JM' },
            { name: 'Japan', code: 'JP' },
            { name: 'Jersey', code: 'JE' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kenya', code: 'KE' },
            { name: 'Kiribati', code: 'KI' },
            { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
            { name: 'Korea, Republic of', code: 'KR' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'Lao People\'S Democratic Republic', code: 'LA' },
            { name: 'Latvia', code: 'LV' },
            { name: 'Lebanon', code: 'LB' },
            { name: 'Lesotho', code: 'LS' },
            { name: 'Liberia', code: 'LR' },
            { name: 'Libyan Arab Jamahiriya', code: 'LY' },
            { name: 'Liechtenstein', code: 'LI' },
            { name: 'Lithuania', code: 'LT' },
            { name: 'Luxembourg', code: 'LU' },
            { name: 'Macao', code: 'MO' },
            { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
            { name: 'Madagascar', code: 'MG' },
            { name: 'Malawi', code: 'MW' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'Maldives', code: 'MV' },
            { name: 'Mali', code: 'ML' },
            { name: 'Malta', code: 'MT' },
            { name: 'Marshall Islands', code: 'MH' },
            { name: 'Martinique', code: 'MQ' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Mauritius', code: 'MU' },
            { name: 'Mayotte', code: 'YT' },
            { name: 'Mexico', code: 'MX' },
            { name: 'Micronesia, Federated States of', code: 'FM' },
            { name: 'Moldova, Republic of', code: 'MD' },
            { name: 'Monaco', code: 'MC' },
            { name: 'Mongolia', code: 'MN' },
            { name: 'Montserrat', code: 'MS' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Myanmar', code: 'MM' },
            { name: 'Namibia', code: 'NA' },
            { name: 'Nauru', code: 'NR' },
            { name: 'Nepal', code: 'NP' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'Netherlands Antilles', code: 'AN' },
            { name: 'New Caledonia', code: 'NC' },
            { name: 'New Zealand', code: 'NZ' },
            { name: 'Nicaragua', code: 'NI' },
            { name: 'Niger', code: 'NE' },
            { name: 'Nigeria', code: 'NG' },
            { name: 'Niue', code: 'NU' },
            { name: 'Norfolk Island', code: 'NF' },
            { name: 'Northern Mariana Islands', code: 'MP' },
            { name: 'Norway', code: 'NO' },
            { name: 'Oman', code: 'OM' },
            { name: 'Pakistan', code: 'PK' },
            { name: 'Palau', code: 'PW' },
            { name: 'Palestinian Territory, Occupied', code: 'PS' },
            { name: 'Panama', code: 'PA' },
            { name: 'Papua New Guinea', code: 'PG' },
            { name: 'Paraguay', code: 'PY' },
            { name: 'Peru', code: 'PE' },
            { name: 'Philippines', code: 'PH' },
            { name: 'Pitcairn', code: 'PN' },
            { name: 'Poland', code: 'PL' },
            { name: 'Portugal', code: 'PT' },
            { name: 'Puerto Rico', code: 'PR' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Reunion', code: 'RE' },
            { name: 'Romania', code: 'RO' },
            { name: 'Russian Federation', code: 'RU' },
            { name: 'RWANDA', code: 'RW' },
            { name: 'Saint Helena', code: 'SH' },
            { name: 'Saint Kitts and Nevis', code: 'KN' },
            { name: 'Saint Lucia', code: 'LC' },
            { name: 'Saint Pierre and Miquelon', code: 'PM' },
            { name: 'Saint Vincent and the Grenadines', code: 'VC' },
            { name: 'Samoa', code: 'WS' },
            { name: 'San Marino', code: 'SM' },
            { name: 'Sao Tome and Principe', code: 'ST' },
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Senegal', code: 'SN' },
            { name: 'Serbia and Montenegro', code: 'CS' },
            { name: 'Seychelles', code: 'SC' },
            { name: 'Sierra Leone', code: 'SL' },
            { name: 'Singapore', code: 'SG' },
            { name: 'Slovakia', code: 'SK' },
            { name: 'Slovenia', code: 'SI' },
            { name: 'Solomon Islands', code: 'SB' },
            { name: 'Somalia', code: 'SO' },
            { name: 'South Africa', code: 'ZA' },
            { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
            { name: 'Spain', code: 'ES' },
            { name: 'Sri Lanka', code: 'LK' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Suriname', code: 'SR' },
            { name: 'Svalbard and Jan Mayen', code: 'SJ' },
            { name: 'Swaziland', code: 'SZ' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Switzerland', code: 'CH' },
            { name: 'Syrian Arab Republic', code: 'SY' },
            { name: 'Taiwan, Province of China', code: 'TW' },
            { name: 'Tajikistan', code: 'TJ' },
            { name: 'Tanzania, United Republic of', code: 'TZ' },
            { name: 'Thailand', code: 'TH' },
            { name: 'Timor-Leste', code: 'TL' },
            { name: 'Togo', code: 'TG' },
            { name: 'Tokelau', code: 'TK' },
            { name: 'Tonga', code: 'TO' },
            { name: 'Trinidad and Tobago', code: 'TT' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Turkey', code: 'TR' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Turks and Caicos Islands', code: 'TC' },
            { name: 'Tuvalu', code: 'TV' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Ukraine', code: 'UA' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'United Kingdom', code: 'GB' },
            { name: 'United States', code: 'US' },
            { name: 'United States Minor Outlying Islands', code: 'UM' },
            { name: 'Uruguay', code: 'UY' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Vanuatu', code: 'VU' },
            { name: 'Venezuela', code: 'VE' },
            { name: 'Viet Nam', code: 'VN' },
            { name: 'Virgin Islands, British', code: 'VG' },
            { name: 'Virgin Islands, U.S.', code: 'VI' },
            { name: 'Wallis and Futuna', code: 'WF' },
            { name: 'Western Sahara', code: 'EH' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Zimbabwe', code: 'ZW' }
        ];
    }
    return CountryDB;
}());



/***/ }),

/***/ "./src/app/shared/fake-db/products.ts":
/*!********************************************!*\
  !*** ./src/app/shared/fake-db/products.ts ***!
  \********************************************/
/*! exports provided: ProductDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDB", function() { return ProductDB; });
var ProductDB = /** @class */ (function () {
    function ProductDB() {
        this.products = [
            {
                '_id': '5a9ae2106518248b68251fdf',
                'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
                'category': 'speaker',
                'tags': [
                    'sunt',
                    'sunt',
                    'culpa'
                ],
                'price': {
                    'sale': 32,
                    'previous': 54
                },
                'ratings': {
                    'rating': 3.86,
                    'ratingCount': 26
                },
                'features': [
                    'aliquip aliquip',
                    'nulla laboris',
                    'pariatur consequat'
                ],
                'photo': '../../../../assets/images/products/speaker-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/speaker-1.jpg',
                    '../../../../assets/images/products/speaker-2.jpg'
                ],
                'badge': {
                    'text': '20% off',
                    'color': '#0D47A1'
                }
            },
            {
                '_id': '5a9ae210b7b4d3ad2f048bbe',
                'name': 'Portable Speaker with HD Sound',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'cillum eiusmod',
                'category': 'speaker',
                'tags': [
                    'Lorem',
                    'nisi',
                    'ad'
                ],
                'price': {
                    'sale': 25,
                    'previous': 43
                },
                'ratings': {
                    'rating': 3.72,
                    'ratingCount': 18
                },
                'features': [
                    'magna est',
                    'consectetur dolor',
                    'est proident'
                ],
                'photo': '../../../../assets/images/products/speaker-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/speaker-1.jpg',
                    '../../../../assets/images/products/speaker-2.jpg'
                ],
                'badge': {
                    'text': 'Sale',
                    'color': '#DD2C00'
                }
            },
            {
                '_id': '5a9ae210d9a8d6dda7256417',
                'name': 'Lightweight On-Ear Headphones - Black',
                'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
                'description': 'sit laborum',
                'category': 'headphone',
                'tags': [
                    'eu',
                    'irure',
                    'proident'
                ],
                'price': {
                    'sale': 29,
                    'previous': 55
                },
                'ratings': {
                    'rating': 3.79,
                    'ratingCount': 77
                },
                'features': [
                    'laboris id',
                    'magna eu',
                    'sint quis'
                ],
                'photo': '../../../../assets/images/products/headphone-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '-40%',
                    'color': '#0288D1'
                }
            },
            {
                '_id': '5a9ae210e8329237332e56d7',
                'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'eiusmod elit',
                'category': 'watch',
                'tags': [
                    'laborum',
                    'minim',
                    'tempor'
                ],
                'price': {
                    'sale': 33,
                    'previous': 58
                },
                'ratings': {
                    'rating': 4.74,
                    'ratingCount': 64
                },
                'features': [
                    'cillum ullamco',
                    'ad minim',
                    'duis exercitation'
                ],
                'photo': '../../../../assets/images/products/watch-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/watch-1.jpg',
                    '../../../../assets/images/products/watch-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae210cb9937d28c6eca1a',
                'name': 'Automatic-self-wind mens Watch 5102PR-001',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'dolore tempor',
                'category': 'watch',
                'tags': [
                    'Lorem',
                    'dolor',
                    'duis'
                ],
                'price': {
                    'sale': 38,
                    'previous': 50
                },
                'ratings': {
                    'rating': 4.43,
                    'ratingCount': 98
                },
                'features': [
                    'aliquip consequat',
                    'excepteur non',
                    'aliquip eu'
                ],
                'photo': '../../../../assets/images/products/watch-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/watch-1.jpg',
                    '../../../../assets/images/products/watch-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae2106f155194e5c95d67',
                'name': 'On-Ear Headphones - Black',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'elit Lorem',
                'category': 'headphone',
                'tags': [
                    'magna',
                    'veniam',
                    'sunt'
                ],
                'price': {
                    'sale': 38,
                    'previous': 54
                },
                'ratings': {
                    'rating': 4.84,
                    'ratingCount': 52
                },
                'features': [
                    'est mollit',
                    'adipisicing exercitation',
                    'esse incididunt'
                ],
                'photo': '../../../../assets/images/products/headphone-3.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae2101625a02fee92e27f',
                'name': 'In-Ear Headphone',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'proident non',
                'category': 'headphone',
                'tags': [
                    'Lorem',
                    'occaecat',
                    'laborum'
                ],
                'price': {
                    'sale': 31,
                    'previous': 58
                },
                'ratings': {
                    'rating': 3.18,
                    'ratingCount': 90
                },
                'features': [
                    'ullamco quis',
                    'veniam laboris',
                    'nulla sunt'
                ],
                'photo': '../../../../assets/images/products/headphone-4.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae2108970b01447ec34aa',
                'name': 'Duis exercitation nostrud anim',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'dolore enim',
                'category': 'phone',
                'tags': [
                    'do',
                    'aliqua',
                    'irure'
                ],
                'price': {
                    'sale': 22,
                    'previous': 44
                },
                'ratings': {
                    'rating': 3.53,
                    'ratingCount': 47
                },
                'features': [
                    'sunt laboris',
                    'incididunt nulla',
                    'ullamco qui'
                ],
                'photo': '../../../../assets/images/products/iphone-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/iphone-1.jpg',
                    '../../../../assets/images/products/iphone-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae2103c04707145e21300',
                'name': 'Dolor eu nostrud excepteur',
                'description': 'enim fugiat',
                'category': 'phone',
                'tags': [
                    'laborum',
                    'nulla',
                    'sit'
                ],
                'price': {
                    'sale': 31,
                    'previous': 40
                },
                'ratings': {
                    'rating': 3.42,
                    'ratingCount': 35
                },
                'features': [
                    'exercitation excepteur',
                    'eiusmod mollit',
                    'irure adipisicing'
                ],
                'photo': '../../../../assets/images/products/iphone-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/iphone-1.jpg',
                    '../../../../assets/images/products/iphone-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae21021b2911c97ad6c5b',
                'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'sit commodo',
                'category': 'headphone',
                'tags': [
                    'adipisicing',
                    'labore',
                    'voluptate'
                ],
                'price': {
                    'sale': 33,
                    'previous': 57
                },
                'ratings': {
                    'rating': 3.51,
                    'ratingCount': 60
                },
                'features': [
                    'culpa id',
                    'eu excepteur',
                    'incididunt aute'
                ],
                'photo': '../../../../assets/images/products/headphone-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            }, {
                '_id': '5a9ae2106518248b68251fdf',
                'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
                'category': 'speaker',
                'tags': [
                    'sunt',
                    'sunt',
                    'culpa'
                ],
                'price': {
                    'sale': 32,
                    'previous': 54
                },
                'ratings': {
                    'rating': 3.86,
                    'ratingCount': 26
                },
                'features': [
                    'aliquip aliquip',
                    'nulla laboris',
                    'pariatur consequat'
                ],
                'photo': '../../../../assets/images/products/speaker-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/speaker-1.jpg',
                    '../../../../assets/images/products/speaker-2.jpg'
                ],
                'badge': {
                    'text': '20% off',
                    'color': '#0D47A1'
                }
            },
            {
                '_id': '5a9ae210b7b4d3ad2f048dsbbe',
                'name': 'Portable Speaker with HD Sound',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'cillum eiusmod',
                'category': 'speaker',
                'tags': [
                    'Lorem',
                    'nisi',
                    'ad'
                ],
                'price': {
                    'sale': 25,
                    'previous': 43
                },
                'ratings': {
                    'rating': 3.72,
                    'ratingCount': 18
                },
                'features': [
                    'magna est',
                    'consectetur dolor',
                    'est proident'
                ],
                'photo': '../../../../assets/images/products/speaker-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/speaker-1.jpg',
                    '../../../../assets/images/products/speaker-2.jpg'
                ],
                'badge': {
                    'text': 'Sale',
                    'color': '#DD2C00'
                }
            },
            {
                '_id': '5a9ae2sd10d9a8d6dda7256417',
                'name': 'Lightweight On-Ear Headphones - Black',
                'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
                'description': 'sit laborum',
                'category': 'headphone',
                'tags': [
                    'eu',
                    'irure',
                    'proident'
                ],
                'price': {
                    'sale': 29,
                    'previous': 55
                },
                'ratings': {
                    'rating': 3.79,
                    'ratingCount': 77
                },
                'features': [
                    'laboris id',
                    'magna eu',
                    'sint quis'
                ],
                'photo': '../../../../assets/images/products/headphone-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '-40%',
                    'color': '#0288D1'
                }
            },
            {
                '_id': '5a9ae210e8329fs237332e56d7',
                'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'eiusmod elit',
                'category': 'watch',
                'tags': [
                    'laborum',
                    'minim',
                    'tempor'
                ],
                'price': {
                    'sale': 33,
                    'previous': 58
                },
                'ratings': {
                    'rating': 4.74,
                    'ratingCount': 64
                },
                'features': [
                    'cillum ullamco',
                    'ad minim',
                    'duis exercitation'
                ],
                'photo': '../../../../assets/images/products/watch-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/watch-1.jpg',
                    '../../../../assets/images/products/watch-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae210cba9937d28c6eca1a',
                'name': 'Automatic-self-wind mens Watch 5102PR-001',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'dolore tempor',
                'category': 'watch',
                'tags': [
                    'Lorem',
                    'dolor',
                    'duis'
                ],
                'price': {
                    'sale': 38,
                    'previous': 50
                },
                'ratings': {
                    'rating': 4.43,
                    'ratingCount': 98
                },
                'features': [
                    'aliquip consequat',
                    'excepteur non',
                    'aliquip eu'
                ],
                'photo': '../../../../assets/images/products/watch-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/watch-1.jpg',
                    '../../../../assets/images/products/watch-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5ad9ae2106f155194e5c95d67',
                'name': 'On-Ear Headphones - Black',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'elit Lorem',
                'category': 'headphone',
                'tags': [
                    'magna',
                    'veniam',
                    'sunt'
                ],
                'price': {
                    'sale': 38,
                    'previous': 54
                },
                'ratings': {
                    'rating': 4.84,
                    'ratingCount': 52
                },
                'features': [
                    'est mollit',
                    'adipisicing exercitation',
                    'esse incididunt'
                ],
                'photo': '../../../../assets/images/products/headphone-3.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae2101625a02fee92fe27f',
                'name': 'In-Ear Headphone',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'proident non',
                'category': 'headphone',
                'tags': [
                    'Lorem',
                    'occaecat',
                    'laborum'
                ],
                'price': {
                    'sale': 31,
                    'previous': 58
                },
                'ratings': {
                    'rating': 3.18,
                    'ratingCount': 90
                },
                'features': [
                    'ullamco quis',
                    'veniam laboris',
                    'nulla sunt'
                ],
                'photo': '../../../../assets/images/products/headphone-4.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae2108970bs01447ec34aa',
                'name': 'Duis exercitation nostrud anim',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'dolore enim',
                'category': 'phone',
                'tags': [
                    'do',
                    'aliqua',
                    'irure'
                ],
                'price': {
                    'sale': 22,
                    'previous': 44
                },
                'ratings': {
                    'rating': 3.53,
                    'ratingCount': 47
                },
                'features': [
                    'sunt laboris',
                    'incididunt nulla',
                    'ullamco qui'
                ],
                'photo': '../../../../assets/images/products/iphone-2.jpg',
                'gallery': [
                    '../../../../assets/images/products/iphone-1.jpg',
                    '../../../../assets/images/products/iphone-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9ae2103c0470f7145e21300',
                'name': 'Dolor eu nostrud excepteur',
                'description': 'enim fugiat',
                'category': 'phone',
                'tags': [
                    'laborum',
                    'nulla',
                    'sit'
                ],
                'price': {
                    'sale': 31,
                    'previous': 40
                },
                'ratings': {
                    'rating': 3.42,
                    'ratingCount': 35
                },
                'features': [
                    'exercitation excepteur',
                    'eiusmod mollit',
                    'irure adipisicing'
                ],
                'photo': '../../../../assets/images/products/iphone-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/iphone-1.jpg',
                    '../../../../assets/images/products/iphone-2.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            },
            {
                '_id': '5a9aef21021b2911c97ad6c5b',
                'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
                'subtitle': 'Admodum assentior ad duo',
                'description': 'sit commodo',
                'category': 'headphone',
                'tags': [
                    'adipisicing',
                    'labore',
                    'voluptate'
                ],
                'price': {
                    'sale': 33,
                    'previous': 57
                },
                'ratings': {
                    'rating': 3.51,
                    'ratingCount': 60
                },
                'features': [
                    'culpa id',
                    'eu excepteur',
                    'incididunt aute'
                ],
                'photo': '../../../../assets/images/products/headphone-1.jpg',
                'gallery': [
                    '../../../../assets/images/products/headphone-1.jpg',
                    '../../../../assets/images/products/headphone-2.jpg',
                    '../../../../assets/images/products/headphone-3.jpg',
                    '../../../../assets/images/products/headphone-4.jpg'
                ],
                'badge': {
                    'text': '',
                    'color': 'red'
                }
            }
        ];
    }
    return ProductDB;
}());



/***/ }),

/***/ "./src/app/views/shop/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/shop/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-333\">\r\n    <table class=\"cart-table default-bg mat-elevation-z1\" \r\n    *ngIf=\"cart.length\" \r\n    [@animate]=\"{value:'*',params:{delay: '100ms', x:'-50px'}}\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-muted\">Remove</th>\r\n          <th class=\"text-muted\">Thumbnail</th>\r\n          <th class=\"text-muted\">Product</th>\r\n          <th class=\"text-muted\">Price</th>\r\n          <th class=\"text-muted\">Quantity</th>\r\n          <th class=\"text-muted\">Total</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of cart\">\r\n          <td><button mat-icon-button color=\"warn\" (click)=\"removeProduct(item)\"><mat-icon>close</mat-icon></button> </td>\r\n          <td><img class=\"cart-thumbnail\" [src]=\"item.product.photo\" style=\"cursor: pointer\" [routerLink]=\"['/shop/products', item.product._id]\"></td>\r\n          <td><span style=\"cursor: pointer\" [routerLink]=\"['/shop/products', item.product._id]\">{{item.product.name}}</span></td>\r\n          <td>{{item.product.price.sale | currency}}</td>\r\n          <td><input class=\"quantity-input default-bg\" id=\"quantity\" min=\"1\" name=\"quantity\" type=\"number\" (change)=\"onQuantityChange()\" [(ngModel)]=\"item.data.quantity\"></td>\r\n          <td>{{item.product.price.sale * item.data.quantity | currency}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    \r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" *ngIf=\"cart.length\" [@animate]=\"{value:'*',params:{delay: '100ms', x:'50px'}}\">\r\n      <div fxFlex></div>\r\n      <div fxFlex=\"25\">\r\n        <mat-card class=\"m-0\">\r\n          <div class=\"line mb-1\">\r\n            <span class=\"fw-500\">Subtotal:</span>\r\n            <span fxFlex></span>\r\n            <span class=\"text-muted\">${{subTotal}}</span>\r\n          </div>\r\n          <div class=\"line mb-1\">\r\n            <span class=\"fw-500\">VAT:</span>\r\n            <span fxFlex></span>\r\n            <span class=\"text-muted\">{{vat}}%</span>\r\n          </div>\r\n          <mat-divider class=\"\"></mat-divider>\r\n          <div class=\"line mb-1 pt-1\">\r\n            <span class=\"fw-500\">Total:</span>\r\n            <span fxFlex></span>\r\n            <span class=\"text-muted\">${{total}}</span>\r\n          </div>\r\n          <mat-card-actions>\r\n            <span fxFlex></span>\r\n            <button mat-raised-button color=\"primary\" routerLink=\"/shop\">Back To Shop</button>\r\n            <button mat-raised-button color=\"warn\" routerLink=\"/shop/checkout\">Checkout</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!cart.length\" [@animate]=\"{value:'*',params:{delay: '100ms', y:'-50px'}}\">\r\n      <mat-card class=\"text-center\">\r\n        <p>Your cart is empty</p>\r\n        <button mat-raised-button color=\"accent\" routerLink=\"/shop\">Go Back To Shop</button>\r\n      </mat-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/shop/cart/cart.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/shop/cart/cart.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/shop/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/shop/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shop.service */ "./src/app/views/shop/shop.service.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(shopService) {
        this.shopService = shopService;
        this.vat = 15;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCart();
        this.onQuantityChange();
    };
    CartComponent.prototype.getCart = function () {
        var _this = this;
        this.shopService
            .getCart()
            .subscribe(function (cart) {
            _this.cart = cart;
        });
    };
    CartComponent.prototype.removeProduct = function (cartItem) {
        var _this = this;
        this.shopService
            .removeFromCart(cartItem)
            .subscribe(function (res) {
            _this.cart = res;
        });
    };
    CartComponent.prototype.onQuantityChange = function () {
        var _this = this;
        this.subTotal = 0;
        this.cart.forEach(function (item) {
            _this.subTotal += (item.product.price.sale * item.data.quantity);
        });
        this.total = this.subTotal + (this.subTotal * (15 / 100));
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/views/shop/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/views/shop/cart/cart.component.scss")],
            animations: [_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__["egretAnimations"]]
        }),
        __metadata("design:paramtypes", [_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/views/shop/checkout/checkout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/shop/checkout/checkout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" *ngIf=\"cart.length\">\r\n    <div fxFlex=\"70\" [@animate]=\"{value:'*',params:{delay: '100ms', x:'-50px'}}\">\r\n      <mat-card class=\"mb-1\">\r\n        <mat-card-title>\r\n          Billing address\r\n        </mat-card-title>\r\n        <form [formGroup]=\"checkoutForm\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <mat-select placeholder=\"Country\" [formControl]=\"checkoutForm.controls['country']\">\r\n                  <mat-option *ngFor=\"let c of countries\" [value]=\"c.code\">\r\n                    {{ c.name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"First name\" value=\"\" [formControl]=\"checkoutForm.controls['firstName']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Last name\" value=\"\" [formControl]=\"checkoutForm.controls['lastName']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Company\" value=\"\" [formControl]=\"checkoutForm.controls['company']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Address line 1\" value=\"\" [formControl]=\"checkoutForm.controls['address1']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Address line 2\" value=\"\" [formControl]=\"checkoutForm.controls['address2']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"City\" [formControl]=\"checkoutForm.controls['city']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput type=\"number\" placeholder=\"Zip\" [formControl]=\"checkoutForm.controls['zip']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Phone\" [formControl]=\"checkoutForm.controls['phone']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Email\" [formControl]=\"checkoutForm.controls['email']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </mat-card>\r\n      <div class=\"m-333\" fxLayout=\"column\">\r\n        <mat-checkbox>Create an account</mat-checkbox>\r\n        <span fxFlex=\"16px\"></span>\r\n        <mat-checkbox [(ngModel)]=\"hasAltAddress\">Alternative shipping address</mat-checkbox>\r\n      </div>\r\n      <mat-card class=\"mt-1\" *ngIf=\"hasAltAddress\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'50px'}}\">\r\n        <mat-card-title>\r\n          Shipping address\r\n        </mat-card-title>\r\n        <form [formGroup]=\"checkoutFormAlt\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <mat-select placeholder=\"Country\" [formControl]=\"checkoutFormAlt.controls['country']\">\r\n                  <mat-option *ngFor=\"let c of countries\" [value]=\"c.code\">\r\n                    {{ c.name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"First name\" value=\"\" [formControl]=\"checkoutFormAlt.controls['firstName']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Last name\" value=\"\" [formControl]=\"checkoutFormAlt.controls['lastName']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Company\" value=\"\" [formControl]=\"checkoutFormAlt.controls['company']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Address line 1\" value=\"\" [formControl]=\"checkoutFormAlt.controls['address1']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Address line 2\" value=\"\" [formControl]=\"checkoutFormAlt.controls['address2']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"City\" [formControl]=\"checkoutFormAlt.controls['city']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput type=\"number\" placeholder=\"Zip\" [formControl]=\"checkoutFormAlt.controls['zip']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Phone\" [formControl]=\"checkoutFormAlt.controls['phone']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Email\" [formControl]=\"checkoutFormAlt.controls['email']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex=\"30\" [@animate]=\"{value:'*',params:{delay: '100ms', x:'50px'}}\">\r\n      <mat-card class=\"default\">\r\n        <mat-card-title>\r\n          Your order\r\n        </mat-card-title>\r\n        <mat-card-content class=\"p-0\">\r\n          <mat-list class=\"compact-list mb-1\">\r\n            <mat-divider></mat-divider>\r\n            <mat-list-item class=\"\" *ngFor=\"let p of cart\">\r\n              <img mat-list-avatar class=\"mr-1\" [src]=\"p.product.photo\" alt=\"\">\r\n              <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <h6 class=\"m-0 mr-1 text-muted\">\r\n                  <small>{{p.product.name}} x {{p.data.quantity}}</small>\r\n                </h6>\r\n                <span fxFlex></span>\r\n                <div class=\"text-muted\">{{p.product.price.sale * p.data.quantity | currency }}</div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n            </mat-list-item>\r\n\r\n            <mat-list-item>\r\n              <div fxFlex=\"56px\"></div>\r\n              <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <h6 class=\"m-0 mr-1 text-muted\">\r\n                  <small>\r\n                    <strong>Subtotal:</strong>\r\n                  </small>\r\n                </h6>\r\n                <span fxFlex></span>\r\n                <div class=\"text-muted\">{{subTotal | currency}}</div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n            </mat-list-item>\r\n\r\n            <mat-list-item>\r\n              <div fxFlex=\"56px\"></div>\r\n              <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <h6 class=\"m-0 mr-1 text-muted\">\r\n                  <small>\r\n                    <strong>Vat:</strong>\r\n                  </small>\r\n                </h6>\r\n                <span fxFlex></span>\r\n                <div class=\"text-muted\">{{vat}}%</div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n            </mat-list-item>\r\n\r\n            <mat-list-item>\r\n              <div fxFlex=\"56px\"></div>\r\n              <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <h6 class=\"m-0 mr-1 text-muted\">\r\n                  <small>\r\n                    <strong>Shipping:</strong>\r\n                  </small>\r\n                </h6>\r\n                <span fxFlex></span>\r\n                <div class=\"text-muted\">{{shipping}}</div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n            </mat-list-item>\r\n\r\n            <mat-list-item>\r\n              <div fxFlex=\"56px\"></div>\r\n              <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <h6 class=\"m-0 mr-1 text-muted\">\r\n                  <small>\r\n                    <strong>Total:</strong>\r\n                  </small>\r\n                </h6>\r\n                <span fxFlex></span>\r\n                <div class=\"text-muted\">{{total | currency}}</div>\r\n              </div>\r\n            </mat-list-item>\r\n          </mat-list>\r\n\r\n          <div class=\"p-1\">\r\n            <mat-radio-group fxLayout=\"column\" fxLayoutGap=\"8px\" [(ngModel)]=\"paymentMethod\">\r\n              <mat-radio-button value=\"paypal\">Paypal</mat-radio-button>\r\n              \r\n              <mat-radio-button value=\"card\">Credit Card</mat-radio-button>\r\n              \r\n              <mat-radio-button value=\"bank\">Bank Transfer</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <mat-card-actions>\r\n            <span fxFlex></span>\r\n            <button mat-raised-button color=\"primary\" routerLink=\"/shop/cart\">Back to Cart</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"placeOrder()\">Place Order</button>\r\n          </mat-card-actions>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!cart.length\" [@animate]=\"{value:'*',params:{delay: '100ms', y:'-50px'}}\">\r\n    <mat-card class=\"text-center\">\r\n      <h5 class=\"mb-1\">Your cart is empty</h5>\r\n      <button mat-raised-button color=\"accent\" routerLink=\"/shop\"><mat-icon>chevron_left</mat-icon> Back to Shop</button>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/shop/checkout/checkout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/shop/checkout/checkout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/shop/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/shop/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_fake_db_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/fake-db/countries */ "./src/app/shared/fake-db/countries.ts");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop.service */ "./src/app/views/shop/shop.service.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(fb, shopService) {
        this.fb = fb;
        this.shopService = shopService;
        this.vat = 15;
        this.shipping = 'Free';
        var countryDB = new _shared_fake_db_countries__WEBPACK_IMPORTED_MODULE_2__["CountryDB"]();
        this.countries = countryDB.countries;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.getCart();
        this.buildCheckoutForm();
    };
    CheckoutComponent.prototype.calculateCost = function () {
        var _this = this;
        this.subTotal = 0;
        this.cart.forEach(function (item) {
            _this.subTotal += (item.product.price.sale * item.data.quantity);
        });
        this.total = this.subTotal + (this.subTotal * (15 / 100));
        if (this.shipping !== 'Free') {
            this.total += this.shipping;
        }
    };
    CheckoutComponent.prototype.getCart = function () {
        var _this = this;
        this.shopService
            .getCart()
            .subscribe(function (cart) {
            _this.cart = cart;
            _this.calculateCost();
        });
    };
    CheckoutComponent.prototype.buildCheckoutForm = function () {
        this.checkoutForm = this.fb.group({
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: [],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: [],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.checkoutFormAlt = this.fb.group({
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: [],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: [],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CheckoutComponent.prototype.placeOrder = function () {
        var billingAddress = this.checkoutForm.value;
        var shippingAddress;
        if (this.hasAltAddress) {
            shippingAddress = this.checkoutFormAlt.value;
        }
        console.log(billingAddress, shippingAddress, this.paymentMethod);
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/views/shop/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/views/shop/checkout/checkout.component.scss")],
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_4__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/views/shop/product-details/product-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/shop/product-details/product-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-details-wrap m-333\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"wrap\">\r\n  <div fxLayout=\"row\" fxFlex=\"100\" class=\"mb-05\">\r\n    <button mat-icon-button class=\"text-muted\" routerLink=\"/shop\"><mat-icon>chevron_left</mat-icon> <span >Back to Shop</span></button>\r\n    <span fxFlex></span>\r\n    <span fxFlex=\"20px\"></span>\r\n    <button mat-raised-button color=\"primary\" routerLink=\"/shop/cart\">\r\n      <mat-icon>shopping_cart</mat-icon> Cart ({{cartData?.itemCount}})</button>\r\n  </div>\r\n  <div fxFlex.lt-md=\"auto\" fxFlex=\"50\" class=\"product-photos-wrap\">\r\n    <div class=\"gallery-thumbnails\" [@animate]=\"{value:'*',params:{delay: '100ms', x:'-100px'}}\">\r\n      <img class=\"mat-elevation-z1\" [ngClass]=\"{'active': image.state === '1'}\" *ngFor=\"let image of photoGallery\" [src]=\"image.url\"\r\n        (click)=\"changeState(image)\">\r\n    </div>\r\n    <div class=\"gallery-photo\" [@animate]=\"{value:'*',params:{delay: '100ms', y:'50px'}}\">\r\n      <img class=\"mat-elevation-z2\" *ngFor=\"let image of photoGallery\" [src]=\"image.url\" alt=\"\" [@fadeInOut]=\"image.state\">\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex=\"50\" class=\"product-content-wrap\" [@animate]=\"{value:'*',params:{delay: '100ms', x:'50px'}}\">\r\n    <div class=\"product-rating\" *ngIf=\"product?.ratings?.rating\">\r\n      <star-rating-comp [rating]=\"product?.ratings?.rating\" [starType]=\"'svg'\" [readOnly]=\"true\" [size]=\"'medium'\" [staticColor]=\"'ok'\">\r\n      </star-rating-comp>\r\n      <small class=\"text-muted\">{{product?.ratings?.rating}} ({{product?.ratings?.ratingCount}})</small>\r\n    </div>\r\n    <h1 class=\"title\">{{product?.name}}</h1>\r\n    <div class=\"main-info mb-1\">\r\n      <p class=\"mb-05\" [ngStyle]=\"{maxWidth: '450px'}\">{{product?.description}}</p>\r\n      <p class=\"text-muted p-line\"><strong>Category:</strong> <span class=\"mat-color-default\">{{product?.category}}</span></p>\r\n      <p class=\"text-muted p-line\"><strong>Tags:</strong> <span *ngFor=\"let t of product.tags\"><span class=\"mat-color-default\">{{t}}</span> </span></p>\r\n    </div>\r\n    <div class=\"product-options\">\r\n      <div class=\"opt-radio mb-1\">\r\n        <label class=\"option-label text-muted\">Choose an option: </label>\r\n        <mat-radio-group fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <mat-radio-button  [value]=\"'opt1'\">Option 1</mat-radio-button>\r\n          <mat-radio-button  [value]=\"'opt2'\">Option 2</mat-radio-button>\r\n          <mat-radio-button  [value]=\"'opt3'\">Option 3</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"opt-quantity mb-1\">\r\n        <label class=\"option-label text-muted\" for=\"quantity\">Quantity: </label>\r\n        <input class=\"quantity-input default-bg\" id=\"quantity\" name=\"quantity\" type=\"number\" [(ngModel)]=\"quantity\">\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"addToCart()\"><mat-icon>add_shopping_cart</mat-icon> Add to Cart</button>\r\n      <span fxFlex=\"8px\"></span>\r\n      <button mat-raised-button color=\"primary\" routerLink=\"/shop\"><mat-icon>chevron_left</mat-icon> Back to Shop</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/shop/product-details/product-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/shop/product-details/product-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/shop/product-details/product-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/shop/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop.service */ "./src/app/views/shop/shop.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(shopService, route, snackBar) {
        this.shopService = shopService;
        this.route = route;
        this.snackBar = snackBar;
        this.quantity = 1;
        this.photoGallery = [{ url: '', state: '0' }];
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.productID = this.route.snapshot.params['id'];
        this.getProduct(this.productID);
        this.getCart();
        this.cartData = this.shopService.cartData;
    };
    ProductDetailsComponent.prototype.ngOnDestroy = function () {
        this.productSub.unsubscribe();
    };
    ProductDetailsComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productSub = this.shopService.getProductDetails(id)
            .subscribe(function (res) {
            _this.product = res;
            _this.initGallery(_this.product);
        }, function (err) {
            _this.product = {
                _id: '',
                name: '',
                price: { sale: 0 }
            };
        });
    };
    ProductDetailsComponent.prototype.getCart = function () {
        var _this = this;
        this.shopService
            .getCart()
            .subscribe(function (cart) {
            _this.cart = cart;
        });
    };
    ProductDetailsComponent.prototype.addToCart = function () {
        var _this = this;
        var cartItem = {
            product: this.product,
            data: {
                quantity: this.quantity,
                options: {}
            }
        };
        this.shopService
            .addToCart(cartItem)
            .subscribe(function (res) {
            _this.cart = res;
            _this.quantity = 1;
            _this.snackBar.open('Product added to cart', 'OK', { duration: 4000 });
        });
    };
    ProductDetailsComponent.prototype.initGallery = function (product) {
        if (!product.gallery) {
            return;
        }
        this.photoGallery = product.gallery.map(function (i) {
            return {
                url: i,
                state: '0'
            };
        });
        if (this.photoGallery[0]) {
            this.photoGallery[0].state = '1';
        }
    };
    ProductDetailsComponent.prototype.changeState = function (photo) {
        if (photo.state === '1') {
            return;
        }
        this.photoGallery = this.photoGallery.map(function (p) {
            if (photo.url === p.url) {
                setTimeout(function () {
                    p.state = '1';
                    return p;
                }, 290);
            }
            p.state = '0';
            return p;
        });
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/views/shop/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/views/shop/product-details/product-details.component.scss")],
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/shop/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/shop/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <mat-sidenav-container>\r\n    <mat-sidenav EgretSideNavToggle class=\"shop-sidebar\">\r\n      <div class=\"shop-filters-wrap\">\r\n        <form [formGroup]=\"filterForm\">\r\n          <mat-accordion multi=\"true\" displayMode=\"flat\">\r\n            <!-- Categories -->\r\n            <mat-expansion-panel expanded=\"true\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Categories\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <ul class=\"product-categories\">\r\n                <li [ngClass]=\"{'fw-500': 'all' === activeCategory}\" (click)=\"setActiveCategory('all')\">All</li>\r\n                <li *ngFor=\"let c of categories$ | async\" [ngClass]=\"{'fw-500': c === activeCategory}\" (click)=\"setActiveCategory(c)\">{{c}}</li>\r\n              </ul>\r\n            </mat-expansion-panel>\r\n            <!-- Price -->\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Price\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <p class=\"m-0\">Min: {{filterForm.controls['minPrice']['value'] || 20 | currency:'USD'}}</p>\r\n              <mat-slider class=\"full-width mb-1 pl-0\" [formControl]=\"filterForm.controls['minPrice']\" [thumbLabel]=\"true\" [max]=\"filterForm.controls['maxPrice']?.value - 5\"\r\n                [min]=\"20\"></mat-slider>\r\n\r\n              <p class=\"m-0\">Max: {{filterForm.controls['maxPrice']['value'] || 40 | currency:'USD'}}</p>\r\n              <mat-slider class=\"full-width pl-0\" [formControl]=\"filterForm.controls['maxPrice']\" [thumbLabel]=\"true\" [max]=\"50\" [min]=\"filterForm.controls['minPrice']?.value + 5\"></mat-slider>\r\n            </mat-expansion-panel>\r\n            <!-- Ratings -->\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Ratings\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <p class=\"m-0\">Min: {{filterForm.controls['minRating']['value'] || 1}}</p>\r\n              <mat-slider class=\"full-width mb-1\" [formControl]=\"filterForm.controls['minRating']\" [thumbLabel]=\"true\" [max]=\"filterForm.controls['maxRating']?.value - 1\"\r\n                [min]=\"1\"></mat-slider>\r\n\r\n              <p class=\"m-0\">Max: {{filterForm.controls['maxRating']['value'] || 5}}</p>\r\n              <mat-slider class=\"full-width mb-1\" [formControl]=\"filterForm.controls['maxRating']\" [thumbLabel]=\"true\" [max]=\"5\" [min]=\"filterForm.controls['minRating']?.value + 1\"></mat-slider>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </form>\r\n      </div>\r\n    </mat-sidenav>\r\n    <div class=\"shop-wrap\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n      <!-- Filters -->\r\n      <!-- Right side -->\r\n      <div class=\"full-width\">\r\n        <!-- Search Form -->\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"shop-top-toolbar\">\r\n          <button mat-icon-button class=\"mr-1\" (click)=\"toggleSideNav()\"><mat-icon>short_text</mat-icon> </button>\r\n          <div class=\"product-search-wrap\">\r\n            <form [formGroup]=\"filterForm\">\r\n              <input type=\"text\" name=\"searchProduct\" placeholder=\"Search product\" class=\"product-search default-bg full-width\" [formControl]=\"filterForm.controls['search']\">\r\n            </form>\r\n          </div>\r\n          <!-- View change buttons and cart -->\r\n          <span fxFlex></span>\r\n          <div [fxHide.lt-md]=\"true\">\r\n            <button mat-icon-button [color]=\"viewMode === 'list-view' ? 'primary' : ''\" (click)=\"viewMode = 'list-view'\">\r\n              <mat-icon>format_list_bulleted</mat-icon>\r\n            </button>\r\n            <button mat-icon-button [color]=\"viewMode === 'grid-view' ? 'primary' : ''\" (click)=\"viewMode = 'grid-view'\">\r\n              <mat-icon>apps</mat-icon>\r\n            </button>\r\n          </div>\r\n          <span fxFlex=\"20px\"></span>\r\n          <button mat-raised-button color=\"primary\" routerLink=\"/shop/cart\">\r\n            <mat-icon>shopping_cart</mat-icon> Cart ({{cartData.itemCount}})\r\n          </button>\r\n        </div>\r\n        <!-- Products container -->\r\n        <div class=\"product-container\"\r\n        [ngClass]=\"{'list-view': viewMode === 'list-view'}\">\r\n          <!-- Product Box -->\r\n          <div\r\n          class=\"product-wrap\"\r\n          *ngFor=\"let product of products$ | async | paginate: { itemsPerPage: 6, currentPage: currentPage }; let i = index;\"\r\n          [@animate]=\"{value:'*',params:{delay: (i*100)+'ms', y:'50px'}}\">\r\n            <div class=\"product-inner default-bg\">\r\n              <div *ngIf=\"product?.badge?.text\" class=\"product-badge mat-elevation-z7\" [ngStyle]=\"{background: product?.badge?.color || '#f44336'}\">\r\n                <span>{{product?.badge?.text}}</span>\r\n              </div>\r\n              <div class=\"featured-img\" [routerLink]=\"['/shop/products/', product._id]\">\r\n                <img [src]=\"product.photo\" alt=\"\">\r\n              </div>\r\n              <div class=\"info-wrap p-1\">\r\n                <div class=\"main-info\">\r\n                  <h3 class=\"title\" [routerLink]=\"['/shop/products/', product._id]\">{{product.name}}</h3>\r\n                  <p class=\"text-muted p-line\">{{product?.subtitle}}</p>\r\n                  <p class=\"text-muted p-line\">\r\n                    <strong>Category:</strong> {{product?.category}}</p>\r\n                  <p class=\"text-muted p-line\">\r\n                    <strong>Tags:</strong>\r\n                    <span *ngFor=\"let t of product.tags\">{{t}} </span>\r\n                  </p>\r\n                </div>\r\n                <div class=\"actions\">\r\n                  <div class=\"price-rating\">\r\n                    <div class=\"product-rating\" *ngIf=\"viewMode === 'grid-view'\">\r\n                      <star-rating-comp [rating]=\"product.ratings.rating\" [starType]=\"'svg'\" [readOnly]=\"true\" [size]=\"'small'\" [staticColor]=\"'ok'\"></star-rating-comp>\r\n                      <small class=\"text-muted\">({{product.ratings.ratingCount}})</small>\r\n                    </div>\r\n                    <div class=\"price\">\r\n                      <span>{{product?.price?.sale | currency:'USD'}}</span>\r\n                      <del class=\"text-muted\">{{product?.price?.previous | currency:'USD'}}</del>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"add-to-cart\">\r\n                    <span fxFlex></span>\r\n                    <button mat-icon-button (click)=\"addToCart(product)\">\r\n                      <mat-icon>add_shopping_cart</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Visible when viewMode === list-view -->\r\n              <div class=\"more-info-wrap p-1\" *ngIf=\"viewMode === 'list-view'\">\r\n                <div class=\"more-info\">\r\n                  <div class=\"more-actions mb-1\">\r\n                    <div class=\"product-rating\">\r\n                      <star-rating-comp [starType]=\"'svg'\" [readOnly]=\"true\" [size]=\"'medium'\" [staticColor]=\"'ok'\" [rating]=\"4.63\"></star-rating-comp>\r\n                      <small class=\"text-muted\">(140)</small>\r\n                    </div>\r\n                    <span fxFlex></span>\r\n                    <button mat-icon-button>\r\n                      <mat-icon>playlist_add</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button>\r\n                      <mat-icon>favorite</mat-icon>\r\n                    </button>\r\n                  </div>\r\n\r\n                  <div>\r\n                    <ul>\r\n                      <li>\r\n                        <mat-icon>check</mat-icon> Heavy duty</li>\r\n                      <li>\r\n                        <mat-icon>check</mat-icon> Water resistance</li>\r\n                      <li>\r\n                        <mat-icon>check</mat-icon> Clean design</li>\r\n                      <li>\r\n                        <mat-icon>check</mat-icon> High quality raw materials</li>\r\n                    </ul>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- End Product -->\r\n\r\n          <div class=\"products-pagination\">\r\n            <pagination-controls (pageChange)=\"currentPage = $event\"></pagination-controls>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- End Products container -->\r\n      </div>\r\n\r\n    </div>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/shop/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/shop/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop.service */ "./src/app/views/shop/shop.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(shopService, fb, snackBar, loader) {
        this.shopService = shopService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.loader = loader;
        this.viewMode = 'grid-view';
        this.activeCategory = 'all';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories$ = this.shopService.getCategories();
        this.buildFilterForm(this.shopService.initialFilters);
        setTimeout(function () {
            _this.loader.open();
        });
        this.products$ = this.shopService
            .getFilteredProduct(this.filterForm)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (products) {
            _this.loader.close();
            return products;
        }));
        this.getCart();
        this.cartData = this.shopService.cartData;
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
    };
    ProductsComponent.prototype.getCart = function () {
        var _this = this;
        this.shopService
            .getCart()
            .subscribe(function (cart) {
            _this.cart = cart;
        });
    };
    ProductsComponent.prototype.addToCart = function (product) {
        var _this = this;
        var cartItem = {
            product: product,
            data: {
                quantity: 1
            }
        };
        this.shopService
            .addToCart(cartItem)
            .subscribe(function (cart) {
            _this.cart = cart;
            _this.snackBar.open('Product added to cart', 'OK', { duration: 4000 });
        });
    };
    ProductsComponent.prototype.buildFilterForm = function (filterData) {
        if (filterData === void 0) { filterData = {}; }
        this.filterForm = this.fb.group({
            search: [''],
            category: ['all'],
            minPrice: [filterData.minPrice],
            maxPrice: [filterData.maxPrice],
            minRating: [filterData.minRating],
            maxRating: [filterData.maxRating]
        });
    };
    ProductsComponent.prototype.setActiveCategory = function (category) {
        this.activeCategory = category;
        this.filterForm.controls['category'].setValue(category);
    };
    ProductsComponent.prototype.toggleSideNav = function () {
        this.sideNav.opened = !this.sideNav.opened;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], ProductsComponent.prototype, "sideNav", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/views/shop/products/products.component.html"),
            animations: [_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__["egretAnimations"]]
        }),
        __metadata("design:paramtypes", [_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["AppLoaderService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/views/shop/shop.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/shop/shop.module.ts ***!
  \*******************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/views/shop/products/products.component.ts");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop.service */ "./src/app/views/shop/shop.service.ts");
/* harmony import */ var _shop_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop.routing */ "./src/app/views/shop/shop.routing.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/views/shop/product-details/product-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/views/shop/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/views/shop/checkout/checkout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRatingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_shop_routing__WEBPACK_IMPORTED_MODULE_12__["ShopRoutes"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"]
            ],
            providers: [_shop_service__WEBPACK_IMPORTED_MODULE_11__["ShopService"]]
        })
    ], ShopModule);
    return ShopModule;
}());



/***/ }),

/***/ "./src/app/views/shop/shop.routing.ts":
/*!********************************************!*\
  !*** ./src/app/views/shop/shop.routing.ts ***!
  \********************************************/
/*! exports provided: ShopRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutes", function() { return ShopRoutes; });
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products/products.component */ "./src/app/views/shop/products/products.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/views/shop/product-details/product-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/views/shop/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/views/shop/checkout/checkout.component.ts");




var ShopRoutes = [{
        path: '',
        children: [{
                path: '',
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_0__["ProductsComponent"]
            }, {
                path: 'products/:id',
                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailsComponent"],
                data: { title: 'Detail', breadcrumb: 'Detail' }
            }, {
                path: 'cart',
                component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
                data: { title: 'Cart', breadcrumb: 'CART' }
            }, {
                path: 'checkout',
                component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"],
                data: { title: 'Checkout', breadcrumb: 'CHECKOUT' }
            }]
    }];


/***/ }),

/***/ "./src/app/views/shop/shop.service.ts":
/*!********************************************!*\
  !*** ./src/app/views/shop/shop.service.ts ***!
  \********************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_fake_db_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/fake-db/products */ "./src/app/shared/fake-db/products.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopService = /** @class */ (function () {
    function ShopService() {
        this.products = [];
        this.initialFilters = {
            minPrice: 10,
            maxPrice: 40,
            minRating: 1,
            maxRating: 5
        };
        this.cart = [];
        this.cartData = {
            itemCount: 0
        };
    }
    ShopService.prototype.getCart = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.cart);
    };
    ShopService.prototype.addToCart = function (cartItem) {
        var index = -1;
        this.cart.forEach(function (item, i) {
            if (item.product._id === cartItem.product._id) {
                index = i;
            }
        });
        if (index !== -1) {
            this.cart[index].data.quantity += cartItem.data.quantity;
            this.updateCount();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.cart);
        }
        else {
            this.cart.push(cartItem);
            this.updateCount();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.cart);
        }
    };
    ShopService.prototype.updateCount = function () {
        var _this = this;
        this.cartData.itemCount = 0;
        this.cart.forEach(function (item) {
            _this.cartData.itemCount += item.data.quantity;
        });
    };
    ShopService.prototype.removeFromCart = function (cartItem) {
        this.cart = this.cart.filter(function (item) {
            if (item.product._id == cartItem.product._id) {
                return false;
            }
            return true;
        });
        this.updateCount();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.cart);
    };
    ShopService.prototype.getProducts = function () {
        var _this = this;
        var productDB = new _shared_fake_db_products__WEBPACK_IMPORTED_MODULE_2__["ProductDB"]();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(productDB.products)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.products = data;
            return data;
        }));
    };
    ShopService.prototype.getProductDetails = function (productID) {
        var productDB = new _shared_fake_db_products__WEBPACK_IMPORTED_MODULE_2__["ProductDB"]();
        var product = productDB.products.filter(function (p) { return p._id === productID; })[0];
        if (!product) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new Error('Product not found!'));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(product);
    };
    ShopService.prototype.getCategories = function () {
        var categories = ['speaker', 'headphone', 'watch', 'phone'];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(categories);
    };
    ShopService.prototype.getFilteredProduct = function (filterForm) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(this.getProducts(), filterForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.initialFilters), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var products = _a[0], filterData = _a[1];
            return _this.filterProducts(products, filterData);
        }));
    };
    /*
    * If your data set is too big this may raise performance issue.
    * You should implement server side filtering instead.
    */
    ShopService.prototype.filterProducts = function (products, filterData) {
        var filteredProducts = products.filter(function (p) {
            var isMatch;
            var match = {
                search: false,
                caterory: false,
                price: false,
                rating: false
            };
            // Search
            if (!filterData.search
                || p.name.toLowerCase().indexOf(filterData.search.toLowerCase()) > -1
                || p.description.indexOf(filterData.search) > -1
                || p.tags.indexOf(filterData.search) > -1) {
                match.search = true;
            }
            else {
                match.search = false;
            }
            // Category filter
            if (filterData.category === p.category
                || !filterData.category
                || filterData.category === 'all') {
                match.caterory = true;
            }
            else {
                match.caterory = false;
            }
            // Price filter
            if (p.price.sale >= filterData.minPrice
                && p.price.sale <= filterData.maxPrice) {
                match.price = true;
            }
            else {
                match.price = false;
            }
            // Rating filter
            if (p.ratings.rating >= filterData.minRating
                && p.ratings.rating <= filterData.maxRating) {
                match.rating = true;
            }
            else {
                match.rating = false;
            }
            for (var m in match) {
                if (!match[m])
                    return false;
            }
            return true;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(filteredProducts);
    };
    ShopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShopService);
    return ShopService;
}());



/***/ })

}]);
//# sourceMappingURL=views-shop-shop-module.js.map