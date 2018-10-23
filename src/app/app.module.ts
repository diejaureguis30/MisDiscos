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
import { Disco3Page } from '../pages/disco3/disco3';
import { Bio3Page } from '../pages/bio3/bio3';
import { Soundtarck3Page } from '../pages/soundtarck3/soundtarck3';
import { Album3Page } from '../pages/album3/album3';
import { Soundtrack4Page } from '../pages/soundtrack4/soundtrack4';
import { Bio4Page } from '../pages/bio4/bio4';
import { Album4Page } from '../pages/album4/album4';
import { Ratings4Page } from '../pages/ratings4/ratings4';

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
    Soundtrack2Page,
    Disco3Page,
    Bio3Page,
    Soundtarck3Page,
    Album3Page,
    Soundtrack4Page,
    Bio4Page,
    Album4Page,
    Ratings4Page
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
    Soundtrack2Page,
    Soundtarck3Page,
    Album3Page,
    Disco3Page,
    Bio3Page,
    Soundtrack4Page,
    Bio4Page,
    Album4Page,
    Ratings4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
