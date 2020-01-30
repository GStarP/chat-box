
import socket from './ws-client';
import { ChatForm, ChatList, promptForUsername } from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="chat-input"]';
const LIST_SELECTOR = '[data-chat="chat-list"]';

class Message {
  constructor ({
    content: c,
    author: a,
    time: t = (new Date()).getTime()
  }) {
    this.content = c;
    this.author = a;
    this.time = t;
  }

  serialize() {
    return {
      content: this.content,
      author: this.author,
      time: this.time
    };
  }
}

class ChatBox {
  constructor() {
    let username = promptForUsername();
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, username);

    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      this.chatForm.registerSubmitHandler(data => {
        let message = new Message({content: data, author: username});
        socket.sendMessage(message.serialize());
      })
    });
    socket.registerMessageHandler(msg => {
      let message = new Message(msg);
      this.chatList.renderMessage(message);
    })
  }
}

export default ChatBox;
