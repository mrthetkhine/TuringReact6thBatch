function getData()
{
    console.log('Get data started');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Get data done return 40');
            resolve(40);
        },2000);
        
    });
}
function getDataTwo()
{
    console.log('getDataTwo started');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getDataTwo done return 100');
            resolve(100);
        },3000);
       
    });
}
getData()
    .then(x=> x+1)
    .then(console.log);
console.log('Middle');
getDataTwo()
    .then(x=>x*3)
    .then(console.log)
console.log('End');