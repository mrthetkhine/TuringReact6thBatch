const sum = (x, y) => x + y; 
const square = x => x * x;
const another = ()=> console.log('Another');
console.log('Module loaded');
module.exports ={
    sum,
    square
};