import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = 'ListsPage';
    this.items = [
      {
        title: 'Settings',
        page : 'SettingsListPage'
      },
      {
        title: 'Sliding Item',
        page : 'SlidingItemPage'
      },
      {
        title: 'Delete Items',
        page: 'DeleteItemsPage'
      }
    ];    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }  

}
