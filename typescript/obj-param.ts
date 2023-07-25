type Human = {
    name : string,
    age : number,
    address ?: string
};
function display(obj: Human)
{
    console.log('Address ',obj.address );
    console.log("Obj ",obj);
}

let data = {
    name : "Hello",
    age : 30,
   // address : "Somewhere"
}
display(data);
//display("Hello");