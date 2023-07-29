interface User{
    name : string,
    age : number
}
interface SomethingElse
{
    name : string,
    age : number
}
function greet(user:User)
{
    console.log("User ",user.name, " Age ",user.age);
}
greet({
    name: 'Something',
    age : 31
});

let another = {
    name: 'Something',
    age : 31,
    somethingElse : 'soemthing else'
}
greet(another);

let user : User = another;
//a=b