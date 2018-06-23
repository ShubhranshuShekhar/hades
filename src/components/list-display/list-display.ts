import { Component, Input } from "@angular/core";

/**
 * Generated class for the ListDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "list-display",
  templateUrl: "list-display.html"
})
export class ListDisplayComponent {
  @Input() attendanceData = [];
  attendanceList = [];
  text: string;

  constructor() {
    console.log("Hello ListDisplayComponent Component");
    this.text = "Hello World";
    // this.attendanceData = [1,2,3];
    console.log(this.attendanceData);
    this.attendanceData.sort((obj1, obj2) => {
      console.log("==================");
      if (obj1.present > obj2.present) {
          return 1;
      }

      if (obj1.present < obj2.present) {
          return -1;
      }

      return 0;
  });
  }
  ngOnChanges() {
    if (this.attendanceData) {
      console.log("Value has changed ---------");
      console.log(this.attendanceData);

    }
  }


}
