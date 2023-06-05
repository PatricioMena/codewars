// Maximum Triplet Sum (Array Series #7)
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications.

// P: An array of integers. Positives and negatives. Can be duplications
// R: Sum of 3 maximum numbers.
// E: ({3,2,6,8,2,3}) ==> return (17)

const maxTriSum = (numbers) => {
  let uniqueNums = numbers.filter((c, index) => numbers.indexOf(c) === index);
  let tripletSum = uniqueNums
    .sort((a, b) => a - b)
    .slice(uniqueNums.length - 3)
    .reduce((acc, c) => acc + c);
  return tripletSum;
};

maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]);
