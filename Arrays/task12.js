// Task 12

// Create a function that takes an array of numbers and return both the minimum and maximum numbers,
// in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) - [1, 5]
// minMax([10, 20, 5]) -[5, 20]
function minMax(numbers = []){
    // return [Math.min(...numbers), Math.max(...numbers)];
    
    let min = numbers[0];
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(max < numbers[i]){
            max = numbers[i];
        }

        if(min > numbers[i]){
            min = numbers[i];
        }
    }
    return [min,max];
}
console.log(minMax([10, 20, 5, 100]));