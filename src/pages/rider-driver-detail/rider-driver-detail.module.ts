import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderDriverDetailPage } from './rider-driver-detail';

@NgModule({
  declarations: [
    RiderDriverDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderDriverDetailPage),
  ],
})
export class RiderDriverDetailPageModule {}
