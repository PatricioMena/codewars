// Exes and Ohs (4/13/23)
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// No odddities here (4/14/23)
//Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.
const noOdds = (values) => values.filter((value) => value % 2 === 0);

// Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
const arr = ['Telescopes', 'Glasses', 'Eyes', 'Monocles'];

const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);
