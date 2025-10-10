// Task 1
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken
// key(s). The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)

// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") - ["p"]
// findBrokenKeys("starry night", "starrq light") - ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5") - ["b", "e", "v", "n"]

// Notes
// · Only one broken key per letter should be listed.
// · Both phrases will always have the same length.
function findBrokenKeys(expectedWord = '', inputWord = ''){
    let brokenKeys = [];
    for(let i = 0; i < expectedWord.length; i++){
        if(expectedWord[i] !== inputWord[i] && brokenKeys.includes(expectedWord[i]) === false){
            brokenKeys.push(expectedWord[i]);
        }
    }
    return brokenKeys;
}
console.log(findBrokenKeys("beethoven", "affthoif5"));