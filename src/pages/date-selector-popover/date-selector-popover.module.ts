import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateSelectorPopoverPage } from './date-selector-popover';
@NgModule({
  declarations: [
    DateSelectorPopoverPage,

  ],
  imports: [
    IonicPageModule.forChild(DateSelectorPopoverPage),
  ],
})
export class DateSelectorPopoverPageModule {}
