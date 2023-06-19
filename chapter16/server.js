const net = require("net");
let server = new net.Server();
server.on("connection", socket => {
    console.log('Get connection');
    socket.end('HTTP/1.1 200 OK\r\n\r\nHello World '+ new Date(),'utf-8');
});
server.on("error", error => {
    console.log('Get error ',error);
    
});
server.listen(6000,'127.0.0.1');
console.log('Server init');