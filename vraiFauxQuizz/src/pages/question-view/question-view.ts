import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionListProvider } from '../../providers/question-list/question-list';
import { Question } from '../../modal/Question';
import { AlertController } from 'ionic-angular';
import { ScoreViewPage } from '../score-view/score-view';

@IonicPage()
@Component({
  selector: 'page-question-view',
  templateUrl: 'question-view.html',
})
export class QuestionViewPage {
  score: number = this.questions.score;
  life: number = this.questions.life;
  joker: number = this.questions.joker;
  imgMarkupLife: string = '';
  imgMarkupJoker: string = '';
  question: string;
  questionList: Question[] = this.questions.QuestionsList;
  currentQuestion: any = null;
  answerimg: string;
  answertext: string;
  answergood: string;
  display_current: boolean = true;
  colorTrue: string = '#3bd646';
  colorFalse: string = '#f42222';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private questions: QuestionListProvider,
    private alert: AlertController) { }

  // wrongResponse() {
  //   let markup = '';
  //   this.imgMarkup = '<img width="20" height="20" src="assets/imgs/joker.png"/>';
  //   this.life = 3;
  //   for(let i = 3; i <= this.life; i--) {
  //     markup += this.imgMarkup;
  //   }  
  // }
  displayLife() {
    for(let i = 0; i < this.life; i++) {
      this.imgMarkupLife += '<img class="space-leftRight-heart" width="27" height="27" src="assets/imgs/coeur.png"/>';
    }
  }
  loseLife() {
    this.life = this.life -= 1;
    this.questions.life = this.life;
    this.imgMarkupLife = '';
    this.displayLife();     
  }
  displayJoker() {
    for(let i = 0; i < this.joker; i++) {
      this.imgMarkupJoker += '<img width="45" height="45" src="assets/imgs/joker.png"/>';
    }
    
  }
  loseJoker() {
    this.joker = this.joker -= 1;
    this.questions.joker = this.joker;
    this.imgMarkupJoker = '';
    this.displayJoker();
    if(this.questions.joker == 0) {
      
    }
  }
  displayOneQuestion() {
      let numRandom = Math.floor(Math.random() * this.questionList.length);
      let questionRandom = this.questionList[numRandom].getTitle();
      this.currentQuestion = this.questionList[numRandom];
      return questionRandom;
  }
  checkResponse(val: boolean) {
    if (val === this.currentQuestion.response) {
      this.answertext = 'Bonne réponse !'
      this.answerimg = "/assets/imgs/correct.png";
      this.setScore();
      this.answergood = '';
      this.display_current = false;
    } else {
      this.answertext = 'Mauvaise réponse !'
      this.answerimg = "/assets/imgs/wrong.png";
      this.answergood = this.currentQuestion.getGoodAnswer();
      this.loseLife();
      this.display_current = false;
    }
  }
  setQuestionList() {
    let questionList = this.questionList;
    let questionListIndex = this.questionList.indexOf(this.currentQuestion);
    let questionListSpliced = questionList.splice(questionListIndex , 1);
    console.log(questionList);
    console.log(questionListSpliced);
  }
  setScore() {
    this.score = this.score += 1;
    this.questions.score = this.score;
    return this.questions.score;
  }
  
  colorTrueFalse() {
    if(this.answertext === 'Bonne réponse !') {
      console.log('geen');

    } 
    if(this.answertext === 'Mauvaise réponse !') {
      console.log('red');
      
    }
  }
  nextQuestion() {
    this.setQuestionList()
    this.navCtrl.push(QuestionViewPage);
  }
  showAlert() {
    let alertJoker = this.alert.create({
      title: 'Joker !',
      subTitle: 'Souhaitez-vous passer à la question suivante ?',
      buttons: [
        {
          text: 'Boff...',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'J\'suis déter !',
          handler: () => {
            this.loseJoker();
            this.setQuestionList();
            this.navCtrl.push(QuestionViewPage);
            console.log('Agree clicked');
            this.answertext = 'Joker !';
          }
        }
      ]
    });
    alertJoker.present();
  }

  gameOver() {
    if(this.life == 0 || this.questionList.length == 0) {
        let alert = this.alert.create({
          title: 'Le jeu est terminé !',
          buttons: [
            {
              text: 'Voir le score',
              handler: data => {
                this.navCtrl.push(ScoreViewPage);
              }
            },
          ]
        });
        alert.present();
      
    }
  }

  //Life Cycle
  ionViewDidLoad() {
  
  }
   ionViewWillEnter() {
    this.question = this.displayOneQuestion(); 
    this.displayLife();
    this.displayJoker();
  }

  ionViewDidEnter() {
    this.gameOver();
  }
}


