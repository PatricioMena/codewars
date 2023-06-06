// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// P: Two strings
// R: true if two arguments are anagram
// E: "foefet" is an anagram of "toffee"

const isAnagram = (test, original) => {
  let wordOne = convertWord(test);
  let wordTwo = convertWord(original);
  return wordOne === wordTwo;
};

function convertWord(word) {
  return word.toLowerCase().split('').sort().join('');
}

isAnagram('Foefet', 'tofFee');
convertWord('Foefet');
convertWord('tofFee');
