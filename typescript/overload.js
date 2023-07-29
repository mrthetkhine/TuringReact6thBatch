function doSomething()
{
    function method1(para)
    {
        console.log('method 1',para);
    }
    function method2(a,b)
    {
        console.log('A ',a, ' b ',b);
    }
    if(arguments.length ==1)
    {
        method1(arguments[0])
    }
    else if( arguments.length== 2)
    {
        method2(arguments[0],arguments[1]);
    }
}
doSomething('hi');
doSomething(1,3);