/*
Functions are reusable blocks of code that perform specific tasks.
They're essential for organizing code, avoiding repetition, and making it more modular.
JavaScript treats functions as first-class citizens, meaning they can be:
Assigned to variables
Passed as arguments to other functions
Returned from functions
*/
const hello = () => {
    console.log("Hey How are You");
    return "hi";
}

function onePlusAvg(x,y){
    return 1+(x+y)/2;
}

const sum = (p,q) => {
    return p+q;
}
hello(); //Hey How are You
let v = hello();
console.log(v); // Hey How are You + hi

console.log("One Plus Average of 5 and 6 is: ",onePlusAvg(5,6));
console.log(sum(9,7));