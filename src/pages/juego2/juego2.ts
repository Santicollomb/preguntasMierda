import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-juego2',
  templateUrl: 'juego2.html'
})
export class Juego2Page {

  @ViewChild('slides') slides: any;

     hasAnswered: boolean = false;
     score: number = 0;

     slideOptions: any;
     datos: any

     constructor(public navCtrl: NavController,  public parametros: NavParams) {
        this.datos = this.parametros.get('parametros');
        console.log(this.parametros.get('parametros'))
     }

     ionViewDidLoad() {

         this.slides.lockSwipes(true);

     }

     nextSlide(){
         this.slides.lockSwipes(false);
         this.slides.slideNext();
         this.slides.lockSwipes(true);
     }

     elegirOpcion1(mierda){

         this.hasAnswered = true;
         mierda.flashCardFlipped = true;
         mierda.estadisticas1 + 1;

         setTimeout(() => {
             this.hasAnswered = false;
             this.nextSlide();
             mierda.flashCardFlipped = false;
         }, 3000);
     }

     elegirOpcion2(mierda){

         this.hasAnswered = true;
         mierda.flashCardFlipped2 = true;
         mierda.estadisticas2 + 1;
         console.log(mierda.estadisticas2)

         setTimeout(() => {
             this.hasAnswered = false;
             this.nextSlide();
             mierda.flashCardFlipped2 = false;
         }, 3000);
     }


     restartQuiz() {
         this.score = 0;
         this.slides.lockSwipes(false);
         this.slides.slideTo(1, 1000);
         this.slides.lockSwipes(true);
     }

}
