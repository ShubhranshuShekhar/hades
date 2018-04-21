import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    // window.location.reload();
  }



  ionViewDidLoad() {
    // this.menuCtrl.enable(true);
    console.log(this.menuCtrl.isEnabled());
    console.log("ionViewDidLoad DashboardPage");
    this.menuCtrl.swipeEnable(true);


  }
}
