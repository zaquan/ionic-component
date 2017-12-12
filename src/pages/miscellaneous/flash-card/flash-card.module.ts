import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashCardPage } from './flash-card';

@NgModule({
  declarations: [
    FlashCardPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashCardPage),
    SharedModule,
  ],
  exports: [
    FlashCardPage
  ]
})
export class FlashCardPageModule {}
