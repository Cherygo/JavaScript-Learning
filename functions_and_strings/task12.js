// function that will return only the first letters of an input array of words
function societyName(arrayOfNames){
    let temp = '';
    arrayOfNames.sort();
    for(let i = 0; i < arrayOfNames.length; i++){
        temp += arrayOfNames[i].slice(0,1);
    }
    return temp;
}
console.log(societyName(["Stefan", "Emo", "Alek"]));