import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehiclesProvider } from '../../providers/vehicles/vehicles';
import { DriverHomePage } from '../driver-home/driver-home'

@IonicPage()
@Component({
  selector: 'page-driver-add-vehicle',
  templateUrl: 'driver-add-vehicle.html',
})
export class DriverAddVehiclePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vehicles: VehiclesProvider) {
  }

  ionViewDidLoad(){
    console.log(this.vehicles.vehicle_list)
  }

  license_plate: string
  model: string
  make: string
  year: string
  vehicle_type: string

  addVehicle(){
    console.log(this.vehicle_type)
    this.navCtrl.push(DriverHomePage)
  }

  

}
