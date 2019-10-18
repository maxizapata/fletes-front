import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, RootNode} from 'ionic-angular';
// Pages
import { NamePage } from '../signup/name/name';
import { HomePage } from '../home/home';

// Providers
import { RequestProvider } from '../../providers/request/request';
import { ControllerProvider } from '../../providers/controller/controller';
import { UserProvider } from '../../providers/user/user';
import { LoadPage } from '../load/load';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginData = { username:'', password:'' };
  data: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              private request: RequestProvider,
              private controller: ControllerProvider,
              private user: UserProvider
              ) {}

  doLogin() {
    let headers = {'Content-Type':  'application/json'}
    this.controller.presentLoading('Cargando, por favor espere');
    this.request.requestsPost('login', headers, this.loginData).then((result) => {
      this.data = result;
      localStorage.setItem('token', this.data.token);
      this.navCtrl.setRoot(LoadPage);
      this.controller.dismissLoading()
      this.user.getUserInfo();
    }, (err) => {
      this.controller.dismissLoading();
      this.controller.presentToast('Error de credenciales' + (err));
    });
  }

  goSignup() {
    this.navCtrl.push(NamePage);
  }

  ionViewDidLoad(){
    console.log(this.user.username, this.user.first_name, this.user.token, this.user.verifiedMobile)
    this.user.logout()
  }

  goBack() {
    this.navCtrl.push(HomePage);
  }
  
}