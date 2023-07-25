type Bird = {
    name : string,
};
type Animal = {
    type : string
}

type OurBird = Bird & Animal;

let bird: OurBird = {
    name : 'something',
    type : 'another'
} 