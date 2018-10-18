import { Component, ModuleWithComponentFactories } from '@angular/core';
import { NavController, TabHighlight } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { BioPage } from '../bio/bio';
import { SoudtrackPage } from '../soudtrack/soudtrack';
import { RatingPage } from '../rating/rating';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alb=AlbumPage;
  Biography=BioPage;
  disc=SoudtrackPage;
  star=RatingPage;


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

}
