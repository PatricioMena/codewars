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

// <7 kyu> Remove the minimum
// Description:
// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
const removeSmallest = (numbers) => {
  let min = Math.min(...numbers);
  return numbers.splice();
};

console.log(removeSmallest([1, 2, 3, 4, 5]));
