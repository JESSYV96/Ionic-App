import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionsViewPage } from '../options-view/options-view';
import { QuestionViewPage } from '../question-view/question-view';
import { QuestionListProvider } from '../../providers/question-list/question-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  questionList = this.questions.QuestionsList;
  score  = this.questions.score;
  life = this.questions.life;
  joker = this.questions.joker;

  constructor(
    public navCtrl: NavController,
    private questions: QuestionListProvider,) {

  }
 
 //Redirection vers les vues
  redirectionToOptionViewPage() {
    this.resetGame();
    this.navCtrl.push(OptionsViewPage);
  } 
  redirectionToQuestionViewPage() {
    this.resetGame();
    this.navCtrl.push(QuestionViewPage);
  }
  resetGame() {
      this.score  = 0;
      this.life = 3;
      this.joker = 2;
    }
  
}
