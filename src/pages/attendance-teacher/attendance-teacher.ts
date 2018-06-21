import { Student } from './attendance-teacher.module';
import { CommonModule } from "@angular/common";
import { ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { AuthProvider } from "../../providers/auth/auth";
import { DatabaseProvider } from "../../providers/database/database";
import { forEach } from "@firebase/util";
/**
 * Generated class for the AttendanceTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-attendance-teacher",
  templateUrl: "attendance-teacher.html"
})
export class AttendanceTeacherPage {
  students: Array<Student> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var students: Student[];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AttendanceTeacherPage");

    this.students = this.getStudentData("IXA2018");
    // console.log(this.students);

  }

  getStudentData(division: string) {
    console.log(division);
    var temp: Student;
    var Student: Student[];
    // tempData = [["Jack", "Daniels", "jackda01"],["Jhonny", "Walker", "jhonwalk"]];
    temp = {first_name: "Jack", last_name: "Daniels", id: "jackda01"};
    Student = [
      {first_name: "Jack", last_name: "Daniels", id: "jackda01"},
      {first_name: "Jhonny", last_name: "Wakcer", id: "wacher01"},
      {first_name: "Jin", last_name: "Beam", id: "beamjin01"},
      {first_name: "Glen", last_name: "Fiddicch", id: "fiddigl01"},

    ]

    return Student;
  }
}
