// // create a function that takes an array and returns its reversed version
// function reverseArray(arr = []){
//     return arr.reverse();
// }
// console.log(reverseArray([1,2,3,4]));

// without array.reverse()
function reverseArray(arr = []){
    let tempArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        tempArr+=arr[i] + " ";
    }
    return tempArr;
}
console.log(reverseArray([1, 2, 3]));