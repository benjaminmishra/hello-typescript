namespace FunctionTypes {
    // declare function type
    let add : (x: number, y: number)=> number;

    // assign a function, with or without a name
    add = function sum(x: number, y: number) {
        return x + y;
    };

    console.log(add(1,2));

    // or you can declare inline
    let sum: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

    console.log(sum(4,5));

    // lambda functions or anonymous functionss
    let a = (x:number,y:number) => {
        return x/y;
    };

    console.log((x:number,y:number) => {
        return x/y;
    });
}