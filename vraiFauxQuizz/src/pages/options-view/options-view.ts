import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-options-view',
  templateUrl: 'options-view.html',
})

export class OptionsViewPage {
optionList: string[] = ['Facile', 'Intermédiaire', 'Difficile', 'Expert'];
themeList: string[] = ['Sport', 'Politique'];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

}
