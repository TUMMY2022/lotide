const assert = require('chai').assert;
const tail = require('../tail');
// TEST CODE
describe("#tail", () => {
  it('should returns Lighthouse Labs bootcamp for ["Hello", "Lighthouse", "Labs", "bootcamp"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs", "bootcamp"]);
    assert.strictEqual(result.length, 3);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
    assert.strictEqual(result[2], "bootcamp");
  });

  it('should returns Lighthouse Labs for ["Hello", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(words.length, 3);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");

  });

});