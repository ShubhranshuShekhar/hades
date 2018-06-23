import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { UserLogoutComponent } from './user-logout/user-logout';
import { PostFeedComponent } from './post-feed/post-feed';
import { HeartButtonComponent } from './heart-button/heart-button';
import { UserRelationshipComponent } from './user-relationship/user-relationship';
import { ImageUploadComponent, UploadModal } from './image-upload/image-upload';
import { FcmHandlerComponent } from './fcm-handler/fcm-handler';
import { FcmTopicComponent } from './fcm-topic/fcm-topic';
import { EmailLoginComponent } from './email-login/email-login';
import { AssignmentChartComponent } from './assignment-chart/assignment-chart';
import { AddAttendanceComponent } from './add-attendance/add-attendance';
import { StudentSelectorComponent } from './student-selector/student-selector';
import { ListDisplayComponent } from './list-display/list-display';
import { PopoverComponent } from './popover/popover';
import { AttendanceFilterComponent } from './attendance-filter/attendance-filter';


@NgModule({
    declarations: [
        FacebookLoginComponent,
        FacebookLoginComponent,
        AnonymousLoginComponent,
        UserLogoutComponent,
        PostFeedComponent,
        HeartButtonComponent,
        UserRelationshipComponent,
        ImageUploadComponent,
        UploadModal,
    FcmHandlerComponent,
    FcmTopicComponent,
    EmailLoginComponent,
    AssignmentChartComponent,
    AddAttendanceComponent,
    StudentSelectorComponent,
    ListDisplayComponent,
    PopoverComponent,
    AttendanceFilterComponent,
        
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        FacebookLoginComponent,
        FacebookLoginComponent,
        AnonymousLoginComponent,
        UserLogoutComponent,
        PostFeedComponent,
        HeartButtonComponent,
        UserRelationshipComponent,
        ImageUploadComponent,
        UploadModal,
    FcmHandlerComponent,
    FcmTopicComponent,
    EmailLoginComponent,
    AssignmentChartComponent,
    AddAttendanceComponent,
    StudentSelectorComponent,
    ListDisplayComponent,
    PopoverComponent,
    AttendanceFilterComponent,
        
    ],
    entryComponents: [
        UploadModal
    ]
})
export class ComponentsModule { }
