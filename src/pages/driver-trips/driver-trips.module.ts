import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverTripsPage } from './driver-trips';

@NgModule({
  declarations: [
    DriverTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverTripsPage),
  ],
})
export class DriverTripsPageModule {}
