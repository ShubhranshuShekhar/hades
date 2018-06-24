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
  @Output() dateFilter = new EventEmitter();
  allDaysToggle:boolean;
  mondayToggle:boolean;
  tuesdayToggle:boolean;
  wednesdayToggle:boolean;
  thursdayToggle:boolean;
  fridayToggle:boolean;
  saturdayToggle:boolean;
  months: Array<string>;
  monthSelect: any;
  text:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.text = "hello";
    this.allDaysToggle = true;
    this.mondayToggle = true;
    this.tuesdayToggle = true;
    this.wednesdayToggle = true;
    this.thursdayToggle =true;
    this.fridayToggle = true;
    this.saturdayToggle = true;
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopoverPage");
  }

  submitFilter() {
    console.log("Submit filter has been clicked!!");
    this.dateFilter.emit(this.text);
    // console.log("All day =>" + this.allDay);
    // console.log(this.mondayToggle);
    // console.log(this.tuesdayToggle);
    // console.log(this.wednesdayToggle);
    // console.log(this.thursdayToggle);
    // console.log(this.fridayToggle);
    // console.log(this.saturdayToggle);
    console.log("^^^^^^^^^^^^^^^^^^^^");
    var filter = [this.mondayToggle, this.tuesdayToggle, this.wednesdayToggle, this.thursdayToggle, this.fridayToggle, this.saturdayToggle];
    console.log(filter);
    console.log(this.monthSelect);
  }
  ngOnChanges() {

  }


  // Toggle logic

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
    }
    if (this.allDaysToggle == true){
      this.mondayToggle = true;
      this.tuesdayToggle = true;
      this.wednesdayToggle = true;
      this.thursdayToggle =true;
      this.fridayToggle = true;
      this.saturdayToggle = true;
    }
    console.log("--------------");
    console.log(this.saturdayToggle);
  }

  particularDay(event:any){

  }
}
