// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// PREP
// P: array of integers. integers positive
// R: min sum of product of two integers
// E: minSum({9,2,8,7,5,4,0,6}) ==> return (74)
//  9*0 + 8*2 +7*4 +6*5 = 74

function minSum(arr) {
  let arrSorted = arr.sort((a, b) => a - b);
  let product = 0;

  for (let i = 0; i < arrSorted.length; i++) {
    product += arrSorted[i] * arrSorted[arrSorted.length - 1];
    arrSorted.pop();
  }
  return product;
}

minSum([9, 2, 8, 7, 5, 4, 0, 6]);

// function minSum(arr) {
//   return arr.sort((a, b) => a - b).reduce((prev, curr) => prev + curr * arr.pop(), 0);
// }
