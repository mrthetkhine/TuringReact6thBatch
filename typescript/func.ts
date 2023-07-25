function greet(msg:string)
{
    console.log("Hello ",msg);
}
greet('Good afternoon');
//greet(3);

function add(a:number,b:number):number
{
    return a+b;
}
let k = add(2,3);
console.log('k is ',k);
function getSomething():number
{
    return 4;
}

let names = ["apple","orange"];
names.map(name => console.log(name.toUpperCase()))