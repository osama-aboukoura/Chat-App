import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MESSAGE_LIST} from "../../mocks/messages/messages";
import {Message} from "../../models/messages/message";
import {SearchUserPage} from "../search-user/search-user";
import {Profile} from "../../models/profile/profile";
import {Observable} from "rxjs/Observable";
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  allProfiles$: Observable<Profile[]>;

  messageList:Message[] = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {

    this.allProfiles$ = this.data
      .getAllUsers()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  ionViewDidLoad() {
    console.log(this.messageList);
  }

  navigateToSearchUserPage(){
    this.navCtrl.push('SearchUserPage');
  }

  openChat(profile: Profile){
    this.navCtrl.push('MessagePage', {profile: profile})
  }
}
