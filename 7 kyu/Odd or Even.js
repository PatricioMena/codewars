// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// P: arrray of integers, can be negative. Can be an empty array
// R: Sum all elements of array. If sum odd return string "odd" if sum even return string "even".
// E:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

const oddOrEven = (array) => {
  return array.reduce((acc, c) => acc + c, 0) % 2 === 0 ? 'even' : 'odd';
};
