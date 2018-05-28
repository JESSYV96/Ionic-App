import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreViewPage } from './score-view';

@NgModule({
  declarations: [
    ScoreViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoreViewPage),
  ],
})
export class ScoreViewPageModule {}
