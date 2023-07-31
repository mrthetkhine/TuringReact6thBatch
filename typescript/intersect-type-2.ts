interface Type1
{
    color : string
}
interface Type2
{
    width: number
}
type Intersect =  Type1 & Type2;
let data : Intersect = {
    color : 'red',
    width : 30,
}