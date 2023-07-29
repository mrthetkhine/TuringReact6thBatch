type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function isEven(data:number)
{
    return data % 2 ==0;
}
isEven.description = "Check a number is even or not";
let fun : DescribableFunction = isEven;
console.log(fun(3));