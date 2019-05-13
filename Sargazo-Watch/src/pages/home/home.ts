import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecoleccionSemanalPage } from '../recoleccion-semanal/recoleccion-semanal';
import { CausasPage } from '../causas/causas';
import { CosecuenciasPage } from '../cosecuencias/cosecuencias';
import { PrevencionPage } from '../prevencion/prevencion';
import { UsosPage } from '../usos/usos';
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

  goCausas(){
    this.navCtrl.push(CausasPage);
  }

  goConsecuencias(){
    this.navCtrl.push(CosecuenciasPage);
  }

  goPrevencion(){
    this.navCtrl.push(PrevencionPage);
  }

  goUsos(){
    this.navCtrl.push(UsosPage);
  }


}
