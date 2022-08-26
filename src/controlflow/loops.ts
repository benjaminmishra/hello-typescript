namespace Loops {
    let numbers: number[] = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        if(numbers[i] ==5){
         break;
        }
    }

    console.log("==== for in loop =====");
    
    for(let index in numbers){
        console.log(numbers[index]);
    }

    console.log("==== for of loop =====");

    for(let item of numbers){
        console.log(item);
    }




    let x = 1;
    

    while(x>100){
        x=x+1;
        
        if (x==10){
            console.log(x);
            continue;
        }

        
    }
}