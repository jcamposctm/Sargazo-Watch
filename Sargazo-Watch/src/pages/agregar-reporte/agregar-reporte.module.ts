import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarReportePage } from './agregar-reporte';

@NgModule({
  declarations: [
    AgregarReportePage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarReportePage),
  ],
})
export class AgregarReportePageModule {}
