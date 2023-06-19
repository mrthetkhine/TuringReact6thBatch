const path = require("path");

console.log("File name ",__filename);
console.log("dir name ",__dirname);

console.log("sep ",path.sep);
let p = "src/pkg/test.js";

console.log('basename ',path.basename(p));
console.log('extension ',path.extname(p));
console.log('path.dirname ',path.dirname(p));