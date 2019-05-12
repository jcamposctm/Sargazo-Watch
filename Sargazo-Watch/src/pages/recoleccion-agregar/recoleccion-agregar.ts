import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google;
@IonicPage()
@Component({
  selector: 'page-recoleccion-agregar',
  templateUrl: 'recoleccion-agregar.html',
})
export class RecoleccionAgregarPage {
  nombre;
  map: any;
  selectOptions = {
    title: 'Selecciona una opcion',
    mode: 'ios'
  };
  herramientas = [
    'Palas',
    'Cubetas',
    'Rastrillos'
  ];

  maquinarias = [
    'Tractor Camion',
    'Volquete'
  ]

  embarcaciones = [
    'Sumbarino',
    'Buque'
  ]
  @ViewChild('map') mapElement: ElementRef;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ) {
      this.nombre = this.navParams.get('nombre');
  }

  ionViewDidLoad() {
   this.map =  this.loadMap();
  }


  loadMap() {
    let map = new google.maps.Map(this.mapElement.nativeElement,{
      zoom: 14,
      center: {lat: 18.5001889, lng: -88.296146},
      disableDefaultUI: false,
      scaleControl: true,
      mapTypeControl: false,
      streeViewControl: false,
      fullscreenControl: false,
      zoomControl: true
    });

    return map;

  }

}
