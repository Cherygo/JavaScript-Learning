// Task 3
// Given a number and an object with min and max properties, 
// return true if the number lies within the given range (inclusive).

// Examples
// isInRange(4, { min: 0, max: 5 }) - true
// isInRange(4, { min: 6, max: 10 }) - false
function isInRange(number, {min, max}){
    return (number >= min && number <= max);
}
console.log(isInRange(4, {min: 6, max: 10}));