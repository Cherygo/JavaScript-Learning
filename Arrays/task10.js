// Task 10

// Given an array of room dimensions, create a function that returns its total volume in a string. The data is
// represented by an array with three elements: length, width and height.
// You can't use reduce() .

// Example:
// totalVolume([2, 3, 2]) -> 12 meters3
function totalVolume(volumes = new Array(3)){
    if(!Array.isArray(volumes) || volumes.length !== 3){
        return "Ensure that the amount of numbers is exactly 3";
    }
    
    // const volume = volumes.reduce((accumulator, currentElement) => accumulator * currentElement, 1);
    // return `${volume} meters3`;

    let volume = 1;
    for(let i = 0; i < 3 ; i++){
        volume *= volumes[i];
    }
    return `${volume} meters3`;
}

console.log(totalVolume([2,3,2]));