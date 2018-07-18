import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionProvider } from '../../providers/option/option';


@IonicPage()
@Component({
  selector: 'page-options-view',
  templateUrl: 'options-view.html',
})

export class OptionsViewPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private options: OptionProvider) { }

    difficulties = this.options.difficulties;
    keys = Object.keys(this.difficulties);

    ionViewDidLoad() {
      console.log(this.keys);
      
      
    }
}
