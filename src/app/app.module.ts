import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlbumPage } from '../pages/album/album';
import { BioPage } from '../pages/bio/bio';
import { SoudtrackPage } from '../pages/soudtrack/soudtrack';
import { RatingPage } from '../pages/rating/rating';
import { Disco2Page } from '../pages/disco2/disco2';
import { RatingsPage } from '../pages/ratings/ratings';
import { Bio2Page } from '../pages/bio2/bio2';
import { Soundtrack2Page } from '../pages/soundtrack2/soundtrack2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlbumPage,
    BioPage,
    SoudtrackPage,
    RatingPage,
    Disco2Page,
    RatingsPage,
    Bio2Page,
    Soundtrack2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlbumPage,
    BioPage,
    SoudtrackPage,
    RatingPage,
    Disco2Page,
    RatingsPage,
    Bio2Page,
    Soundtrack2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
