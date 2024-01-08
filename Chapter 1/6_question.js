// Create a 'const' object in javascript, can you change it to hold a number later?
const person = {
    name: "Vishal",
    age: 20
}
// person = 54;
// No Not Possible

// Adding New Key to const object
person.friend = "Messi";
person['Company'] = "Google";
console.log(person);

// * we cant change the value of 'const' object but can add new keys in it.