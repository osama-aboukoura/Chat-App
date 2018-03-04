import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  constructor(private toastController: ToastController,
              public navCtrl: NavController,
              public navParams: NavParams)
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(event: LoginResponse){
    console.log(event);
    if (!event.error){
      this.toastController.create({
        message: `Welcome to Chat! ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('ProfilePage')
    }
    else {
      this.toastController.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }
}
