const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
// TEST CODE
describe("#middle", () => {
  it("should returns 2 for [1, 2, 3]", () => {
    assertArraysEqual(middle([1, 2, 3]), [2]);
  });

  it("should returns [2,5] for ['5']", () => {
    assertArraysEqual(middle([1,2,5,7]), [2,5]);
  });

  it("should returns false for [1, 2, 3, 4, 5, 6]", () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });

});