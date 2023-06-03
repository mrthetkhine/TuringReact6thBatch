const fs = require("fs");

console.log('Before');
fs.promises.readFile('./name.txt')
           .then(fileName=>fs.promises.readFile(fileName))//box. Box(f->Box(value))
           .then(data=>console.log('Data ',data.toString().length));
console.log('End');