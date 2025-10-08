//Task 4
// Create a function that reverses and array.

// Examples reverseArray(['q', 'w', 'e', 'r', 't', 'y']) - ['y', 't', 'r', 'e', 'w', 'q']
function reverseArray(arr = []){
    let reversed = [];
    for(let i = 0; i < arr.length; i++){
        reversed.push(arr[arr.length - 1 - i]);
    }
    return reversed;
    // return arr.reverse();
}
console.log(reverseArray(['q', 'w', 'e', 'r', 't', 'y']));