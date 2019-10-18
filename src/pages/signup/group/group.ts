import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NamePage } from '../name/name';
import { UserProvider } from '../../../providers/user/user'

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider) {
  }

  goName(){
    this.navCtrl.push(NamePage)
  }

}
