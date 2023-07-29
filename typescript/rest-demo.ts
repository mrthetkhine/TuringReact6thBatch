function sum(a:number, ...b: number[])
{
    console.log('B ',b);
    let result = a;
    for(let i=0;i< b.length;i++)
    {
        result+= b[i];
    }
    return result;
}
console.log(sum(1));
console.log(sum(1,2,3));