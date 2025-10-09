// Task 8
// Given an object of how many more pages each ink color can print, 
// output the maximum number of pages the printer can print before
// any of the colors run out.

// Examples
// inkLevels({
// "cyan": 23,
// "magenta": 12,
// "yellow": 10
// }) -10
function inkLevels(colors){
    // Math.min() cannot take array as an argument ([23, 12, 10]), the "..." spreads out the values so they look
    // like this (23, 12, 10) which allows the Math.min() function to work properly
    return Math.min(...Object.values(colors));
}

console.log(inkLevels({
"cyan": 23,
"magenta": 12,
"yellow": 10
}));
