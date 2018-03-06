import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import {AuthProvider} from "../providers/auth/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthProvider) {

    // this.auth.getAuthenticatedUser().subscribe(auth => {
    //   !auth ? this.rootPage = 'LoginPage' : this.rootPage = 'TabsPage'
    // });

    platform.ready().then(() => {

      this.rootPage = 'LoginPage';

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

