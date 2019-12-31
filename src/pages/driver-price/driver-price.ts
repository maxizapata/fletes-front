import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { TripProvider } from '../../providers/trip/trip';
import { DriverHomePage } from '../driver-home/driver-home';
import { UserProvider } from '../../providers/user/user'

@IonicPage()
@Component({
  selector: 'page-driver-price',
  templateUrl: 'driver-price.html',
})
export class DriverPricePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public request: RequestProvider,
              public trip: TripProvider,
              public user: UserProvider) {
  }

  price: string;

  sendPrice(){
    let headers = this.request.getHeaders()
    let data = {'price': this.price, 
                'trip': this.trip.id,
                'driver': this.user.id
              }
    // this.request.requestsPost('send_price', headers, data)
    this.trip.send('send_price', data)
    this.navCtrl.setRoot(DriverHomePage)
  }

}
