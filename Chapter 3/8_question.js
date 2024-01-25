let marks = {
   //Key : value   
    vishal: 90,
    shubham: 19,
    lovish: 56,
    Monika: 4
};
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
} 

/*
--> Object.keys(): is a method that returns an array of a given object's own enumerable property names(Keys).

--> .length : This property, when applied to an array, returns the number of elements within that array.
e.g. 
const marks = { Math: 75, Physics: 80, Chemistry: 90 };
const numberOfKeys = Object.keys(marks).length;
console.log(numberOfKeys);  // Output: 3

--> [i]: This array indexing syntax is used to access a specific element within the array, where i represents the index of the desired element.

--> marks[Object.keys(marks)[i]]): This part uses the retrieved key to access the corresponding value within the marks object. The [] notation is used to access object properties using their keys as strings.
*/