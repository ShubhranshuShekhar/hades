import { Student } from "./../../pages/attendance-teacher/attendance-teacher.module";
import { forEach } from "@firebase/util";
import { Component, OnInit, Input } from "@angular/core";
import { isDefined } from "@angular/compiler/src/util";

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
    console.log("I am initialized!!")

      console.log(this.students);

  }

  getDate() {}
  buttonClick() {
    console.log("item is clicked!!");
  }

  markTrue() {
    this.check = true;
  }
  markFalse() {
    this.check = false;
  }
}
