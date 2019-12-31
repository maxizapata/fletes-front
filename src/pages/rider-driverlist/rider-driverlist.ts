import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebsocketProvider } from '../../providers/websocket/websocket';


@IonicPage()
@Component({
  selector: 'page-rider-driverlist',
  templateUrl: 'rider-driverlist.html',
})
export class RiderDriverlistPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ws: WebsocketProvider,) {}

  ionViewDidLoad() {
    this.ws.messages.subscribe(trip_data => {
      console.log('esta funcionando')
    });
  }

  private message = {
    author: "Cualquier autor",
    message: "Esto es un mensaje de prueba"
  };



}
