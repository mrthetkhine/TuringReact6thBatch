process.on("message", message => {
    console.log("Child got message ",message);
    process.send({
        hypotenuse: Math.hypot(message.x,message.y)
    });
});