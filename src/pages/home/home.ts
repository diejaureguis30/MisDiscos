import { Component, ModuleWithComponentFactories } from '@angular/core';
import { NavController, TabHighlight } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { BioPage } from '../bio/bio';
import { SoudtrackPage } from '../soudtrack/soudtrack';
import { RatingPage } from '../rating/rating';
import { Disco2Page } from '../disco2/disco2';
import { Bio2Page } from '../bio2/bio2';
import { RatingsPage } from '../ratings/ratings';
import { Soundtrack2Page } from '../soundtrack2/soundtrack2';
import { Album3Page } from '../album3/album3';
import { Bio3Page } from '../bio3/bio3';
import { Disco3Page } from '../disco3/disco3';
import { Soundtarck3Page } from '../soundtarck3/soundtarck3';
import { Album4Page } from '../album4/album4';
import { Bio4Page } from '../bio4/bio4';
import { Soundtrack4Page } from '../soundtrack4/soundtrack4';
import { Ratings4Page } from '../ratings4/ratings4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alb=AlbumPage;
  Biography=BioPage;
  disc=SoudtrackPage;
  star=RatingPage;
  sound2=Soundtrack2Page;
  disc2=Disco2Page;
  biography2=Bio2Page;
  rat2=RatingsPage;
  alb3=Album3Page;
  biography3=Bio3Page;
  disc3=Disco3Page;
  sound3=Soundtarck3Page;
  alb4=Album4Page;
  biography4=Bio4Page;
  sound4=Soundtrack4Page;
  disc4=Ratings4Page;


  constructor(public navCtrl: NavController) {

  }
  ClickEm(){
    this.navCtrl.push(this.alb);
  }
  Clickbio()
  {
    this.navCtrl.push(this.Biography);
  }
  Clickdisco(){
    this.navCtrl.push(this.disc);
  }
  Clickstar(){
    this.navCtrl.push(this.star);
  }
  ClickKill(){
    this.navCtrl.push(this.disc2);
  }
  Clickdisco2(){
    this.navCtrl.push(this.sound2);
  }
  Clickbio2(){
    this.navCtrl.push(this.biography2);
  }
  Clickstar2(){
    this.navCtrl.push(this.rat2)
  }
  ClickU2(){
    this.navCtrl.push(this.alb3)
  }
  Clickdisco3(){
    this.navCtrl.push(this.sound3)
  }
  Clickbio3(){
    this.navCtrl.push(this.biography3)
  }
  Clickstar3(){
    this.navCtrl.push(this.disc3)
  }
  Clicklady(){
    this.navCtrl.push(this.alb4)
  }
  Clickdisco4(){
    this.navCtrl.push(this.sound4)
  }
  Clickbio4(){
    this.navCtrl.push(this.biography4)
  }
  Clickstar4(){
    this.navCtrl.push(this.disc4)
  }


}
