import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleProvider } from '../../providers/vehicle/vehicle';
import { DriverHomePage } from '../driver-home/driver-home';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller';
import { LoadPage } from '../load/load';

@IonicPage()
@Component({
  selector: 'page-driver-add-vehicle',
  templateUrl: 'driver-add-vehicle.html',
})
export class DriverAddVehiclePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vehicle: VehicleProvider,
    public request: RequestProvider,
    public user: UserProvider,
    public controller: ControllerProvider) {
  }

  ionViewDidLoad(){
    console.log(this.vehicle.vehicleList)
  }

  license_plate: string
  model: string
  make: string
  year: string
  vehicle_type: string

  addVehicle(){
    let headers = this.request.getHeaders()
    let data = {
      'driver': this.user.id,
      'license_plate': this.license_plate,
      'model': this.model,
      'make': this.make,
      'year': this.year,
      'vehicle_type': this.vehicle_type
    } 
    this.request.requestsPost('add_vehicle', headers, data).then((result)=>{
      console.log(result)
        this.navCtrl.push(LoadPage);
    })
  }

  

}
