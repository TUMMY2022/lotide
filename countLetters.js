// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ The following: Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 The following: Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(statment) {
  const output = {};
  for (const char of statment) {
    if (char !== " ") {
      if (output[char]) {
        output[char] ++;
      } else {
        output[char] = 1;
      }
    }
  }
  return output;
};

const result1  = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);
assertEqual(result1["b"], 1);
