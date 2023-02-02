
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
    console.log(`✅✅✅ The following: Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 The following: Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const middle = function(givenArray) {
  let  indexOfMiddle = 0;
  let result = [];

  if (givenArray.length === 0 || givenArray.length === 1 || givenArray.length === 2) {
    return result;
  } else if (givenArray.length % 2 !== 0) {
    indexOfMiddle = Math.floor(givenArray.length / 2);
    result.push(givenArray[indexOfMiddle]);
  } else {
    indexOfMiddle = Math.floor((givenArray.length - 1) / 2);
    for (let j = indexOfMiddle; j <= indexOfMiddle + 1; j++) {
      result.push(givenArray[j]);
    }
  }
  return result;
};

// TEST CODE
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,7]), [2,5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);