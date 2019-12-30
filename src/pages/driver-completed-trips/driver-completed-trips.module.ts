import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverCompletedTripsPage } from './driver-completed-trips';

@NgModule({
  declarations: [
    DriverCompletedTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverCompletedTripsPage),
  ],
})
export class DriverCompletedTripsPageModule {}
