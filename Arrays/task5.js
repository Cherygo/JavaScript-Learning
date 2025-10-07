// Task 5
// A farmer is asking you to tell him how many legs of each animal type can be counted among all his
// animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to
// implement a function that returns the total number of legs per species of all the animals in an array
// ['chickens', 'cows', 'pigs'].

// Examples
// howManyLegs([2, 3, 5]) - [4, 12, 20]
// howManyLegs([1, 2,3]) -[2, 8, 12]

function howManyLegs(animalCount = []){
    const legsPerAnimal = [2, 4, 4];
    return animalCount.map((count, index) => count*legsPerAnimal[index]);
}
console.log(howManyLegs([2, 3, 5]));