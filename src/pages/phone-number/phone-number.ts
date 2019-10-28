import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'
import { PhoneValidatePage } from '../phone-validate/phone-validate';
import { RequestProvider } from '../../providers/request/request'
import { ControllerProvider } from '../../providers/controller/controller'
import { InformationPage } from '../information/information';



@IonicPage()
@Component({
  selector: 'page-phone-number',
  templateUrl: 'phone-number.html',
})
export class PhoneNumberPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public request: RequestProvider,
              public controller: ControllerProvider) {
  }

  goInformation(){
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + this.user.token }
    this.request.requestsPatch('user_info', headers, {'user_id': this.user.id, 'phone_number': '+569' + this.user.phone_number})
    .then((data) => {
      if (this.request.isValid(data, 201)){
        this.navCtrl.push(InformationPage,
          {information_title: 'Necesitamos validar tu identidad, para eso enviaremos un codigo de seguridad via sms a tu telefóno celular', button_text: 'Recibir token'})
      } else {
        console.log(data)
        this.controller.presentAlert('Número invalido', 'No se pudo procesar tu número telefónico, verificalo y vuelve a intentar.')
      }
    })   
  }

  goPhoneValidate(){
    console.log('ejecuto validate phone');
    this.navCtrl.push(PhoneValidatePage)
  }


}
