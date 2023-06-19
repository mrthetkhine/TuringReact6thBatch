class Event
{
    constructor()
    {
        this.listeners = [];
    }
    add(listener)
    {
        this.listeners.push(listener);
    }
    emit(data)
    {
        for(let listener of this.listeners)
        {
            listener(data);
        }
    }
} 
let emittter = new Event();
function doSomething()
{
    setTimeout(()=>{
        console.log("Task Done");
        emittter.emit(300);
        return 200;
    },1000);
}
emittter.add((data)=>{
    console.log('Task done ',data);
});
emittter.add((data)=>{
    console.log('Task done handler 2 ',data);
});

doSomething();