import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { VehicleProvider } from '../../providers/vehicle/vehicle'
import { DriverAddVehiclePage } from '../driver-add-vehicle/driver-add-vehicle';
import { TripProvider } from '../../providers/trip/trip';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller';
import { DriverTripDetailsPage } from '../driver-trip-details/driver-trip-details';
import { DriverProvider } from '../../providers/driver/driver';
import { DriverTripsPage } from '../driver-trips/driver-trips';
import { DriverAlertPage } from '../driver-alert/driver-alert';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-driver-home',
  templateUrl: 'driver-home.html',
})
export class DriverHomePage {
  constructor(
    public alertCrtl: AlertController,
    public modalCrtl: ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vehicles: VehicleProvider,
    public trip: TripProvider,
    public ws: WebsocketProvider,
    public request: RequestProvider,
    public user: UserProvider,
    public controller: ControllerProvider,
    public geolocation: Geolocation,
    public driver: DriverProvider) {}

  alertPresent: boolean = false
  currentWsConn: WebSocket;
  map: any;
  wsIsOff: Boolean = true

  ionViewDidLoad(){
    this.wsConnect()
  }
  
  checkVehicles(){
    if (this.driver.myVehicles){
      return true;
    } else {
      return false;
    }
  }

  distance(lat1, lng1, lat2, lng2) {
    if ((lat1 == lat2) && (lng1 == lng2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lng1-lng2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344
      if (dist <= 5){
        console.log('The driver is in 5KM range')
        return true
      } else {
        console.log('The driver not is in 5KM range')
        return false
      }
    }
  }

  goAddVehicle(){
    this.navCtrl.push(DriverAddVehiclePage);
  }

  goDriverTrips(){
    this.navCtrl.push(DriverTripsPage)
  }

  goTripDetails(){
    this.navCtrl.push(DriverTripDetailsPage)
  }

  wsConnect(){
    console.log('Dentro de wsconnect')
    this.ws.webSocket.subscribe(trip_data => {
      this.trip.id = trip_data['id']
      if (trip_data['message_type'] === 'trip_request'){
        console.log('Dentro del IF')
        this.geolocation.getCurrentPosition().then(driver_location => {
          if (this.distance(trip_data['start_lat'], 
                            trip_data['start_lng'],
                            driver_location.coords.latitude, 
                            driver_location.coords.longitude) <= 5){
                              this.trip.start_driver_lat = driver_location.coords.latitude;
                              this.trip.start_driver_lng = driver_location.coords.longitude;
                              this.newTrip(trip_data);
                            }
        })
      }
      else if (trip_data['message_type'] === 'you_were_selected') {
        this.navCtrl.setRoot(DriverTripDetailsPage)
      }
    },
    err => this.errorReload());
  }

  newTrip(trip_data){
    let activeVehicles: Array<string> = []
    activeVehicles = this.driver.searchActiveVehicles(trip_data['vehicle'])
    if (activeVehicles.length === 0){
      console.log('No hay vehiculos activos')
    } 
    else {
      this.driver.myRequestedTrips.push(trip_data)
      let alert = this.modalCrtl.create(DriverAlertPage, { activeVehicles: activeVehicles})
      alert.present();
    } 
  }

  errorReload(){
    console.log('ERROR DE CONEXION')
    let alert = this.alertCrtl.create({
      title: 'Error',
      subTitle: 'ERRORONES',
      buttons: ['Recargar']
    })
    alert.present();
    this.navCtrl.setRoot(DriverHomePage)
  }

}
