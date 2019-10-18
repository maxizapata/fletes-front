import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneValidatePage } from './phone-validate';

@NgModule({
  declarations: [
    PhoneValidatePage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneValidatePage),
  ],
})
export class PhoneValidatePageModule {}
