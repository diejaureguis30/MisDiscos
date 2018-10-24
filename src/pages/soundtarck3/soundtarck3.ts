import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Soundtarck3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soundtarck3',
  templateUrl: 'soundtarck3.html',
})
export class Soundtarck3Page {
  Canciones3= ['Love is all we have left', 'Lights of home',"You're the best thing about me", 'Get out of your own way', 'American Soul', 'Summer of love','Red flag day','The showman (little more better)', 'The little things that you give away', 'Landlady', 'The Blackout', "Love is biger than anything in it's way", "13 (There's a light)", 'Ordinary love (Extraordinary mix)', 'Book of your heart', "Light's of home (st peter’s string version)"] ;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Soundtarck3Page');
  }

}
