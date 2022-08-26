namespace Conditions {

    // if - else if - else
    let num1: number = 5;
    let num2: number = 5;

    if (num1 < num2) {
        console.log("if statement is true");
    } else if (num1 == num2) {
        console.log("else if statement is true");
    }
    else {
        console.log("none of the above is true, execute the else statement");
    }



    // ternary operator
    let num : number = 8;

    // condition    if true statement          if false statement
    (num == 10)  ?  console.log("num == 10") : console.log("num != 10") ;
  
}