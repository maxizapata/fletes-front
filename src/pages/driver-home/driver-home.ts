import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleProvider } from '../../providers/vehicle/vehicle'
import { DriverAddVehiclePage } from '../driver-add-vehicle/driver-add-vehicle';
import { WsCommProvider } from '../../providers/ws-comm/ws-comm'
import { TripProvider } from '../../providers/trip/trip';
import { WebsocketProvider } from '../../providers/websocket/websocket'


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
    public wsComm: WsCommProvider,
    public trip: TripProvider,
    public ws: WebsocketProvider) {
      wsComm.messages.subscribe(msg => {
        console.log("Response for websocket " + msg);
      });
    }

  map: any;
  driverStatus: string = 'Conductor Desactivado';
  driverSwitch: boolean;
  //ws: WebSocket;
  selected_vehicle: true;
  
  check_vehicles(){
    if (this.vehicles.driverVehicles){
      return true;
    } else {
      return false;
    }
  }

  go_add_vehicle(){
    this.navCtrl.push(DriverAddVehiclePage);
  }

  private message = {
    author: "Cualquier autor",
    message: "Esto es un mensaje de prueba"
  };

  sendMsg(){
    console.log("New message from client to websocket: " + this.message);
    this.wsComm.messages.next(this.message);
    this.message.message = "";
  }

  vehicleStatus(vehicle:any){
    if (vehicle.is_active == true){
      console.log('Conectando vehiculo al websocket');
      this.trip.connect(vehicle.vehicle_type);
    }
    else if (vehicle.is_active == false){
      console.log('Desconectando vehicle al websocket');
      this.trip.disconnect();
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
  
  

}
