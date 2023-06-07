// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// P: A string with uppercase and lowercase
// R: An Array with the indexes of capital letters in the string
// E:  capitals('CodEWaRs'), [0,3,4,6]

const capitals = (word) => {
  return word
    .split('')
    .map((el, i, arr) => (el === el.toUpperCase() ? arr.indexOf(el) : el))
    .filter((el) => typeof el === 'number');
};

capitals('CodEWaRs');
