// Declaration using var
var globalVariable = "I am a global variable";

// Declaration using let
let mutableVariable = "I can be reassigned";

// Declaration using const
const constantVariable = "I cannot be reassigned";

// Output initial values
console.log("Global Variable:", globalVariable);
console.log("Mutable Variable:", mutableVariable);
console.log("Constant Variable:", constantVariable);

// Modifying values
globalVariable = "I can be changed globally";
mutableVariable = "I have a new value"; // Allowed for let

// Uncommenting the line below will result in an error because you can't reassign a constant variable
// constantVariable = "I cannot be reassigned";

// Output modified values
console.log("Updated Global Variable:", globalVariable);
console.log("Updated Mutable Variable:", mutableVariable);
console.log("Constant Variable (unchanged):", constantVariable);

// Scoping differences
function exampleFunction() {
  var functionScopedVar = "I am function-scoped";
  let functionScopedLet = "I am also function-scoped";
  const functionScopedConst = "I am function-scoped and constant";

  console.log(
    "Inside function:",
    functionScopedVar,
    functionScopedLet,
    functionScopedConst
  );
}

// Uncommenting the line below will result in an error because var is not block-scoped
// console.log("Outside function:", functionScopedVar);

// Uncommenting the line below will result in an error because let and const are block-scoped
// console.log("Outside function:", functionScopedLet, functionScopedConst);

exampleFunction();

// Hoisting with var
console.log("Before hoisting:", hoistedVar); // Outputs: undefined
var hoistedVar = "I am hoisted";
console.log("After hoisting:", hoistedVar);

// Uncommenting the line below will result in an error because let and const are not hoisted in the same way
// console.log("Before hoisting:", hoistedLet);
// let hoistedLet = "I am hoisted with let";
