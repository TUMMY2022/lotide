const takeUntil = function(array, callback) {
  // implementation
  const result = [];
  for (let j = 0; j < array.length; j++) {
    if (!callback(array[j])) {
      result.push(array[j]);
    } else {
      return result;
    }
  }
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

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqArrays(array1, array2))
    console.log(`✅✅✅ The following: Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  else
    console.log(`🛑🛑🛑 The following: Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
};

//Test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log('---------------------------------');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood']);
console.log('---------------------------------');
const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data2, x => x === 'to');
console.log(results3);
assertArraysEqual(results3, [ 'I\'ve', 'been', 'to', 'Hollywood']);
