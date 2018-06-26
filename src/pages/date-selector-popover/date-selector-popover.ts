import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  today: Date;
  dateEnabled: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.todayToggle = true;
    this.today = new Date();
    this.dateEnabled = true;
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
    // console.log(this.setToday());
    this.setToday();


  }
  setToday(){
console.log("|||||||||||||||||||||||||||||||||||||||||||");
    //  console.log(this.datepipe.transform(this.today, 'yyyy-MM-dd'));
    console.log(this.today);
    var dateData = this.today.toDateString();
    console.log(dateData);
        var year = dateData [0];
        var month = dateData [1];
        var day = dateData [2];
        var dateFormated = day + "/" + month + "/" + year;
        console.log(dateFormated);
  }
}
