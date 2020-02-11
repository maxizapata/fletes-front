webpackJsonp([0],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderDriverMapPageModule", function() { return RiderDriverMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rider_driver_map__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiderDriverMapPageModule = /** @class */ (function () {
    function RiderDriverMapPageModule() {
    }
    RiderDriverMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rider_driver_map__["a" /* RiderDriverMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rider_driver_map__["a" /* RiderDriverMapPage */]),
            ],
        })
    ], RiderDriverMapPageModule);
    return RiderDriverMapPageModule;
}());

//# sourceMappingURL=rider-driver-map.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderDriverMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_websocket_websocket__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RiderDriverMapPage = /** @class */ (function () {
    function RiderDriverMapPage(navCtrl, navParams, trip, geolocation, user, ws) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trip = trip;
        this.geolocation = geolocation;
        this.user = user;
        this.ws = ws;
    }
    RiderDriverMapPage.prototype.ionViewDidLoad = function () {
    };
    RiderDriverMapPage.prototype.whereIsTheDriver = function () {
        var data = {
            trip: this.trip.id,
            rider: this.user.id
        };
        this.ws.sendMsg('where_is_the_driver', data);
    };
    RiderDriverMapPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (response) {
            _this.calculateAndDisplayRoute(response.coords.latitude, response.coords.longitude);
        });
    };
    RiderDriverMapPage.prototype.calculateAndDisplayRoute = function (myLat, myLng) {
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
            destination: this.trip.pick_up,
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
    RiderDriverMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rider-driver-map',template:/*ion-inline-start:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-driver-map/rider-driver-map.html"*/'<!--\n  Generated template for the RiderDriverMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>rider-driver-map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map-route"></div>\n  <button ion-button (click)=\'createTrip()\'>Confirmar servicio</button>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/ssd/telollevo/frontend/src/pages/rider-driver-map/rider-driver-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__["a" /* TripProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_websocket_websocket__["a" /* WebsocketProvider */]])
    ], RiderDriverMapPage);
    return RiderDriverMapPage;
}());

//# sourceMappingURL=rider-driver-map.js.map

/***/ })

});
//# sourceMappingURL=0.js.map