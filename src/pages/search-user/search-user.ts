import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile";

@IonicPage()
@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openChat(profile: Profile){
    this.navCtrl.push('MessagePage', {profile: profile})
  }
}
