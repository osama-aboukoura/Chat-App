import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Channel} from "../../models/channel/channel";
import {ChannelMessage} from "../../models/channel/channel-message";

@Injectable()
export class ChatProvider {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    this.database.list('channel-names').push({name: channelName});
  }

  getChannelsListRef(){
    return this.database.list<Channel>('channel-names');
  }

  getChannelChatRef(channel: Channel){
    return this.database.list<Channel>(`channels/${channel.key}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage){
    await this.database.list(`channels/${channelKey}`).push(message);
  }
}
