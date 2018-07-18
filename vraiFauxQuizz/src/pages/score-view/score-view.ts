import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionListProvider } from '../../providers/question-list/question-list';
import { Question } from '../../modal/Question';
//import { QuestionViewPage } from '../question-view/question-view';

@IonicPage()
@Component({
  selector: 'page-score-view',
  templateUrl: 'score-view.html',
})
export class ScoreViewPage {
  questionList = this.questions.QuestionsList;
  score  = this.questions.score;
  life = this.questions.life;
  joker = this.questions.joker;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private questions: QuestionListProvider) {
  }
 
  home() {
    this.navCtrl.popToRoot();
  }

  
}
