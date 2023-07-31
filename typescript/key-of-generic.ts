function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}
type Something = {
    content: string
}
let data: Something = {
    content : "Hello"
}   
console.log("Get propery ", getProperty(data,"content"));

function create<Type>(c: { new (): Type }): Type {
    return new c();
}
class Human
{
    constructor()
    {
        console.log('Human constructor');
    }
}
let obj = create(Human);
console.log('Obj ',obj);