const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
// TEST CODE
describe("#assertArraysEqual", () => {
  it("should returns true for [1, 2, 3], [1, 2, 3]", () => {
    assertArraysEqual([1, 2, 3], [1, 2, 3]);
  });

  it("should returns 'true' for ([1, 2, 4, 3], [1, 2, 4, 3])", () => {
    assertArraysEqual([1, 2, 4, 3], [1, 2, 4, 3]); 
  });

});