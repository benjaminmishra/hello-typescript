// making a varaible null by using union operator
let myName: string|null = null;
myName = "x";


// making a type optional you can assign undefined to it
type manager = {
    fullName: string,
    phoneNumber?: number // optional property
}

let manager01: manager = {
    fullName : "abc",
}
console.log("phno :" + manager01.phoneNumber);

type emp = {
    fullName: string,
    phoneNumber: number
}



let emp01: emp = {
    fullName: "efg",
    phoneNumber:100000
}


