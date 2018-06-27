import { DateSelectorPopoverPage } from './../date-selector-popover/date-selector-popover';
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
import { AttendanceChoiceComponent } from "../../components/attendance-choice/attendance-choice";
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
  weekdays = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
  monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"]
  division = "IXA2018";
  attendance_id: string;
  divas: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private db: DatabaseProvider,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
  ) {
    var students: Student[];
    var studentDocs = this.db.getStudentsByDivision(this.division);
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
      this.generateAttendance();
   


  }

generateAttendance(){
  var attendanceDoc = this.db.getAttendancenyDivision("IXA2018");
  this.attendance = [];
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
    return Student;
  }

  displayAttendance(attendance) {
    console.log("I am in parent");
    console.log(attendance);
  }
  displayFilter(val) {
    console.log("Got this from popover!");
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
    this.presentDateSelector();


  }
attendanceModal(data: any){
  let attendanceModal = this.modalCtrl.create(StudentDetailsTogglePage, {
    studentsData: this.students,
    date : data.date,
    month: data.month,
    year: data.year,
    day: data.weekday,
    attendance_id : this.attendance_id,
    division: this.division,
  });
  attendanceModal.present();
  attendanceModal.onDidDismiss(() =>{
    this.generateAttendance();

  });
}

  presentDateSelector(){
    const datePopover = this.popoverCtrl.create(
      DateSelectorPopoverPage,
      {},
      { cssClass: "my-custom-popover" }
    );
    datePopover.present();
    datePopover.onDidDismiss(data => {
      if (data) {

        console.log(data);
        var value = new Date(data);
        console.log("DIVAS is:");
        this.divas = {
          "date" : value.getDate(),
          "month": this.monthsArray[value.getMonth()],
          "year" : value.getFullYear(),
          "weekday": this.weekdays[value.getUTCDay()]
        }

        // console.log(divas.getUTCMonth());
        // console.log();
        // console.log();
        this.attendance_id = this.division + "-" + this.divas.date+ "-" + this.divas.month + "-" + this.divas.year
        console.log("Attendance ID is ");
        console.log(this.attendance_id);
        this.attendanceModal(this.divas);

      }
    });
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
  testFunction(){
console.log("I am in tests function!!");

  }

}
