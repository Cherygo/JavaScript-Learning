// Task 7
// Create a function that takes an array as an argument and returns true or false depending on whether
// the average of all elements in the array is a whole number or not.
// You can't use reduce() .

// Example
// isAverageWhole([1, 3]) - true
// isAverageWhole([1, 2, 3, 4]) - false
function arrayReduce(numbersArray = []){
    let temp = 0;
    for(let i = 0; i < numbersArray.length; i++){
        temp+=numbersArray[i];
    }
    if(temp % numbersArray.length == 0){
        return true;
    } else {
        return false;
    }
}

console.log(arrayReduce([1, 2, 3, 4, 5]));