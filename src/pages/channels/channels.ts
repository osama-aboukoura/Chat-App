import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {Observable} from "rxjs/Observable";
import {Channel} from "../../models/channel/channel";
import {ChannelChatPage} from "../channel-chat/channel-chat";

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelsList$ : Observable<Channel[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private chat: ChatProvider)
  {
    this.channelsList$ = this.chat
      .getChannelsListRef()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  ionViewWillLoad() {
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

  selectChannel(channel: Channel){
    this.navCtrl.push('ChannelChatPage', {channel: channel});
  }
}
