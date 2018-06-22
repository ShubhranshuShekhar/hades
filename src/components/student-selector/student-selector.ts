import { Student } from "./../../pages/attendance-teacher/attendance-teacher.module";
import { forEach } from "@firebase/util";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { isDefined } from "@angular/compiler/src/util";
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the StudentSelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "student-selector",
  templateUrl: "student-selector.html"
})
export class StudentSelectorComponent {
  // @Input() students:  string;
  @Input() students: Student[];
  @Output() attendanceMap = new EventEmitter();
  
  attendance: Map<string, boolean> = new Map<string, boolean>();
  check: boolean;
  text: string;
  todays_date: String;
  constructor() {
    console.log("Hello StudentSelectorComponent Component");
    this.text = "Hello World";
    this.todays_date = "21st June";
    // this.students ="HAGH";
    console.log("-----------");
    console.log(this.students);
    // console.log(this.students)

  }
  ngOnInit(){
    
  }

  ngOnChanges() {
    console.log("--------Changed----------");
    if(this.students) {
      // console.log(this.students)
      this.students.forEach(student=>{
        console.log(student.id);
        this.attendance[student.id] = student.is_present;
      })
    }
    console.log("++++++++++++");
    console.log(this.attendance);
  }

  getDate() {}
  buttonClick() {
    console.log("item is clicked!!");
  }

  markTrue() {
    this.check = true;
    console.log("Mark true button is clicked!!");
    for(let key in this.attendance){
      this.attendance[key] = true;
    }
  }
  markFalse() {
    this.check = false;
    console.log("Mark false button is clicked!!")
    // console.log(this.attendance["fiddigl01"]);
   for(let key in this.attendance){
     this.attendance[key] = false;
   }
  }

  reloadAttendance(){
    if(this.students) {
      // console.log(this.students)
      this.students.forEach(student=>{
        console.log(student.id);
        this.attendance[student.id] = student.is_present;
      })
    }
  }


  submitAttendance(){
    console.log("Submit attendance has been clicked!!");
    this.attendanceMap.emit(this.attendance);
  }

}
