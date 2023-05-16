// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// P: A string with only lowercase letters and/or spaces.
// R: A number. count of vowels in a given string
// E: 'abracadabra' -o 5

// With regex
const getCountOne = (str) => {
  return (str.match(/[aeiou]/gi) || []).length;
};

getCountOne('abracadabra');

// str.match return an array
// g = global search (all instances doesn't return on the first match)
// i = case insensitive (ignores cases of [a-zA-z])

// With nested loop and a counter
const getCountTwo = (str) => {
  let counter = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
};

getCountTwo('abracadabra');

// With filter method
const getCountThree = (str) => str.split('').filter((letter) => 'aeiou'.includes(letter)).length;

getCountThree('abracadabra');
