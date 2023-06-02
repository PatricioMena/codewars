// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// P: A string
// R: The string reversed
// E: "This is an example!" ==> "sihT si na !elpmaxe"

const reverseWords = (str) => str.split('').reverse().join('').split(' ').reverse().join(' ');

reverseWords('This is an example!');
