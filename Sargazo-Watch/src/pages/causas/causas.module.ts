import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CausasPage } from './causas';

@NgModule({
  declarations: [
    CausasPage,
  ],
  imports: [
    IonicPageModule.forChild(CausasPage),
  ],
})
export class CausasPageModule {}
