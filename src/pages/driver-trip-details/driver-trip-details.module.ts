import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverTripDetailsPage } from './driver-trip-details';

@NgModule({
  declarations: [
    DriverTripDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverTripDetailsPage),
  ],
})
export class DriverTripDetailsPageModule {}
