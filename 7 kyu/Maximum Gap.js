// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// P: Array of numbers (integers, positives and negatives)
// R: Maximum difference betwwen the successive elemens in its sorted form

const maxGap = (numbers) => {
  // Sort the array and make and array of difference numbers
  let difference = numbers.sort((a, b) => a - b).map((el, i, arr) => arr[i + 1] - arr[i]);
  difference.pop();
  return Math.max(...difference);
};
maxGap([13, 10, 2, 9, 5]);

// function maxGap(numbers) {
//   return numbers
//     .sort((a, b) => a - b)
//     .reduce((max, n, i) => {
//       let gap = numbers[i + 1] - n
//       if (max < gap) {
//         max = gap
//       }
//       return max
//     }, 0);
// }
