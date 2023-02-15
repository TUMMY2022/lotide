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
module.exports = middle;
