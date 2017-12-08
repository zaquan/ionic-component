import { ComponentsModule } from '../components/components.module';
import { DIRECTIVES } from './app.imports';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    DIRECTIVES,
  ],
  imports: [
    IonicModule,
    ComponentsModule,
  ],
  exports: [
    ComponentsModule,
  ]
})

export class SharedModule { }