// This time no story, no theory. The examples below show you how to write function accum:

// P: A string. Can be uppercase and can be lowercase
// R: Every letter in uppercase repeated as many times as it's index + 1
// E: accum("abcd") -> "A-Bb-Ccc-Dddd"

const accum = (s) =>
  s
    .split('')
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join('-');

accum('abcd');
