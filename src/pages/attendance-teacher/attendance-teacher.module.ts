import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendanceTeacherPage } from './attendance-teacher';


@NgModule({
  declarations: [
    AttendanceTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendanceTeacherPage),
    ComponentsModule
  ],
})
export class AttendanceTeacherPageModule {}

export class Student {
  id: string;
  first_name: string;
  last_name: string;
  is_present: boolean;
}
