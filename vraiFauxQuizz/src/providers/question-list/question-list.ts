import { Injectable } from '@angular/core';
import { Question } from '../../modal/Question';


@Injectable()
export class QuestionListProvider {
  
  score: number = 0;
  life: number = 3;
  joker: number = 2;


  constructor() { }

  QuestionsList: Question[] = [
    new Question(1,'LeBron James joue au Chicago', 'Sport', 'Facile', false, 'Il joue actuellement avec Cleavland'),
    new Question(2, 'La France a gagné 5 coupes du monde', 'Sport', 'Facile', false, 'La france à gagné 1 coupe du monde en 1998.'),
    new Question(3, 'Tony Parker a joué en NBA', 'sport', 'Facile', true, 'Il a joué avec San Antonio.'),
    new Question(4, 'Rafael Nadal joue au base-ball', 'Sport', 'Facile', false, 'Il joue au tennis'),
    new Question(5, 'Le basket est un meilleur sport que le football','Sport', 'Facile', true, 'Le basket est mieux que le foot'),
  ];

}
