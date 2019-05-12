import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgregarReportePage } from '../agregar-reporte/agregar-reporte';
/**
 * Generated class for the ResumenReportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumen-reporte',
  templateUrl: 'resumen-reporte.html',
})
export class ResumenReportePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumenReportePage');
  }

  agregar_reporte():void{
    this.navCtrl.push(AgregarReportePage);
}

}
