import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableHeaderPage } from './expandable-header';

@NgModule({
  declarations: [
    ExpandableHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpandableHeaderPage),
    SharedModule,
  ],
  exports: [
    ExpandableHeaderPage
  ]
})
export class ExpandableHeaderPageModule {}
