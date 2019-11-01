import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderDriverlistPage } from './rider-driverlist';

@NgModule({
  declarations: [
    RiderDriverlistPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderDriverlistPage),
  ],
})
export class RiderDriverlistPageModule {}
