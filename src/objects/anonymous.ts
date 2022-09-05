function helloHuman(human : {
    fullName : string,
    address: string,
    age: number,
    position: number,
    talk : () => void
    move: (from: number, to:number) => void
}){

    console.log("hello " + human.fullName);
}