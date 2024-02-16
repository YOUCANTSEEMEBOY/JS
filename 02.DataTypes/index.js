// JavaScript Data Types

// 1. Primitive Data Types (String, Number, Boolean, Null, Undefined, Symbol)
{
  {
    // String
    let stringValue = "Hello, World!";
    console.log(typeof stringValue);
  }
}

// Number
let numberValue = 42;
console.log(typeof numberValue);

// Boolean
let booleanValue = true;
console.log(typeof booleanValue);

// Null
let nullValue = null;
console.log(typeof nullValue);

// Undefined
let undefinedValue;
console.log(typeof undefinedValue);

// Symbol (introduced in ECMAScript 6)
let symbolValue = Symbol("unique");
console.log(typeof symbolValue);

// 2. Complex Data Types (Object, Array , Function)

// Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};
console.log(person.firstName);

// Array
let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// Function
function add(a, b) {
  return a + b;
}

// 3. Special Data Types (NaN , Infinity and -Infinity)

// NaN (Not a Number)
let resultNaN = "abc" / 2; // NaN

// Infinity and -Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
