// FUNCTION IMPLEMENTATION
const head = function(arrayValue) {
  return arrayValue[0];
};

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ The following: Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 The following: Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
