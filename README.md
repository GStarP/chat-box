# Chat-Box

based on `Web开发权威指南`

## Connect to Web Socket

use multiple terminals to connect as multiple users

```bash
npm install -g wscat
wscat -c ws://localhost:[port]
```

if you are using win, please open cmd and `cd` to where wscat.cmd exists

## Update 1

considering that server.js cannot imitate real chat-room well, I upgrade it

by `node server-1.js`, you can start a advanced chat-box which can:

1. give every user a name

2. serve at most 4 users

3. send a message and its author to all users

4. return its name when a user leaves