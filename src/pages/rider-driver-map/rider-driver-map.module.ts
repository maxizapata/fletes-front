import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderDriverMapPage } from './rider-driver-map';

@NgModule({
  declarations: [
    RiderDriverMapPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderDriverMapPage),
  ],
})
export class RiderDriverMapPageModule {}
