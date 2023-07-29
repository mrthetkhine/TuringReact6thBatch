interface Address
{
    street : string,
    township:string,
}
interface Address
{
    city: string
}
interface AddressWithUnit extends Address
{
    unit: string
}
let data : AddressWithUnit = {
    street : "some",
    township : 'Any',
    city: "ygn",
    unit : "Nothing"
}