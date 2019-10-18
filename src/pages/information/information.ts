import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhoneValidatePage } from '../phone-validate/phone-validate';
import { RequestProvider } from '../../providers/request/request';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller';

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public request: RequestProvider,
              public user: UserProvider,
              public controller: ControllerProvider) {
  }

  information_title = this.navParams.get('information_title')
  button_text = this.navParams.get('button_text')

  ionViewDidLoad(){
    console.log(this.navParams.get('button_text'));
    console.log(this.button_text)
  }

  goValidate(){
    this.controller.presentLoading('Procesando solicitud');
    let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + this.user.token }
    this.request.requestsPost('get_mobile_token', headers, {'user': this.user.id}).then((result) =>{
      if (result['code'] === 201){
        this.navCtrl.push(PhoneValidatePage)
      }
      else{
        this.controller.presentAlert('ERROR', 'No se pudo comunicar con el servidor, vuelve a intentar')
      }
      this.controller.dismissLoading()
    })
    
  }
}
