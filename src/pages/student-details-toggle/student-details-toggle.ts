import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatabaseProvider, Post } from '../../providers/database/database';

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
  date: string;
  day: string;
  month: string;
  year: string;
not_saved_message: string;
saved_message:string;
error_message: string;
  attendance: Map<string, boolean> = new Map<string, boolean>();
  check: boolean;
  text: string;
  todays_date: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public db: DatabaseProvider,
    public toastCtrl: ToastController
  ) {
    this.not_saved_message = "Data was not saved!";
    this.saved_message = "Data was successfully saved!";
    this.error_message = "Something went wrong, please try again!"

    console.log("##############88888888888888########");
    console.log(navParams.get('studentsData'));
    console.log(navParams.get('date'));
    console.log(navParams.get('month'));
    console.log(navParams.get('year'));
    console.log(navParams.get('day'));

    this.students = navParams.get('studentsData');

    if (this.students) {
      // console.log(this.students)
      this.students.forEach(student => {
        // console.log(student.id);
        this.attendance[student.id] = student.is_present;
      })
    }

  }
  ngOnChanges() {
    if (this.students) {
      console.log("--------Changed Inside modal ----------");
      console.log(this.students);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsTogglePage');
  }

  allPresent() {
    this.check = true;
    console.log("Mark true button is clicked!!");
    for (let key in this.attendance) {
      this.attendance[key] = true;
    }
  }

  allAbsent() {
    this.check = false;
    console.log("Mark false button is clicked!!")
    // console.log(this.attendance["fiddigl01"]);
    for (let key in this.attendance) {
      this.attendance[key] = false;
    }

  }

testData(){
  console.log("Test data has been clicked!")
  for (let key in this.attendance) {
    console.log(this.attendance[key]);
  }

}

  async saveAttendance() {
    await this.db.createAttendanceStudent(this.attendance, "Monday", "15", "May", "2018", "IXA2018");
    console.log("Create Attendance has been clicked!!");
    this.savedExit();
  }

  savedExit(){
    this.exit();
    this.presentToast(this.saved_message);
  }
  unsavedExit(){
    this.exit();
    this.presentToast(this.not_saved_message);
  }

  exit() {
    this.viewCtrl.dismiss();
  }

  presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
