import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DriverProvider } from '../../providers/driver/driver';
import { DriverHomePage } from '../driver-home/driver-home';
import { TripProvider } from '../../providers/trip/trip';
import { DriverTripDetailsPage } from '../driver-trip-details/driver-trip-details';

@IonicPage()
@Component({
  selector: 'page-rider-trips',
  templateUrl: 'rider-trips.html',
})
export class RiderTripsPage {
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public driver: DriverProvider,
    public trip: TripProvider) {
  }

  updateTrips(){
    this.driver.getDriverTrips()
    this.navCtrl.setRoot(DriverHomePage)
  }

  goTripDetail(trip){
    this.trip.tripDetail = trip
    this.navCtrl.push(DriverTripDetailsPage)
  }

  tripFilterFun(){
    console.log(this.tripFilter)
  }

  tripFilter = "REQUESTED";
}

