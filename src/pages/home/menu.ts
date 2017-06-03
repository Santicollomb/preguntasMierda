import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  template: `
    <ion-list>
      <button ion-item (click)="abrirEstadisticas()"> Calcular estadisticas</button>
      <button ion-item (click)="abrirMisEstadisticas()">Mis estadisticas</button>
      <button ion-item (click)="close()">Como funciona</button>
      <button ion-item (click)="close()">Acerca de</button>
    </ion-list>
  `
})
export class MenuPage{


  constructor(public navCtrl: NavController) {

  }

}
