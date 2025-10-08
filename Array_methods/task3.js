// Task 3
// Create a function that takes an array of non-negative integers and strings and return a new array
// without the strings.

// Examples filterArray([1, 2,"a", "b"]) - [1, 2]
function onlyNumbersArray(arr = []){
    let numArray = arr.filter(num => Number.isInteger(num) === true);
    return numArray;
}
console.log(onlyNumbersArray([1,2,"a", "b"]));