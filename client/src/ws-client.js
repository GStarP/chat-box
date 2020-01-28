
let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(func) {
  socket.onopen = () => {
    console.log('connection open');
    func();
  }
}

function registerMessageHandler(func) {
  socket.onmessage = (e) => {
    console.log(`message: ${e.data}`);
    let msg = JSON.parse(e.data);
    func(msg);
  }
}

function sendMessage(msg) {
  socket.send(JSON.stringify(msg));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
};
