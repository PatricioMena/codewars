// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Notes

//     Array/list size is at least 2.
//     Array/list numbers could be a mixture of positives, negatives also zeroes .

// PREP:
// P: array of integers, can be positive and negative. min length of array is 2.
// R: maximum product between adjacent elements
// E: [1, 2, 3] ==> return 6
// [9, 5, 10, 2, 24, -1, -48] => return 50

const adjacentElementsProduct = (array) => {
  let productArray = array.map((el, i, arr) => arr[i] * arr[i + 1]);
  productArray.pop();
  return Math.max(...productArray);
};

adjacentElementsProduct([1, 2, 3]);
