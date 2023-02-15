const assertEqual = require('../assertEqual');
const tail = require('../tail');
// Test Case 1:
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
// Test Case 2:
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "LighthouseLabs");