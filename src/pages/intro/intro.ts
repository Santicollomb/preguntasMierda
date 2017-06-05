import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slides = [
    {
      title: "Bienvenido a Preguntas De Mierda",
      description: "Un juego en el que tendras que tomar desiciones importantes",
      image: "assets/caca.png",
    },
    {
      title: "Como funciona?",
      description: "Solo apreta en jugar y comenzá a divertirte",
      image: "assets/caca.png",
    },
    {
      title: "Compará",
      description: "Elegí la opción que prefieras y comparala con el resto de los usua",
      image: "assets/caca.png",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  irAlInicio(){
    this.navCtrl.setRoot('Tabs');
  }

}
