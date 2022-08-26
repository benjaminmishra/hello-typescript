namespace TypeCasting {
    let a : number = 4;

    let b : {a:number, b:string} = (a as unknown) as {a:number, b:string};
    
    console.log(':',b.a);

    
    let c: any  = "My name is abc";

    
    if(typeof(c)=='number'){
    console.log((<number>c).toString());
    } else {
    console.log((c as string).length);
    }
}