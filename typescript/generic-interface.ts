interface Box<Type>
{
    content: Type
}
let box1 :Box<number> = {
    content : 3
};
let box2: Box<string> = {
    content : "str"
}
type Dollar = number;
let money : Dollar = 32;