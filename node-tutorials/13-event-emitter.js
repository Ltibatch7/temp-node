const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('response',(name)=>{
    console.log(`data received from user ${name}`);
});

eventEmitter.on('response',()=>{
    console.log('some other data');
});

eventEmitter.emit('response','john');