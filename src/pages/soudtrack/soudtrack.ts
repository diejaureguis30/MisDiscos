import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SoudtrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soudtrack',
  templateUrl: 'soudtrack.html',
})
export class SoudtrackPage {
  Canciones= ['Intro', 'FACK', 'The way I am', 'My Name is', 'Stan', 'Lose Yourself', 'Shake That', 'Sing for the Moment', 'Without Me', 'Like Toy Soldiers', 'The Real Slim shady', 'Mockingbird', 'Guilty Consience', 'Cleanin out my closet', 'Just Lose it', 'When I´m gone', 'Stan (live)'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoudtrackPage');
  }

}
