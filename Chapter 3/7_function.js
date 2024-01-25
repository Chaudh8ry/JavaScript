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
/*
Arrow Function: A concise syntax introduced in ES6 for declaring functions.
Features:
No function keyword.
const or let for assignment.
Implicit return value if a single expression is used.
this keyword bound to its enclosing scope (usually lexical)
*/


function onePlusAvg(x,y){
    return 1+(x+y)/2;
}
/*
Traditional Function Declaration: The standard way of defining functions in JavaScript.
Features:
Starts with the function keyword.
Has its own this binding, determined by how the function is called.
Doesn't require assignment to a variable.
*/


const sum = (p,q) => {
    return p+q;
}
hello(); //Hey How are You
let v = hello();
console.log(v); // Hey How are You + hi

console.log("One Plus Average of 5 and 6 is: ",onePlusAvg(5,6));
console.log(sum(9,7));

/*
*When to Use Each:

Arrow Functions:
Preferred for conciseness and clarity, especially with callbacks and higher-order functions.
Use when you need lexical this binding.

Traditional Functions:
Preferred for complex logic and when a specific this binding is required.
Use when you need to leverage this within the function
*/