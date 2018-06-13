import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardTeacherPage } from './dashboard-teacher';

@NgModule({
  declarations: [
    DashboardTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardTeacherPage),
  ],
})
export class DashboardTeacherPageModule {}
