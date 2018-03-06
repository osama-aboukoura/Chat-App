import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile";
import {AuthProvider} from "../../providers/auth/auth";
import {User} from "firebase/app";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  // holds the existingProfile emitted from the profileView component
  existingProfile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  getExistingProfile(profile: Profile){
    this.existingProfile = profile
  }


  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage', {existingProfile: this.existingProfile});
  }

  signOut(){
    // this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }
}
