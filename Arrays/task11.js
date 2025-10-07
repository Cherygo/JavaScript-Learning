// Task 11

// Create a function that takes a number as an argument and returns an array of numbers counting down
// from this number to zero.

// Example
// countdown(5) -[5, 4, 3, 2, 1, 0]
function countdown(number){
    let countdownArray = [];
    if(number < 0) {
        for(let i = number; i <= 0; i++){
            countdownArray.push(i);
        }
    } else {
        for(let i = number; i >= 0; i--){
            countdownArray.push(i);
        }
    }
        
    return countdownArray;
}
console.log(countdown(5));