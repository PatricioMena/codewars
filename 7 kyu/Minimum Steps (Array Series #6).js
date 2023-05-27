// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K

// P: Array of n integers, array at least 3 item, all numbers area positive , can be duplictaed numbers,
// R: A number. The number it's how many times you have to add up the smallest numbers in the array until their sum becomes greater or equal to k

const minimumSteps = (numbers, k) => {
  let nums = numbers.slice().sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= value) {
      return i;
    }
  }
};

minimumSteps([1, 10, 12, 9, 2, 3], 6);
