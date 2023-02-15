
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 The assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let j = 0; j < sentence.length; j++) {
    const char = sentence[j];
    if (char !== "") {
      if (Array.isArray(results[char])) {
        results[char].push(j);
      } else {
        results[char] = [j];
      }
    }
  }
  return results;
};

const result = (letterPositions("hello").e);
//console.log(result);
console.log(assertArraysEqual(result, [1]));