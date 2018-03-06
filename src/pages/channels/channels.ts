import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private chat: ChatProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelsPage');
  }

  showAddChannelDialog(){
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName);
          }

        }
      ]
    }).present();
  }
}
