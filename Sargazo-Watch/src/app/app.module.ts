import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecoleccionSemanalPage } from '../pages/recoleccion-semanal/recoleccion-semanal';
import { DetallesRecoleccionPage } from '../pages/detalles-recoleccion/detalles-recoleccion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecoleccionSemanalPage,
    DetallesRecoleccionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecoleccionSemanalPage,
    DetallesRecoleccionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
