import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UserProvider } from '../providers/user/user';
import { RequestProvider } from '../providers/request/request';
import { ControllerProvider } from '../providers/controller/controller';
import { TripProvider } from '../providers/trip/trip';

// Signup Pages
import { EmailPage } from '../pages/signup/email/email';
import { GroupPage } from '../pages/signup/group/group';
import { PhoneNumberPage } from '../pages/phone-number/phone-number';
import { PhoneValidatePage } from '../pages/phone-validate/phone-validate';
import { NamePage } from '../pages/signup/name/name';
import { PasswordPage } from '../pages/signup/password/password';
import { LoadPage } from '../pages/load/load';
import { DriverHomePage } from '../pages/driver-home/driver-home';
import { InformationPage } from '../pages/information/information';
import { DriverAddVehiclePage } from '../pages/driver-add-vehicle/driver-add-vehicle';
import { WebsocketProvider } from '../providers/websocket/websocket';
import { VehicleProvider } from '../providers/vehicle/vehicle';
import { RiderHomePage } from '../pages/rider-home/rider-home';
import { RiderPlacesPage } from '../pages/rider-places/rider-places';
import { RiderVehiclePage } from '../pages/rider-vehicle/rider-vehicle';
import { RiderDatePage } from '../pages/rider-date/rider-date';
import { RiderMapPage } from '../pages/rider-map/rider-map';
import { Geolocation } from '@ionic-native/geolocation';
import { RiderDriverlistPage } from '../pages/rider-driverlist/rider-driverlist';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { LogoutPage } from '../pages/logout/logout';
import { DriverProvider } from '../providers/driver/driver';
import { DriverTripsPage } from '../pages/driver-trips/driver-trips';
import { DriverTripDetailsPage } from '../pages/driver-trip-details/driver-trip-details';
import { DriverPricePage } from '../pages/driver-price/driver-price';
import { RiderTripsPage } from '../pages/rider-trips/rider-trips';
import { RiderProvider } from '../providers/rider/rider';
import { DriverAlertPage } from '../pages/driver-alert/driver-alert';
import { DriverMultivehiclePage } from '../pages/driver-multivehicle/driver-multivehicle'
import { RiderDriverDetailPage } from '../pages/rider-driver-detail/rider-driver-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    EmailPage,
    GroupPage,
    PhoneNumberPage,
    NamePage,
    PasswordPage,
    PhoneValidatePage,
    LoadPage,
    DriverHomePage,
    DriverAddVehiclePage,
    DriverAlertPage,
    InformationPage,
    RiderHomePage,
    RiderPlacesPage,
    RiderVehiclePage,
    RiderDatePage,
    RiderMapPage,
    RiderDriverlistPage,
    LogoutPage,
    DriverTripsPage,
    DriverTripDetailsPage,
    DriverPricePage,
    RiderTripsPage,
    DriverMultivehiclePage,
    RiderDriverDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    EmailPage,
    GroupPage,
    DriverAlertPage,
    PhoneNumberPage,
    NamePage,
    PasswordPage,
    PhoneValidatePage,
    LoadPage,
    DriverHomePage,
    DriverAddVehiclePage,
    InformationPage,
    RiderHomePage,
    RiderPlacesPage,
    RiderVehiclePage,
    RiderDatePage,
    RiderMapPage,
    RiderDriverlistPage,
    LogoutPage,
    DriverTripsPage,
    DriverTripDetailsPage,
    DriverPricePage,
    RiderTripsPage,
    DriverMultivehiclePage,
    RiderDriverDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    RequestProvider,
    ControllerProvider,
    TripProvider,
    WebsocketProvider,
    WebsocketProvider,
    TripProvider,
    VehicleProvider,
    Geolocation,
    LocalNotifications,
    DriverProvider,
    RiderTripsPage,
    RiderProvider,
    DriverAlertPage,
    DriverMultivehiclePage,
    RiderDriverDetailPage
  ]
})
export class AppModule {}
