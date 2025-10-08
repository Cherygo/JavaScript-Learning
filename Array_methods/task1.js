// Task 1
// Create a function that takes an array and returns the sum of all items in the array.

// Examples
// sumArray([1, 2,3]) =6
function arraySum(arr = []){
    let sum = 0;
      sum = arr.reduce((accumulate, arrElement) => accumulate + arrElement, 0);
      return sum;
}
console.log(arraySum([1,2,3]));