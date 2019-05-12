import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalles-recoleccion',
  templateUrl: 'detalles-recoleccion.html',
})
export class DetallesRecoleccionPage {

  public datos: any;
  public kg: any;
  public lugar: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datos = this.navParams.get('data');
    console.log(this.datos);
    this.getDatos();
  }

  getDatos(){
    this.kg = this.datos.peso;
    console.log(this.kg);
    this.lugar = this.datos.lugar;
    console.log(this.lugar);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesRecoleccionPage');
  }

}
