import { Component } from '@angular/core';

/**
 * Generated class for the AttendanceFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'attendance-filter',
  templateUrl: 'attendance-filter.html'
})
export class AttendanceFilterComponent {

  text: string;

  constructor() {
    console.log('Hello AttendanceFilterComponent Component');
    this.text = 'Hello World';
  }

}
