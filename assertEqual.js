// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ The following: Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 The following: Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
