// Task 6
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full
// word is completed.

// Examples
// spelling("bee")-["b","be", "bee"]
// spelling("happy")-["h","ha","hap","happ", "happy"]
function spelling(word = ""){
    let spelled = [];
    let charStorage = "";
    for(let i = 0; i < word.length;i++){
        charStorage += word[i];
        spelled.push(charStorage);
    }
    return spelled;
}
console.log(spelling("happy"));