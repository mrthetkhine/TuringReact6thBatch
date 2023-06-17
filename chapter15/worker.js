
onmessage = (event)=>{
    console.log('Event in worker ',event.data);
    postMessage("Send back to server "+ (event.data+"").toUpperCase());
};
console.log('Worker.js loaded...');