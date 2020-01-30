
import $ from 'jquery';

function getTimeText(t) {
  let dt = new Date(t);
  return `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()} ${dt.toTimeString().substr(0, 8)}`;
}

export class ChatForm {
  constructor(formSelector, inputSelector) {
    this.$form = $(formSelector);
    this.$input = $(inputSelector);
  }

  registerSubmitHandler(func) {
    this.$form.submit( event => {
      event.preventDefault();
      let val = this.$input.val();
      func(val);
      this.$input.val('');
    });
    this.$form.find('button').on('click', () => this.$form.submit());
  }
};

export class ChatList {
  constructor(listSelector, username) {
    this.$list = $(listSelector);
    this.username = username;
  }

  renderMessage({ content: c, author: a, time: t}) {
    let $messageRow = $('<li>', {
      'class': 'message-row'
    });
    if (this.username == a) {
      $messageRow.addClass('me');
    }
    let $message = $('<p>');
    $message.append($('<span>', {
      'class': 'message-author',
      text: a
    }));
    $message.append($('<span>', {
      'class': 'message-time',
      text: getTimeText(t)
    }));
    $message.append($('<span>', {
      'class': 'message-content',
      text: c
    }));
    $messageRow.append($message);
    this.$list.append($messageRow);
    $messageRow.get(0).scrollIntoView();
  }
};

export function promptForUsername() {
  let username = prompt('Enter your username');
  return username;
}
