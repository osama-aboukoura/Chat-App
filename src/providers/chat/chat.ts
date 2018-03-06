import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Channel} from "../../models/channel/channel";

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
}
