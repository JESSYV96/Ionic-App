import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionsViewPage } from './options-view';

@NgModule({
  declarations: [
    OptionsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionsViewPage),
  ],
})
export class OptionsViewPageModule {}
