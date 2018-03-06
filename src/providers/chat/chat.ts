import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ChatProvider {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    this.database.list('channel-names').push({name: channelName});
  }


}
