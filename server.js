var WebSocket = require('ws');
var Server = WebSocket.Server;
var ws = new Server({
  port: 8888
});

// save history messages
var msgHistory = []

console.log('web socket server listen on 8888');

ws.on('connection', socket => {
  console.log('connection established');
  // send all history messages to the new user
  msgHistory.forEach(msg => {
    socket.send(msg);
  });
  socket.on('message', data => {
    console.log(`message received: ${data}`);
    msgHistory.push(data);
    socket.send(data);
  });
});