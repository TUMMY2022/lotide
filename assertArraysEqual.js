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

const assertEqual = function(actual, expected) {
  if (actual === expected)
    
    console.log(`✅✅✅ The assertion Passed`);
  else
    console.log(`🛑🛑🛑 The assertion Failed`);
};
const assertArraysEqual = function(array1, array2) {
  assertEqual(eqArrays(array1, array2),true);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
