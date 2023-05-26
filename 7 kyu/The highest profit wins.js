// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// P: An array, will have at least one element
// R: An array with Minimum and Maximum numbers of the given array
// E: [1, 2, 3, 4, 5] --> [1, 5]

const minMax = (arr) => {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  return [minValue, maxValue];
};
