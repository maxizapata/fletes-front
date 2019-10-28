import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Component, NgZone} from '@angular/core';

/**
 * Generated class for the RiderPlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider-places',
  templateUrl: 'rider-places.html',
})
export class RiderPlacesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderPlacesPage');
  }

}
