import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AssignmentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignment-modal',
  templateUrl: 'assignment-modal.html',
})
export class AssignmentModalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl : ViewController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentModalPage');
  }
  public closeModal(){
    this.viewCtrl.dismiss();
  }

}
