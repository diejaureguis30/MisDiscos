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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlbumPage,
    BioPage,
    SoudtrackPage,
    RatingPage
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
    RatingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
