class Human
{
    name : string;
    constructor(name:string)
    {
        this.name = name;
        console.log('Human');
    }
}
class Animal
{
    name : string;
    constructor(name:string)
    {
        this.name = name;
        console.log('Animal');
    }
}

type SomeContruct = {
    new (str:string) : object
}
let construct : SomeContruct = Human;
let obj = new construct('Human');

construct = Animal;
obj = new construct('Animal');
