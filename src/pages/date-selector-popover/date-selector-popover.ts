import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { DatePipe } from '@angular/common';

/**
 * Generated class for the DateSelectorPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-selector-popover',
  templateUrl: 'date-selector-popover.html',
})

export class DateSelectorPopoverPage {
  todayToggle:boolean;
  selectedDate :any;
  // today: Date;
  today: String = new Date().toISOString();
  dateEnabled: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.todayToggle = true;
    // this.today = new Date();
    this.dateEnabled = true;
    this.selectedDate = this.today;
    // this.setToday();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateSelectorPopoverPage');
  }
  todayCheck(){
    this.dateEnabled = this.todayToggle;
    // if (this.todayToggle == false){
    //   this.dateEnabled = false;
    // }
    // if (this.todayToggle == true){
    //   this.dateEnabled = true;
    // }
  }

  proceed(){
    console.log("Proceed clicked");
    console.log(this.selectedDate);
    var divas = String(this.selectedDate).substring(0,10);
    // console.log(date.substring(0,10));
    this.viewCtrl.dismiss(divas);

    // console.log(this.setToday());
  }

  exit(){
    this.viewCtrl.dismiss();
  }

}
