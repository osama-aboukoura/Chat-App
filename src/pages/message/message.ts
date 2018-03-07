import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile";
import {Message} from "../../models/messages/message";
import {MESSAGE_LIST} from "../../mocks/messages/messages";
import {AuthProvider} from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile:Profile;

  messageList: Message[];

  userId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
    this.messageList = MESSAGE_LIST;
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.auth.getAuthenticatedUser()
      .subscribe(auth => this.userId = auth.uid);
  }

}
