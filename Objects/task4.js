// Task 4
// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples
// hasKey({ craves: true, midnight: true, snack: true }, "morning") - false
function hasKey(obj, keyWord){
    return keyWord in obj;
}
 console.log(hasKey({ craves: true, midnight: true, snack: true }, "craves"));