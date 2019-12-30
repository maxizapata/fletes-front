import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController, NavController, Nav} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';


@Injectable()
export class ControllerProvider {

  constructor(public http: HttpClient,
    private loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public user: UserProvider) {}

    private loading: any;

    presentLoadingIsActive: boolean = false

    presentLoading(message){
      this.presentLoadingIsActive = true
      this.loading = this.loadingCtrl.create({
        content: message
      })
  
      this.loading.present();
    }
  
    dismissLoading(){
      if (this.presentLoadingIsActive){
        this.loading.dismiss();
      }
    }
  
    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true
      });
  
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
    }
  
    presentAlert(title, message) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['Cerrar']
      });
      alert.present();
    }


  showConfirm(title, message, action, ok_text, cancel_text) {
    const confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Ahora no',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            action();
          }
        }
      ]
    });
    confirm.present();
  }
    
}
