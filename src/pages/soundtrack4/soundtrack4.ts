import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Soundtrack4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soundtrack4',
  templateUrl: 'soundtrack4.html',
})
export class Soundtrack4Page {
  Canciones4= ['Diamond-heart','A-Yo', 'Joanne','John Wayne',"Dancin' in circles",'Perfect Illusion','Million reasons', "Siner's pray", 'Come to Mama', 'Hey Girl', 'Angel Down', 'Gingio girls', 'Just another day','Angel down (work tape)'];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Soundtrack4Page');
  }

}
