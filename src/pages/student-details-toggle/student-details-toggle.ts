import { ToastController } from "ionic-angular";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { DatabaseProvider, Post } from "../../providers/database/database";

/**
 * Generated class for the StudentDetailsTogglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-student-details-toggle",
  templateUrl: "student-details-toggle.html"
})
export class StudentDetailsTogglePage {
  students: any;
  date: string;
  day: string;
  month: string;
  year: string;
  division: string;
  not_saved_message: string;
  saved_message: string;
  error_message: string;
  attendance: Map<string, boolean> = new Map<string, boolean>();
  check: boolean;
  text: string;
  todays_date: string;
  map: any;
  attendance_id: string;
  list_display: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public db: DatabaseProvider,
    public toastCtrl: ToastController
  ) {
    this.not_saved_message = "Data was not saved!";
    this.saved_message = "Data was successfully saved!";
    this.error_message = "Something went wrong, please try again!";
    this.list_display = false;
    // console.log("##############88888888888888########");
    // console.log(navParams.get("studentsData"));
    this.date = navParams.get("date");
    this.month = navParams.get("month");
    this.year = navParams.get("year");
    this.day = navParams.get("day");
    this.attendance_id = navParams.get("attendance_id");
    this.division = navParams.get("division");
    this.students = navParams.get("studentsData");
    // this.map = this.getAttendanceMap(this.attendance_id);

    if (this.students) {
      // console.log(this.students)
      this.students.forEach(student => {
        // console.log(student.id);
        this.attendance[student.id] = student.is_present;
      });
      // this.getAttendanceMap(this.attendance_id);
    }
    this.getAttendanceMap(this.attendance_id);
    this.list_display = true;
  }
  ngOnChanges() {
    if (this.students) {
      console.log("--------Changed Inside modal ----------");
      console.log(this.students);
    }
    if (this.map) {
      console.log("MAAAAAAAAAAAAAAAAAAAAAAAAAAAAP");
      console.log(this.map);
    }
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad StudentDetailsTogglePage");
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
    console.log("Mark false button is clicked!!");
    // console.log(this.attendance["fiddigl01"]);
    for (let key in this.attendance) {
      this.attendance[key] = false;
    }
  }

  testData() {
    console.log("Test data has been clicked!");
    // this.getAttendanceMap(this.attendance_id);
    // for (let key in this.attendance) {
    //   console.log(this.attendance[key]);
    // }

    // this.map = this.getAttendanceMap(this.attendance_id);
    // console.log("Map details");
    // console.log(this.map);
  }

  async getAttendanceMap(attendance_id) {
    const querySnapshot = await this.db.getAttendanceById(attendance_id).get();
    console.log(querySnapshot);

    if (querySnapshot.empty) {
      console.log("Doc is empty");
      // this.allPresent();
    }
    else {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data().student_id);
        // console.log(doc.data().present);
        this.attendance[doc.data().student_id] = doc.data().present;
      });
    }
  }

  async saveAttendance() {
    await this.db.createAttendanceStudent(
      this.attendance,
      this.day,
      this.date,
      this.month,
      this.year,
      this.division,
      this.attendance_id
    );
    console.log("Create Attendance has been clicked!!");
    this.savedExit();
  }

  savedExit() {
    this.exit();
    this.presentToast(this.saved_message);
  }
  unsavedExit() {
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
