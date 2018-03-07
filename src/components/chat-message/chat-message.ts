import {Component, Input} from '@angular/core';
import {Message} from "../../models/messages/message";

@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message;

  @Input() userId: string;

  constructor() {

  }


}
