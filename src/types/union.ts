type numAndString = number | string

let a: numAndString = 0;
let A: numAndString = "0";


enum Size {small, medium,large};
enum Length {short, long}

type SizeAndLength = Size | Length

let b: SizeAndLength = Size.small



interface A {
    id : string,
    name: string
}

interface B {
    id: string,
    age: number,
    address: string
}

type unionAB =  A | B;
type intersectAB = A & B;


let myAB: intersectAB = {
    id: "1",
    age: 20,
    address: "3",
    name: "efg"
}