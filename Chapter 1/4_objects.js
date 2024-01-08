// ------------Non Primitive DataType--------------
/*
In JavaScript, objects are fundamental building blocks for representing complex data structures. They act as containers for storing collections of key-value pairs, where keys are strings and values can be of any data type, including other objects.
*/
let person = {
    // name ---> 'key' , "Vishal Chaudhary" ---> 'Value'
    name: "Vishal Chaudhary",
    age: 20,
    city: "New Delhi"
};
// Use dot notation or bracket notation for access
console.log(person.name); // "Vishal Chaudhary"
console.log(person["age"]); //20

// Assign values to new keys:
person.occupation = "Currently Studying";
console.log(person.occupation);

// Using the 'delete' operator
delete person.city;
console.log(person.city); // undefined