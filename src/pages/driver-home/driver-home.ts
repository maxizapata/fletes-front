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
import { DriverTripsPage } from '../driver-trips/driver-trips'
import { DriverAlertPage } from '../driver-alert/driver-alert';

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
    public driver: DriverProvider) {}

  alertPresent: boolean = false
  currentWsConn: WebSocket;
  map: any;
  wsIsOff: Boolean = true

  private message = {
    author: "Cualquier autor",
    message: "Esto es un mensaje de prueba"
  };

  ionViewDidLoad(){
    this.ws.wsConnect(this.request.setUrl('ws_connect', this.user.id))
  }
  
  checkVehicles(){
    if (this.driver.myVehicles){
      return true;
    } else {
      return false;
    }
  }

  distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist;
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

  sendMsg(){
    console.log("New message from client to websocket: " + this.message);
    //this.ws.messages.next(this.message);
    //this.message.message = "";
  }

  tripEvent(){
    console.log('New trip event')
    this.ws.messages.subscribe(trip_data => {
      this.trip.id = trip_data['id']
      this.trip.pick_up = trip_data['pick_up']
      this.trip.drop_off = trip_data['drop_off']
      this.trip.uuid = trip_data['uuid']
      this.trip.rider = trip_data['rider']
      this.trip.rider_channel = trip_data['rider_channel']
      this.trip.create_at = trip_data['create_at']
      this.trip.status = trip_data['status']
      this.trip.vehicle = trip_data['vehicle']
      this.trip.date = trip_data['data']

      let activeVehicles: Array<string> = []
      activeVehicles = this.driver.searchActiveVehicles(trip_data['vehicle'])
      if (activeVehicles.length === 0){
        console.log('No hay vehiculos activos')
      } 
      else {
        this.driver.myRequestedTrips.push(trip_data)
        let alert = this.modalCrtl.create(DriverAlertPage, { activeVehicles: activeVehicles})
        // this.tripAlert(trip_data['pick_up'], trip_data['drop_off'], trip_data['datetime'])
        alert.present();
      } 
    });
  }

  tripAlert(pick_up, drop_off, datetime) {
    console.log('Trip Alert')
    if (!this.alertPresent){
      this.alertPresent = true
      const confirm = this.alertCrtl.create({
        title: 'Solicitud de servicio',
        message: 'Desde: ' + pick_up + '\n' + 
                 'Hasta: ' + drop_off + '\n' + 
                 '¿Estas interesado?',
        buttons: [
          {
            text: 'Ahora no',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Ver detalles',
            handler: () => {
              this.controller.presentLoading
              this.navCtrl.push(DriverTripsPage)
            }
          }
        ]
      });
      confirm.present();
      this.alertPresent = false
    }
    else {
      console.log('Alert is Active')
    }
  }

  vehicleStatus(vehicle:any){
    if (this.wsIsOff){
      this.tripEvent();
      this.wsIsOff = false;
      console.log('Ws ON');
    }
    console.log(this.wsIsOff)
  }
}
