const addevent = require('events');

class NewEvent extends addevent{}

const eventobject = new NewEvent();

eventobject.on('waterfall', () => {
    console.log('Turn off the motor');

    setTimeout(() => {
        console.log('Reminder, save mother earth')
    }, 3000);
});

console.log('congratulations your script is running')
eventobject.emit('waterfall');