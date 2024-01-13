// Displays a dialog box that 'prompts' the user for input and returns the entered value.
let a = prompt("Hey whats your age?"); //enter any number
console.log(typeof a); //string
a = Number.parseInt(a) //This will convert string 'a' into 'Number'
console.log(typeof a);
a = Character.parseInt(a); // ERROR