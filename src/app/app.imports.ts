// Providers
import { ToastService } from '../providers/util/toast.service';

// Ionic native providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Directives
import { Autosize } from '../components/autosize/autosize';

// Modules
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

export const MODULES = [
  SwingModule,
  BrowserModule,
  HttpClientModule,
];

export const PROVIDERS = [
  ToastService,
  
  // Ionic native specific providers
  StatusBar,
  SplashScreen,    
];

export const DIRECTIVES = [
  Autosize,
];
