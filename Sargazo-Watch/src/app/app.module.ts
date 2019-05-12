import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgregarReportePage } from '../pages/agregar-reporte/agregar-reporte';
import { DetallesRecoleccionPage } from '../pages/detalles-recoleccion/detalles-recoleccion';
import { RecoleccionSemanalPage } from '../pages/recoleccion-semanal/recoleccion-semanal';
import { RecoleccionAgregarPage } from '../pages/recoleccion-agregar/recoleccion-agregar';
import { CausasPage } from '../pages/causas/causas';
import { CosecuenciasPage } from '../pages/cosecuencias/cosecuencias';
import { PrevencionPage } from '../pages/prevencion/prevencion';
import { UsosPage } from '../pages/usos/usos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarReportePage,
    DetallesRecoleccionPage,
    RecoleccionAgregarPage,
    RecoleccionSemanalPage,
    CausasPage,
    CosecuenciasPage,
    PrevencionPage,
    UsosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarReportePage,
    DetallesRecoleccionPage,
    RecoleccionAgregarPage,
    RecoleccionSemanalPage,
    CausasPage,
    CosecuenciasPage,
    PrevencionPage,
    UsosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
