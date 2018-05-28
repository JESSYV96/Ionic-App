import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OptionsViewPage } from '../pages/options-view/options-view';
import { QuestionViewPage } from '../pages/question-view/question-view';
import { QuestionListProvider } from '../providers/question-list/question-list';
import { ScoreViewPage } from '../pages/score-view/score-view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OptionsViewPage,
    QuestionViewPage,
    ScoreViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OptionsViewPage,
    QuestionViewPage,
    ScoreViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionListProvider
  ]
})
export class AppModule {}
