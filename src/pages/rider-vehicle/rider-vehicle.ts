import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleProvider } from '../../providers/vehicle/vehicle';
import { TripProvider } from '../../providers/trip/trip';
import { RiderDatePage } from '../rider-date/rider-date';

@IonicPage()
@Component({
  selector: 'page-rider-vehicle',
  templateUrl: 'rider-vehicle.html',
})
export class RiderVehiclePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public vehicle: VehicleProvider,
              public trip: TripProvider) {
  }

  goRiderDate(vehicle: any){
    this.trip.vehicle = vehicle;
    this.navCtrl.push(RiderDatePage);
  }
}
