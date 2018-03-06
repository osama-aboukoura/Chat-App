import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Channel} from "../../models/channel/channel";
import {ChatProvider} from "../../providers/chat/chat";
import {ChannelMessage} from "../../models/channel/channel-message";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;

  channelMessages$: Observable<ChannelMessage[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private chat: ChatProvider) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');

    console.log("channel here");
    console.log(this.channel);
    console.log(this.channel.key);

    this.channelMessages$ = this.chat
      .getChannelChatRef(this.channel)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  sendMessage(content: string) {
    let channelMessage: ChannelMessage = {
      content: content
    };

    this.chat.sendChannelChatMessage(this.channel.key, channelMessage);
  }
}
