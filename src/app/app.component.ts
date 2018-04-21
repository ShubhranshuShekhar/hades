import { UserLogoutComponent } from './../components/user-logout/user-logout';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { Component } from '@angular/core';
import { Platform, MenuController, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// i need to import the providers
import { AuthProvider } from '../providers/auth/auth';
import { AnalyticsProvider } from '../providers/analytics/analytics';
import { RemoteConfigProvider } from '../providers/remote-config/remote-config';
import { LoginSliderPage } from '../pages/login-slider/login-slider';
import { auth } from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
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

          } else {
            // else show the login page
            this.rootPage = LoginSliderPage
            // this.rootPage = LoginPage


          }

          statusBar.styleDefault();
          splashScreen.hide();

          remoteConfig.initialize()

      })

    });

  }

  async logOut(){
    console.log("User is logging out");
    await this.auth.logout();
    await this.rootPage(LoginSliderPage);
    // await this.navCtrl.setRoot(LoginSliderPage)
    window.location.reload();
  }

}
