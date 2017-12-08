import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MiscellaneousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-miscellaneous',
  templateUrl: 'miscellaneous.html',
})
export class MiscellaneousPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: 'Autosizing Textarea',
        page: 'AutosizingTextarea'
      },
      {
        title: 'Blog Post',
        page: 'BlogPostPage'
      },
      {
        title: 'Charts',
        page: 'ChartsPage'
      },
      {
        title: 'Chat',
        page: 'ChatsPage'
      },
      {
        title: 'Concert Card',
        page: 'ConcertCardPage'
      },
      {
        title: 'Countdown',
        page: 'CountdownPage'
      },
      {
        title: 'Expandable Header',
        page: 'ExpandableHeaderPage'
      },
      {
        title: 'Flash Card',
        page: 'FlashCardPage'
      },
      {
        title: 'Pinterest Masonry Cards',
        page: 'MasonryCardsPage'
      },
      {
        title: 'Real Estate Listing',
        page: 'RealEstateListingPage'
      },
      {
        title: 'Testimonials',
        page: 'TestimonialsPage'
      },
      {
        title: 'Tinder Cards',
        page: 'TinderCardsPage'
      },
      {
        title: 'Item Ribbon',
        page: 'ItemRibbonPage'
      },
    ];    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiscellaneousPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }  

}
