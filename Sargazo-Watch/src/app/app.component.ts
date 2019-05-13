import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm/';

import { HomePage } from '../pages/home/home';
import { RecoleccionAgregarPage } from '../pages/recoleccion-agregar/recoleccion-agregar';
import { ListaLugaresPage } from '../pages/lista-lugares/lista-lugares';
import { LoginPage } from '../pages/login/login';
import { ResumenReportePage } from '../pages/resumen-reporte/resumen-reporte';
import { AgregarReportePage } from '../pages/agregar-reporte/agregar-reporte';
import { DetallesRecoleccionPage } from '../pages/detalles-recoleccion/detalles-recoleccion';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  menuApp = [
    { title: 'Lista Lugares', component: ListaLugaresPage, icon: 'home' },
    { title: 'Reporte', component: ResumenReportePage, icon: '' },
    { title: 'Agregar Reporte', component: AgregarReportePage, icon: '' },
    { title: 'Recoleccion', component: DetallesRecoleccionPage, icon: '' },

  ];
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
  private fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //Notifications
      fcm.subscribeToTopic('all');
      fcm.getToken().then(token=>{
          console.log(token);
      })
      fcm.onNotification().subscribe(data=>{
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      })
      fcm.onTokenRefresh().subscribe(token=>{
        console.log(token);
      });
      //end notifications.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

