const tail = function(arrayValue) {
  return arrayValue.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ The following: Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 The following: Assertion Failed: ${actual} !== ${expected}`);
};

// Test Case 1:
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
// Test Case 2:
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "LighthouseLabs");