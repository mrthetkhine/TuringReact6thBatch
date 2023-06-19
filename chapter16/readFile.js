const fs = require("fs");

console.log('Before');
fs.readFile('./data.txt',(err,data)=>{
    if(!err)
    {
        console.log('Data read done');
        console.log(data.toString());
    }
});
console.log('End');