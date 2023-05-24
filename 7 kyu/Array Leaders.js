// An element is leader if it is greater than The Sum all the elements to its right side
// Given an array/list [] of integers , Find all the LEADERS in the array.

// P: Array of integers, at least 3 elements. Array contains positives, negatives and zeros.
// R: Array with the numbers that are greater than the sum of elements on it's right side
// E: arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

const arrayLeaders = (numbers) => {
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers.slice(i + 1).reduce((acc, c) => acc + c, 0);
    if (numbers[i] > sum) {
      array.push(numbers[i]);
    }
  }
  return array;
};

arrayLeaders([16, 17, 4, 3, 5, 2]);
