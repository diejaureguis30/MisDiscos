import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { BioPage } from '../bio/bio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alb=AlbumPage;
  Biography=BioPage;

  constructor(public navCtrl: NavController) {

  }
  ClickEm(){
    this.navCtrl.push(this.alb);
  }
  Clickbio()
  {
    this.navCtrl.push(this.Biography);
  }

}
