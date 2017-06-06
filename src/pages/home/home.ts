import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Juego2Page } from '../../pages/juego2/juego2';
import { OpcionesPage } from '../../pages/opciones/opciones';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  abrirOpciones() {
    this.navCtrl.push(OpcionesPage);
}

jugar2(){
  this.navCtrl.push(Juego2Page)
}

}
