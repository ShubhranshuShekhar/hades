import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { DiaryPage } from "../diary/diary";
import { AttendanceTeacherPage } from "../attendance-teacher/attendance-teacher";
import { ViewProfilePage } from "../view-profile/view-profile";

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

  openPage(){
    this.navCtrl.push(DiaryPage);
  }
  openAttendanceTeacher(){
    console.log("Open attendance teacher method has been clicked!!");
    this.navCtrl.push(AttendanceTeacherPage);
  }
  openAttendanceStudent(){
    console.log("Attendance Student has been clicked");
  }

  openProfile(){
    console.log("Open Profile has been clicked");
    this.navCtrl.push(ViewProfilePage,{
      username: "hello",
      id: "helloid"
    });
  }

}
