import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PasswordPage } from '../password/password'
import { UserProvider } from '../../../providers/user/user'

@IonicPage()
@Component({
  selector: 'page-name',
  templateUrl: 'name.html',
})
export class NamePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider) {
  }

  goMobile(){
    this.navCtrl.push(PasswordPage)
  }

}
