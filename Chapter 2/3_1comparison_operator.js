// --------------Comparison Operator----------------
/*
    '==' equal to
    '!=' not equal to
    '===' equal value and type
    '!==' not equal value and type
    '>' greater than
    '<' less than
    '>=' greater than or equal to
    '<=' less than or equal to
    '?' ternary operator
*/

let x = 2;
console.log(x**=3); // 2^3=8


let a = 5;
let b = "5";
console.log("a == b is",a==b); // true
console.log("a != b is",a!=b); // false
console.log("a === b is",a===b); // false 'a' is number and 'b' is string
console.log("a !== b is",a!==b); // true