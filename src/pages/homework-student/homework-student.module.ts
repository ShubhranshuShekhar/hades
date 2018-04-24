import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworkStudentPage } from './homework-student';
import { AssignmentChartComponent } from "../../components/assignment-chart/assignment-chart";


@NgModule({
  declarations: [
    HomeworkStudentPage,
    AssignmentChartComponent
  ],
  imports: [
    IonicPageModule.forChild(HomeworkStudentPage),
  ],
})
export class HomeworkStudentPageModule {}
