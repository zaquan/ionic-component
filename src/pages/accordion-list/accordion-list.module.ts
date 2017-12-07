import { SharedModule } from '../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccordionListPage } from './accordion-list';

@NgModule({
  declarations: [
    AccordionListPage,
  ],
  imports: [
    IonicPageModule.forChild(AccordionListPage),
    SharedModule
  ],
  exports: [
    AccordionListPage
  ]  
})
export class AccordionListPageModule {}
