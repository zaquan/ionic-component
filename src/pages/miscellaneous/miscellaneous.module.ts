import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiscellaneousPage } from './miscellaneous';

@NgModule({
  declarations: [
    MiscellaneousPage,
  ],
  imports: [
    IonicPageModule.forChild(MiscellaneousPage),
  ],
  exports: [
    MiscellaneousPage
  ]  
})
export class MiscellaneousPageModule {}
