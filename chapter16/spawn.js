const { spawn } = require('child_process');

const child = spawn('ls');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});