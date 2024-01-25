/*
    if statement
    if else statement
    if else if else statement
*/
let a = prompt("What is Your age: ");
a = Number.parseInt(a);
if(a>0){
    alert("Valid Age");
}
else{
    alert("Invalid Age");
}

// Ternary Operator
console.log("You ", (a<18? "cant Drive" : "can Drive"));