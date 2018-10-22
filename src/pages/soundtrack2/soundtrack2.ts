import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Soundtrack2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soundtrack2',
  templateUrl: 'soundtrack2.html',
})
export class Soundtrack2Page {
  Canciones2= ['Jenny was a friend of Mine', 'Mr. Brightside', 'Smile like you mean it', 'Somebody told me', 'all these things that ive done', 'Andy, you are a star', 'On top', 'Change your mind', 'Believe me Natalie', 'Midnight show', 'Everything will be alright'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Soundtrack2Page');
  }

}
