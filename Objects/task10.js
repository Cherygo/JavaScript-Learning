// Task 10
// Nate has been invited to a dinner party, and he decides to purchase a bottle of wine. 
// However, he has little knowledge of how to choose
// a good bottle. Being a very frugal gentleman 
// (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any
// selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. 
// If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
// { name: "Wine A", price: 8.99 },
// { name: "Wine 32", price: 13.99 },
// { name: "Wine 9", price: 10.99 }
// ]) - "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) - "Wine A"
// chosenWine([]) - null
function chosenWine(wines = []){
    let choice = "";
    if(wines.length === 0){
        return null;
    } else if(wines.length === 1){
        return wines[0].name;
    } else {
        for(let i = 0; i < wines.length; i++){
            let swapped = false;
            for(let j = 0; j < wines.length - i - 1; j++){
                if(wines[j].price > wines[j + 1].price) {
                    [wines[j], wines[j + 1]] = [wines[j + 1], wines[j]];
                    swapped = true;
                }
            }   
            if(!swapped){
                break;
            }
        }
        return wines[1].name;
    }
}

console.log(chosenWine([
{ name: "Wine A", price: 8.99 },
{ name: "Wine 32", price: 13.99 },
{ name: "Wine 9", price: 10.99 }
]));
