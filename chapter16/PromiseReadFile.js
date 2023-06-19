const fs = require("fs");
const util = require("util");
let readFilePromise = util.promisify(fs.readFile);
console.log('Before');
/*
readFilePromise('./data.txt')
    .then(data=>console.log('Data => ',data.toString()));
*/
async function readFile()
{
    let data = await readFilePromise('./data.txt');
    console.log("Data ",data.toString());
}
readFile();
console.log('End');