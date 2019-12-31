webpackJsonp([25],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_group_group__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, user, controller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.controller = controller;
        this.dataIsLoad = this.navParams.get('dataLoad');
    }
    HomePage.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signup_group_group__["a" /* GroupPage */]);
    };
    HomePage.prototype.checkUser = function () {
        console.log(this.user.id, this.user.email, this.user.token);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/home/home.html"*/'<!--\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n-->\n\n<ion-content padding class="content">\n    <ion-header padding no-border class="header">\n        <img src="../../assets/imgs/logo_fub.png">\n    </ion-header>\n      \n  <h3></h3>\n    <ion-footer no-shadow no-border padding>\n        <button ion-button block outline color="light" (click)=\'checkUser()\'>CHECK USER</button>\n        <button ion-button block outline color="light" (click)=\'goLogin()\'>INICIAR SESION</button>\n        <button ion-button block (click)=\'goSignup()\'>REGISTRARSE</button>\n    </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__["a" /* ControllerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_home_driver_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_vehicle_vehicle__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_driver_driver__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rider_home_rider_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PhoneValidatePage = /** @class */ (function () {
    function PhoneValidatePage(navCtrl, navParams, request, user, controller, vehicle, driver) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = request;
        this.user = user;
        this.controller = controller;
        this.vehicle = vehicle;
        this.driver = driver;
    }
    PhoneValidatePage.prototype.sendToken = function () {
        var _this = this;
        this.controller.presentLoading('Verificando el token');
        var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.user.token };
        this.request.requestsPost('send_token', headers, { 'user_id': this.user.id, 'token': this.sms_code }).then(function (result) {
            if (_this.request.isValid(result, 200)) {
                console.log('Is valid');
                if (_this.user.group === 'driver') {
                    _this.driver.getMyVehicles();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__driver_home_driver_home__["a" /* DriverHomePage */]);
                }
                else if (_this.user.group === 'rider') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__rider_home_rider_home__["a" /* RiderHomePage */]);
                }
                _this.controller.dismissLoading();
            }
            else {
                console.log("It's not valid");
                _this.controller.presentAlert('ERROR', 'Error de comunicación con el servidor');
                _this.controller.dismissLoading();
            }
        });
    };
    PhoneValidatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phone-validate',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/phone-validate/phone-validate.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <ion-title>FUB</ion-title>\n    </ion-navbar>\n  </ion-header>  \n<ion-content padding class="backgroud-purple">\n  <p class="text-title">Introduce el codigo de seguridad enviado a tu celular.</p>\n  <form (submit)="sendToken()">\n      <ion-item class="form">\n        <ion-input [(ngModel)]="sms_code" name="sms_code" type="number" maxlength="4"></ion-input>\n      </ion-item>\n      <ion-footer no-shadow no-border padding>\n        <button ion-fab type="Enviar" color="secondary" class="rigth-button" *ngIf="sms_code"><ion-icon name="checkmark"></ion-icon></button>\n        <ng-template #button_disable>\n          <button ion-fab type="Enviar" color="secondary" class="rigth-button" [disabled]="!isenabled"><ion-icon name="checkmark"></ion-icon></button>\n        </ng-template>        \n      </ion-footer>\n  </form>\n</ion-content>\n    '/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/phone-validate/phone-validate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_controller_controller__["a" /* ControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_vehicle_vehicle__["a" /* VehicleProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_driver_driver__["a" /* DriverProvider */]])
    ], PhoneValidatePage);
    return PhoneValidatePage;
}());

//# sourceMappingURL=phone-validate.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__driver_home_driver_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverPricePage = /** @class */ (function () {
    function DriverPricePage(navCtrl, navParams, request, trip, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = request;
        this.trip = trip;
        this.user = user;
    }
    DriverPricePage.prototype.ionViewDidLoad = function () {
        console.log(this.trip.rider_channel);
    };
    DriverPricePage.prototype.sendPrice = function () {
        var headers = this.request.getHeaders();
        var data = { 'price': this.price,
            'trip': this.trip.id,
            'rider_channel': this.trip.rider_channel,
            'driver': this.user.id
        };
        this.trip.send('send_price', data);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__driver_home_driver_home__["a" /* DriverHomePage */]);
    };
    DriverPricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-price',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-price/driver-price.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>driver price</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content class="backgroud-purple">\n  <h2>¿Cuanto cuesta la hora de tu servicio?</h2>\n  <form (submit)="sendPrice()">\n    <ion-item class="form">\n      <ion-input [(ngModel)]="price" name="price" type="number"></ion-input>\n    </ion-item>\n    <ion-footer no-shadow no-border padding>\n      <button ion-fab type="Enviar" color="secondary" class="rigth-button" *ngIf="price; else button_disable"><ion-icon name="checkmark"></ion-icon></button>\n      <ng-template #button_disable>\n        <button ion-fab type="Enviar" color="secondary" class="rigth-button" [disabled]="!isenabled"><ion-icon name="checkmark"></ion-icon></button>\n      </ng-template>        \n    </ion-footer>      \n  </form>\n</ion-content>\n  '/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-price/driver-price.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__["a" /* TripProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */]])
    ], DriverPricePage);
    return DriverPricePage;
}());

//# sourceMappingURL=driver-price.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rider_vehicle_rider_vehicle__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_vehicle_vehicle__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rider_trips_rider_trips__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RiderHomePage = /** @class */ (function () {
    function RiderHomePage(navCtrl, navParams, user, vehicle) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.vehicle = vehicle;
    }
    RiderHomePage.prototype.createTrip = function () {
        this.vehicle.getListVehicles();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rider_vehicle_rider_vehicle__["a" /* RiderVehiclePage */]);
    };
    RiderHomePage.prototype.myTrips = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__rider_trips_rider_trips__["a" /* RiderTripsPage */]);
    };
    RiderHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-home',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-home/rider-home.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Menú cliente</ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n<ion-content class="backgroud-purple">\n<p>Hola {{ user.first_name }} {{ user.last_name }}</p>\n\n\n<ion-footer no-shadow no-border padding>\n  <button ion-button block color="secondary" (click)="createTrip()">Pedir un servicio</button>\n  <button ion-button block color="secondary" (click)="myTrips()">Mis viajes</button>\n</ion-footer> \n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-home/rider-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_vehicle_vehicle__["a" /* VehicleProvider */]])
    ], RiderHomePage);
    return RiderHomePage;
}());

//# sourceMappingURL=rider-home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_password__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NamePage = /** @class */ (function () {
    function NamePage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
    }
    NamePage.prototype.goMobile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__password_password__["a" /* PasswordPage */]);
    };
    NamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-name',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/name/name.html"*/'<ion-header no-border>\n    <ion-navbar>\n      <ion-title>Registrar usuario</ion-title>\n    </ion-navbar>\n  </ion-header>\n    \n  <ion-content padding class="backgroud-purple">\n    <p class="text-title">¿Como te llamas?</p>\n    <form (submit)="goMobile()">\n      <ion-item class="form">\n        <ion-label stacked color="dark">Nombre</ion-label>\n        <ion-input [(ngModel)]="user.first_name" name="first_name" type="text"></ion-input>\n      </ion-item>\n      <ion-item class="form">\n        <ion-label stacked color="dark">Apellido</ion-label>\n        <ion-input [(ngModel)]="user.last_name" name="last_name" type="text"></ion-input>\n      </ion-item>\n      <ion-footer no-shadow no-border padding>\n        <button ion-fab type="Enviar" class="rigth-button" *ngIf="user.first_name && user.last_name; else button_disable"><ion-icon name="arrow-round-forward"></ion-icon></button>\n        <ng-template #button_disable>\n          <button ion-fab type="Enviar" class="rigth-button" [disabled]="!isenabled"><ion-icon name="arrow-round-forward"></ion-icon></button>\n        </ng-template>        \n      </ion-footer>      \n    </form>\n  </ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/name/name.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], NamePage);
    return NamePage;
}());

//# sourceMappingURL=name.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_request__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(http, requestProvider) {
        this.http = http;
        this.requestProvider = requestProvider;
        this.getUserInfo();
    }
    UserProvider.prototype.getUserInfo = function () {
        var _this = this;
        if (this.isAuthenticated()) {
            console.log('Running getUserInfo');
            var token_1 = window.localStorage.getItem('token');
            var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + token_1 };
            this.requestProvider.resquestGet('user_info', headers)
                .subscribe(function (data) {
                _this.id = data['id'];
                _this.email = data['email'];
                _this.first_name = data['first_name'];
                _this.last_name = data['last_name'];
                _this.group = data['group'];
                _this.photo = data['photo'];
                _this.phone_number = data['phone_number'];
                _this.verifiedMobile = data['verified_mobile'];
                _this.token = token_1;
            }, function (error) {
                console.log(error);
            });
        }
        else
            (console.log('No set token'));
    };
    UserProvider.prototype.isAuthenticated = function () {
        if (window.localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    };
    UserProvider.prototype.logout = function () {
        delete this.username;
        delete this.id;
        delete this.email;
        delete this.first_name;
        delete this.last_name;
        delete this.phone_number;
        delete this.group;
        delete this.token;
        delete this.photo;
        delete this.password1;
        delete this.password2;
        delete this.verifiedMobile;
        delete this.userArray;
        localStorage.clear();
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__request_request__["a" /* RequestProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverAddVehiclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vehicle_vehicle__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__load_load__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DriverAddVehiclePage = /** @class */ (function () {
    function DriverAddVehiclePage(navCtrl, navParams, vehicle, request, user, controller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vehicle = vehicle;
        this.request = request;
        this.user = user;
        this.controller = controller;
    }
    DriverAddVehiclePage.prototype.ionViewDidLoad = function () {
        console.log(this.vehicle.vehicleList);
    };
    DriverAddVehiclePage.prototype.addVehicle = function () {
        var _this = this;
        var headers = this.request.getHeaders();
        var data = {
            'driver': this.user.id,
            'license_plate': this.license_plate,
            'model': this.model,
            'make': this.make,
            'year': this.year,
            'vehicle_type': this.vehicle_type
        };
        this.request.requestsPost('add_vehicle', headers, data).then(function (result) {
            console.log(result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__load_load__["a" /* LoadPage */]);
        });
    };
    DriverAddVehiclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-add-vehicle',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-add-vehicle/driver-add-vehicle.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>FUB</ion-title>\n  </ion-navbar>\n</ion-header>  \n<!-- ---- -->\n<ion-content class="backgroud-purple">\n  <form (submit)="addVehicle()">\n    <!-- --------------------------------------------------------------------------- -->\n    <ion-item class="form">\n      <ion-label stacked color="dark">Placa del vehiculo</ion-label>\n      <ion-input [(ngModel)]="license_plate" name="license_plate" type="text"></ion-input>\n    </ion-item>\n    <!-- --------------------------------------------------------------------------- -->\n    <ion-item class="form">\n      <ion-label stacked color="dark">Modelo</ion-label>\n      <ion-input [(ngModel)]="model" name="model" type="text"></ion-input>\n    </ion-item>\n    <!-- --------------------------------------------------------------------------- -->\n    <ion-item class="form">\n      <ion-label stacked color="dark">Marca</ion-label>\n      <ion-input [(ngModel)]="make" name="make" type="text"></ion-input>\n    </ion-item>\n    <!-- --------------------------------------------------------------------------- -->\n    <ion-item class="form">\n      <ion-label stacked color="dark">Año</ion-label>\n      <ion-input [(ngModel)]="year" name="year" type="number"></ion-input>\n    </ion-item>\n    <!-- --------------------------------------------------------------------------- -->\n    <ion-item class=\'form\'>\n      <ion-label stacked color="dark">Tipo de vehiculo</ion-label>\n        <ion-select [(ngModel)]="vehicle_type" name="vehicle_type" cancelText="Cancelar">\n          <ion-option *ngFor="let vehicle of vehicle.vehicleList" value="{{ vehicle.id }}">{{ vehicle.name_pretty }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-footer no-shadow no-border padding>\n        <button ion-fab type="submit" class="rigth-button" *ngIf="vehicle_type; else button_disable"><ion-icon name="arrow-round-forward"></ion-icon></button>\n        <ng-template #button_disable>\n          <button ion-fab class="rigth-button" [disabled]="!isenabled"><ion-icon name="arrow-round-forward"></ion-icon></button>\n        </ng-template>   \n        <!--  -->     \n      </ion-footer>   \n  </form>\n</ion-content>\n  '/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-add-vehicle/driver-add-vehicle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_vehicle_vehicle__["a" /* VehicleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__["a" /* ControllerProvider */]])
    ], DriverAddVehiclePage);
    return DriverAddVehiclePage;
}());

//# sourceMappingURL=driver-add-vehicle.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phone_validate_phone_validate__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__information_information__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhoneNumberPage = /** @class */ (function () {
    function PhoneNumberPage(navCtrl, navParams, user, request, controller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.request = request;
        this.controller = controller;
    }
    PhoneNumberPage.prototype.goInformation = function () {
        var _this = this;
        var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.user.token };
        this.request.requestsPatch('user_info', headers, { 'user_id': this.user.id, 'phone_number': '+569' + this.user.phone_number })
            .then(function (data) {
            if (_this.request.isValid(data, 201)) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__information_information__["a" /* InformationPage */], { information_title: 'Necesitamos validar tu identidad, para eso enviaremos un codigo de seguridad via sms a tu telefóno celular', button_text: 'Recibir token' });
            }
            else {
                console.log(data);
                _this.controller.presentAlert('Número invalido', 'No se pudo procesar tu número telefónico, verificalo y vuelve a intentar.');
            }
        });
    };
    PhoneNumberPage.prototype.goPhoneValidate = function () {
        console.log('ejecuto validate phone');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__phone_validate_phone_validate__["a" /* PhoneValidatePage */]);
    };
    PhoneNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phone-number',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/phone-number/phone-number.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <ion-title>FUB</ion-title>\n    </ion-navbar>\n  </ion-header>  \n<ion-content padding class="backgroud-purple">\n  <p class="text-title">Necesitamos verificar tu número de telefono</p>\n  <form (submit)="goInformation()">\n      <ion-label stacked color="dark" class="text-notice">Introduce tu número de telefono<br>(debe ser de una compañia telefónica chilena).</ion-label>\n      <ion-item class="form">\n        <ion-label inline color="dark">(+569)</ion-label>\n        <ion-input [(ngModel)]="user.phone_number" name="phone_number" type="tel" placeholder="12345678" maxlength="8"></ion-input>\n      </ion-item>\n      <ion-footer no-shadow no-border padding>\n        <button ion-fab type="Enviar" color="secondary" class="rigth-button" *ngIf="user.phone_number; else button_disable"><ion-icon name="checkmark"></ion-icon></button>\n        <ng-template #button_disable>\n          <button ion-fab type="Enviar" color="secondary" class="rigth-button" [disabled]="!isenabled"><ion-icon name="checkmark"></ion-icon></button>\n        </ng-template>        \n      </ion-footer>\n  </form>\n</ion-content>\n    '/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/phone-number/phone-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__["a" /* ControllerProvider */]])
    ], PhoneNumberPage);
    return PhoneNumberPage;
}());

//# sourceMappingURL=phone-number.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverTripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_driver_driver__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_home_driver_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_trip_details_driver_trip_details__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverTripsPage = /** @class */ (function () {
    function DriverTripsPage(navCtrl, navParams, driver, trip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.driver = driver;
        this.trip = trip;
        this.tripFilter = "REQUESTED";
    }
    DriverTripsPage.prototype.updateTrips = function () {
        this.driver.getDriverTrips();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__driver_home_driver_home__["a" /* DriverHomePage */]);
    };
    DriverTripsPage.prototype.goTripDetail = function (trip) {
        this.trip.tripDetail = trip;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__driver_trip_details_driver_trip_details__["a" /* DriverTripDetailsPage */]);
    };
    DriverTripsPage.prototype.tripFilterFun = function () {
        console.log(this.tripFilter);
    };
    DriverTripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-trips',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-trips/driver-trips.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>driver-trips</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroud-purple">\n  <p>Filtrar por:</p>\n  <ion-select [(ngModel)]="tripFilter" name="group" cancelText="Cancelar" (ionChange)="tripFilterFun()" multiple="false">\n    <ion-option value="REQUESTED">Pendientes</ion-option>\n    <ion-option value="PROGRAMED">Programados</ion-option>\n    <ion-option value="IN_PROGRESS">En curso</ion-option>\n    <ion-option value="COMPLETED">Completados</ion-option>\n  </ion-select>\n\n  <!-- IN PROGRESS -->\n  <ion-item *ngIf="tripFilter===\'IN_PROGRESS\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myProgramedTrips.length!==0; else no_trips">\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myProgramedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes en curso</p>\n    </ng-template>\n  </ion-item>\n\n  <!-- REQUESTED -->\n  <ion-item *ngIf="tripFilter===\'REQUESTED\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myRequestedTrips.length!==0; else no_trips">\n      <p>Estos viajes aún no tienen conductor,<br>es tu oportunidad</p>\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myRequestedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes esperando condcutor</p>\n    </ng-template>\n  </ion-item>\n\n  <!-- PROGRAMED -->\n  <ion-item *ngIf="tripFilter===\'PROGRAMED\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myProgramedTrips.length!==0; else no_trips">\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myProgramedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes programados</p>\n    </ng-template>\n  </ion-item>\n\n  <!-- COMPLETED -->\n  <ion-item *ngIf="tripFilter===\'COMPLETED\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myCompletedTrips.length!==0; else no_trips">\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myCompletedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes completados</p>\n    </ng-template>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-trips/driver-trips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_driver_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__["a" /* TripProvider */]])
    ], DriverTripsPage);
    return DriverTripsPage;
}());

//# sourceMappingURL=driver-trips.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_price_driver_price__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_multivehicle_driver_multivehicle__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverAlertPage = /** @class */ (function () {
    function DriverAlertPage(alert, navCtrl, navParams, modalCtrl, viewCtrl) {
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    DriverAlertPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('activeVehicles'));
    };
    DriverAlertPage.prototype.accept = function () {
        var activeVehicles = this.navParams.get('activeVehicles');
        if (activeVehicles.length === 1) {
            console.log('Tiene un vehiculo activo');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__driver_price_driver_price__["a" /* DriverPricePage */]);
        }
        else if (activeVehicles.length > 1) {
            console.log('Tiene mas de un vehiculo activo');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__driver_multivehicle_driver_multivehicle__["a" /* DriverMultivehiclePage */]);
        }
        else {
            console.log('Hay algo raro');
            console.log(activeVehicles.length);
        }
    };
    DriverAlertPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    var _a, _b, _c, _d, _e;
    DriverAlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-alert',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-alert/driver-alert.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>driver-alert</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Tienes un nuevo viaje</p>\n  <p>¿Quieres postularte?</p>\n  <ion-footer no-shadow no-border padding>\n    <button ion-button block color="secondary" (click)="accept()">Aceptar viaje</button>\n    <button ion-button block color="danger" (click)="dismiss()">Rechazar viaje</button>\n  </ion-footer> \n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-alert/driver-alert.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" ? _e : Object])
    ], DriverAlertPage);
    return DriverAlertPage;
}());

//# sourceMappingURL=driver-alert.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverMultivehiclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DriverMultivehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverMultivehiclePage = /** @class */ (function () {
    function DriverMultivehiclePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DriverMultivehiclePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverMultivehiclePage');
    };
    DriverMultivehiclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-multivehicle',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-multivehicle/driver-multivehicle.html"*/'<!--\n  Generated template for the DriverMultivehiclePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>driver-multivehicle</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-multivehicle/driver-multivehicle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DriverMultivehiclePage);
    return DriverMultivehiclePage;
}());

//# sourceMappingURL=driver-multivehicle.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderVehiclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vehicle_vehicle__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rider_date_rider_date__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RiderVehiclePage = /** @class */ (function () {
    function RiderVehiclePage(navCtrl, navParams, vehicle, trip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vehicle = vehicle;
        this.trip = trip;
    }
    RiderVehiclePage.prototype.goRiderDate = function (vehicle) {
        this.trip.vehicle = vehicle;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rider_date_rider_date__["a" /* RiderDatePage */]);
    };
    RiderVehiclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-vehicle',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-vehicle/rider-vehicle.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>FUB</ion-title>\n  </ion-navbar>\n</ion-header>  \n\n<ion-content class="backgroud-purple">\n  <ion-slides pager>\n    <ion-slide *ngFor=\'let vehicle of vehicle.vehicleList\'>\n      <button (click)="goRiderDate(vehicle.id)">\n        <img src="{{ vehicle.picture }}">\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-vehicle/rider-vehicle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_vehicle_vehicle__["a" /* VehicleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__["a" /* TripProvider */]])
    ], RiderVehiclePage);
    return RiderVehiclePage;
}());

//# sourceMappingURL=rider-vehicle.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderDatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rider_places_rider_places__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiderDatePage = /** @class */ (function () {
    function RiderDatePage(navCtrl, navParams, trip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trip = trip;
    }
    RiderDatePage.prototype.verFecha = function () {
        this.trip.date = this.date;
        this.trip.hour = this.hour;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rider_places_rider_places__["a" /* RiderPlacesPage */]);
    };
    RiderDatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-date',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-date/rider-date.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>FUB</ion-title>\n  </ion-navbar>\n</ion-header>  \n\n<ion-content class="backgroud-purple" padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Fecha</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Hora</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="hour"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <!-- FOOTER -->\n  <ion-footer no-shadow no-border padding>\n    <button ion-button block color="secondary" (click)="verFecha()">PPP</button>\n  </ion-footer> \n  <!-- FOOTER -->\n</ion-content>'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-date/rider-date.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_trip_trip__["a" /* TripProvider */]])
    ], RiderDatePage);
    return RiderDatePage;
}());

//# sourceMappingURL=rider-date.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderPlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rider_map_rider_map__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiderPlacesPage = /** @class */ (function () {
    function RiderPlacesPage(navCtrl, navParams, trip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trip = trip;
    }
    RiderPlacesPage.prototype.goMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rider_map_rider_map__["a" /* RiderMapPage */]);
    };
    RiderPlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-places',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-places/rider-places.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>FUB</ion-title>\n  </ion-navbar>\n</ion-header>  \n<ion-content class="backgroud-purple">\n  <form (submit)="goMap()">\n\n    <ion-item class="form">\n      <ion-label stacked color="dark">Punto de partida</ion-label>\n      <ion-input [(ngModel)]="trip.pick_up" name="pick_up" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item class="form">\n      <ion-label stacked color="dark">Contraseña</ion-label>\n      <ion-input [(ngModel)]="trip.drop_off" name="drop_off" type="text"></ion-input>\n    </ion-item>\n\n    <ion-footer no-shadow no-border padding>\n      <button ion-fab type="Enviar" color="secondary" class="rigth-button" *ngIf="trip.drop_off && trip.pick_up; else button_disable"><ion-icon name="checkmark"></ion-icon></button>\n      <ng-template #button_disable>\n        <button ion-fab type="Enviar" color="secondary" class="rigth-button" [disabled]="!isenabled"><ion-icon name="checkmark"></ion-icon></button>\n      </ng-template>        \n    </ion-footer> \n  </form>\n</ion-content>'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-places/rider-places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_trip_trip__["a" /* TripProvider */]])
    ], RiderPlacesPage);
    return RiderPlacesPage;
}());

//# sourceMappingURL=rider-places.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_websocket_websocket__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RiderMapPage = /** @class */ (function () {
    function RiderMapPage(navCtrl, geolocation, user, trip, request, ws) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.user = user;
        this.trip = trip;
        this.request = request;
        this.ws = ws;
        this.destination = '';
    }
    RiderMapPage.prototype.ionViewDidLoad = function () {
        this.ws.wsConnect(this.request.setUrl('ws_connect', this.user.id));
        console.log('cargando mapa');
        this.getPosition();
        console.log(this.trip.vehicle);
        this.ws.messages.subscribe(function (trip_data) {
            console.log('se ejecuto');
            console.log(trip_data);
        });
    };
    RiderMapPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (response) {
            _this.calculateAndDisplayRoute(response.coords.latitude, response.coords.longitude);
        });
    };
    RiderMapPage.prototype.calculateAndDisplayRoute = function (myLat, myLng) {
        var that = this;
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map-route'), {
            zoom: 10,
            center: { lat: myLat, lng: myLng }
        });
        directionsDisplay.setMap(map);
        var pos = {
            lat: myLat,
            lng: myLng,
        };
        map.setCenter(pos);
        that.myLocation = new google.maps.LatLng(pos);
        directionsService.route({
            //origin: this.origin,
            //destination: this.destination,
            origin: this.trip.pick_up,
            destination: this.trip.drop_off,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                console.log('status ok');
                directionsDisplay.setDirections(response);
                console.log(response);
            }
            else {
                console.log('status error');
                window.alert('Error al obtener dirección' + status);
            }
        });
    };
    RiderMapPage.prototype.createTrip = function () {
        this.trip.send('create_trip', {
            date: this.trip.date,
            hour: this.trip.hour,
            pick_up: this.trip.pick_up,
            drop_off: this.trip.drop_off,
            vehicle: this.trip.vehicle
        });
    };
    RiderMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-map',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-map/rider-map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>rider-map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map-route"></div>\n  <button ion-button (click)=\'createTrip()\'>Confirmar servicio</button>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-map/rider-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__["a" /* TripProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_websocket_websocket__["a" /* WebsocketProvider */]])
    ], RiderMapPage);
    return RiderMapPage;
}());

//# sourceMappingURL=rider-map.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderTripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_driver_driver__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_home_driver_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_trip_details_driver_trip_details__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RiderTripsPage = /** @class */ (function () {
    function RiderTripsPage(navCtrl, navParams, driver, trip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.driver = driver;
        this.trip = trip;
        this.tripFilter = "REQUESTED";
    }
    RiderTripsPage.prototype.updateTrips = function () {
        this.driver.getDriverTrips();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__driver_home_driver_home__["a" /* DriverHomePage */]);
    };
    RiderTripsPage.prototype.goTripDetail = function (trip) {
        this.trip.tripDetail = trip;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__driver_trip_details_driver_trip_details__["a" /* DriverTripDetailsPage */]);
    };
    RiderTripsPage.prototype.tripFilterFun = function () {
        console.log(this.tripFilter);
    };
    RiderTripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-trips',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-trips/rider-trips.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>rider-trips</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroud-purple">\n  <p>Filtrar por:</p>\n  <ion-select [(ngModel)]="tripFilter" name="group" cancelText="Cancelar" (ionChange)="tripFilterFun()" multiple="false">\n    <ion-option value="REQUESTED">Pendientes</ion-option>\n    <ion-option value="PROGRAMED">Programados</ion-option>\n    <ion-option value="IN_PROGRESS">En curso</ion-option>\n    <ion-option value="COMPLETED">Completados</ion-option>\n  </ion-select>\n\n  <!-- IN PROGRESS -->\n  <ion-item *ngIf="tripFilter===\'IN_PROGRESS\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myProgramedTrips.length!==0; else no_trips">\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myProgramedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes en curso</p>\n    </ng-template>\n  </ion-item>\n\n  <!-- REQUESTED -->\n  <ion-item *ngIf="tripFilter===\'REQUESTED\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myRequestedTrips.length!==0; else no_trips">\n      <p>Estos viajes aún no tienen conductor,<br>es tu oportunidad</p>\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myRequestedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes esperando condcutor</p>\n    </ng-template>\n  </ion-item>\n\n  <!-- PROGRAMED -->\n  <ion-item *ngIf="tripFilter===\'PROGRAMED\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myProgramedTrips.length!==0; else no_trips">\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myProgramedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes programados</p>\n    </ng-template>\n  </ion-item>\n\n  <!-- COMPLETED -->\n  <ion-item *ngIf="tripFilter===\'COMPLETED\'" class="backgroud-purple">\n    <ion-list *ngIf="driver.myCompletedTrips.length!==0; else no_trips">\n      <button ion-item class="backgroud-purple" *ngFor="let trip of driver.myCompletedTrips" (click)="goTripDetail(trip)">\n        <ion-thumbnail item-start>\n          <img src="{{ trip.vehicle_img }}">\n        </ion-thumbnail>\n        <p>Fecha: {{ trip.data }}</p>\n        <p>Desde: {{ trip.pick_up }}</p>\n        <p>Hasta: {{ trip.drop_off }}</p>\n      </button>\n    </ion-list>\n    <ng-template #no_trips>\n      <p>No tienes viajes completados</p>\n    </ng-template>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-trips/rider-trips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_driver_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__["a" /* TripProvider */]])
    ], RiderTripsPage);
    return RiderTripsPage;
}());

//# sourceMappingURL=rider-trips.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_validate_phone_validate__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams, request, user, controller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = request;
        this.user = user;
        this.controller = controller;
        this.information_title = this.navParams.get('information_title');
        this.button_text = this.navParams.get('button_text');
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('button_text'));
        console.log(this.button_text);
    };
    InformationPage.prototype.goValidate = function () {
        var _this = this;
        this.controller.presentLoading('Procesando solicitud');
        var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.user.token };
        this.request.requestsPost('get_mobile_token', headers, { 'user': this.user.id }).then(function (result) {
            if (result['code'] === 201) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__phone_validate_phone_validate__["a" /* PhoneValidatePage */]);
            }
            else {
                _this.controller.presentAlert('ERROR', 'No se pudo comunicar con el servidor, vuelve a intentar');
            }
            _this.controller.dismissLoading();
        });
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/information/information.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>FUB</ion-title>\n  </ion-navbar>\n</ion-header>  \n<ion-content padding class="backgroud-purple">\n<p class="text-title">{{ information_title }}</p>\n<form (submit)="goValidate()">\n    <ion-footer no-shadow no-border padding>\n      <button ion-button block type="Enviar" color="secondary" class="prueba">{{ button_text }}</button>\n    </ion-footer>\n</form>\n</ion-content>\n  '/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__["a" /* ControllerProvider */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_name_name__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__load_load__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Pages


// Providers




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, request, controller, user) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.request = request;
        this.controller = controller;
        this.user = user;
        this.loginData = { username: '', password: '' };
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var headers = { 'Content-Type': 'application/json' };
        this.controller.presentLoading('Cargando, por favor espere');
        this.request.requestsPost('login', { 'Content-Type': 'application/json' }, this.loginData).then(function (result) {
            _this.data = result;
            localStorage.setItem('token', _this.data.token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__load_load__["a" /* LoadPage */]);
            _this.controller.dismissLoading();
            _this.user.getUserInfo();
        }, function (err) {
            _this.controller.dismissLoading();
            console.log(err);
            _this.controller.presentToast('Error de credenciales' + (err));
        });
    };
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_name_name__["a" /* NamePage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log(this.user.username, this.user.first_name, this.user.token, this.user.verifiedMobile);
        this.user.logout();
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/login/login.html"*/'<ion-header color=primary no-border >\n  <ion-navbar>\n    <ion-title>Iniciar sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroud-purple">  \n  <form (submit)="doLogin()">\n    <ion-item class="form">\n      <ion-label stacked color="dark">Correo electrónico</ion-label>\n      <ion-input [(ngModel)]="loginData.username" name="username" type="email"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n      <ion-label stacked color="dark">Contraseña</ion-label>\n      <ion-input [(ngModel)]="loginData.password" name="password" type="password"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button block type="submit">\n    Iniciar sesión\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_controller_controller__["a" /* ControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_email__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, navParams, user, controller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.controller = controller;
    }
    PasswordPage.prototype.validatePassword = function () {
        if (this.user.password1 !== this.user.password2) {
            this.controller.presentAlert('Verifica los datos', 'Las contraseñas no coinciden');
            return false;
        }
        else if (this.user.password1.length < 7) {
            this.controller.presentAlert('Verifica los datos', 'La contraseña debe tener al menos 8 caracteres');
            return false;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__email_email__["a" /* EmailPage */]);
        }
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/password/password.html"*/'<ion-header no-border>\n    <ion-navbar>\n      <ion-title>Registrar usuario</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding class="backgroud-purple">\n  <p class="text-title">Crea una contraseña para tu cuenta</p>\n  <form (submit)="validatePassword()">\n    <ion-item class="form">\n      <ion-label stacked color="dark">Contraseña</ion-label>\n      <ion-input [(ngModel)]="user.password1" name="password1" type="password"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n      <ion-label stacked color="dark">Repite tu contraseña</ion-label>\n      <ion-input [(ngModel)]="user.password2" name="password2" type="password"></ion-input>\n    </ion-item>\n    <br>\n    <p class="text-notice">Debe tener 8 caracteres como minimo</p>\n    <ion-footer no-shadow no-border padding>\n      <button ion-fab type="Enviar" class="rigth-button" *ngIf="user.password1 && user.password2; else button_disable"><ion-icon name="arrow-round-forward"></ion-icon></button>\n      <ng-template #button_disable>\n        <button ion-fab type="Enviar" class="rigth-button" [disabled]="!isenabled"><ion-icon name="arrow-round-forward"></ion-icon></button>\n      </ng-template>        \n    </ion-footer>      \n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__["a" /* ControllerProvider */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams, user, controller, request) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.controller = controller;
        this.request = request;
    }
    EmailPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    EmailPage.prototype.doSignup = function () {
        var _this = this;
        this.user.username = this.email;
        this.controller.presentLoading('Registrando datos, por favor espere');
        var headers = { 'Content-Type': 'application/json' };
        var userData = {
            username: this.email,
            email: this.email,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            group: this.user.group,
            password1: this.user.password1,
            password2: this.user.password2
        };
        this.request.requestsPost('signup', headers, userData).then(function (result) {
            _this.controller.dismissLoading();
            _this.user.getUserInfo();
            delete _this.user.password1;
            delete _this.user.password2;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.controller.dismissLoading();
            _this.controller.presentAlert('Error', 'No se pudo procesar la petición. Intente en unos minutos.');
        });
    };
    EmailPage.prototype.signupOrError = function () {
        if (this.validateEmail(this.email)) {
            this.doSignup();
            return;
        }
        else {
            this.controller.presentAlert('Email invalido', 'Verifica y corrige tu email.');
            return;
        }
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/email/email.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Registrar usuario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroud-purple">\n<p class="text-title">Para finalizar indícanos tu email</p>\n<form (submit)="signupOrError()">\n  <ion-item class="form">\n    <ion-label stacked color="dark">Email</ion-label>\n    <ion-input [(ngModel)]="email" name="email" type="email"></ion-input>\n  </ion-item>\n  <ion-footer no-shadow no-border padding>\n    <button ion-fab type="Enviar" color="secondary" class="rigth-button" *ngIf="email; else button_disable"><ion-icon name="checkmark"></ion-icon></button>\n    <ng-template #button_disable>\n      <button ion-fab type="Enviar" color="secondary" class="rigth-button" [disabled]="!isenabled"><ion-icon name="checkmark"></ion-icon></button>\n    </ng-template>        \n  </ion-footer>      \n</form>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__["a" /* ControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_name__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupPage = /** @class */ (function () {
    function GroupPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
    }
    GroupPage.prototype.goName = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__name_name__["a" /* NamePage */]);
    };
    GroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/group/group.html"*/'<ion-header no-border>\n    <ion-navbar>\n      <ion-title>Registrar usuario</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content padding class="backgroud-purple">\n  <form (submit)="goName()" class=\'form\'>\n      <p class="text-title">¿Quieres ser cliente o conductor?</p>\n    <ion-item class=\'form\'>\n      <ion-label stacked color="dark">Selecciona un perfil</ion-label>\n      <ion-select [(ngModel)]="user.group" name="group" cancelText="Cancelar">\n        <ion-option value="driver">Conductor</ion-option>\n        <ion-option value="rider">Cliente</ion-option>\n      </ion-select>\n      </ion-item>\n      <ion-footer no-shadow no-border padding>\n        <button ion-fab type="Enviar" class="rigth-button" *ngIf="user.group; else button_disable"><ion-icon name="arrow-round-forward"></ion-icon></button>\n        <ng-template #button_disable>\n          <button ion-fab type="Enviar" class="rigth-button" [disabled]="!isenabled"><ion-icon name="arrow-round-forward"></ion-icon></button>\n        </ng-template>        \n      </ion-footer>      \n  </form>\n</ion-content>'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/signup/group/group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], GroupPage);
    return GroupPage;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__load_load__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        window.localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__load_load__["a" /* LoadPage */]);
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/logout/logout.html"*/''/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestProvider = /** @class */ (function () {
    function RequestProvider(http) {
        this.http = http;
        this.domain = '127.0.0.1:8888';
        this.headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + window.localStorage.getItem('token') };
    }
    RequestProvider.prototype.setUrl = function (action, user_id) {
        var http = "http://";
        var ws = "ws://";
        var url;
        if (action === 'login') {
            url = http + this.domain + "/api/auth/login/";
        }
        else if (action === 'ws_connect') {
            url = ws + this.domain + '/ws/trips/' + user_id + '/';
        }
        else if (action === 'requested_trips') {
            url = http + this.domain + '/api/trips/driver-trips/';
        }
        else if (action === 'trip_detail') {
            url = http + this.domain + '/api/trips/detail/';
        }
        else if (action === 'send_price') {
            url = http + this.domain + '/api/trips/trip-price/';
        }
        else if (action === 'signup') {
            url = http + this.domain + "/api/auth/signup/";
        }
        else if (action === 'user_info') {
            url = http + this.domain + "/api/auth/user-info/";
        }
        else if (action === 'list_vehicles') {
            url = http + this.domain + "/api/trips/vehicle-list/";
        }
        else if (action === 'driver_vehicles') {
            url = http + this.domain + "/api/trips/driver-vehicles/";
        }
        else if (action === 'add_vehicle') {
            url = http + this.domain + "/api/trips/create-vehicle/";
        }
        else if (action === 'get_mobile_token') {
            url = http + this.domain + "/api/mobile-token/";
        }
        else if (action === 'send_token') {
            url = http + this.domain + "/api/mobile-token/check/";
        }
        return url;
    };
    RequestProvider.prototype.requestsPost = function (action, headers, data) {
        var _this = this;
        var url = this.setUrl(action);
        console.log('La url es ' + url);
        return new Promise(function (resolve, reject) {
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](headers)
            };
            _this.http.post(url, JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RequestProvider.prototype.resquestGet = function (action, headers) {
        var url = this.setUrl(action);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](headers)
        };
        return this.http.get(url, httpOptions);
    };
    RequestProvider.prototype.requestsPatch = function (action, headers, data) {
        var _this = this;
        var url = this.setUrl(action);
        return new Promise(function (resolve, reject) {
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](headers)
            };
            _this.http.patch(url, JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RequestProvider.prototype.isValid = function (http_response, desired_status_code) {
        if (http_response === desired_status_code) {
            return true;
        }
        else {
            return false;
        }
    };
    RequestProvider.prototype.getHeaders = function () {
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
    };
    RequestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RequestProvider);
    return RequestProvider;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControllerProvider = /** @class */ (function () {
    function ControllerProvider(http, loadingCtrl, toastCtrl, alertCtrl, user) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.user = user;
        this.presentLoadingIsActive = false;
    }
    ControllerProvider.prototype.presentLoading = function (message) {
        this.presentLoadingIsActive = true;
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    ControllerProvider.prototype.dismissLoading = function () {
        if (this.presentLoadingIsActive) {
            this.loading.dismiss();
        }
    };
    ControllerProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ControllerProvider.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ControllerProvider.prototype.showConfirm = function (title, message, action, ok_text, cancel_text) {
        var confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ahora no',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        action();
                    }
                }
            ]
        });
        confirm.present();
    };
    ControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], ControllerProvider);
    return ControllerProvider;
}());

//# sourceMappingURL=controller.js.map

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/driver-add-vehicle/driver-add-vehicle.module": [
		725,
		24
	],
	"../pages/driver-alert/driver-alert.module": [
		726,
		23
	],
	"../pages/driver-completed-trips/driver-completed-trips.module": [
		727,
		0
	],
	"../pages/driver-home/driver-home.module": [
		728,
		22
	],
	"../pages/driver-multivehicle/driver-multivehicle.module": [
		729,
		21
	],
	"../pages/driver-price/driver-price.module": [
		730,
		20
	],
	"../pages/driver-trip-details/driver-trip-details.module": [
		731,
		19
	],
	"../pages/driver-trips/driver-trips.module": [
		732,
		18
	],
	"../pages/information/information.module": [
		733,
		17
	],
	"../pages/load/load.module": [
		734,
		16
	],
	"../pages/login/login.module": [
		735,
		15
	],
	"../pages/logout/logout.module": [
		736,
		14
	],
	"../pages/phone-number/phone-number.module": [
		737,
		13
	],
	"../pages/phone-validate/phone-validate.module": [
		738,
		12
	],
	"../pages/rider-date/rider-date.module": [
		739,
		11
	],
	"../pages/rider-driverlist/rider-driverlist.module": [
		740,
		10
	],
	"../pages/rider-home/rider-home.module": [
		741,
		9
	],
	"../pages/rider-map/rider-map.module": [
		742,
		8
	],
	"../pages/rider-places/rider-places.module": [
		743,
		7
	],
	"../pages/rider-trips/rider-trips.module": [
		744,
		6
	],
	"../pages/rider-vehicle/rider-vehicle.module": [
		745,
		5
	],
	"../pages/signup/email/email.module": [
		746,
		4
	],
	"../pages/signup/group/group.module": [
		747,
		3
	],
	"../pages/signup/name/name.module": [
		748,
		2
	],
	"../pages/signup/password/password.module": [
		749,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 272;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderDriverlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_websocket_websocket__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiderDriverlistPage = /** @class */ (function () {
    function RiderDriverlistPage(navCtrl, navParams, ws, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ws = ws;
        this.user = user;
        this.message = {
            author: "Cualquier autor",
            message: "Esto es un mensaje de prueba"
        };
    }
    RiderDriverlistPage_1 = RiderDriverlistPage;
    RiderDriverlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.available_drivers);
        this.ws.messages.subscribe(function (trip_data) {
            _this.available_drivers.push(trip_data);
            _this.navCtrl.setRoot(RiderDriverlistPage_1);
            console.log('se ejecuto');
        });
    };
    var RiderDriverlistPage_1;
    RiderDriverlistPage = RiderDriverlistPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-driverlist',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-driverlist/rider-driverlist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>rider-driverlist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-driverlist/rider-driverlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_websocket_websocket__["a" /* WebsocketProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], RiderDriverlistPage);
    return RiderDriverlistPage;
}());

//# sourceMappingURL=rider-driverlist.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(438);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__websocket_websocket__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_webSocket__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TripProvider = /** @class */ (function () {
    function TripProvider(http, request, user, ws) {
        this.http = http;
        this.request = request;
        this.user = user;
        this.ws = ws;
    }
    TripProvider.prototype.connect = function (vehicle) {
        if (!this.webSocket || this.webSocket.complete) {
            this.webSocket = new __WEBPACK_IMPORTED_MODULE_5_rxjs_webSocket__["WebSocketSubject"](this.request.setUrl('ws_connect', this.user.id));
            this.messages = this.webSocket.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["share"])());
            this.messages.subscribe(function (message) { return console.log(message); });
        }
    };
    TripProvider.prototype.send = function (action, data) {
        this.connect(this.vehicle);
        var message = {
            action: action,
            veh_type: this.vehicle,
            user_id: this.user.id,
            token: this.user.token,
            data: data
        };
        console.log('Enviando msj a websocket');
        this.webSocket.next(message);
    };
    TripProvider.prototype.getTripInformation = function () {
        this.request.resquestGet('trip_detail', this.request.headers)
            .subscribe(function (data) {
            return data;
        });
    };
    TripProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__websocket_websocket__["a" /* WebsocketProvider */]])
    ], TripProvider);
    return TripProvider;
}());

//# sourceMappingURL=trip.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_email_email__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_group_group__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_phone_number_phone_number__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_phone_validate_phone_validate__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_name_name__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_password_password__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_load_load__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_driver_home_driver_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_information_information__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_driver_add_vehicle_driver_add_vehicle__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_websocket_websocket__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_vehicle_vehicle__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_rider_home_rider_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_rider_places_rider_places__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_rider_vehicle_rider_vehicle__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_rider_date_rider_date__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_rider_map_rider_map__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_rider_driverlist_rider_driverlist__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_local_notifications_ngx__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_logout_logout__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_driver_driver__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_driver_trips_driver_trips__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_driver_trip_details_driver_trip_details__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_driver_price_driver_price__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_rider_trips_rider_trips__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_rider_rider__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_driver_alert_driver_alert__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_driver_multivehicle_driver_multivehicle__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// Signup Pages





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_phone_number_phone_number__["a" /* PhoneNumberPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_name_name__["a" /* NamePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_phone_validate_phone_validate__["a" /* PhoneValidatePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_load_load__["a" /* LoadPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_driver_home_driver_home__["a" /* DriverHomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_driver_add_vehicle_driver_add_vehicle__["a" /* DriverAddVehiclePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_driver_alert_driver_alert__["a" /* DriverAlertPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_rider_home_rider_home__["a" /* RiderHomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_rider_places_rider_places__["a" /* RiderPlacesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rider_vehicle_rider_vehicle__["a" /* RiderVehiclePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_rider_date_rider_date__["a" /* RiderDatePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_rider_map_rider_map__["a" /* RiderMapPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_rider_driverlist_rider_driverlist__["a" /* RiderDriverlistPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_driver_trips_driver_trips__["a" /* DriverTripsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_driver_trip_details_driver_trip_details__["a" /* DriverTripDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_driver_price_driver_price__["a" /* DriverPricePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_rider_trips_rider_trips__["a" /* RiderTripsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_driver_multivehicle_driver_multivehicle__["a" /* DriverMultivehiclePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/driver-add-vehicle/driver-add-vehicle.module#DriverAddVehiclePageModule', name: 'DriverAddVehiclePage', segment: 'driver-add-vehicle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-alert/driver-alert.module#DriverAlertPageModule', name: 'DriverAlertPage', segment: 'driver-alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-completed-trips/driver-completed-trips.module#DriverCompletedTripsPageModule', name: 'DriverCompletedTripsPage', segment: 'driver-completed-trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-home/driver-home.module#DriverHomePageModule', name: 'DriverHomePage', segment: 'driver-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-multivehicle/driver-multivehicle.module#DriverMultivehiclePageModule', name: 'DriverMultivehiclePage', segment: 'driver-multivehicle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-price/driver-price.module#DriverPricePageModule', name: 'DriverPricePage', segment: 'driver-price', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-trip-details/driver-trip-details.module#DriverTripDetailsPageModule', name: 'DriverTripDetailsPage', segment: 'driver-trip-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-trips/driver-trips.module#DriverTripsPageModule', name: 'DriverTripsPage', segment: 'driver-trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/load/load.module#LoadPageModule', name: 'LoadPage', segment: 'load', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phone-number/phone-number.module#PhoneNumberPageModule', name: 'PhoneNumberPage', segment: 'phone-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phone-validate/phone-validate.module#PhoneValidatePageModule', name: 'PhoneValidatePage', segment: 'phone-validate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-date/rider-date.module#RiderDatePageModule', name: 'RiderDatePage', segment: 'rider-date', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-driverlist/rider-driverlist.module#RiderDriverlistPageModule', name: 'RiderDriverlistPage', segment: 'rider-driverlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-home/rider-home.module#RiderHomePageModule', name: 'RiderHomePage', segment: 'rider-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-map/rider-map.module#RiderMapPageModule', name: 'RiderMapPage', segment: 'rider-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-places/rider-places.module#RiderPlacesPageModule', name: 'RiderPlacesPage', segment: 'rider-places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-trips/rider-trips.module#RiderTripsPageModule', name: 'RiderTripsPage', segment: 'rider-trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-vehicle/rider-vehicle.module#RiderVehiclePageModule', name: 'RiderVehiclePage', segment: 'rider-vehicle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/group/group.module#GroupPageModule', name: 'GroupPage', segment: 'group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/name/name.module#NamePageModule', name: 'NamePage', segment: 'name', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_driver_alert_driver_alert__["a" /* DriverAlertPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_phone_number_phone_number__["a" /* PhoneNumberPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_name_name__["a" /* NamePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_phone_validate_phone_validate__["a" /* PhoneValidatePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_load_load__["a" /* LoadPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_driver_home_driver_home__["a" /* DriverHomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_driver_add_vehicle_driver_add_vehicle__["a" /* DriverAddVehiclePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_rider_home_rider_home__["a" /* RiderHomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_rider_places_rider_places__["a" /* RiderPlacesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rider_vehicle_rider_vehicle__["a" /* RiderVehiclePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_rider_date_rider_date__["a" /* RiderDatePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_rider_map_rider_map__["a" /* RiderMapPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_rider_driverlist_rider_driverlist__["a" /* RiderDriverlistPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_driver_trips_driver_trips__["a" /* DriverTripsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_driver_trip_details_driver_trip_details__["a" /* DriverTripDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_driver_price_driver_price__["a" /* DriverPricePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_rider_trips_rider_trips__["a" /* RiderTripsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_driver_multivehicle_driver_multivehicle__["a" /* DriverMultivehiclePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_request_request__["a" /* RequestProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_controller_controller__["a" /* ControllerProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_trip_trip__["a" /* TripProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_websocket_websocket__["a" /* WebsocketProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_websocket_websocket__["a" /* WebsocketProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_trip_trip__["a" /* TripProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_vehicle_vehicle__["a" /* VehicleProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_local_notifications_ngx__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_34__providers_driver_driver__["a" /* DriverProvider */],
                __WEBPACK_IMPORTED_MODULE_38__pages_rider_trips_rider_trips__["a" /* RiderTripsPage */],
                __WEBPACK_IMPORTED_MODULE_39__providers_rider_rider__["a" /* RiderProvider */],
                __WEBPACK_IMPORTED_MODULE_40__pages_driver_alert_driver_alert__["a" /* DriverAlertPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_driver_multivehicle_driver_multivehicle__["a" /* DriverMultivehiclePage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_request__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleProvider = /** @class */ (function () {
    function VehicleProvider(http, request) {
        this.http = http;
        this.request = request;
        this.vehicleList = [];
    }
    VehicleProvider.prototype.getListVehicles = function () {
        var _this = this;
        var token = window.localStorage.getItem('token');
        var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + token };
        this.request.resquestGet('list_vehicles', headers)
            .subscribe(function (data) {
            _this.vehicleList = data;
        }, function (error) {
            console.log(error);
        });
    };
    VehicleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__request_request__["a" /* RequestProvider */]])
    ], VehicleProvider);
    return VehicleProvider;
}());

//# sourceMappingURL=vehicle.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vehicle_vehicle__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_add_vehicle_driver_add_vehicle__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_websocket_websocket__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__driver_trip_details_driver_trip_details__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_driver_driver__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__driver_trips_driver_trips__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__driver_alert_driver_alert__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DriverHomePage = /** @class */ (function () {
    function DriverHomePage(alertCrtl, modalCrtl, navCtrl, navParams, vehicles, trip, ws, request, user, controller, driver) {
        this.alertCrtl = alertCrtl;
        this.modalCrtl = modalCrtl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vehicles = vehicles;
        this.trip = trip;
        this.ws = ws;
        this.request = request;
        this.user = user;
        this.controller = controller;
        this.driver = driver;
        this.alertPresent = false;
        this.wsIsOff = true;
        this.message = {
            author: "Cualquier autor",
            message: "Esto es un mensaje de prueba"
        };
    }
    DriverHomePage.prototype.ionViewDidLoad = function () {
        this.ws.wsConnect(this.request.setUrl('ws_connect', this.user.id));
    };
    DriverHomePage.prototype.checkVehicles = function () {
        if (this.driver.myVehicles) {
            return true;
        }
        else {
            return false;
        }
    };
    DriverHomePage.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            }
            if (unit == "N") {
                dist = dist * 0.8684;
            }
            return dist;
        }
    };
    DriverHomePage.prototype.goAddVehicle = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_add_vehicle_driver_add_vehicle__["a" /* DriverAddVehiclePage */]);
    };
    DriverHomePage.prototype.goDriverTrips = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__driver_trips_driver_trips__["a" /* DriverTripsPage */]);
    };
    DriverHomePage.prototype.goTripDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__driver_trip_details_driver_trip_details__["a" /* DriverTripDetailsPage */]);
    };
    DriverHomePage.prototype.sendMsg = function () {
        console.log("New message from client to websocket: " + this.message);
        //this.ws.messages.next(this.message);
        //this.message.message = "";
    };
    DriverHomePage.prototype.tripEvent = function () {
        var _this = this;
        console.log('New trip event');
        this.ws.messages.subscribe(function (trip_data) {
            _this.trip.id = trip_data['id'];
            _this.trip.pick_up = trip_data['pick_up'];
            _this.trip.drop_off = trip_data['drop_off'];
            _this.trip.uuid = trip_data['uuid'];
            _this.trip.rider = trip_data['rider'];
            _this.trip.rider_channel = trip_data['rider_channel'];
            _this.trip.create_at = trip_data['create_at'];
            _this.trip.status = trip_data['status'];
            _this.trip.vehicle = trip_data['vehicle'];
            _this.trip.date = trip_data['data'];
            var activeVehicles = [];
            activeVehicles = _this.driver.searchActiveVehicles(trip_data['vehicle']);
            if (activeVehicles.length === 0) {
                console.log('No hay vehiculos activos');
            }
            else {
                _this.driver.myRequestedTrips.push(trip_data);
                var alert_1 = _this.modalCrtl.create(__WEBPACK_IMPORTED_MODULE_12__driver_alert_driver_alert__["a" /* DriverAlertPage */], { activeVehicles: activeVehicles });
                // this.tripAlert(trip_data['pick_up'], trip_data['drop_off'], trip_data['datetime'])
                alert_1.present();
            }
        });
    };
    DriverHomePage.prototype.tripAlert = function (pick_up, drop_off, datetime) {
        var _this = this;
        console.log('Trip Alert');
        if (!this.alertPresent) {
            this.alertPresent = true;
            var confirm_1 = this.alertCrtl.create({
                title: 'Solicitud de servicio',
                message: 'Desde: ' + pick_up + '\n' +
                    'Hasta: ' + drop_off + '\n' +
                    '¿Estas interesado?',
                buttons: [
                    {
                        text: 'Ahora no',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Ver detalles',
                        handler: function () {
                            _this.controller.presentLoading;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__driver_trips_driver_trips__["a" /* DriverTripsPage */]);
                        }
                    }
                ]
            });
            confirm_1.present();
            this.alertPresent = false;
        }
        else {
            console.log('Alert is Active');
        }
    };
    DriverHomePage.prototype.vehicleStatus = function (vehicle) {
        if (this.wsIsOff) {
            this.tripEvent();
            this.wsIsOff = false;
            console.log('Ws ON');
        }
        console.log(this.wsIsOff);
    };
    DriverHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-home',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-home/driver-home.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Menú condutor</ion-title>\n      <!--<button ion-button menuToggle>\n          <ion-icon name="ios-notifications-outline" item-right></ion-icon>\n        </button>\n      -->\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content class="backgroud-purple">\n<p *ngIf="checkVehicles()">Tus vehiculos</p>\n<ion-list *ngIf="checkVehicles(); else no_vehicles">\n  <ion-item class="backgroud-purple" *ngFor="let vehicle of driver.myVehicles">\n    <ion-toggle float-right [(ngModel)]="vehicle.is_active" color="secondary" checked="false" (ionChange)="vehicleStatus(vehicle)" cancelable=true></ion-toggle>\n    <ion-label>\n      {{ vehicle.make }} - {{ vehicle.model }}\n    </ion-label> \n  </ion-item> \n</ion-list>\n\n<ng-template #no_vehicles>\n  <p padding class="text-title">No tienes vehiculos agregados</p>\n</ng-template>\n<ion-footer no-shadow no-border padding>\n    <button ion-button block color="secondary" (click)="goDriverTrips()">Mis viajes</button>\n  <button ion-button block color="secondary" (click)="goAddVehicle()">Agregar vehiculo</button>\n</ion-footer> \n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-home/driver-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_vehicle_vehicle__["a" /* VehicleProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_trip_trip__["a" /* TripProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_websocket_websocket__["a" /* WebsocketProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_controller_controller__["a" /* ControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_driver_driver__["a" /* DriverProvider */]])
    ], DriverHomePage);
    return DriverHomePage;
}());

//# sourceMappingURL=driver-home.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverProvider = /** @class */ (function () {
    function DriverProvider(http, request, controller, vehicle) {
        this.http = http;
        this.request = request;
        this.controller = controller;
        this.vehicle = vehicle;
        this.myRequestedTrips = [];
        this.myProgramedTrips = [];
        this.myCompletedTrips = [];
        this.currentTrip = [];
        this.myVehicles = [];
    }
    DriverProvider.prototype.searchActiveVehicles = function (vehicleId) {
        var activeVehicles = [];
        for (var _i = 0, _a = this.myVehicles; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (vehicle.is_active) {
                activeVehicles.push(vehicle);
            }
        }
        var matchingVehicles = [];
        for (var _b = 0, activeVehicles_1 = activeVehicles; _b < activeVehicles_1.length; _b++) {
            var activeVehicle = activeVehicles_1[_b];
            if (activeVehicle['vehicle_type'] == vehicleId) {
                matchingVehicles.push(activeVehicle);
            }
        }
        console.log(matchingVehicles);
        return matchingVehicles;
    };
    DriverProvider.prototype.getMyVehicles = function () {
        var _this = this;
        console.log('estamos en get drivers vehicles');
        var token = window.localStorage.getItem('token');
        var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + token };
        this.request.resquestGet('driver_vehicles', headers)
            .subscribe(function (data) {
            _this.myVehicles = data;
        }, function (error) {
            console.log(error);
        });
    };
    DriverProvider.prototype.getDriverTrips = function () {
        var _this = this;
        this.myRequestedTrips = [];
        this.myProgramedTrips = [];
        this.myCompletedTrips = [];
        this.currentTrip = [];
        this.myVehicles = [];
        console.log('Entrando de getDriverTrips');
        this.controller.presentLoading('Actualizando la información de tus viajes');
        var token = window.localStorage.getItem('token');
        var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + token };
        this.request.resquestGet('requested_trips', headers)
            .subscribe(function (driver_trips) {
            for (var _trip in driver_trips) {
                var trip = driver_trips[_trip];
                for (var v in _this.vehicle.vehicleList) {
                    var vehicle = _this.vehicle.vehicleList[v];
                    if (vehicle['id'] === trip['vehicle']) {
                        trip['vehicle_img'] = vehicle['picture'];
                    }
                }
                if (trip['status'] = 'REQUESTED') {
                    _this.myRequestedTrips.push(trip);
                }
                else if (trip['status'] = 'PROGRAMED') {
                    _this.myProgramedTrips.push(trip);
                }
                else if (trip['status'] = 'COMPLETED') {
                    _this.myCompletedTrips.push(trip);
                }
                else if (trip['status'] = 'IN_PROGRESS') {
                    _this.currentTrip.push(trip);
                }
                console.log(trip);
            }
        });
        this.controller.dismissLoading();
    };
    DriverProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__controller_controller__["a" /* ControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle__["a" /* VehicleProvider */]])
    ], DriverProvider);
    return DriverProvider;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phone_number_phone_number__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_home_driver_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_vehicle_vehicle__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rider_home_rider_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_driver_driver__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoadPage = /** @class */ (function () {
    function LoadPage(navCtrl, navParams, user, controller, vehicles, driver) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.controller = controller;
        this.vehicles = vehicles;
        this.driver = driver;
    }
    LoadPage_1 = LoadPage;
    LoadPage.prototype.ionViewDidLoad = function () {
        if (this.user.isAuthenticated()) {
            console.log('usuario autenticado');
            console.log('El token es:');
            console.log(window.localStorage.getItem('token'));
            // Si esta autenticado verificamos el grupo
            // para definir a que pagina redireccionar
            this.getGroup();
        }
        else {
            // Si no esta autenticado se va al home
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], { userinfo: true });
        }
    };
    LoadPage.prototype.getGroup = function () {
        console.log('Estamos en get Group');
        // Cargamos la lista de los vehiculos
        if (this.user.group) {
            console.log('Hay grupo');
            this.vehicles.getListVehicles();
            // Si esta definido el grupo verificamos cual es
            if (this.user.verifiedMobile) {
                console.log('El numero esta verificado');
                this.driverOrRider();
            }
            else {
                console.log('El numero no esta verificado');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__phone_number_phone_number__["a" /* PhoneNumberPage */]);
            }
        }
        else {
            console.log('Volvemos a cargar');
            // Si aun no esta cargado volvemos a cargar la pagina
            // hasta tener la info
            this.navCtrl.setRoot(LoadPage_1);
        }
    };
    LoadPage.prototype.driverOrRider = function () {
        if (this.user.group === 'driver') {
            this.driver.getMyVehicles();
            this.vehicles.getListVehicles();
            this.driver.getDriverTrips();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__driver_home_driver_home__["a" /* DriverHomePage */]);
        }
        else if (this.user.group === 'rider') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__rider_home_rider_home__["a" /* RiderHomePage */]);
        }
    };
    var LoadPage_1;
    LoadPage = LoadPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-load',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/load/load.html"*/'<!--\n<ion-header>\n  <ion-navbar>\n    <ion-title>load</ion-title>\n  </ion-navbar>\n</ion-header>\n-->\n\n<ion-content padding>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/load/load.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__["a" /* ControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_vehicle_vehicle__["a" /* VehicleProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_driver_driver__["a" /* DriverProvider */]])
    ], LoadPage);
    return LoadPage;
}());

//# sourceMappingURL=load.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_logout_logout__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_load_load__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_load_load__["a" /* LoadPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Cerrar sesión', component: __WEBPACK_IMPORTED_MODULE_4__pages_logout_logout__["a" /* LogoutPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class=\'app\'>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiderProvider = /** @class */ (function () {
    function RiderProvider(http) {
        this.http = http;
        console.log('Hello RiderProvider Provider');
    }
    RiderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RiderProvider);
    return RiderProvider;
}());

//# sourceMappingURL=rider.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsocketProvider = /** @class */ (function () {
    function WebsocketProvider(http) {
        this.http = http;
    }
    WebsocketProvider.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    };
    WebsocketProvider.prototype.wsConnect = function (url) {
        this.messages = this.connect(url).map(function (response) {
            var data = JSON.parse(response.data);
            return data;
        });
    };
    WebsocketProvider.prototype.create = function (url) {
        var ws = new WebSocket(url);
        console.log(url);
        console.log(ws);
        var observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"].create(observer, observable);
    };
    WebsocketProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WebsocketProvider);
    return WebsocketProvider;
}());

//# sourceMappingURL=websocket.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverTripDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trip_trip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_price_driver_price__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverTripDetailsPage = /** @class */ (function () {
    function DriverTripDetailsPage(navCtrl, navParams, trip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trip = trip;
    }
    DriverTripDetailsPage.prototype.goDriverPrice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_price_driver_price__["a" /* DriverPricePage */]);
    };
    DriverTripDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-trip-details',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-trip-details/driver-trip-details.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>FUB</ion-title>\n  </ion-navbar>\n</ion-header>  \n<ion-content class="backgroud-purple">\n<p>Detalles del viaje</p>\n<ion-item class="backgroud-purple">\n    <p>Desde: {{ trip.tripDetail.pick_up }}</p>\n    <p>Hasta: {{ trip.tripDetail.drop_off }}</p>\n    <p>Fecha: {{ trip.tripDetail.date }}</p>     \n    <p>Vehiculo: {{ trip.tripDetail.vehicle_name }}</p>\n</ion-item>\n\n<ion-footer no-shadow no-border padding>\n  <button ion-button block color="secondary" (click)="goDriverPrice()">Aplicar para este viaje</button>\n</ion-footer>\n\n\n</ion-content>\n  '/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/driver-trip-details/driver-trip-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_trip_trip__["a" /* TripProvider */]])
    ], DriverTripDetailsPage);
    return DriverTripDetailsPage;
}());

//# sourceMappingURL=driver-trip-details.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map