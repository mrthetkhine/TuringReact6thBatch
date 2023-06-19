const os = require("os");
console.log("CWD ",process.cwd());
console.log("uid ",process.getuid());
console.log("version ",process.version);
console.log("netwrok ",os.networkInterfaces());
console.log("tempdir ",os.tmpdir());
console.log("total memory ",os.totalmem());