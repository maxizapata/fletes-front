import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehiclesProvider } from '../../providers/vehicles/vehicles'
import { DriverAddVehiclePage } from '../driver-add-vehicle/driver-add-vehicle';

@IonicPage()
@Component({
  selector: 'page-driver-home',
  templateUrl: 'driver-home.html',
})
export class DriverHomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vehicles: VehiclesProvider) {
      
  }
  
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

}
