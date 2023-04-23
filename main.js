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

//// Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
// const arr = ['Telescopes', 'Glasses', 'Eyes', 'Monocles'];

const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);

//// Largest Elements
// Write a program that outputs the top n elements from a list.
// largest(2, [7,6,5,4,3,2,1])
// Output => [6,7]

const largest = (n, array) => array.sort((b, a) => a - b).slice(array.length - n);

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

//// <7 kyu> Between Extremes
// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
const betweenExtremes = (numbers) => console.log(...numbers);
console.log(betweenExtremes([23, 3, 19, 21, 16]));

//// <8 kyu> Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example:
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;

//// <8 kyu> Calculate average
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

const findAverage = (array) =>
  array.length === 0 ? 0 : array.reduce((acc, currVal) => acc + currVal, 0) / array.length;

//// <7 kyu>
// Sum of Minimums!
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
const someArr = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
];

const sumOfMinimums = (arr) => Math.min(...arr);
console.log(someArr);

//// <8 kyu>
// const fixTheMeerkat = (arr) =>
//   ([arr[0], arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1], arr[0]]);
const fixTheMeerkat = (arr) => arr.reverse();
// The reverse() method: first array element now becoming last, and the last array elemen becoming the first.

console.log(fixTheMeerkat(['tail', 'body', 'head']));

///<7 kyu> The Office I - Outed
const outed = (meet, boss) => {
  // Checking if given boss
  if (boss in meet) {
    meet[boss] *= 2;
  }

  // Converting object values in an array
  let userRating = Object.values(meet);
  // Sum of values in the array
  let rating = userRating.reduce((acc, currVal) => acc + currVal) / userRating.length;

  if (rating <= 5) {
    return 'Get Out Now!';
  } else return `Nice Work Champ!`;
};

// function outed(meet, boss) {
//   let names = Object.keys(meet)
//   let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
//   return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
// }

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0
    },
    'laura'
  )
);
