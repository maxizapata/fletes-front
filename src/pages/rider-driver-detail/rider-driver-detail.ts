import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { UserProvider } from '../../providers/user/user';
import { TripProvider } from '../../providers/trip/trip';
import { RiderDriverMapPage } from '../rider-driver-map/rider-driver-map';


@IonicPage()
@Component({
  selector: 'page-rider-driver-detail',
  templateUrl: 'rider-driver-detail.html',
})
export class RiderDriverDetailPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ws: WebsocketProvider,
              public user: UserProvider,
              public trip: TripProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderDriverDetailPage');
  }

  price = this.trip.price

  startTrip(){
    let data = {
      rider: this.user.id,
      trip: this.trip.id,
      price: this.trip.price,
      driver: this.trip.driver,
      start_driver_lat: this.trip.start_driver_lat,
      start_driver_lng: this.trip.start_driver_lng
    }
    this.ws.sendMsg('chosen_driver', data)
    this.navCtrl.setRoot(RiderDriverMapPage)
  }

}
