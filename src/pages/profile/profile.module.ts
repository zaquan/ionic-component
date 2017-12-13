import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileListPage } from './profile';

@NgModule({
  declarations: [
    ProfileListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileListPage),
  ],
  exports: [
    ProfileListPage
  ]
})
export class ProfilePageModule {}
