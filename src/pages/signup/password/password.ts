import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { ControllerProvider } from '../../../providers/controller/controller';
import { EmailPage } from '../email/email';

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public controller: ControllerProvider) {
  }

  validatePassword(){
    if (this.user.password1 !== this.user.password2 ){
      this.controller.presentAlert('Verifica los datos', 'Las contraseñas no coinciden');
      return false;
    }
    else if (this.user.password1.length < 7){
        this.controller.presentAlert('Verifica los datos', 'La contraseña debe tener al menos 8 caracteres');
        return false;
    }
    else {
      this.navCtrl.push(EmailPage)
    }
  }

}
