// Task 6
// You will be given an array of drinks, with each drink being an object with two properties: name and price. 
// Create a function that has the
// drinks array as an argument and return the drinks object sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:
// drinks = [
// {name: "lemonade", price: 50},
// {name: "lime", price: 10}
// ]

// The output of the sorted drinks object will be:
// sortDrinkByPrice(drinks) - [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
function sortDrinkByPrice(drinksArr = []){
    let length = drinksArr.length;
    for(let i = 0; i < length; i++){
        let swapper = false;
        for(let j = 0; j < length - i - 1; j++){
          if(drinksArr[j].price > drinksArr[j + 1].price) {
            [drinksArr[j], drinksArr[j + 1]] = [drinksArr[j + 1], drinksArr[j]];
            swapper = true;
          }
        }
        if(!swapper){
            break;
        }
    }
    return drinksArr;
}

const drinks = [
    {name: "lemonade", price: 50},
    {name: "whiskey", price: 150},
    {name: "water", price: 2},
    {name: "lime", price: 10}
];

console.log(sortDrinkByPrice(drinks));