const net = require('net');
let server = net.createServer();
server.listen(8080, () => console.log("server start in 8080"));


server.on('connection',socket=>{
    console.log('Client connect ');
    socket.on('data',data=>{
        console.log('data from client ',data.toString());
        socket.write('Reply '+ data.toString().toUpperCase());
        socket.end();
    }); 
   
});