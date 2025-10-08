// Task 11
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Examples sliceSum([1,3,2],2) -4
function sliceSum(numArr = [], amount){
    let sum = 0;
    for(let i = 0; i < amount; i++){
        sum += numArr[i];
    }
    return sum;
}
console.log(sliceSum([1,3,2, 53,7, 6, 5, 4], 5));