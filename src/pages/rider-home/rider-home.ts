import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { RiderVehiclePage } from '../rider-vehicle/rider-vehicle';
import { VehicleProvider } from '../../providers/vehicle/vehicle';


@IonicPage()
@Component({
  selector: 'page-rider-home',
  templateUrl: 'rider-home.html',
})
export class RiderHomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public vehicle: VehicleProvider) {
  }

  createTrip(){
    this.vehicle.getListVehicles()
    this.navCtrl.push(RiderVehiclePage)
  }

  historyTrip(){
    console.log('history trip')
  }


}
