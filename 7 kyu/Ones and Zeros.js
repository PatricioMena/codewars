// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
/
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// P: An array of numbers. Only ones and zeroes
// R: Binary number to an integer 
// E: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// const binaryArrayToNumber = arr => {
//   // First I will reverse the array
//   let reversedArray = arr.reverse(); 
//   // Set a counter to 
//   let counter = 0; 
//   // Then I can loop through the array, the index is the multiplier
//   for(let i =0; i < reversedArray.length; i++){
//     let multiplier = Math.pow(2, i); 
//     counter += reversedArray[i] * multiplier; 
//   }
//   return counter; 
// }

const binaryArraytoNumber = arr => arr.reverse().reduce((acc, curr, i) => acc + (curr * Math.pow(2, i)), 0); 


// binaryArrayToNumber([0, 0, 0, 1])
binaryArraytoNumber([1, 1, 1, 1])
// binaryArraytoNumber([1, 1, 1, 1])

// I could use parseInt 
// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);