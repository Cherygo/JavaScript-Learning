// funciton that takes a word and returns it again but without the first character
function firstLetterRemover(word){
    return String(word).slice(1);
}
console.log(firstLetterRemover("hello"));