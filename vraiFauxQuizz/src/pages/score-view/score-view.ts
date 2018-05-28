import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionListProvider } from '../../providers/question-list/question-list';
//import { QuestionViewPage } from '../question-view/question-view';

@IonicPage()
@Component({
  selector: 'page-score-view',
  templateUrl: 'score-view.html',
})
export class ScoreViewPage {
  score: number = this.questions.score;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private questions: QuestionListProvider) {
  }
  home() {
    this.navCtrl.popToRoot();
  }

}
