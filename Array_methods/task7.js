// Task 7
// Given an array of numbers, write a function that returns an array that ...
// · Has all duplicate elements removed.
// . Is sorted from least to greatest value.

// Examples uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) -[1,2,3,4]
function uniqueSort(numArr = []){
    let uniqueArr = [];
    uniqueArr.push(numArr[0]);
    for(let i = 0; i < numArr.length; i++){
        if(uniqueArr.includes(numArr[i]) == false){
            uniqueArr.push(numArr[i]);
        }
    }
    return uniqueArr.sort();
}
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))