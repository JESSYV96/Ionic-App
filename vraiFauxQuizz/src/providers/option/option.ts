import { Injectable } from '@angular/core';




@Injectable()
export class OptionProvider {
  difficulties = {
    1: 'Débutant',
    2: 'Intermédiaire',
    3: 'Difficile',
  }
  constructor() { }

}
