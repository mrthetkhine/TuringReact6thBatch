function show(data?:string)
{
    console.log('Show ',data);
}
show('hello')
show();

function defaultFun(data="Something else")
{
    console.log('Default ',data);
}
defaultFun();
defaultFun("hello");