class Base
{
    private x = 10;
}
class Derived
{
    print()
    {
        //console.log('x ',this.x);
    }
}
let data = new Base();
console.log('data.x ',data['x']);