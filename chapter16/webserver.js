const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

function serve( port) {
    let server = new http.Server();
    server.listen(port);

    server.on('request',(request,response)=>{
        let endpoint = url.parse(request.url).pathname;
        console.log('Endpoint ',endpoint);
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.write("<html>Hello </html>");
        response.end();
    });
}
serve(8080);