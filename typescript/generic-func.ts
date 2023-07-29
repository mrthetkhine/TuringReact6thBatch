function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
let numEle = firstElement<number>([10,20,30]);
console.log('Num Ele ',numEle);

let str = firstElement(['one','two','three']);
console.log('Str ',str);