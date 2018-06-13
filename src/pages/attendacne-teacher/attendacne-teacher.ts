import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AuthProvider } from "../../providers/auth/auth";
// import { auth } from "firebase/app";


@IonicPage()
@Component({
  selector: 'page-attendacne-teacher',
  templateUrl: 'attendacne-teacher.html',
})
export class AttendacneTeacherPage {
  teacher_standard: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendacneTeacherPage');


  this.auth.getCurrentUser().then(user => {
    console.log("***************************");
    console.log(user.standard.id);
    console.log(user.standard.name);
    this.teacher_standard = user.standard.name;
  });

}
}
