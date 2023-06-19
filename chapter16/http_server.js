const net = require('net');
let server = net.createServer();
server.listen(8080, () => console.log("server start in 8080"));

let message = `HTTP/1.1. 200 OK\r\n

<html>
Hello World
</html>
`
server.on('connection',socket=>{
    console.log('Client connect ');
    socket.on('data',data=>{
        console.log('data from client ',data.toString());
        socket.write(message);
        socket.end();
    }); 
   
});

//http://localhost:8080