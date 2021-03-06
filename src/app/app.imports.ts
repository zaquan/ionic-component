// Global state (used for theming)
// Global state (used for theming)
import { AppState } from './app.global';

// Providers
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';

// Ionic native providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { CardIO } from '@ionic-native/card-io';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GoogleMaps } from '@ionic-native/google-maps';

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
  AlertService,
  ToastService,
  CameraProvider,
  NativeGoogleMapsProvider,
  AppState,
  
  // Ionic native specific providers
  CardIO,
  BarcodeScanner,
  Camera,  
  Geolocation,
  StatusBar,
  SplashScreen,
  GoogleMaps    
];

export const DIRECTIVES = [
  Autosize,
];
