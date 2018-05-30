import { DiaryPage } from './../pages/diary/diary';
import { HomeworkStudentPage } from './../pages/homework-student/homework-student';
import { UserLogoutComponent } from './../components/user-logout/user-logout';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { Nav } from "ionic-angular";
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

// i need to import the providers
import { AuthProvider } from '../providers/auth/auth';
import { AnalyticsProvider } from '../providers/analytics/analytics';
import { RemoteConfigProvider } from '../providers/remote-config/remote-config';
import { LoginSliderPage } from '../pages/login-slider/login-slider';
import { auth } from 'firebase/app';

import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = null;
  loggedIn:boolean = false;

  // these providers should be injected in constructor
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public auth: AuthProvider,
    analytics: AnalyticsProvider,
    remoteConfig: RemoteConfigProvider,
    public menuCtrl: MenuController,
    // i should use view child and not nav controller
    // public navCtrl: NavController

  ) {

    // this.counter = 0;

    // menuController: menuCtrl;
    // when the platform is ready
    platform.ready().then(() => {
      this.menuCtrl.swipeEnable(false);

      // we need to check if the user is logged in
      auth.getCurrentUser()
        .then(user => {
this.loggedIn = true;
          // this is a cool way of showing pages
          if (user) {
            // if we have an observable - then show the tabs page
            this.menuCtrl.swipeEnable(true);
          //   if (this.counter == 0) {
          //   window.location.reload();
          //   this.counter = + 1;
          // }
            this.rootPage = DashboardPage
            // this.rootPage = HomeworkStudentPage;

          } else {
            // else show the login page
            // TODO: Disbale this
            this.menuCtrl.swipeEnable(true);
            this.rootPage = DashboardPage
            // this.rootPage = HomeworkStudentPage;

            // TODO: Enable this
            // this.rootPage = LoginSliderPage
            // this.rootPage = LoginPage


          }

          statusBar.styleDefault();
          splashScreen.hide();

          remoteConfig.initialize()

      })

    });

  }
  openPage(){
    console.log("open page has been clicked in app.c.t");
    // this.rootPage(LoginSliderPage);
    this.nav.setRoot(HomeworkStudentPage);
    // this.rootPage(HomeworkStudentPage);

  }
  async logOut(){
    console.log("User is logging out");
    await this.auth.logout();
    await this.rootPage(LoginSliderPage);
    // await this.navCtrl.setRoot(LoginSliderPage)
    window.location.reload();
  }

}
