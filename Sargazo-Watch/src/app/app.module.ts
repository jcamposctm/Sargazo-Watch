import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecoleccionAgregarPage } from '../pages/recoleccion-agregar/recoleccion-agregar';
import { ListaLugaresPage } from '../pages/lista-lugares/lista-lugares';
import { FCM } from '@ionic-native/fcm/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecoleccionAgregarPage,
    ListaLugaresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecoleccionAgregarPage,
    ListaLugaresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FCM ,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
