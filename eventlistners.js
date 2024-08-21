const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Login', () => {
  console.log('You are successfully loged in!!');
});
myEmitter.emit('Login');