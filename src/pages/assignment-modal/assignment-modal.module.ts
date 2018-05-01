import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentModalPage } from './assignment-modal';

@NgModule({
  declarations: [
    AssignmentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentModalPage),
  ],
})
export class AssignmentModalPageModule {}
