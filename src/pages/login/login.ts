import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = 'LoginListPage';
    this.items = [
      {
        title: 'Type one',
        page:  'LoginOnePage'
      },
      {
        title: 'Instagram style',
        page:  'LoginInstagramPage'
      },
      {
        title: 'Login with slider text',
        page:  'LoginSliderPage'
      },
      {
        title: 'Login with video background',
        page:  'LoginBackgroundVideoPage'
      },
      {
        title: 'Login with slider background',
        page:  'LoginBackgroundSliderPage'
      },
    ];    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }  

}
