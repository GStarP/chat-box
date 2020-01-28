var WebSocket = require('ws');
var Server = WebSocket.Server;

var port = 3001;
var ws = new Server({
  port
});

// store all connecting socket
var socketList = [];
// store message history
var msgHistory = [];

console.log(`web socket server listen on ${port}`);

ws.on('connection', socket => {
  socketList.push(socket);
  console.log(`connection established: ${socketList.length}`);

  // send all history messages to the new user
  msgHistory.forEach(msg => {
    socket.send(`${msg.author}: ${msg.content}`);
  });

  socket.on('message', msg => {
    console.log(`message received from ${msg.author}: ${msg.content}`);
    msgHistory.push(msg);
    socketList.forEach(soc => {
      soc.send(msg);
    })
  });

  socket.on('close', event => {
    console.log(`connection closed: ${socketList.length}`);
  });
});