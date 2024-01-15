// --------------------Factorial--------------------------
let n = parseInt(prompt("Enter the value of 'n': "));
let fact = 1;
for(let i=2; i<=n; i++){
    fact*=i;
}
console.log("Factotial of " + n + " is = " + fact);
