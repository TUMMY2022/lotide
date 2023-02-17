const assert = require('chai').assert;
const tail = require('../tail');
// TEST CODE
describe("#tail", () => {
  it('should returns Lighthouse Labs bootcamp for ["Hello", "Lighthouse", "Labs", "bootcamp"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs", "bootcamp"]);
    assert.deepEqual(result, ["Lighthouse", "Labs", "bootcamp"]);
  });

  it('should returns Lighthouse Labs for ["Hello", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

});