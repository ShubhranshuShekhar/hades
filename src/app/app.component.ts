import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// i need to import the providers
import { AuthProvider } from '../providers/auth/auth';
import { AnalyticsProvider } from '../providers/analytics/analytics';
import { RemoteConfigProvider } from '../providers/remote-config/remote-config';

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
    remoteConfig: RemoteConfigProvider
  ) {
    // when the platform is ready
    platform.ready().then(() => {
      // we need to check if the user is logged in
      auth.getCurrentUser()
        .then(user => {

          // this is a cool way of showing pages
          if (user) {
            // if we have an observable - then show the tabs page
            this.rootPage = TabsPage
          } else {
            // else show the login page
            this.rootPage = LoginPage
          }

          statusBar.styleDefault();
          splashScreen.hide();

          remoteConfig.initialize()

      })

    });
  }
}
