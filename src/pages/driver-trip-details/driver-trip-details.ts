import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TripProvider } from '../../providers/trip/trip';
import { DriverPricePage } from '../driver-price/driver-price';


@IonicPage()
@Component({
  selector: 'page-driver-trip-details',
  templateUrl: 'driver-trip-details.html',
})
export class DriverTripDetailsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public trip: TripProvider) {
  }

  goDriverPrice(){
    this.navCtrl.push(DriverPricePage)
  }

}
