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
