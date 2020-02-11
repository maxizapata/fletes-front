import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { RiderVehiclePage } from '../rider-vehicle/rider-vehicle';
import { VehicleProvider } from '../../providers/vehicle/vehicle';
import { RiderTripsPage } from '../rider-trips/rider-trips';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { TripProvider } from '../../providers/trip/trip';
import { RiderDriverlistPage } from '../rider-driverlist/rider-driverlist';


@IonicPage()
@Component({
  selector: 'page-rider-home',
  templateUrl: 'rider-home.html',
})
export class RiderHomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public trip: TripProvider,
              public vehicle: VehicleProvider,
              public ws: WebsocketProvider) {
  }

  ionViewDidLoad(){
    this.wsConnect()
  }

  createTrip(){
    this.vehicle.getListVehicles()
    this.navCtrl.push(RiderVehiclePage)
  }

  myTrips(){
    this.navCtrl.push(RiderTripsPage)
  }

  wsConnect(){
    this.ws.webSocket.subscribe(trip_data => {
      if (trip_data['message_type']){
        this.trip.available_drivers.push(trip_data);
        this.navCtrl.setRoot(RiderDriverlistPage);  
      }
    });
  }
}
