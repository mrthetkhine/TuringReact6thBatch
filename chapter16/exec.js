const child_process = require("child_process"); 
const util = require("util");
const execP = util.promisify(child_process.exec);

function parallelExec(commands) {

    let promises = commands.map(command => execP(command, {encoding: "utf8"}));
        
    return Promise.all(promises)
                .then(outputs => outputs.map(out => console.log(out)));
}
parallelExec(["ls -l *.js","ls -la"]);