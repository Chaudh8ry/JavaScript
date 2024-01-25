// Taking Value of Operator
const op = prompt("Enter any operator (+,-,*,/)");
// Taking Value of 1st Number 
const num1 = parseFloat(prompt("Enter 1st Number: ")); //since prompt will take input as 'String', parseFloat is used to convert 'String' to "Float" for calculation
const num2 = parseFloat(prompt("Enter 2nd Number: "));

switch (op) { //switch checks the value of operator
    case "+" : console.log(num1 + " + " + num2 + " = " + (num1+num2));
    break;

    case "-" : console.log(num1 + " - " + num2 + " = " + (num1-num2));
    break;
 
    case "*" : console.log(num1 + " * " + num2 + " = " + (num1*num2));
    break;

    case "/" : 
    if(num2==0){
        console.log("ERROR: Division by ZERO");
    }
    else{
        console.log(num1 + " / " + num2 + " = " + (num1/num2));
    }
    break;
    default: console.error("Invalid Operator"); //default case: Handles invalid operators.
} 

console.log(typeof(num1));