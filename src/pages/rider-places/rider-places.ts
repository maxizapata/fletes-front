import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TripProvider } from '../../providers/trip/trip'
import { RiderMapPage } from '../rider-map/rider-map';

@IonicPage()
@Component({
  selector: 'page-rider-places',
  templateUrl: 'rider-places.html',
})
export class RiderPlacesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public trip: TripProvider) {
  }

  goMap(){
    this.navCtrl.push(RiderMapPage)
  }

}
