// Task 2
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order
// (smallest to biggest).

// Examples
// sortNumsAscending([1, 2, 10, 50, 5]) - [1, 2,5, 10, 50]
function soryNumsAscending(arr = []) {
    return arr.sort((num1, num2) => num1 - num2);
}
console.log(soryNumsAscending([1, 2, 10, 50 ,5]));