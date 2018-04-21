import { DashboardPage } from './../pages/dashboard/dashboard';
import { Component } from '@angular/core';
import { Platform, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// i need to import the providers
import { AuthProvider } from '../providers/auth/auth';
import { AnalyticsProvider } from '../providers/analytics/analytics';
import { RemoteConfigProvider } from '../providers/remote-config/remote-config';
import { LoginSliderPage } from '../pages/login-slider/login-slider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  // these providers should be injected in constructor
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    auth: AuthProvider,
    analytics: AnalyticsProvider,
    remoteConfig: RemoteConfigProvider,
    public menuCtrl: MenuController
  ) {
    // menuController: menuCtrl;
    // when the platform is ready
    platform.ready().then(() => {
      this.menuCtrl.swipeEnable(false);

      // we need to check if the user is logged in
      auth.getCurrentUser()
        .then(user => {

          // this is a cool way of showing pages
          if (user) {
            // if we have an observable - then show the tabs page
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
}
