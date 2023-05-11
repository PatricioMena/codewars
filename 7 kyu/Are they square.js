// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// const isSquare = (arr) => {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   return arr.every((item) => Math.sqrt(item) % 1 === 0);
// };

const isSquare = (arr) => (arr.length ? arr.every(Math.sqrt % 1 === 0) : undefined);
