import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecoleccionSemanalPage } from '../recoleccion-semanal/recoleccion-semanal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goRecoleccion(){
    this.navCtrl.push(RecoleccionSemanalPage);
  }

}
