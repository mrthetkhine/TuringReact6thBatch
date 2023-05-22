window.MyModule = window.MyModule || (function(){
    console.log('Module intialized');

    function method()
    {
        console.log('Internal method');
    }
    return {
        api : method,
    }
})();