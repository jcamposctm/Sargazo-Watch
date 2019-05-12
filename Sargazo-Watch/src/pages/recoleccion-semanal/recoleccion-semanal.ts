import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallesRecoleccionPage } from '../detalles-recoleccion/detalles-recoleccion';



@IonicPage()
@Component({
  selector: 'page-recoleccion-semanal',
  templateUrl: 'recoleccion-semanal.html',
})
export class RecoleccionSemanalPage {

  public datos: any [] = [
    {lugar: 'Mahahual', peso: 1000  },
    {lugar: 'Cancun', peso: 920  },
    {lugar: 'Playa del Carmen', peso: 780 },
    {lugar: 'Xcalak', peso: 871  }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoleccionSemanalPage');
  }

  goDetalles(datos){
    this.navCtrl.push(DetallesRecoleccionPage, {data: datos} )
  }

}
