// Yoliu will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// P: An array and a limit number
// R: true if all array are below or equal to the limit value. else return false
// E: smallEnough([66, 101], 200), true

const smallEnough = (a, limit) => a.every((el) => el <= limit);

smallEnough([66, 101], 200);
