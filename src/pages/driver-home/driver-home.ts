import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleProvider } from '../../providers/vehicle/vehicle'
import { DriverAddVehiclePage } from '../driver-add-vehicle/driver-add-vehicle';
import { TripProvider } from '../../providers/trip/trip';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller';


@IonicPage()
@Component({
  selector: 'page-driver-home',
  templateUrl: 'driver-home.html',
})
export class DriverHomePage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vehicles: VehicleProvider,
    public trip: TripProvider,
    public ws: WebsocketProvider,
    public request: RequestProvider,
    public user: UserProvider,
    public controller: ControllerProvider) {}

  wsIsOff: Boolean = true
  map: any;
  currentWsConn: WebSocket;

  private message = {
    author: "Cualquier autor",
    message: "Esto es un mensaje de prueba"
  };

  ionViewDidLoad(){
    this.ws.wsConnect(this.request.setUrl('ws_connect', this.user.id))
  }
  
  check_vehicles(){
    if (this.vehicles.driverVehicles){
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


  go_add_vehicle(){
    this.navCtrl.push(DriverAddVehiclePage);
  }

  sendMsg(){
    console.log("New message from client to websocket: " + this.message);
    //this.ws.messages.next(this.message);
    //this.message.message = "";
  }

  tripEvent(){
    this.ws.messages.subscribe(trip_data => {
      let activeVehicles: Array<string> = []
      activeVehicles = this.vehicles.searchActiveVehicles(trip_data['vehicle'])
      console.log(activeVehicles)
      if (activeVehicles.length === 0){
        console.log('No coincide ningún vehiculo activo con el viaje')
      } else if (activeVehicles.length === 1){
        console.log('Tienes un vehiculo activo del tipo')
        console.log(trip_data)
      } 
    });
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
