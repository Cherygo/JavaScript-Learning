//function with 2 strings, true if they have equal number of characters, false if not
function equalStrings(word1,word2){
    if(String(word1).length == String(word2).length){
        return true;
    } 
    return false
}
console.log(equalStrings("Ab", "kk"))