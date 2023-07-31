interface Something
{
    content: string;
}
let data:Something = {
    content : 'hello'
}
type KeyOfSomething = keyof Something;
let something: KeyOfSomething = "content";