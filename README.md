# Chat-Box

based on `Web开发权威指南`

`npm install` to install dependencies

## Server Side

run server side script

```
node test/server.js
```

### Connect to Web Socket

install `wscat` globally

```
npm install -g wscat
```

use multiple terminals to connect as multiple users

```
wscat -c ws://localhost:[port]
```

if you are using win, please open cmd and `cd` to where wscat.cmd exists

### Upgrade

considering that server.js cannot imitate real chat-room well, I upgrade it

by `node test/server-1.js`, you can start an advanced chat-box which can:

1. give every user a name

2. serve at most 4 users

3. message will be sent to all users along with its author

4. return its name when a user leaves

## Client Side

now let's try to build a more complex application

### Develop

execute two command in two terminals

1. `npm run watch`: rebuild when client/src/main.js changes

2. `npm run dev`: restart when server/client files change

after you make changes, swift to app.js and `crtl+s`, then refresh the page

### Use Application

- open in browser `http://localhost:3000/`

- enter a username ( such as rocket-girl-101 )

- send a message and see it

- open the same url in another browser tag

- see history messages then send a new message

- the first tag can also see this new message

### Feature

- just simple message send and receive and show

- no avatar

- no sessionStorage

- no crympt

if you want to try challenges in the book but cannot find a sample, you can see [HermitSun's chattrbox](https://github.com/HermitSun/chattrbox)

I get the html and css from him, thanks very much, `SGNB`

## Common Errors

- connect web socket failed: code 302
  - the port you select to start web socket server has already been used
- cannot find main.js
  - make sure your `npm run dev` and `npm run watch` terminals are normal
  - swift to app.js and press `ctrl+s`
