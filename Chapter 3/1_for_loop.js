// Used when you know in advance how many times you want to repeat the code.

// sum of 'n' natural numbers
let n = parseInt(prompt("Enter the value of 'n' :"));
let sum = 0;
for(let i=1; i<=n; i++){
    sum+=i;
}
console.log("Sum of " + n + " natural Number is = " + sum);

// var i = 5;
// for (var i = 0; i < 10; i++) {
//  some code
//}
// Here i is '10' because "var" global scoped


// let i = 5;
// for (let i = 0; i < 10; i++) {
//  some code
// }
// Here i is 5


// * ----------------------Syntax---------------------------
// for (initialization; condition; increment/decrement) {
//      code to be repeated
//   }