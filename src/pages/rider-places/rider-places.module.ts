import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderPlacesPage } from './rider-places';

@NgModule({
  declarations: [
    RiderPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderPlacesPage),
  ],
})
export class RiderPlacesPageModule {}
