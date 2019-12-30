import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { DriverPricePage } from '../driver-price/driver-price';

@IonicPage()
@Component({
  selector: 'page-driver-alert',
  templateUrl: 'driver-alert.html',
})
export class DriverAlertPage {

  constructor(public alert: AlertController,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('activeVehicles'));
  }

  accept(){
    let activeVehicles = this.navParams.get('activeVehicles')
    if (activeVehicles.length === 1) {
      this.dismiss()
      this.navCtrl.setRoot(DriverPricePage)
    }
    else if (activeVehicles.length < 1){

    }
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  /*

  selectVehicleAlert(vehiclesArray: any) {
    const alert = this.alert.create()
    alert.addInput({type: 'radio', label: '2', value: '2'});
    alert.addInput({type: 'radio', label: '3', value: '3'});
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        alert.dismiss();
        this.site = data;
        this.storage.set("nsSite", data);
        return false;
      }
    });
  }
  */ 
 //https://forum.ionicframework.com/t/radio-alert/51323/5
}
