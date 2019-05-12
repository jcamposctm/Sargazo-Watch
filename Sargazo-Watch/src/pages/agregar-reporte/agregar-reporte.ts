import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResumenReportePage} from '../resumen-reporte/resumen-reporte';
/**
 * Generated class for the AgregarReportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-reporte',
  templateUrl: 'agregar-reporte.html',
})
export class AgregarReportePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarReportePage');
  }

  resumen_reporte():void{
      this.navCtrl.push(ResumenReportePage);
  }

}
