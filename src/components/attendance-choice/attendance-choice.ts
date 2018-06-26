import { Component } from '@angular/core';

/**
 * Generated class for the AttendanceChoiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'attendance-choice',
  templateUrl: 'attendance-choice.html'
})
export class AttendanceChoiceComponent {

  text: string;

  constructor() {
    console.log('Hello AttendanceChoiceComponent Component');
    this.text = 'Hello World';
  }

}
