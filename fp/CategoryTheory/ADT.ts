type color = 'red' | 'green' | 'blue';
let data : color = 'red';
data = 'green';
//data = 'someting';

type Circle = {
    typeName : string,
    radius : number,
};
type Rectangle = {
    typeName : string,
    width : number,
    height : number,
};
type Shape = Circle | Rectangle;
type Nameable = {
    name : string,
};
type Ageable = {
    age : number
};
type Dog = Nameable & Ageable;
let dog : Dog = {
    name : 'Some',
    age  :3
}