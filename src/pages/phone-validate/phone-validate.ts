import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller'
import { DriverHomePage } from '../driver-home/driver-home';
import { VehicleProvider } from '../../providers/vehicle/vehicle'
import { DriverProvider } from '../../providers/driver/driver';
import { RiderHomePage } from '../rider-home/rider-home';

@IonicPage()
@Component({
  selector: 'page-phone-validate',
  templateUrl: 'phone-validate.html',
})
export class PhoneValidatePage {
  public sms_code: string

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public request: RequestProvider,
              public user: UserProvider,
              public controller: ControllerProvider,
              public vehicle: VehicleProvider,
              public driver: DriverProvider) {
  }

  sendToken(){
    this.controller.presentLoading('Verificando el token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + this.user.token }
    this.request.requestsPost('send_token', headers, {'user_id': this.user.id,'token': this.sms_code}).then((result) => {
      if (this.request.isValid(result, 200)){
        console.log('Is valid')
        if (this.user.group === 'driver'){
          this.driver.getMyVehicles();
          this.navCtrl.setRoot(DriverHomePage)
        }
        else if (this.user.group === 'rider'){
          this.navCtrl.setRoot(RiderHomePage)
        }
        this.controller.dismissLoading()
      } else {
        console.log("It's not valid")
        this.controller.presentAlert('ERROR', 'Error de comunicación con el servidor')
        this.controller.dismissLoading()
      }
    })
  }
  
}
