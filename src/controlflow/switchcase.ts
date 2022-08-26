namespace SwitchStatement {

    let grade: string = 'B';

    switch (grade) {

        case 'A':
            console.log("You got an A. Excellent!");
            break;
        case 'B':
            console.log("You got a B. Good Job.");
            break;
        case 'C':
            console.log("You got a C. Well done.");
            break;
        case 'D':
            console.log("You got a D. You passed.");
            break;
        case 'F':
            console.log("You got an F. Sorry, you failed.");
            break;

        default:
            console.log("Unknown grade, please see the teacher.");
    }


    let score : number = 50;

    switch(score){
        case 50:
            //
            break;
        case 60:
            break;
        case 70 :
        case 100 :
        default:
    }
}