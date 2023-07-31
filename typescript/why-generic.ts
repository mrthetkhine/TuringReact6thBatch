class Stack
{
    data: number[];
    constructor()
    {
        this.data = [];
    }
    push(element: number)
    {
        this.data.push(element);
    }
}
class GenStack<Type>
{
    data: Type[];
    constructor()
    {
        this.data = [];
    }
    push(element:Type)
    {
        this.data.push(element);
    }
    pop():Type|undefined
    {
        return this.data.pop();
    }
}
let numberStack = new GenStack<number>();
numberStack.push(12);
console.log("Pop ",numberStack.pop());