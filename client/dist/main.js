(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  function Message(_ref) {
    var c = _ref.content,
        _ref$author = _ref.author,
        a = _ref$author === undefined ? 'GStarP' : _ref$author,
        _ref$time = _ref.time,
        t = _ref$time === undefined ? new Date().getTime() : _ref$time;

    _classCallCheck(this, Message);

    this.content = c;
    this.author = a;
    this.time = t;
  }

  _createClass(Message, [{
    key: 'serialize',
    value: function serialize() {
      return {
        content: this.content,
        author: this.author,
        time: this.time
      };
    }
  }]);

  return Message;
}();

var ChatBox = function ChatBox() {
  _classCallCheck(this, ChatBox);

  _wsClient2.default.init('ws://localhost:3001');
  _wsClient2.default.registerOpenHandler(function () {
    var message = new Message({ content: 'Hello World!' });
    _wsClient2.default.sendMessage(message.serialize());
  });
  _wsClient2.default.registerMessageHandler(function (msg) {
    console.log(msg);
  });
};

exports.default = ChatBox;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cb = new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var socket = void 0;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(func) {
  socket.onopen = function () {
    console.log('connection open');
    func();
  };
}

function registerMessageHandler(func) {
  socket.onmessage = function (e) {
    console.log('message: ' + e.data);
    var msg = JSON.parse(e.data);
    func(msg);
  };
}

function sendMessage(msg) {
  socket.send(JSON.stringify(msg));
}

exports.default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL2FwcC5qcyIsImNsaWVudC9zcmMvbWFpbi5qcyIsImNsaWVudC9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7SUFFTSxPO0FBQ0oseUJBSUc7QUFBQSxRQUhRLENBR1IsUUFIRCxPQUdDO0FBQUEsMkJBRkQsTUFFQztBQUFBLFFBRk8sQ0FFUCwrQkFGVyxRQUVYO0FBQUEseUJBREQsSUFDQztBQUFBLFFBREssQ0FDTCw2QkFEVSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDVDs7QUFBQTs7QUFDRCxTQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBSyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU87QUFDTCxpQkFBUyxLQUFLLE9BRFQ7QUFFTCxnQkFBUSxLQUFLLE1BRlI7QUFHTCxjQUFNLEtBQUs7QUFITixPQUFQO0FBS0Q7Ozs7OztJQUdHLE8sR0FDSixtQkFBYztBQUFBOztBQUNaLHFCQUFPLElBQVAsQ0FBWSxxQkFBWjtBQUNBLHFCQUFPLG1CQUFQLENBQTJCLFlBQU07QUFDL0IsUUFBSSxVQUFVLElBQUksT0FBSixDQUFZLEVBQUUsU0FBUyxjQUFYLEVBQVosQ0FBZDtBQUNBLHVCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0QsR0FIRDtBQUlBLHFCQUFPLHNCQUFQLENBQThCLGVBQU87QUFDbkMsWUFBUSxHQUFSLENBQVksR0FBWjtBQUNELEdBRkQ7QUFHRCxDOztrQkFHWSxPOzs7OztBQ3BDZjs7Ozs7O0FBRUEsSUFBSSxLQUFLLElBQUksYUFBSixFQUFUOzs7Ozs7Ozs7QUNEQSxJQUFJLGVBQUo7O0FBRUEsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUNqQixXQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFVBQVEsR0FBUixDQUFZLGVBQVo7QUFDRDs7QUFFRCxTQUFTLG1CQUFULENBQTZCLElBQTdCLEVBQW1DO0FBQ2pDLFNBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ3BCLFlBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0E7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxJQUFoQyxFQUFzQztBQUNwQyxTQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDeEIsWUFBUSxHQUFSLGVBQXdCLEVBQUUsSUFBMUI7QUFDQSxRQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsRUFBRSxJQUFiLENBQVY7QUFDQSxTQUFLLEdBQUw7QUFDRCxHQUpEO0FBS0Q7O0FBRUQsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQU8sSUFBUCxDQUFZLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBWjtBQUNEOztrQkFFYztBQUNiLFlBRGE7QUFFYiwwQ0FGYTtBQUdiLGdEQUhhO0FBSWI7QUFKYSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbmltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xyXG5cclxuY2xhc3MgTWVzc2FnZSB7XHJcbiAgY29uc3RydWN0b3IgKHtcclxuICAgIGNvbnRlbnQ6IGMsXHJcbiAgICBhdXRob3I6IGEgPSAnR1N0YXJQJyxcclxuICAgIHRpbWU6IHQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gYztcclxuICAgIHRoaXMuYXV0aG9yID0gYTtcclxuICAgIHRoaXMudGltZSA9IHQ7XHJcbiAgfVxyXG5cclxuICBzZXJpYWxpemUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXHJcbiAgICAgIGF1dGhvcjogdGhpcy5hdXRob3IsXHJcbiAgICAgIHRpbWU6IHRoaXMudGltZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENoYXRCb3gge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcclxuICAgIHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcclxuICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSh7IGNvbnRlbnQ6ICdIZWxsbyBXb3JsZCEnIH0pO1xyXG4gICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUoKSk7XHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKG1zZyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcclxuIiwiaW1wb3J0IENoYXJ0Qm94IGZyb20gJy4vYXBwJztcclxuXHJcbmxldCBjYiA9IG5ldyBDaGFydEJveCgpO1xyXG4iLCJcclxubGV0IHNvY2tldDtcclxuXHJcbmZ1bmN0aW9uIGluaXQodXJsKSB7XHJcbiAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoZnVuYykge1xyXG4gIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbiBvcGVuJyk7XHJcbiAgICBmdW5jKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKGZ1bmMpIHtcclxuICBzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBtZXNzYWdlOiAke2UuZGF0YX1gKTtcclxuICAgIGxldCBtc2cgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICBmdW5jKG1zZyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtc2cpIHtcclxuICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtc2cpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXQsXHJcbiAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcclxuICByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyLFxyXG4gIHNlbmRNZXNzYWdlXHJcbn07XHJcbiJdfQ==
