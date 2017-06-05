import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-juego2',
  templateUrl: 'juego2.html'
})
export class Juego2Page {

  @ViewChild('slides') slides: any;

     hasAnswered: boolean = false;
     score: number = 0;

     slideOptions: any;
     questions: any;

     constructor(public navCtrl: NavController, public dataService: Data) {

     }

     ionViewDidLoad() {

         this.slides.lockSwipes(true);

         this.dataService.load().then((data) => {

             data.map((preguntas) => {

                 return preguntas;

             });

             this.questions = data;

         });

     }

     nextSlide(){
         this.slides.lockSwipes(false);
         this.slides.slideNext();
         this.slides.lockSwipes(true);
     }

     elegirOpcion1(question){

         this.hasAnswered = true;
         question.flashCardFlipped = true;
         question.estadisticas1 + 1;

         setTimeout(() => {
             this.hasAnswered = false;
             this.nextSlide();
             question.flashCardFlipped = false;
         }, 3000);
     }

     elegirOpcion2(question){

         this.hasAnswered = true;
         question.flashCardFlipped2 = true;
         question.estadisticas2 + 1;
         console.log(question.estadisticas2)

         setTimeout(() => {
             this.hasAnswered = false;
             this.nextSlide();
             question.flashCardFlipped2 = false;
         }, 3000);
     }


     restartQuiz() {
         this.score = 0;
         this.slides.lockSwipes(false);
         this.slides.slideTo(1, 1000);
         this.slides.lockSwipes(true);
     }

}
