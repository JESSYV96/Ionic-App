import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionsViewPage } from '../options-view/options-view';
import { QuestionViewPage } from '../question-view/question-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 //Redirection vers les vues
  redirectionToOptionViewPage() {
    this.navCtrl.push(OptionsViewPage);
  } 
  redirectionToQuestionViewPage() {
    this.navCtrl.push(QuestionViewPage);
  }
}
