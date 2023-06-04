let pro = Promise.reject(20);
const double = (x)=> x*2;
pro.then(double,err=> Promise.reject(4))
   // .catch(err=>(console.log('Err ',err),10))
    .then(x=> x+1, x=> x + 5)
    .then(console.log);