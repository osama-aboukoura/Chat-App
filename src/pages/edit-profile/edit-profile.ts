import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  existingProfile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.existingProfile = this.navParams.get('existingProfile');

    console.log("existingProfileee");
    console.log(this.existingProfile);
  }

  saveProfileResult(event: Boolean){
    event ? this.navCtrl.setRoot('TabsPage') : console.log('not authenticated or saved!');
  }
}
