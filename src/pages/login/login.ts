import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";
import {EditProfilePage} from "../edit-profile/edit-profile";
import {DataProvider} from "../../providers/data/data";
import {User} from "firebase/app";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  constructor(private toastController: ToastController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private data: DataProvider)
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

      this.data.getProfile(<User>event.result)
        .snapshotChanges()
        .subscribe(profile => {
          profile.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage')
      });
      this.navCtrl.setRoot('EditProfilePage')
    }
    else {
      this.toastController.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }
}
