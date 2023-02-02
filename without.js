const without = function(arrayList, value) {
  let result = [];
  for (let j = 0; j < arrayList.length; j++) {
    if (!value.includes(arrayList[j])) {
      result.push(arrayList[j]);
    }
  }
  return result;
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

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ The assertion Passed`);
  else
    console.log(`🛑🛑🛑 The assertion Failed`);
};
const assertArraysEqual = function(array1, array2) {
  assertEqual(eqArrays(array1, array2),true);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);