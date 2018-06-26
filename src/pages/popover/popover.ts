import { filter } from "rxjs/operators";
import { Component, Output, EventEmitter } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import {Observable} from 'rxjs';
/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-popover",
  templateUrl: "popover.html"
})
export class PopoverPage {
  allDaysToggle:boolean;
  mondayToggle:boolean;
  tuesdayToggle:boolean;
  wednesdayToggle:boolean;
  thursdayToggle:boolean;
  fridayToggle:boolean;
  saturdayToggle:boolean;
  months: Array<string>;
  monthSelect: any;
  filter:  Array<boolean>;
  isEnabled: boolean;
  text:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.text = "hello";

    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.monthSelect = "";
    this.resetFilters();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopoverPage");
  }

  submitFilter() {
    console.log("Submit filter has been clicked!!");


    // console.log("All day =>" + this.allDay);
    // console.log(this.mondayToggle);
    // console.log(this.tuesdayToggle);
    // console.log(this.wednesdayToggle);
    // console.log(this.thursdayToggle);
    // console.log(this.fridayToggle);
    // console.log(this.saturdayToggle);
    console.log("^^^^^^^^^^^^^^^^^^^^");
    this.filter = [this.mondayToggle, this.tuesdayToggle, this.wednesdayToggle, this.thursdayToggle, this.fridayToggle, this.saturdayToggle, this.monthSelect];

    console.log(this.filter);
    // console.log(this.monthSelect);

    this.viewCtrl.dismiss(this.filter);
  }
  ngOnChanges() {

  }


  // Toggle logic
  resetFilters(){
    this.isEnabled = true;
    console.log("Enabled");
    console.log(this.isEnabled);
    this.allDaysToggle = true;
    this.mondayToggle = true;
    this.tuesdayToggle = true;
    this.wednesdayToggle = true;
    this.thursdayToggle =true;
    this.fridayToggle = true;
    this.saturdayToggle = true;
    this.filter = [this.mondayToggle, this.tuesdayToggle, this.wednesdayToggle, this.thursdayToggle, this.fridayToggle, this.saturdayToggle, this.monthSelect];

  }
  //  oneDay(){
  //   this.allDaysToggle = false;
  //   console.log("I am in one Day!");
  //  }
  allDay(){
    // console.log(event);
    // console.log(this.allDay);

    if (this.allDaysToggle == false){
      this.mondayToggle = false;
      this.tuesdayToggle = false;
      this.wednesdayToggle = false;
      this.thursdayToggle =false;
      this.fridayToggle = false;
      this.saturdayToggle = false;
      this.isEnabled = false;

    }
    if (this.allDaysToggle == true){
      // this.isEnabled = true;
      // this.mondayToggle = true;
      // this.tuesdayToggle = true;
      // this.wednesdayToggle = true;
      // this.thursdayToggle =true;
      // this.fridayToggle = true;
      // this.saturdayToggle = true;
      this.resetFilters();
      // this.isEnabled = true;

    }
  }


}
