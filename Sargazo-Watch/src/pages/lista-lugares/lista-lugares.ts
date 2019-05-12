import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecoleccionAgregarPage } from '../recoleccion-agregar/recoleccion-agregar';

@IonicPage()
@Component({
  selector: 'page-lista-lugares',
  templateUrl: 'lista-lugares.html',
})
export class ListaLugaresPage {
  listaLugares = [
    {
      nombre: 'Cancun',
      url: 'assets/imgs/Cancun.jpg',
    },
    {
      nombre: 'Playa del carmen',
      url: 'assets/imgs/Playa-del-Carmenn-660x330.jpg',
    }
  ];
  realItems: any =this.listaLugares;
  nRes: number = 16;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.realItems = this.listaLugares;
  }

  onInput(event) {
    if (event.srcElement.value != "" && event.srcElement.value != null) {
      let str = (event.srcElement.value as string);
      this.realItems = (this.listaLugares as any[]).filter(
        f => (f.nombre as String).toUpperCase().includes(str.toUpperCase())
      ).slice(0, this.nRes);
    }
    else
      this.realItems = (this.listaLugares as any[]).slice(0, this.nRes);
  }
  onCancel() {
    this.realItems = (this.listaLugares as any[]).slice(0, this.nRes);
  }
  onClear() {
    this.realItems = (this.listaLugares as any[]).slice(0, this.nRes);
  }

  goToRecoleccion(nombre) {
    this.navCtrl.push(RecoleccionAgregarPage, {nombre: nombre});
  }

}
