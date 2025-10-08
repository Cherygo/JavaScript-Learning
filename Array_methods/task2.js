// Task 2
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order
// (smallest to biggest).

// Examples
// sortNumsAscending([1, 2, 10, 50, 5]) - [1, 2,5, 10, 50]
function sortNumsAscending(arr = []) {
    // return arr.sort((num1, num2) => num1 - num2);
    let length = arr.length;
    let swapped;
    for(let i = 0; i < length; i++){
        swapped = false;
        for(let j = 0; j < length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr;
}
console.log(sortNumsAscending([1, 2, 10, 50 ,5]));