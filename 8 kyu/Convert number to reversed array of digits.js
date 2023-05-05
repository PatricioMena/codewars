/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/

// PREP
// P: always number, positive integers, no floats
// R: An array of the given numbers but in reverse order
// E: 35231 => [1,3,2,5,3]

const digitize = (n) => n.toString().split('').map(Number).reverse();
// Convert numbers into string
// Convert string into an array
// Apply reverse method to the array
// return that array

digitize(35231);
