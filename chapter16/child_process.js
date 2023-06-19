const child_process = require("child_process");
let listing = child_process.execSync("ls -l *.js",{encoding: "utf8"});
console.log(listing);