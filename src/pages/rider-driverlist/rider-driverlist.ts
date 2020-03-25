import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { UserProvider } from '../../providers/user/user';
import { TripProvider } from '../../providers/trip/trip';
import { RiderDriverDetailPage } from '../rider-driver-detail/rider-driver-detail';


@IonicPage()
@Component({
  selector: 'page-rider-driverlist',
  templateUrl: 'rider-driverlist.html',
})
export class RiderDriverlistPage {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ws: WebsocketProvider,
              public user: UserProvider,
              public trip: TripProvider) {}

  ionViewDidLoad(){
    console.log(this.trip.available_drivers)
  }


  selectDriver(driver){
    this.trip.price = driver.price;
    this.trip.driver = driver.driver;
    this.trip.id = driver.trip;
    this.trip.start_driver_lat = driver.start_driver_lat;
    this.trip.start_driver_lng = driver.start_driver_lng;
    this.navCtrl.push(RiderDriverDetailPage);
  }
}
