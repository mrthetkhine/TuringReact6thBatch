function add(x:number,y:number)
{
    return x+y;
}
type BinaryFun = (a:number,b:number)=> number;
let fun : BinaryFun = add;
console.log("Fun ",fun(1,2));
function hello()
{
    console.log("Hello");
}
//fun  = hello;