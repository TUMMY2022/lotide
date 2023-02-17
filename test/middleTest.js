const assert = require('chai').assert;
const middle = require('../middle');
// TEST CODE
describe("#middle", () => {
  it("should returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should returns [2,5] for [1,2,5,7]", () => {
    assert.deepEqual(middle([1,2,5,7]), [2,5]);
  });

  it("should returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });

});