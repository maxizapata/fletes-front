import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverAddVehiclePage } from './driver-add-vehicle';

@NgModule({
  declarations: [
    DriverAddVehiclePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverAddVehiclePage),
  ],
})
export class DriverAddVehiclePageModule {}
