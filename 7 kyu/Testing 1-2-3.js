// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// P: array of strings "a", "b", "c" or an empty array
// R: the stri ng prepended with their correct number
// E: -i ["a", "b", "c"] -o ["1 : a", "2 : b", "3 : c"] or -i [] -o []

const number = (array) => (array.length ? array.map((str, i, arr) => `${i + 1}: ${str}`) : []);
