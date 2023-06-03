const fs = require("fs");

console.log('Before');
fs.readFile('./hello.txt',(err,data)=>{
    if(!err)
    {
        console.log('Data readdone');
        console.log(data.toString().length);
    }
});
console.log('End');