// Test Arrays & Functions
// Create a function that calculates the number of taxis needed for transporting given amount of people.
// Taxi types are "big" or "small". The big taxis can transport up to 6 people, and the smaller ones -- up to
// 3 people. The function should return an array where the first element is the number of smaller taxis, and
// the second element - the number of bigger taxis.

// Example input and output:
// * '1' => `[1, 0] (just a small taxi for single person)
// * '3' => *[1, 0]' (one small taxi will be enough for 3 people)
// * '4' => `[0, 1]' (4 people will need a big taxi)
// * '9' => `[1, 1]' (9 people will need a big taxi for 6 people, and an additional small one for t
// he remaining 3 people)
// * '10' => `[0, 2]' (10 people will need 2 big taxis - 6 people for the first one, and 4 people fo
// r the second one)
function howManyTaxis(peopleAmount)
{
    let bigTaxis = Math.floor(peopleAmount / 6);
    let smallTaxis = 0;
    if(peopleAmount - bigTaxis * 6 > 0 && peopleAmount - bigTaxis * 6 <= 3){
        smallTaxis++;
        return [smallTaxis,bigTaxis];
    } else if(peopleAmount - bigTaxis * 6 > 3){
        bigTaxis++;
        return[smallTaxis,bigTaxis];
    } else{
        return [smallTaxis,bigTaxis];
    }
    // if(peopleAmount <= 3){
    //     smallTaxis++;
    //     return [smallTaxis, bigTaxis];
    // } else if(peopleAmount > 3 && peopleAmount <= 6){
    //     bigTaxis++;
    //     return [smallTaxis, bigTaxis];
    // } else if(peopleAmount > 6){
    //     bigTaxis = Math.floor(peopleAmount / 6);
    //     peopleAmount -= bigTaxis * 6;
    //     if(peopleAmount == 0){
    //         return [smallTaxis, bigTaxis];
    //     } else if(peopleAmount <= 3){
    //         smallTaxis++;
    //         return [smallTaxis, bigTaxis];
    //     } else if(peopleAmount > 3){
    //         bigTaxis++;
    //         return [smallTaxis, bigTaxis];
    //     }
    //  }
    return false;
}
console.log(howManyTaxis(20)) // [1,3]
