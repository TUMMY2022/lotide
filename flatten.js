const flatten = function(givenArray) {
  let result = [];
  for (let j = 0; j < givenArray.length; j++) {
    if (Array.isArray(givenArray[j])) {
      for (let k = 0; k < givenArray[j].length; k++) {
        result.push(givenArray[j][k]);
      }
    } else {
      result.push(givenArray[j]);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(["hello", "world", ["at","lighthouse","lab"]]));
