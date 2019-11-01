import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TripProvider } from '../../providers/trip/trip';
import { RiderPlacesPage } from '../rider-places/rider-places';


@IonicPage()
@Component({
  selector: 'page-rider-date',
  templateUrl: 'rider-date.html',
})
export class RiderDatePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public trip: TripProvider) {
  }

  date: any
  hour: any

  verFecha(){
    this.trip.date = this.date
    this.trip.hour = this.hour;
    this.navCtrl.push(RiderPlacesPage)
  }

}
