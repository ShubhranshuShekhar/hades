import { Component } from '@angular/core';

/**
 * Generated class for the AddAttendanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-attendance',
  templateUrl: 'add-attendance.html'
})
export class AddAttendanceComponent {

  text: string;

  constructor() {
    console.log('Hello AddAttendanceComponent Component');
    this.text = 'Hello World';
  }

}
