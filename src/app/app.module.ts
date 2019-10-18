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
import { VehiclesProvider } from '../providers/vehicles/vehicles';
import { DriverAddVehiclePage } from '../pages/driver-add-vehicle/driver-add-vehicle';
import { CommunicationProvider } from '../providers/communication/communication';
import { WebsocketProvider } from '../providers/websocket/websocket';

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
    InformationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
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
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    RequestProvider,
    ControllerProvider,
    TripProvider,
    VehiclesProvider,
    VehiclesProvider,
    CommunicationProvider,
    WebsocketProvider,
    WebsocketProvider
  ]
})
export class AppModule {}
