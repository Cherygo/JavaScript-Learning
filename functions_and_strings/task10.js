// function that returns the amount of vowels within a word (a,e,i,o,u)
function vowelsCount(word){
    const vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    };
    let tempCount = 0;
    for(let i = 0; i < String(word).length; i++){
        if(vowels[word[i]]){
            tempCount++;
        }
    }
    return tempCount;
}
console.log(vowelsCount("prediction"));