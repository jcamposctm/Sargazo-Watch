import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLugaresPage } from './lista-lugares';

@NgModule({
  declarations: [
    ListaLugaresPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLugaresPage),
  ],
})
export class ListaLugaresPageModule {}
