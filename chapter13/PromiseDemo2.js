let pro = Promise.reject(20);
const double = (x)=> x*2;
pro.then(double,err=> {
    throw new Error('We got bad thing')
    })
    .catch(err=>console.log('Err ',err))
    .then(console.log)