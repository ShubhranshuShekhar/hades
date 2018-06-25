import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDetailsTogglePage } from './student-details-toggle';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    StudentDetailsTogglePage,
    ComponentsModule,
  ],
  imports: [
    IonicPageModule.forChild(StudentDetailsTogglePage),
    ComponentsModule
  ],
})
export class StudentDetailsTogglePageModule {}
