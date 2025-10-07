// function that repeats each character of a word twice
function doubleCharacters(word){
    let temp = '';
    for(let i = 0; i < String(word).length; i++){
        temp += word[i] + word[i];
    }
    return temp;
}
console.log(doubleCharacters("string"));