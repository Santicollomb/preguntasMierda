import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MenuPage } from '../../pages/home/menu';
import { Juego2Page } from '../../pages/juego2/juego2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  abrirMenu(myEvent) {
  let popover = this.popoverCtrl.create(MenuPage);
  popover.present({
    ev: myEvent
  });
}

jugar2(){
  this.navCtrl.push(Juego2Page)
}

}
