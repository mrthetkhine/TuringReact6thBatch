const fs = require("fs");

function printFile(filename, encoding="utf8") 
{ 
    fs.createReadStream(filename,encoding)
      .pipe(process.stdout);
}
printFile('./pie.js');