import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleProvider } from '../../providers/vehicle/vehicle'
import { DriverAddVehiclePage } from '../driver-add-vehicle/driver-add-vehicle';
import { CommunicationProvider } from '../../providers/communication/communication'
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
    public comm: CommunicationProvider,
    public trip: TripProvider,
    public ws: WebsocketProvider) {}

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
    this.comm.messages.next(this.message);
    this.message.message = "";
  }

  vehicleStatus(vehicle:any){
    if (vehicle.is_active == true){
      console.log('Conectando vehiculo al websocket');
      this.ws.connect(vehicle.vehicle_type);
    }
    else if (vehicle.is_active == false){
      console.log('Desconectando vehicle al websocket');
      this.ws.disconnect();
    }    
  }
  
  

}
