import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Juego2Page } from '../../pages/juego2/juego2';
import { OpcionesPage } from '../../pages/opciones/opciones';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datos: any

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public dataService: Data) {

    this.dataService.load().then((data) => {

        data.map((preguntas) => {

            return preguntas;

        });

        this.datos = data;

    });

  }

  abrirOpciones() {
    this.navCtrl.push(OpcionesPage);
}

jugar2(){
  this.navCtrl.push(Juego2Page,{
    "parametros": this.datos
  })
}

}
