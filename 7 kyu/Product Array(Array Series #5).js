// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// P: Array of positive numbers
// R: Product array same size as the original. arrayProd[i] ===
// E: productArray ({1,5,2}) ==> return {10,2,5}

const productArray = (numbers) => {
  return numbers.map((el) => numbers.reduce((acc, c) => acc * c) / el);
};

productArray([1, 5, 2]);
