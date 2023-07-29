interface SomeType {
    readonly prop: string;
}
let data:SomeType = {
    prop : "Message"
}
//data.prop = "Change";
interface Home {
    readonly resident: { name: string; age: number };
}
let home : Home= {
    resident : {
        name : "Something",
        age : 34
    }
}  
home.resident.age = 29; 