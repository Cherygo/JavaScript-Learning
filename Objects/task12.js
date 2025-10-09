// Task 12
// Given an object of people and their ages, return how old the people would be after 
// n years have passed. Use the absolute value of n.

// Examples
// afterNYears({
// "Nate" : 29,
// "Zack" : 31,
// "Nick" : 29,
// }, 1) - {
// "Nate" : 30,
// "Zack" : 32,
// "Nick" : 30,
function afterNYears(obj = {}, years){
    let keys = Object.keys(obj);
    // for(let key in obj){
    //  obj[key] = obj[key] + Math.abs(years);
    // }
    for(let i = 0; i < keys.length; i++){
        obj[keys[i]] = obj[keys[i]] + Math.abs(years);
    }
    return obj;
}
console.log(afterNYears({
"Nate" : 29,
"Zack" : 31,
"Nick" : 29,
}, 1));
