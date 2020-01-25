var WebSocket = require('ws');
var Server = WebSocket.Server;
var ws = new Server({
  port: 8888
});

var nameList = ['Bob', 'Jack', 'Lucy', 'Mike']
// store all connecting socket
var socketList = []
// store message history({author: 'Bob', content: 'Hello'})
var msgHistory = []

console.log('web socket server listen on 8888');

function delElement(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (name === arr[i].name) {
      arr.splice(i, 1);
    }
  }
}

ws.on('connection', socket => {
  if (nameList.length === 0) {
    console.log('cannot afford so many connections');
    socket.terminate();
  } else {
    var name = nameList[0];
    nameList.splice(0, 1);
    socket.name = name;
    socketList.push(socket);
    console.log(`connection established with ${name}`);
  }
  // send all history messages to the new user
  msgHistory.forEach(msg => {
    socket.send(`${msg.author}: ${msg.content}`);
  });

  socket.on('message', data => {
    console.log(`message received from ${socket.name}: ${data}`);
    msgHistory.push({
      author: socket.name,
      content: data
    });
    socketList.forEach(soc => {
      soc.send(`${socket.name}: ${data}`);
    })
  });

  socket.on('close', event => {
    if (socket.name) {
      delElement(socketList, socket.name);
      console.log(`connection closed with ${socket.name}`);
      nameList.push(socket.name);
    }
  });
});