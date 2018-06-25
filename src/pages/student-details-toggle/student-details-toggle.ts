import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentDetailsTogglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-details-toggle',
  templateUrl: 'student-details-toggle.html',
})
export class StudentDetailsTogglePage {
  students: any;
  attendance: Map<string, boolean> = new Map<string, boolean>();
  check: boolean;
  text: string;
  todays_date: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("##############88888888888888########");
    console.log (navParams.get('studentsData'));
    this.students = navParams.get('studentsData');
    if(this.students) {
      // console.log(this.students)
      this.students.forEach(student=>{
        console.log(student.id);
        this.attendance[student.id] = student.is_present;
      })
    }

  }
  ngOnChanges() {
    if (this.students){
    console.log("--------Changed Inside modal ----------");
    console.log(this.students);

  }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsTogglePage');

  }

}
