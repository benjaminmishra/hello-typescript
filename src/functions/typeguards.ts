namespace TypeGuards {

    let Emp: any = "1";
    let result:number = 0;

    //console.log(typeof(Emp));

    if(typeof(Emp) == 'number'){
        console.log(Emp+1);
    } 
    else if (typeof(Emp)=='string'){
        console.log("Emp is of type string");
    }


    class Customer {
        fullName: string = "A";

        getName() :string{
            return this.fullName;
        }
    }

    let cust = new Customer();

    if (cust instanceof Customer){
        console.log(cust.getName());
    }

    // if('fullName' in cust){
    //     console.log("tsc");
    // } 

    if('xyz' in cust){
        console.log("fails");
    }

}