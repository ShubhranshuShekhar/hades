import { StudentDetailsTogglePage } from './../pages/student-details-toggle/student-details-toggle';
import { TeststuffsPage } from './../pages/teststuffs/teststuffs';
import { PopoverPage } from './../pages/popover/popover';
import { AttendanceTeacherPage } from "../pages/attendance-teacher/attendance-teacher";


import { DiaryPage } from './../pages/diary/diary';
import { HomeworkStudentPage } from './../pages/homework-student/homework-student';
import { LoginSliderPage } from './../pages/login-slider/login-slider';

// Dashboard
import { DashboardPage } from './../pages/dashboard/dashboard';
import { DashboardTeacherPage } from './../pages/dashboard-teacher/dashboard-teacher';

//Attendance


// NgModules help organize an application into cohesive blocks of functionality.
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SortPipe } from '../pipes/sort/sort';
/// DELETE this line
//import { firebaseConfig } from '../env';

/// ADD your firebase web credentials in the object below

const firebaseConfig = {
  apiKey: "AIzaSyAjS8xPmk31RBYrYKfpr3YrZkFJOUOOlc0",
    authDomain: "hades-1729.firebaseapp.com",
    databaseURL: "https://hades-1729.firebaseio.com",
    projectId: "hades-1729",
    storageBucket: "hades-1729.appspot.com",
    messagingSenderId: "145252880003"
}

import { Firebase } from '@ionic-native/firebase';
import { Facebook } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { AdMobFree } from '@ionic-native/admob-free';

import { ComponentsModule } from '../components/components.module'
import { DatabaseProvider } from '../providers/database/database';
import { FcmProvider } from '../providers/fcm/fcm';
import { AnalyticsProvider } from '../providers/analytics/analytics';
import { RemoteConfigProvider } from '../providers/remote-config/remote-config';

// Add declarable classes—components, directives, and pipes—to a declarations list.
// Declare these classes in exactly one module of the application.
// Declare them in a module if they belong to that particular module.

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // add the login page as declaration
    LoginPage,
    // adding both types of dashboard
    DashboardPage,
    DashboardTeacherPage,

    PopoverPage,

    // attendacne page
    AttendanceTeacherPage,

    TeststuffsPage,

    LoginSliderPage,
    HomeworkStudentPage,
    DiaryPage,
    StudentDetailsTogglePage,

    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    DashboardPage,
    DashboardTeacherPage,
    PopoverPage,
TeststuffsPage,
    // Attendance
    AttendanceTeacherPage,
    StudentDetailsTogglePage,
    LoginSliderPage,
    HomeworkStudentPage,
    DiaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Firebase,
    Facebook,
    DatabaseProvider,
    Camera,
    AdMobFree,
    FcmProvider,
    AnalyticsProvider,
    RemoteConfigProvider,

  ]
})
export class AppModule {}
