class Human
{
    //name : string;
    //age : number;

    constructor(public name: string, public age: number)
    {
    }
}
let h = new Human('Tk',38);
console.log(h);
let Clazz = Human;
let k = new Clazz('ANother',33);
console.log(k);

type Construct = {
    new (name:string, age: number):Human
}
let ctor: Construct = Human;
let obj = new ctor('Constructor',11);
console.log(obj);