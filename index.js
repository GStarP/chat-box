// start web socket server
var ws_server = require('./server/ws-server');
var http = require('http');
var fs = require('fs');
var path = require('path');

function resolvePath(url) {
  if (url === '/')
    url += 'index.html';
  var fileName = url.substring(1);
  return path.resolve(__dirname, 'client', fileName);
}

const server = http.createServer((req, res) => {
    console.log(`request path: ${req.url}`);
    // read file content and return to client
    fs.readFile(resolvePath(req.url), (err, file) => {
      if (err) {
        res.end('not found');
      } else {
        res.end(file);
      }
    });
});

server.listen(3000);

console.log('server start on http://localhost:3000')
