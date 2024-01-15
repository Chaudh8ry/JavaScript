// Used to iterate over the properties of an object.
let marks = {
    vishal: 55,
    yatin: 58,
    ajay: 53,
    amit: 55
}
for(let a in marks){
    console.log("Marks of " + a + " is = " + marks[a]); //reason of not using 'marks.a' is given below
}
// *----------------------Important----------------------------
// for(let a in marks){
//     console.log("Marks of " + a + " is = " + marks.a);
// }
// In a for...in loop, the variable a iterates over the property names (keys) of the object, not the values directly.
// Using marks.a tries to access a property named "a", which doesn't exist in the object.
// * Matlab 'a' tho object keys ke baad declare hua hai tho wo apne se pehle ki cheejo ko access kaisai kr skta hai.
// marks[a] This notation correctly retrieves the value based on the key held in the variable a during each iteration.


// *----------------------SYNTAX-------------------------
// for (let 'property' in 'object') {
//      code to be executed for each property
//   }