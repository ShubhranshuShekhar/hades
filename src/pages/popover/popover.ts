import { filter } from "rxjs/operators";
import { Component, Output, EventEmitter } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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

  text:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = "hello";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopoverPage");
  }

  submitFilter() {
    console.log("Submit filter has been clicked!!");
    this.dateFilter.emit(this.text);
  }
}
