import {Message} from '../../models/messages/message'
import {USER_LIST} from '../profiles/profiles';

const userList = USER_LIST;

const messageList: Message[] = [];

userList.forEach(user => {
  messageList.push({user: user, date: new Date(), lastMessage: "Hello there, I'm using Chat!"})
});

export const MESSAGE_LIST = messageList;
