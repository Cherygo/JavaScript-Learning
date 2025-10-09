// Task 2
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be
// extracted from the object's three properties:

// · name
// . population
// . continent

// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the populatior
// and Z is the continent the city is situated in).

// Examples
// cityFacts({
// name: "Paris",
// population: "2,140,526",
// continent: "Europe"
// })
// - "Paris has a population of 2,140,526 and is situated in Europe"
function cityFacts({name, population, continent}){
    return `${name} has a population of ${population} and is situated in ${continent}`
}
console.log(cityFacts({name: "Paris", population: "2,140,526", continent: "Europe"}));