import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller'
import { DriverHomePage } from '../driver-home/driver-home';
import { VehicleProvider } from '../../providers/vehicle/vehicle'

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
              public vehicle: VehicleProvider) {
  }

  sendToken(){
    this.controller.presentLoading('Verificando el token');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + this.user.token }
    this.request.requestsPost('send_token', headers, {'user_id': this.user.id,'token': this.sms_code}).then((result) => {
      if (this.request.isValid(result, 200)){
        if (this.user.group === 'driver'){
          this.vehicle.getDriverVehicles();
          this.navCtrl.setRoot(DriverHomePage)
          this.controller.dismissLoading()
        }
      } else {
        this.controller.presentAlert('ERROR', 'Error de comunicación con el servidor')
        this.controller.dismissLoading()
      }
    })
  }
  
}
