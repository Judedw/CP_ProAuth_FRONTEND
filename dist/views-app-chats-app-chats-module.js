(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-app-chats-app-chats-module"],{

/***/ "./src/app/views/app-chats/app-chats.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/app-chats/app-chats.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-sidenav-container class=\"chat-container\">\r\n    <!-- Left sidebar -->\r\n    <mat-sidenav class=\"chat-sidenav\" #chatSidebar [opened]=\"isSidenavOpen\" mode=\"side\">\r\n      <!-- Left side topbar -->\r\n      <mat-toolbar color=\"primary\" class=\"chat-sidebar-toolbar\">\r\n        <a href=\"\" class=\"toolbar-avatar online\">\r\n          <img src=\"assets/images/face-3.jpg\" alt=\"\">\r\n          <span class=\"status-dot\"></span>\r\n        </a>\r\n      </mat-toolbar>\r\n      <!-- Left side contact list -->\r\n      <mat-nav-list class=\"inbox-nav-list\" role=\"list\">\r\n        <mat-list-item\r\n        *ngFor=\"let user of connectedUsers\"\r\n        (click)=\"changeActiveUser(user)\">\r\n          <a \r\n          mat-list-avatar \r\n          [ngClass]=\"{online: user.isOnline}\"\r\n          class=\"toolbar-avatar\">\r\n            <img [src]=\"user.photo\" alt=\"\">\r\n            <span class=\"status-dot\"></span>\r\n          </a>\r\n          <h6 matLine>{{user.name}}</h6>\r\n          <p matLine class=\"text-muted\">{{user.lastMsg}}</p>\r\n        </mat-list-item>\r\n        \r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <!-- Right side -->\r\n    <div class=\"chats-wrap\">\r\n      <!-- Right side topbar -->\r\n      <mat-toolbar color=\"primary\" class=\"chat-toolbar mb-1\">\r\n        <!-- sidebar toggle button -->\r\n        <button \r\n        mat-icon-button\r\n        [style.alignSelf]=\"'center'\"\r\n        class=\"mr-1\" \r\n        (click)=\"chatSidebar.toggle()\"><mat-icon>short_text</mat-icon>\r\n        </button>\r\n\r\n        <!-- Selected active user -->\r\n        <div \r\n        class=\"active-chat-user\" \r\n        fxLayout=\"row\" \r\n        fxLayoutAlign=\"start center\">\r\n          <a \r\n          [ngClass]=\"{online: activeChatUser.isOnline}\" \r\n          class=\"toolbar-avatar mr-1\">\r\n            <img [src]=\"activeChatUser.photo\" alt=\"\">\r\n            <span class=\"status-dot\"></span>\r\n          </a>\r\n          <div fxLayout=\"column\">\r\n            <h6 class=\"m-0 font-normal fz-1\">{{activeChatUser.name}}</h6>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Right side top menu -->\r\n        <span fxFlex></span>\r\n        <button \r\n        [style.alignSelf]=\"'center'\" \r\n        mat-icon-button \r\n        [matMenuTriggerFor]=\"toolbarDDMenu\" \r\n        class=\"topbar-button-right hidden-on-open\">\r\n            <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #toolbarDDMenu=\"matMenu\">\r\n            <button mat-menu-item><mat-icon>account_circle</mat-icon>Contact info</button>\r\n            <button mat-menu-item><mat-icon>volume_mute</mat-icon>Mute</button>\r\n            <button mat-menu-item><mat-icon>delete</mat-icon>Clear chat</button>\r\n        </mat-menu>\r\n      </mat-toolbar>\r\n\r\n      <!-- Main chat body -->\r\n      <div class=\"conversations-hold\">\r\n        <!-- single chat item -->\r\n        <div class=\"single-conversation sender\" fxLayout=\"row\">\r\n          <a href=\"\" class=\"toolbar-avatar online\">\r\n            <img src=\"assets/images/face-2.jpg\" alt=\"\">\r\n            <span class=\"status-dot\"></span>\r\n          </a>\r\n          <div>\r\n            <h5 class=\"chat-username text-muted\">Gevorg Spartak</h5>\r\n            <div class=\"conversation-msg\">\r\n              Hello, How are you\r\n            </div>\r\n            <p class=\"chat-date text-muted\">10 min ago</p>\r\n          </div>\r\n        </div>\r\n        <!-- single chat item -->\r\n        <div class=\"single-conversation me\" fxLayout=\"row\">\r\n          <a href=\"\" class=\"toolbar-avatar online\">\r\n            <img src=\"assets/images/face-3.jpg\" alt=\"\">\r\n            <span class=\"status-dot\"></span>\r\n          </a>\r\n          <div>\r\n            <h5 class=\"chat-username text-muted\">Dave Wolf</h5>\r\n            <div class=\"conversation-msg\">\r\n              I'm good, Thanks\r\n            </div>\r\n            <p class=\"chat-date text-muted\">10 min ago</p>\r\n          </div>\r\n        </div>\r\n        <!-- single chat item -->\r\n        <div class=\"single-conversation sender\" fxLayout=\"row\">\r\n          <a href=\"\" class=\"toolbar-avatar online\">\r\n            <img src=\"assets/images/face-2.jpg\" alt=\"\">\r\n            <span class=\"status-dot\"></span>\r\n          </a>\r\n          <div>\r\n            <h5 class=\"chat-username text-muted\">Gevorg Spartak</h5>\r\n            <div class=\"conversation-msg\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, obcaecati!\r\n            </div>\r\n            <p class=\"chat-date text-muted\">10 min ago</p>\r\n          </div>\r\n        </div>\r\n        <!-- single chat item -->\r\n        <div class=\"single-conversation me\" fxLayout=\"row\">\r\n          <a href=\"\" class=\"toolbar-avatar online\">\r\n            <img src=\"assets/images/face-3.jpg\" alt=\"\">\r\n            <span class=\"status-dot\"></span>\r\n          </a>\r\n          <div>\r\n            <h5 class=\"chat-username text-muted\">Dave Wolf</h5>\r\n            <div class=\"conversation-msg\">\r\n              Consectetur adipisicing elit. Delectus, obcaecati!\r\n            </div>\r\n            <p class=\"chat-date text-muted\">10 min ago</p>\r\n          </div>\r\n        </div>\r\n        <!-- single chat item -->\r\n        <div class=\"single-conversation sender\" fxLayout=\"row\">\r\n          <a href=\"\" class=\"toolbar-avatar online\">\r\n            <img src=\"assets/images/face-2.jpg\" alt=\"\">\r\n            <span class=\"status-dot\"></span>\r\n          </a>\r\n          <div>\r\n            <h5 class=\"chat-username text-muted\">Gevorg Spartak</h5>\r\n            <div class=\"conversation-msg\">\r\n              Consectetur adipisicing elit. Delectus, obcaecati!\r\n            </div>\r\n            <p class=\"chat-date text-muted\">10 min ago</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n\r\n      <!-- Input box and send button -->\r\n      <div class=\"chat-input-actions\" fxLayout=\"row\">\r\n        <mat-form-field class=\"full-width mr-1\">\r\n          <input\r\n          matInput\r\n          placeholder=\"Type your message\"\r\n          value=\"\">\r\n        </mat-form-field>\r\n        <button mat-fab color=\"primary\"><mat-icon>send</mat-icon></button>\r\n      </div>\r\n\r\n    </div>\r\n  </mat-sidenav-container>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/app-chats/app-chats.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.component.ts ***!
  \********************************************************/
/*! exports provided: AppChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppChatsComponent", function() { return AppChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppChatsComponent = /** @class */ (function () {
    function AppChatsComponent(media) {
        this.media = media;
        this.isSidenavOpen = true;
        this.activeChatUser = {
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            isOnline: true,
            lastMsg: 'Hello!'
        };
        this.connectedUsers = [{
                name: 'Gevorg Spartak',
                photo: 'assets/images/face-2.jpg',
                isOnline: true,
                lastMsg: 'What\'s going!'
            }, {
                name: 'Petros Toros',
                photo: 'assets/images/face-4.jpg',
                isOnline: true,
                lastMsg: 'Send me the stories.'
            }, {
                name: 'Henrik Gevorg',
                photo: 'assets/images/face-5.jpg',
                isOnline: false,
                lastMsg: 'Great work!!'
            }, {
                name: 'Gevorg Spartak',
                photo: 'assets/images/face-6.jpg',
                isOnline: false,
                lastMsg: 'Bye'
            }, {
                name: 'Petros Toros',
                photo: 'assets/images/face-7.jpg',
                isOnline: true,
                lastMsg: 'We\'ll talk later'
            }];
    }
    AppChatsComponent.prototype.ngOnInit = function () {
        this.chatSideBarInit();
    };
    AppChatsComponent.prototype.ngOnDestroy = function () {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    };
    AppChatsComponent.prototype.changeActiveUser = function (user) {
        this.activeChatUser = user;
    };
    AppChatsComponent.prototype.updateSidenav = function () {
        var self = this;
        setTimeout(function () {
            self.isSidenavOpen = !self.isMobile;
            self.sideNave.mode = self.isMobile ? 'over' : 'side';
        });
    };
    AppChatsComponent.prototype.chatSideBarInit = function () {
        var _this = this;
        this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
        this.updateSidenav();
        this.screenSizeWatcher = this.media.subscribe(function (change) {
            _this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
            _this.updateSidenav();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppChatsComponent.prototype, "sideNave", void 0);
    AppChatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! ./app-chats.component.html */ "./src/app/views/app-chats/app-chats.component.html"),
            styles: [__webpack_require__(/*! ./app-chats.component.css */ "./src/app/views/app-chats/app-chats.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], AppChatsComponent);
    return AppChatsComponent;
}());



/***/ }),

/***/ "./src/app/views/app-chats/app-chats.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.module.ts ***!
  \*****************************************************/
/*! exports provided: AppChatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppChatsModule", function() { return AppChatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-chats.component */ "./src/app/views/app-chats/app-chats.component.ts");
/* harmony import */ var _app_chats_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-chats.routing */ "./src/app/views/app-chats/app-chats.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppChatsModule = /** @class */ (function () {
    function AppChatsModule() {
    }
    AppChatsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_app_chats_routing__WEBPACK_IMPORTED_MODULE_6__["ChatsRoutes"])
            ],
            declarations: [_app_chats_component__WEBPACK_IMPORTED_MODULE_5__["AppChatsComponent"]]
        })
    ], AppChatsModule);
    return AppChatsModule;
}());



/***/ }),

/***/ "./src/app/views/app-chats/app-chats.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/app-chats/app-chats.routing.ts ***!
  \******************************************************/
/*! exports provided: ChatsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsRoutes", function() { return ChatsRoutes; });
/* harmony import */ var _app_chats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-chats.component */ "./src/app/views/app-chats/app-chats.component.ts");

var ChatsRoutes = [
    { path: '', component: _app_chats_component__WEBPACK_IMPORTED_MODULE_0__["AppChatsComponent"], data: { title: 'Chat' } }
];


/***/ })

}]);
//# sourceMappingURL=views-app-chats-app-chats-module.js.map