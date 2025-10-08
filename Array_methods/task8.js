// Task 8
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the
// array are identical, and false otherwise. The array will contain 4 elements.

// Examples
// testJackpot(["@", "@", "@", "@"]) - true
// testJackpot(["&&","&","&&&","&&&&"]) -false
function testJackpot(arr = []){
    let firstElement = arr[0];
    for(let i = 0;i < arr.length; i++){
        if(firstElement !== arr[i]){
            return false;
        }
    }
    return true;
}
console.log(testJackpot(["@", "@", "@", "@"]));