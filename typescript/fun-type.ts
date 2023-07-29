function hello()
{
    console.log("Hello");
}
type GreetFun = ()=>void;
let fun :GreetFun = hello;
fun();

function another()
{
    console.log('Another');
}
fun = another;
fun();
function somethingElse(data:number)
{
    return "Hello";
}
//fun = somethingElse;
//fun();