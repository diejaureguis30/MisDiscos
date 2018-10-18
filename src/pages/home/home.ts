import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { BioPage } from '../bio/bio';
import { SoudtrackPage } from '../soudtrack/soudtrack';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alb=AlbumPage;
  Biography=BioPage;
  disc=SoudtrackPage;

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

}
