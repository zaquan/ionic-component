import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';

// Side Menu Component
import { SideMenuContentComponent } from './../shared/side-menu-content/side-menu-content.component';
import { SideMenuSettings } from './../shared/side-menu-content/models/side-menu-settings';
import { MenuOptionModel } from './../shared/side-menu-content/models/menu-option-model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

	// Get the instance to call the public methods
	@ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;  

  rootPage:any = 'HomePage';
  activePage = new Subject();

	// Options to show in the SideMenuComponent
  public options: Array<MenuOptionModel>;
  
	// Settings for the SideMenuComponent
	public sideMenuSettings: SideMenuSettings = {
		accordionMode: true,
		showSelectedOption: true,
		selectedOptionClass: 'active-side-menu-option',
		subOptionIndentation: {
			md: '56px',
			ios: '64px',
			wp: '56px'
		}
	};  

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
	rightMenuItems: Array<{ icon: string, active: boolean }>;
	multiLevelItems;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
		private menuCtrl: MenuController,
		public global: AppState,    
  ) {
    platform.ready().then(() => {
			this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'analytics', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ];    

    this.pages = [
			{ title: 'Home', component: 'HomePage', active: true, icon: 'home' },
			{ title: 'Side Menu', component: 'SideMenuPage', active: false, icon: 'bookmark' },
			{ title: 'Accordion List', component: 'AccordionListPage', active: false, icon: 'map' },
			{ title: 'Login List', component: 'LoginPage', active: false, icon: 'archive' },
			{ title: 'Lists', component: 'ListPage', active: false, icon: 'body' },
			{ title: 'Miscellaneous', component: 'MiscellaneousPage', active: false, icon: 'bookmarks' },
      { title: 'Ionic Official Components', component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
      { title: 'Ionic Native Features', component: 'IonicNativePage', active: false, icon: 'ionic' },
      { title: 'Modal with Navigation', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
      { title: 'Popup Fab', component: 'PopupFabPage', active: false, icon: 'map' },
      { title: 'Popup Modal', component: 'PopupModalPage', active: false, icon: 'basket' },
      { title: 'Popup Menu', component: 'PopupMenuListPage', active: false, icon: 'beer' },
      { title: 'Profile', component: 'ProfileListPage', active: false, icon: 'camera' },
      { title: 'Side Menu', component: 'SideMenuPage', active: false, icon: 'bookmark' },
      { title: 'Timeline', component: 'TimelinePage', active: false, icon: 'calendar' },
      { title: 'Slides', component: 'SlidesPage', active: false, icon: 'contact' },
      { title: 'Theming', component: 'ThemingPage', active: false, icon: 'power' },
		];

		this.multiLevelItems = [
			{ displayName: 'Home', component: 'HomePage', active: false, iconName: 'home', selected: true },
			{ displayName: 'Side Menu', component: 'SideMenuPage', active: false, iconName: 'menu'},
			{ displayName: 'Accordion List', component: 'AccordionListPage', active: false, iconName: 'map'},
			{ displayName: 'Login List', component: 'LoginPage', active: false, iconName: 'archive'},
			{ displayName: 'Lists', component: 'ListPage', active: false, iconName: 'body'},
			{ displayName: 'Miscellaneous', component: 'MiscellaneousPage', active: false, iconName: 'bookmarks'},
			{ displayName: 'Popup Modal', component: 'PopupModalPage', active: false, iconName: 'basket'},
			{ displayName: 'Profile', component: 'ProfileListPage', active: false, iconName: 'camera'},
			{ displayName: 'Slides', component: 'SlidesPage', active: false, iconName: 'contact'},
			{ displayName: 'Theming', component: 'ThemingPage', active: false, iconName: 'power'},
			{ displayName: 'Sub options with icons', subItems: [
				{	displayName: 'Sub Option 1', component: 'DetailsPage', iconName: 'basket'},
				{	displayName: 'Sub Option 2', component: 'DetailsPage', iconName: 'bookmark'}
			]},
			{ displayName: 'Sub options without icons', subItems: [
				{	displayName: 'Sub Option 3', component: 'DetailsPage' },
				{	displayName: 'Sub Option 4', component: 'DetailsPage' }
			]},
			{ displayName: 'Special options', subItems: [
				{	displayName: 'Login', iconName: 'log-in', custom: { isLogin: true } },
				{	displayName: 'Logout', iconName: 'log-out', custom: { isLogout: true } },
				{	displayName: 'Open google', iconName: 'globe', custom: 
					{ isExternalLink: true, externalUrl: 'http://www.google.com' }
				},
			]},						
		];
		


    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
    
		// Initialize some options
		this.initializeOptions();    

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
  
  
	private initializeOptions(): void {
		this.options = new Array<MenuOptionModel>();
		this.options=this.multiLevelItems;
	}

	public selectOption(option: MenuOptionModel): void {
		this.menuCtrl.close().then(() => {
			if (option.custom && option.custom.isLogin) {
				this.presentAlert('You\'ve clicked the login option!');
			} else if (option.custom && option.custom.isLogout) {
				this.presentAlert('You\'ve clicked the logout option!');
			} else if (option.custom && option.custom.isExternalLink) {
				let url = option.custom.externalUrl;
				window.open(url, '_blank');
			} else {
				// Redirect to the selected page
				this.nav.setRoot(option.component || 'HomePage', { 'title': option.displayName });
			}
		});
	}
	
	public collapseMenuOptions(): void {
		this.sideMenu.collapseAllOptions();
  }
  
	public presentAlert(message: string): void {
		let alert = this.alertCtrl.create({
			title: 'Information',
			message: message,
			buttons: ['Ok']
		});
		alert.present();
	}  

}

