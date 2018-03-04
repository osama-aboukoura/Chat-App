import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private toastController: ToastController,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(event: LoginResponse){
    console.log(event);
    if (!event.error){
      this.toastController.create({
        message: `Account created: ${event.result.email}`,
        duration: 3000
      }).present();
    }
    else {
      this.toastController.create({
        message: `Account NOT created: ${event.error.message}`,
        duration: 3000
      }).present();
    }
  }
}
