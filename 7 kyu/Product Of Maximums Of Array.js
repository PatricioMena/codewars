// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Notes
//     Array/list size is at least 3 .
//     Array/list's numbers Will be mixture of positives , negatives and zeros
//     Repetition of numbers in the array/list could occur.

// P: array of integers, x number of numbers to multiply. Size at least of 3.
// R: The result of multiplying the x maximum numbers
// E: maxProduct([4,3,5], 2), 20
// [10,8,7,9], 3), 720

const maxProduct = (arr, k) => {
  // Find the k maximum values of the array
  // Sort array from greater to smaller
  // Slice the array from start to k number
  return arr
    .sort((a, b) => b - a)
    .slice(0, k)
    .reduce((acc, c) => acc * c, 0);
  // Multiply those k values
  // return the product
};
