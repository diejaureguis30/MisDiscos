import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumPage } from '../album/album';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alb=AlbumPage;

  constructor(public navCtrl: NavController) {

  }
  ClickEm(){
    this.navCtrl.push(this.alb);
  }

}
