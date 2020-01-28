
import socket from './ws-client';

class Message {
  constructor ({
    content: c,
    author: a = 'GStarP',
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
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      let message = new Message({ content: 'Hello World!' });
      socket.sendMessage(message.serialize());
    });
    socket.registerMessageHandler(msg => {
      console.log(msg);
    })
  }
}

export default ChatBox;
