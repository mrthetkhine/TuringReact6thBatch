const fs = require("fs");

console.log('Before');
fs.readFile('./data.txt',(err,data)=>{
    if(!err)
    {
       fs.writeFile('./data-copy.txt',data,(error,data)=>{
        console.log('File copied');
       });
    }
});
console.log('End');