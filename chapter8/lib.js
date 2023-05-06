window.MyModule = window.MyModule || (function()//IIFE
{
    console.log('Module loaded');

    function push()
    {
        console.log('Push');
    }
    function pop()
    {
        console.log('Pop');
    }
    return {
        push,
        pop,
    }
})();