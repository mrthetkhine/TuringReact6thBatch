//console.log('Window ',window);
function fact(n)
{
    if(n==0)
    {
        return 1;
    }
    else
    {
        return fact(n-1)*n;
    }
}
onmessage = (event)=>{
    console.log('Event in factorial worker ',event.data);
    let n = event.data;
    let result = fact(n);
    postMessage(result);
};
console.log('Worker Factorial .js loaded...');