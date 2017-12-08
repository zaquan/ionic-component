import { SharedModule } from './shared.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';

// Custom components
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';

@NgModule({
  declarations: [
    MyApp,

    // Side menu custom component
    SideMenuContentComponent    
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [PROVIDERS, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
