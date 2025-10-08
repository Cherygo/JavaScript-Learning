// Task 9
// Create a function that takes an array of names and returns an array where only the first letter of each
// name is capitalized.

// Examples
// capitalizeMe(["nate", "zack", "nick"]) - ["Nate", "Zack", "Nick"]
// capitalizeMe(["NATE", "ZaCk", "nicK"]) - ["Nate", "Zack", "Nick"]
function capitalizeMe(arrToBeCapitalized = []){
    let waitingRoom = '';
    let firstChar = '';
    for(let i = 0; i < arrToBeCapitalized.length; i++){
        firstChar = String(arrToBeCapitalized[i]).substring(0,1);
        arrToBeCapitalized[i] = String(arrToBeCapitalized[i]).replace(firstChar, firstChar.toUpperCase());
    }
    return arrToBeCapitalized;
}
console.log(capitalizeMe(["nate", "zack", "nick"]));