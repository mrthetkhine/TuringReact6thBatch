function doSomething<Type1 extends {
    toString():string
},Type2 extends{
    toString():string
}>(a:Type1, b: Type2)
{
    return a.toString()+b.toString();
}

let result = doSomething<number,string>(2,'Hello');
console.log('Result ',result);