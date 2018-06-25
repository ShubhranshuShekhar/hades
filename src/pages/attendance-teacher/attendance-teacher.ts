import { PopoverPage } from "./../popover/popover";
import { PopoverComponent } from "./../../components/popover/popover";
import { Student } from "./attendance-teacher.module";
import { CommonModule } from "@angular/common";
import { ViewChild } from "@angular/core";
import {
  Slides,
  ActionSheetController,
  PopoverController
} from "ionic-angular";
import { LoadingController, ModalController } from "ionic-angular";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import { DatabaseProvider } from "../../providers/database/database";
import { forEach } from "@firebase/util";
import { StudentSelectorComponent } from "../../components/student-selector/student-selector";
import { DashboardPage } from "../dashboard/dashboard";
import { TeststuffsPage } from "../teststuffs/teststuffs";
import { StudentDetailsTogglePage } from "../student-details-toggle/student-details-toggle";
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
  filterData: any;
  attendance = [];
  @ViewChild(Slides) slides: Slides;
  students: Array<Student> = [];
  months: Array<string>;
  index: number;
  month_view: boolean;
  day_view: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private db: DatabaseProvider,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
  ) {
    var students: Student[];
    var studentDocs = this.db.getStudentsByDivision("IXA2018");
    studentDocs
      .get()
      .then(snapshot => {
        console.log(snapshot);
        snapshot.forEach(doc => {
          // console.log(doc.data().first_name);
          let tempStudent = {
            first_name: doc.data().first_name,
            last_name: doc.data().last_name,
            id: doc.data().id,
            is_present: true
          };
          this.students.push(tempStudent);
        });
        // var temp = [doc.data().first_name, doc.data().last_name];
        // var temp = doc.data().last_name;

        // console.log(students);
      })
      .catch(err => {
        console.log("I am in error -->", err);
      });
    // console.log(this.students);
 
    var attendanceDoc = this.db.getAttendancenyDivision("IXA2018");
    
    attendanceDoc
      .get()
      .then(snapshot => {
        // console.log(snapshot);
        snapshot.forEach(doc => {
          // console.log("--------------");
          // var test = "field1";
          var data = doc.data();
          // console.log(data.date);
          // console.log(data.present);
          var tempData = {
            day: data.day,
            date: data.date,
            month: data.month,

            absent: data.absent,
            present: data.present,
            day_view: true,
            month_view: true
          };
          this.attendance.push(tempData);
          // console.log(tempData);
        });

        // console.log(this.attendance);
      })
      .catch(err => {
        console.log(err);
      });
 
 
 
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AttendanceTeacherPage");
    // this.setSlideVars();
    // this.students = this.getStudentData("IXA2018");
    // var studentDocs = this.db.getStudentsByDivision("IXA2018");
   
  }

  getStudentData(division: string) {
    console.log(division);
    var temp: Student;
    var Student: Student[];
    // Student = [
    //   {
    //     first_name: "Jack",
    //     last_name: "Daniels",
    //     id: "jackda01",
    //     is_present: true
    //   },
    //   {
    //     first_name: "Jhonny",
    //     last_name: "Wakcer",
    //     id: "wacher01",
    //     is_present: false
    //   },
    //   {
    //     first_name: "Jin",
    //     last_name: "Beam",
    //     id: "beamjin01",
    //     is_present: false
    //   },
    //   {
    //     first_name: "Glen",
    //     last_name: "Fiddicch",
    //     id: "fiddigl01",
    //     is_present: true
    //   }
    // ];

    return Student;
  }

  displayAttendance(attendance) {
    console.log("I am in parent");
    console.log(attendance);
  }
  displayFilter(val) {
    console.log("Got this from popover!");
  }

  presentPopover() {
    // var data = this.filterData;

    const popover = this.popoverCtrl.create(
      PopoverPage,
      {},
      { cssClass: "my-custom-popover" }
    );
    popover.present();

    popover.onDidDismiss(data => {
      if (data) {
        this.assign_filters(data);
      }
      // console.log(data);
      // this.filterData = data;
      // console.log("@@@@@@@@@@@@@@@@@@@@@@");
      // // console.log(this.filterData);
    });
  }

  assign_filters(inputfilters: Array<any>) {
    console.log("******************");
    console.log();
    var i = 0;
    this.attendance.forEach(data => {
      if (inputfilters[6] == "") {
        data.month_view = true;
      } else if (data.month == inputfilters[6]) {
        data.month_view = true;
      } else {
        data.month_view = false;
      }
      // console.log(inputfilters);
      switch (data.day) {
        case "Monday": {
          if (inputfilters[0]) data.day_view = true;
          else data.day_view = false;
          break;
        }

        case "Tuesday": {
          if (inputfilters[1]) data.day_view = true;
          else data.day_view = false;
          break;
        }

        case "Wednesday": {
          if (inputfilters[2]) data.day_view = true;
          else data.day_view = false;
          break;
        }

        case "Thursday": {
          if (inputfilters[3]) data.day_view = true;
          else data.day_view = false;
          break;
        }

        case "Friday": {
          if (inputfilters[4]) data.day_view = true;
          else data.day_view = false;
          break;
        }

        case "Saturday": {
          if (inputfilters[5]) data.day_view = true;
          else data.day_view = false;
          break;
        }
        // console.log(data.day);
        // console.log(data.day_view);
        // default:{
        // data.day_view = false;}
      }

      // for(i = 0; i<5; i++)    {
      // console.log(inputfilters[i])
    });
  }

  addAttendance() {
    console.log("Add attendance clicked!");
    let profileModal = this.modalCtrl.create(StudentDetailsTogglePage, {
      studentsData: this.students,
      date : "13",
      month: "July",
      year: "2018",
      day: "Monday"
    });
    profileModal.present();
  }
}
