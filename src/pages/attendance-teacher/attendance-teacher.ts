import { PopoverPage } from './../popover/popover';
import { PopoverComponent } from './../../components/popover/popover';
import { Student } from "./attendance-teacher.module";
import { CommonModule } from "@angular/common";
import { ViewChild } from "@angular/core";
import { Slides, ActionSheetController, PopoverController } from "ionic-angular";
import { LoadingController, ModalController } from "ionic-angular";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import { DatabaseProvider } from "../../providers/database/database";
import { forEach } from "@firebase/util";
import { StudentSelectorComponent } from '../../components/student-selector/student-selector';
import { DashboardPage } from '../dashboard/dashboard';
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

  attendance = [];
  @ViewChild(Slides) slides: Slides;
  students: Array<Student> = [];
  index: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private db: DatabaseProvider,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
  ) {
    var students: Student[];
    var studentDocs = this.db.getStudentsByDivision("IXA2018");




  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AttendanceTeacherPage");
    // this.setSlideVars();
    this.students = this.getStudentData("IXA2018");
    var studentDocs = this.db
    var attendanceDoc = this.db.getAttendancenyDivision("IXA2018");
    // console.log(this.students);
    attendanceDoc.get().then(snapshot =>{
      // console.log(snapshot);
      snapshot.forEach(doc =>{
        // console.log("--------------");
        var test = "field1"
        var data = doc.data();
        // console.log(data.date);
        // console.log(data.present);
        var tempData = {
          "day": data.day,
          "date": data.date,
          "month": data.month,

          "absent": data.absent,
          "present": data.present,


        }
        this.attendance.push(tempData);

        // console.log(tempData);
      })

// console.log(this.attendance);
    })
    .catch(err =>{
      console.log(err);
    })
  }


  getStudentData(division: string) {
    console.log(division);
    var temp: Student;
    var Student: Student[];
    Student = [
      {
        first_name: "Jack",
        last_name: "Daniels",
        id: "jackda01",
        is_present: true
      },
      {
        first_name: "Jhonny",
        last_name: "Wakcer",
        id: "wacher01",
        is_present: false
      },
      {
        first_name: "Jin",
        last_name: "Beam",
        id: "beamjin01",
        is_present: false
      },
      {
        first_name: "Glen",
        last_name: "Fiddicch",
        id: "fiddigl01",
        is_present: true
      }
    ];

    return Student;
  }

  displayAttendance(attendance) {
    console.log("I am in parent");
    console.log(attendance);
  }
  displayFilter(val){
    console.log("Got this from popover!");
  }

  presentPopover() {
    const popover = this.popoverCtrl.create(PopoverPage, {}, {cssClass: 'my-custom-popover'});
    popover.present();
  }
openModal(){
  console.log("Open Modal clicked!!");
  var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('LoginModalPage');
    modalPage.present();
}

}
