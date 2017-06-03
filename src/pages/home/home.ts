import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MenuPage } from '../../pages/home/menu';
import { JuegoPage } from '../../pages/juego/juego';


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

jugar(){
  this.navCtrl.push(JuegoPage)
}

}
