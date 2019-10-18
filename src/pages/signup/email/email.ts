import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { ControllerProvider } from '../../../providers/controller/controller';
import { RequestProvider } from '../../../providers/request/request';
import { LoginPage } from '../../login/login'
import { HomePage } from '../../home/home';

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
  email: string


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public controller: ControllerProvider,
              public request: RequestProvider) {
  }
  
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  doSignup() {
    this.user.username = this.email;
    this.controller.presentLoading('Registrando datos, por favor espere');
    let headers = {'Content-Type':  'application/json'};
    let userData = {
      username: this.email,
      email: this.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      group: this.user.group,
      password1: this.user.password1,
      password2: this.user.password2
    }
    this.request.requestsPost('signup', headers, userData).then((result) => {
      this.controller.dismissLoading()
      this.user.getUserInfo()
      delete this.user.password1;
      delete this.user.password2;
      this.navCtrl.setRoot(HomePage)
    }, (err) => {
      this.controller.dismissLoading();
      this.controller.presentAlert('Error', 'No se pudo procesar la petición. Intente en unos minutos.');
    });
  }

  signupOrError() {
    if (this.validateEmail(this.email)){
      this.doSignup();
      return;
    } else {
      this.controller.presentAlert('Email invalido', 'Verifica y corrige tu email.')
      return;
    }
  }
}
