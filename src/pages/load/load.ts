import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ControllerProvider } from '../../providers/controller/controller';
import { PhoneNumberPage } from '../phone-number/phone-number';
import { DriverHomePage } from '../driver-home/driver-home';
import { LoginPage } from '../login/login';
import { PhoneValidatePage } from '../phone-validate/phone-validate';
import { HomePage } from '../home/home';
import { VehicleProvider } from '../../providers/vehicle/vehicle';
import { RiderHomePage } from '../rider-home/rider-home';

@IonicPage()
@Component({
  selector: 'page-load',
  templateUrl: 'load.html',
})
export class LoadPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public controller: ControllerProvider,
              public vehicles: VehicleProvider) {}

  ionViewDidLoad(){
    if (this.user.isAuthenticated()){
      // Si esta autenticado verificamos el grupo
      // para definir a que pagina redireccionar
      this.getGroup()
    }
    else {
      // Si no esta autenticado se va al home
      this.navCtrl.setRoot(HomePage, {userinfo: true})
    }
  }

  getGroup(){
    console.log('Estamos en get Group')
    // Cargamos la lista de los vehiculos
    if (this.user.group){
      console.log('Hay grupo')
      this.vehicles.getListVehicles()
      // Si esta definido el grupo verificamos cual es
      if (this.user.verifiedMobile){
        console.log('El numero esta verificado')
        this.driverOrRider()
      } else {
        console.log('El numero no esta verificado')
        this.navCtrl.push(PhoneNumberPage)
      }
    } else {
      console.log('Volvemos a cargar')
      // Si aun no esta cargado volvemos a cargar la pagina
      // hasta tener la info
      this.navCtrl.setRoot(LoadPage)
    }
  }

  driverOrRider(){
    if (this.user.group === 'driver'){
      this.vehicles.getDriverVehicles()
      this.navCtrl.setRoot(DriverHomePage);
    } else if (this.user.group === 'rider'){
      this.navCtrl.setRoot(RiderHomePage)
    }
  }


}
