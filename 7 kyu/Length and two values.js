// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Parameters: an integer n, and two other values (can be strings, booleans)
// Examples:
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Return: an array of n length that contains the parameters given alternating

const alternate = (n, firstValue, secondValue) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      array.push(firstValue);
    } else {
      array.push(secondValue);
    }
  }
  return array;
};

console.log(alternate(10, 'blue', 'red'));
