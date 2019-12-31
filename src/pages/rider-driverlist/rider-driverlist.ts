import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-rider-driverlist',
  templateUrl: 'rider-driverlist.html',
})
export class RiderDriverlistPage {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ws: WebsocketProvider,
              public user: UserProvider) {}

  available_drivers:  Array<any>

  ionViewDidLoad() {
    console.log(this.available_drivers)
    this.ws.messages.subscribe(trip_data => {
      this.available_drivers.push(trip_data);
      this.navCtrl.setRoot(RiderDriverlistPage);
      console.log('se ejecuto');
    });
  }

  private message = {
    author: "Cualquier autor",
    message: "Esto es un mensaje de prueba"
  };
}
