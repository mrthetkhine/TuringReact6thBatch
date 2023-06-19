const { EventEmitter } = require("events");
const firstEmitter = new EventEmitter();

function doSomething()
{
    setTimeout(()=>{
        console.log("Task Done");
        firstEmitter.emit("done-event",200);
        return 200;
    },1000);
}
doSomething();
firstEmitter.on('done-event',(event)=>{
    console.log('After done event',event);
});