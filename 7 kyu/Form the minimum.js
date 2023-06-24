// ~~ Task ~~
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). ``

// P: Array of integers, positive integers only.
// R: Smallest possible number from combined values in array, no duplicates
// E: [1, 3, 1] => 13

const minValue = (values) => {
  let uniqueValues = [...new Set(values)];
  return Number(uniqueValues.sort((a, b) => a - b).join(''));
};
