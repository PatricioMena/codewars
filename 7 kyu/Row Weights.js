// ~~ Scenario ~~
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// ~~ Task ~~
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// P: Array of n positive integers, at least 1 value
// R: An array where the first value is the sum of all the weight of team 1 and the second value is the sum of all weights of team 2
// E: -i [80] -o [80 , 0]

const rowWeights = (array) => {
  // Sum the value of person[1], person[3], person[5], etc...
  // Sum the value of person[2], person[4], person[6], etc...

  // Grab all module === 0 index values and make it team1 array [array[0], array[2], array[4]...
  // Grab all module !== 0 values and make it team2 array [array[1], array[3], array[5]...

  // Creation of teams arrays
  let teamOne = [];
  let teamTwo = [];

  // Looping through given array
  for (let i = 0; i < array.length; i++) {
    // If the module of the index value equals zero go to team 1
    if (i % 2 === 0) {
      teamOne.push(array[i]);
    } else if (i % 2 !== 0) {
      // If isn't 0 go to team 2
      teamTwo.push(array[i]);
    }
  }

  // Apply reduce on teamOne and teamTwo and save it to a sum variable
  let teamOneSum = teamOne.reduce((acc, c) => acc + c, 0);
  let teamTwoSum = teamTwo.reduce((acc, c) => acc + c, 0);

  // Return an array with total weights of teams
  return [teamOneSum, teamTwoSum];
};

// Other method
const rowWeightsTwo = (array) => {
  let teamOne = array.filter((x, i) => i % 2 === 0).reduce((acc, c) => acc + c, 0);
  let teamTwo = array.filter((x, i) => i % 2 === 0).reduce((acc, c) => acc + c, 0);

  return [teamOne, teamTwo];
};
