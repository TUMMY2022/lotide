const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let j = 0; j < array1.length; j++) {
      if (Array.isArray(array1[j])) {
        return eqArrays(array1[j], array2[j]);
      } else if (array1[j] !== array2[j]) {
        return false;
      }
    }
    return true;
  }
};

/**
 * const assertEqual = function(actual, expected) {
  if (actual === expected)
  
  console.log(`✅✅✅ The assertion Passed`);
  else
  console.log(`🛑🛑🛑 The assertion Failed`);
};
*/

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqArrays(array1, array2))
    console.log(`✅✅✅ The following: Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  else
    console.log(`🛑🛑🛑 The following: Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
};

// Test..
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
console.log("------------------------------------------");
const words2 = ["light", "house", "lab", "is", "great", "compass"];
const results2 = map(words2, words2 => words2[1]); // should be ture
//console.log(results2);
assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 't' ]); //// should be false