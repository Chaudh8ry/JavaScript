let score = true

// console.log(typeof score)
// console.log(score)

// *Conversion to Number
// String => Number = NaN (Not a Number) *but NaN itself is a Number 
// NULL => Number = '0'
// Undefined => Number = NaN
// Boolean => Number = 1(true) & 0(false)

// let convertedScore = Number(score)
// console.log(typeof convertedScore)
// console.log(convertedScore)

// *Conversion to Boolean
let isLoggedIn = null

// Number => Boolean = 1(true) & 0(False)
// String => Boolean = True(Non-Empty String) & False(Empty-String)
// undefined => Boolean = False
// null => Boolean = False

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

//  *Conversion to String
let value = undefined

let stringValue = String(value)
// Number => String = String
// Everything Can be conversted to string
console.log(stringValue)
console.log(typeof stringValue)