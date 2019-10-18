import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { GroupPage } from '../../pages/signup/group/group';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public user: UserProvider,
              public controller: ControllerProvider) {}

  dataIsLoad: any = this.navParams.get('dataLoad')

  goLogin(){
    this.navCtrl.push(LoginPage)
  }

  goSignup(){
    this.navCtrl.push(GroupPage)
  }

  checkUser(){
   console.log(this.user.id, this.user.email, this.user.token)
  }

}
