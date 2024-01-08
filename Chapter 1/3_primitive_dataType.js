/*
--> A data type that tells what kind of data is being stored in a variable.
--> Primitive data type are set of basic Data Types in Js.
--> 7 Primitive DataTypes in Js "NN BB SS U"
*/

/* -----------------"Null"---------------------
--> This data type can hold only one possible value that is null.
--> Represents the intentional absence of any object value.
*/
let a = null;

/* -----------------"Number"---------------------
--> Represents numeric values, including integers, floating-point numbers, and special values like 'Infinity' and 'NaN'
*/
let b = 345;

/* -----------------"Boolean"---------------------
--> Represents logical values, either true or false.
*/
let c = true;

/* -----------------"BigInt"---------------------
--> This data type can represent numbers greater than (2^53)-1 which helps to perform operations on large numbers. The number is specified by writing ‘n’ at the end of the value
*/
let d = BigInt("567");

/* -----------------"String"---------------------
--> The string data type in JavaScript represents a sequence of characters that are surrounded by single or double quotes.
*/
let e = "Harry";

/* -----------------"Symbol"---------------------
--> This data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.
--> Represents unique and immutable identifiers.
*/
let f = Symbol("I am a nice symbol");

/* -----------------"Undefined"---------------------
--> Represents a variable that has been declared but not yet assigned a value
*/
let g = undefined;


//---------------characteristics---------------
/*
-->Immutable: Their values cannot be changed directly. To modify a primitive value, you need to create a new one.
-->Passed by value: When passed to functions, a copy of the primitive value is passed, not a reference to the original value.
-->Stored directly in memory: They are stored as simple values, unlike objects which are stored as references.
*/

/*
The typeof operator in JavaScript is used to determine the data type of a variable or expression. It returns a string indicating the type of the operand.


*/

/*
'null' is a Primitive Value: Despite its classification as an object by typeof, null is technically a primitive value in JavaScript, alongside numbers, strings, booleans, symbols, and undefined.

* To accurately check for null specifically, use the strict equality operator '==='
if (a === null) {
    This code will only execute if a is null
}
*/
console.log(typeof a); // "object"


console.log(typeof b); // "number"
console.log(typeof c); // "boolean"
console.log(typeof d); // "bigint"
console.log(typeof e); // "string"
console.log(typeof f); // "symbol"
console.log(typeof g); // "undefined"