import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }    from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/home/menu';
import { Juego2Page } from '../pages/juego2/juego2';
import { IntroPage } from '../pages/intro/intro'

import { FlashCardComponent } from '../components/flash-card/flash-card'
import { Data } from '../providers/data';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    FlashCardComponent,
    Juego2Page,
    IntroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    Juego2Page,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
