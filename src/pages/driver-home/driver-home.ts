import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehiclesProvider } from '../../providers/vehicles/vehicles'
import { DriverAddVehiclePage } from '../driver-add-vehicle/driver-add-vehicle';
import { CommunicationProvider } from '../../providers/communication/communication'
import { TripProvider } from '../../providers/trip/trip';


@IonicPage()
@Component({
  selector: 'page-driver-home',
  templateUrl: 'driver-home.html',
})
export class DriverHomePage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vehicles: VehiclesProvider,
    public comm: CommunicationProvider,
    public trip: TripProvider) {}

  map: any;
  driverStatus: string = 'Conductor Desactivado';
  driverSwitch: boolean;
  ws: WebSocket;
  selected_vehicle: true;
  
  check_vehicles(){
    if (this.vehicles.driver_vehicles){
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
    this.comm.messages.next(this.message);
    this.message.message = "";
  }


  notify(vehicle){
    console.log(vehicle)
    if (this.driverSwitch == true){
      console.log('Es TRUE --------')
      this.driverStatus = 'Conductor Activado';
      console.log('Antes de wsconnect')
      this.trip.wsConnect();
      console.log('Despues de ws connect')
    }
    if (this.driverSwitch == false){
      console.log('Es FALSE --------')
      this.trip.wsDisconnect()
      this.driverStatus = 'Conductor Desactivado'
    }
    console.log(this.driverStatus)
  }
  

}
