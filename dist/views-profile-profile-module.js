(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profile-profile-module"],{

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile-blank works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBlankComponent", function() { return ProfileBlankComponent; });
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

var ProfileBlankComponent = /** @class */ (function () {
    function ProfileBlankComponent() {
    }
    ProfileBlankComponent.prototype.ngOnInit = function () {
    };
    ProfileBlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-blank',
            template: __webpack_require__(/*! ./profile-blank.component.html */ "./src/app/views/profile/profile-blank/profile-blank.component.html"),
            styles: [__webpack_require__(/*! ./profile-blank.component.css */ "./src/app/views/profile/profile-blank/profile-blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileBlankComponent);
    return ProfileBlankComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"50\">\r\n    <!-- Time line -->\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Timeline</mat-card-title>\r\n      <mat-card-content>\r\n        <div class=\"timeline\">\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <img src=\"assets/images/face-6.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Jhone Doe</b> updated his status</a>\r\n                <span class=\"text-muted\">1 hour ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus natus fugit porro at sunt mollitia repellendus deserunt, libero similique.</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <img src=\"assets/images/face-2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Henry krick</b> added a new photo</a>\r\n                <span class=\"text-muted\">15 hours ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <img src=\"assets/images/photo-600_220.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <mat-icon class=\"icon-badge mat-bg-primary\">settings</mat-icon>\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>New follower</b></a>\r\n                <span class=\"text-muted\">2 days ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p><a class=\"mat-color-primary\" href=\"\">Kevin Huyn</a> and 34 others followed you.</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <mat-icon class=\"icon-badge mat-bg-warn\">settings</mat-icon>\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Membership upgraded</b></a>\r\n                <span class=\"text-muted\">5 days ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p>Membership has been upgraded to pro</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <!-- End Time line -->\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Uploaded Photos</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n          <mat-grid-list cols=\"3\" rowHeight=\"1:1\" class=\"app-gallery\">\r\n              <!-- Gallery item -->\r\n              <mat-grid-tile *ngFor=\"let photo of photos\">\r\n                <img [src]=\"photo.url\" alt=\"\">\r\n                <!-- item detail, show on hover -->\r\n                <div class=\"gallery-control-wrap\">\r\n                  <div class=\"gallery-control\">\r\n                    <h4 class=\"photo-detail fz-1\" [fxHide.lt-sm]=\"true\">{{photo.name}}</h4>\r\n                    <span fxFlex></span>\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"photoMenu\" class=\"\">\r\n                      <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                    <mat-menu #photoMenu=\"matMenu\">\r\n                      <button mat-menu-item><mat-icon>send</mat-icon>Send as attachment</button>\r\n                      <button mat-menu-item><mat-icon>favorite</mat-icon>Favorite</button>\r\n                      <button mat-menu-item><mat-icon>delete</mat-icon>Delete</button>\r\n                    </mat-menu>\r\n                  </div>\r\n                </div>\r\n              </mat-grid-tile>\r\n            </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"50\">\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Support Tickets</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n        <mat-list class=\"compact-list mb-1\">\r\n          <mat-list-item class=\"\" *ngFor=\"let t of tickets\">\r\n            <img mat-list-avatar class=\"mr-1\" [src]=\"t.img\" alt=\"\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\">\r\n              <h6 class=\"m-0 mr-1\">{{t.name}}</h6>\r\n              <span fxFlex></span>\r\n              <div fxFlex=\"40\">{{t.text | excerpt:20 }}</div>\r\n              <span fxFlex></span>\r\n              <small class=\"text-muted mr-1 ml-1\">{{ t.date | relativeTime}}</small>\r\n            </div>\r\n            <mat-chip mat-sm-chip [color]=\"'warn'\" [selected]=\"t.isOpen\">{{t.isOpen ? 'active' : 'closed'}}</mat-chip>\r\n          </mat-list-item>\r\n        </mat-list>\r\n        <div class=\"text-right\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Assigned Tasks</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n        <div class=\"list-tasktype\">\r\n          <div class=\"tasktype-item\" *ngFor=\"let t of tasks\">\r\n            <mat-checkbox class=\"mr-1\"></mat-checkbox>\r\n            <span>{{t.text}}</span>\r\n            <span fxFlex></span>\r\n            <mat-chip mat-sm-chip color=\"primary\" [selected]=\"t.status ? true : false\">{{t.status ? 'completed' : 'pending'}}</mat-chip>\r\n            <button mat-icon-button mat-sm-button [matMenuTriggerFor]=\"taskMenu\" class=\"tasktype-action ml-1\">\r\n                <mat-icon class=\"text-muted\">more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #taskMenu=\"matMenu\">\r\n              <button mat-menu-item>\r\n                <mat-icon>done</mat-icon>\r\n                <span>Completed</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>edit</mat-icon>\r\n                <span>Edit</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>delete</mat-icon>\r\n                <span>Delete</span>\r\n              </button>\r\n            </mat-menu>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Activity</mat-card-title>\r\n      <mat-card-content class=\"p-0\" fxLayout=\"column\">\r\n        <div class=\"activity-data\">\r\n          <ngx-datatable class=\"material bg-white\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"50\"\r\n          [limit]=\"4\"\r\n          [rows]=\"activityData\">\r\n            <ngx-datatable-column name=\"Month\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.month }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Spent\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.spent }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Opened\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.opened }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Closed\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.closed }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOverviewComponent", function() { return ProfileOverviewComponent; });
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

var ProfileOverviewComponent = /** @class */ (function () {
    function ProfileOverviewComponent() {
        this.activityData = [{
                month: 'January',
                spent: 240,
                opened: 8,
                closed: 30
            }, {
                month: 'February',
                spent: 140,
                opened: 6,
                closed: 20
            }, {
                month: 'March',
                spent: 220,
                opened: 10,
                closed: 20
            }, {
                month: 'April',
                spent: 440,
                opened: 40,
                closed: 60
            }, {
                month: 'May',
                spent: 340,
                opened: 40,
                closed: 60
            }];
        this.tasks = [{
                text: 'Lorem, ipsum dolor sit amet',
                status: 0
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 0
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }];
        this.tickets = [{
                img: 'assets/images/face-1.jpg',
                name: 'Mike Dake',
                text: 'Excerpt pipe is used.',
                date: new Date('07/12/2017'),
                isOpen: true
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Doe',
                text: 'My dashboard is not working.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-3.jpg',
                name: 'Jhonson lee',
                text: 'Fix stock issue',
                date: new Date('04/10/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-4.jpg',
                name: 'Mikie Jyni',
                text: 'Renew my subscription.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Dake',
                text: 'Payment confirmation.',
                date: new Date('04/10/2017'),
                isOpen: false
            }];
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-8.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-9.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }];
    }
    ProfileOverviewComponent.prototype.ngOnInit = function () {
    };
    ProfileOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-overview',
            template: __webpack_require__(/*! ./profile-overview.component.html */ "./src/app/views/profile/profile-overview/profile-overview.component.html"),
            styles: [__webpack_require__(/*! ./profile-overview.component.css */ "./src/app/views/profile/profile-overview/profile-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileOverviewComponent);
    return ProfileOverviewComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-settings/profile-settings.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/profile/profile-settings/profile-settings.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/profile/profile-settings/profile-settings.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/profile-settings/profile-settings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Account Settings\">\r\n      <mat-card-content class=\"mt-1\">\r\n          <form>\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n              matInput\r\n              name=\"name\"\r\n              placeholder=\"Name\"\r\n              value=\"\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n                <input\r\n                matInput\r\n                name=\"title\"\r\n                placeholder=\"Title\"\r\n                value=\"\">\r\n              </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n              matInput\r\n              name=\"email\"\r\n              placeholder=\"Email\"\r\n              value=\"\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n              matInput\r\n              name=\"phone\"\r\n              placeholder=\"Phone\"\r\n              value=\"\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n              matInput\r\n              name=\"address\"\r\n              placeholder=\"Adresss\"\r\n              value=\"\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n              matInput\r\n              name=\"website\"\r\n              placeholder=\"Website\"\r\n              value=\"\">\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"primary\">Save</button>\r\n          </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n    <mat-tab label=\"Profile Picture\">\r\n      <mat-card-content>\r\n        <div class=\"mb-1 mt-1\">\r\n          <p>Upload a profile picture</p>\r\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n        </div>\r\n\r\n        <div class=\"mb-1\">\r\n          <div ng2FileDrop\r\n          [ngClass]=\"{'dz-file-over': hasBaseDropZoneOver}\"\r\n          [uploader]=\"uploader\"\r\n          (fileOver)=\"fileOverBase($event)\"\r\n          class=\"fileupload-drop-zone\">\r\n          Drop png/jpeg file here\r\n          </div>\r\n        </div>\r\n        <table class=\"default-table mat-box-shadow\" style=\"width: 100%\">\r\n          <thead>\r\n            <tr>\r\n                <th width=\"30%\">Name</th>\r\n                <th>Size</th>\r\n                <th>Progress</th>\r\n                <th>Status</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"uploader.queue.length; else tableNoData\">\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n                <td>{{ item?.file?.name }}</td>\r\n                <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                <td>\r\n                    <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        <mat-progress-bar\r\n                          class=\"\"\r\n                          color=\"primary\"\r\n                          mode=\"determinate\"\r\n                          [value]=\"item.progress\">\r\n                        </mat-progress-bar>\r\n                    </div>\r\n                </td>\r\n                <td class=\"\">\r\n                    <mat-icon *ngIf=\"item.isSuccess\">check</mat-icon>\r\n                    <mat-icon *ngIf=\"item.isCancel\" color=\"accent\">cancel</mat-icon>\r\n                    <mat-icon *ngIf=\"item.isError\" color=\"warn\">error</mat-icon>\r\n                </td>\r\n                <td nowrap>\r\n                    <button \r\n                    mat-raised-button\r\n                    class=\"mat-primary\"\r\n                    (click)=\"item.upload()\"\r\n                    [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">Upload</button>\r\n                    <button \r\n                    mat-raised-button\r\n                    class=\"mat-accent\"\r\n                    (click)=\"item.cancel()\"\r\n                    [disabled]=\"!item.isUploading\">Cancel</button>\r\n\r\n                    <button \r\n                    mat-raised-button\r\n                    class=\"mat-warn\"\r\n                    (click)=\"item.remove()\">Remove</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n            <ng-template #tableNoData>\r\n              <p [ngStyle]=\"{padding: '0 1.2rem'}\">Queue is empty</p>\r\n            </ng-template>\r\n        </table>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n    <mat-tab label=\"Privacy Settings\">\r\n      <mat-card-content>\r\n        <div class=\"mb-1 mt-1\">\r\n          <mat-checkbox> Get weekly news in your email.</mat-checkbox>\r\n        </div>\r\n        <div class=\"mb-1\">\r\n          <mat-checkbox> Get notification when someone follows you.</mat-checkbox>\r\n        </div>\r\n        <div class=\"mb-1\">\r\n          <mat-checkbox> Get email when someone follows you.</mat-checkbox>\r\n        </div>\r\n        <div class=\"mb-1\">\r\n            <p>Choose your admin panel color schemes.</p>\r\n            <mat-radio-group fxLayout=\"column\" fxLayoutGap=\"4px\">\r\n              <mat-radio-button value=\"indigo\">Indigo</mat-radio-button>\r\n              <mat-radio-button value=\"blue\">Blue</mat-radio-button>\r\n              <mat-radio-button value=\"pink\">Pink</mat-radio-button>\r\n              <mat-radio-button value=\"purple\">Purple</mat-radio-button>\r\n            </mat-radio-group>\r\n        </div>\r\n        <button mat-raised-button color=\"primary\">Save</button>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/profile/profile-settings/profile-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-settings/profile-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
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


var ProfileSettingsComponent = /** @class */ (function () {
    function ProfileSettingsComponent() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: 'upload_url' });
        this.hasBaseDropZoneOver = false;
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
    };
    ProfileSettingsComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ProfileSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__(/*! ./profile-settings.component.html */ "./src/app/views/profile/profile-settings/profile-settings.component.html"),
            styles: [__webpack_require__(/*! ./profile-settings.component.css */ "./src/app/views/profile/profile-settings/profile-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/sq-face-220.jpg\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">Jhone <b>Doe</b></div>\r\n        <div class=\"subtitle mb-05\">Big Data Expert</div>\r\n        <div class=\"text-muted\">Hi I'm Jhone, sit amet consectetur adipisicing elit. Aperiam repellendus nam perspiciatis.</div>\r\n      </div>\r\n      <div class=\"profile-actions text-center mb-1\">\r\n        <button mat-raised-button color=\"primary\">Message</button>\r\n        <button mat-raised-button color=\"accent\">Follow</button>\r\n      </div>\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"/profile/overview\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>home</mat-icon>\r\n            Overview\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/profile/settings\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            Settings\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/profile/blank\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>content_paste</mat-icon>\r\n            Blank\r\n          </mat-list-item>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <!-- Chart grid -->\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Summary</mat-card-title>\r\n      <mat-card-content>\r\n          <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"doughnut-grid text-center\">\r\n              <div fxFlex=\"50\" class=\"doughnut-grid-item mat-bg-primary\">\r\n                  <canvas \r\n                  baseChart\r\n                  class=\"chart\"\r\n                  [data]=\"doughnutChartData1\"\r\n                  [options]=\"doughnutOptions\"\r\n                  [colors]=\"doughnutChartColors\"\r\n                  [chartType]=\"doughnutChartType\"></canvas>\r\n                  <small>Space: {{data1}}/{{total1}} GB</small>\r\n            </div>\r\n            <div fxFlex=\"50\" class=\"doughnut-grid-item light-gray\">\r\n                <canvas  \r\n                baseChart \r\n                class=\"chart\"\r\n                [data]=\"doughnutChartData2\"\r\n                [options]=\"doughnutOptions\"\r\n                [colors]=\"doughnutChartColors\"\r\n                [chartType]=\"doughnutChartType\"></canvas>\r\n                <small>Sales: 450</small>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"doughnut-grid-item light-gray\">\r\n              <canvas  \r\n              baseChart \r\n              class=\"chart\"\r\n              [data]=\"doughnutChartData2\"\r\n              [options]=\"doughnutOptions\"\r\n              [colors]=\"doughnutChartColors\"\r\n              [chartType]=\"doughnutChartType\"></canvas>\r\n              <small>Spent: $500</small>\r\n        </div>\r\n        <div fxFlex=\"50\" class=\"doughnut-grid-item mat-bg-primary\">\r\n            <canvas \r\n            baseChart \r\n            class=\"chart\"\r\n            [data]=\"doughnutChartData2\"\r\n            [options]=\"doughnutOptions\"\r\n            [colors]=\"doughnutChartColors\"\r\n            [chartType]=\"doughnutChartType\"></canvas>\r\n            <small>Follower: 2000</small>\r\n      </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <!-- Contact Information -->\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Contact Information</mat-card-title>\r\n      <mat-card-content class=\"pt-0\">\r\n        <mat-list>\r\n          <mat-list-item><mat-icon class=\"mr-1\">public</mat-icon> www.mhrafi.com</mat-list-item>\r\n          <mat-list-item><mat-icon class=\"mr-1\">email</mat-icon> example@gmail.com</mat-list-item>\r\n          <mat-list-item><mat-icon class=\"mr-1\">phone</mat-icon> 8801822778800</mat-list-item>\r\n          <mat-list-item><mat-icon class=\"mr-1\">add_location</mat-icon> SUST, Sylhet, BD</mat-list-item>\r\n        </mat-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n<!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router) {
        this.router = router;
        this.activeView = 'overview';
        // Doughnut
        this.doughnutChartColors = [{
                backgroundColor: ['#fff', 'rgba(0, 0, 0, .24)',]
            }];
        this.total1 = 500;
        this.data1 = 200;
        this.doughnutChartData1 = [this.data1, (this.total1 - this.data1)];
        this.total2 = 1000;
        this.data2 = 400;
        this.doughnutChartData2 = [this.data2, (this.total2 - this.data2)];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = {
            cutoutPercentage: 85,
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
                position: 'bottom'
            },
            elements: {
                arc: {
                    borderWidth: 0,
                }
            },
            tooltips: {
                enabled: false
            }
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.activeView = this.router.snapshot.params['view'];
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "./src/app/views/profile/profile-overview/profile-overview.component.ts");
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ "./src/app/views/profile/profile-settings/profile-settings.component.ts");
/* harmony import */ var _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile-blank/profile-blank.component */ "./src/app/views/profile/profile-blank/profile-blank.component.ts");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile.routing */ "./src/app/views/profile/profile.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_profile_routing__WEBPACK_IMPORTED_MODULE_14__["ProfileRoutes"])
            ],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_11__["ProfileOverviewComponent"], _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_12__["ProfileSettingsComponent"], _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_13__["ProfileBlankComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/views/profile/profile.routing.ts ***!
  \**************************************************/
/*! exports provided: ProfileRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutes", function() { return ProfileRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "./src/app/views/profile/profile-overview/profile-overview.component.ts");
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ "./src/app/views/profile/profile-settings/profile-settings.component.ts");
/* harmony import */ var _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-blank/profile-blank.component */ "./src/app/views/profile/profile-blank/profile-blank.component.ts");




var ProfileRoutes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
        children: [{
                path: 'overview',
                component: _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_1__["ProfileOverviewComponent"],
                data: { title: 'Overview', breadcrumb: 'OVERVIEW' }
            },
            {
                path: 'settings',
                component: _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSettingsComponent"],
                data: { title: 'Settings', breadcrumb: 'SETTINGS' }
            },
            {
                path: 'blank',
                component: _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_3__["ProfileBlankComponent"],
                data: { title: 'Blank', breadcrumb: 'BLANK' }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-profile-profile-module.js.map