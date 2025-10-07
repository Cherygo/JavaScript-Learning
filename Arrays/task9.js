// Task 9

// You're given a string of words. You need to find the word Nemo, and return a string like this: I found
// Nemo at [the order of the word you find nemo] !.
// If you can't find Nemo, return I can't find Nemo :(.

// Examples
// findNemo("I am finding Nemo !") - "I found Nemo at 4!"
// findNemo("Nemo is me") - "I found Nemo at 1!"
// findNemo("Who are you looking for ?") - "I can't find Nemo :("
function findNemo(phrase){
    let findPosition = String(phrase).indexOf("Nemo");
    if(findPosition == -1){
        return "I can't find Nemo :("
    } else{
        let nemoArray = String(phrase).split(' ');
        return `I found Nemo at ${nemoArray.indexOf("Nemo") + 1}!`;
    
    }
}
console.log(findNemo("I am finding Nemo !"));