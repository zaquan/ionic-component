// Providers

// Ionic native providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Directives
import { Autosize } from '../components/autosize/autosize';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

export const MODULES = [
  BrowserModule,
  HttpClientModule,
];

export const PROVIDERS = [
    // Ionic native specific providers
    StatusBar,
    SplashScreen,    
];

export const DIRECTIVES = [
  Autosize,
];
