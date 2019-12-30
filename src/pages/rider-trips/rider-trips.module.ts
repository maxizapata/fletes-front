import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderTripsPage } from './rider-trips';

@NgModule({
  declarations: [
    RiderTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderTripsPage),
  ],
})
export class RiderTripsPageModule {}
