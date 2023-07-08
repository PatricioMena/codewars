// What dominates your array?

// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// P: An array of positive integers.
// R: The integer that appears more than half of the elements
// E: -i [3,4,3,2,3,1,3,3] -o 3

const dominator = (arr) => {
  const counter = {};
  const target = arr.length / 2;

  for (const num of arr) {
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  }

  for (let el in counter) {
    if (counter[el] > target) return +el;
  }

  return -1;
};

dominator([3, 4, 3, 2, 3, 1, 3, 3]);
