const child_process = require("child_process");

let child = child_process.fork(`${__dirname}/child.js`);
child.send({x: 4, y: 3});
child.on("message", message => {
    console.log("Parent got message ",message);
    child.disconnect();
});