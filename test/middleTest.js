const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
// TEST CODE
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,7]), [2,5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);