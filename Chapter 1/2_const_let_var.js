// "var" is 'globally scoped' while "let" & "const" are 'block scoped'
// -------------- "let"----------------
let a=8;
{
    let a = 'vishal';
    console.log(a); // output = vishal 
}
console.log(a); // output = 8

// -------------- "var"----------------
var b = 15;
{
    var b = "hi";
    console.log(b); // output = hi
} 
console.log(b); // output = hi

/*  
    "var" can be updated & redeclared 
    var a = 5;
    var a = 6;
*/

/*
    "let" can only be updated 
    let a = 8;
    a = 4; 
*/

//---------------- "const" ---------------
// "const" can neither be updated or redeclared
const author = "Vishal";
// let author = 5; // output : identifier author has already been declared
