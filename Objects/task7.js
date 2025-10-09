// Task 7

// Given an array of scrabble tiles, create a function that outputs the maximum 
// possible score a player can achieve by summing up the total
// number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

// Here's an example hand:
// { tile: "N", score: 1 },
// { tile: "K", score: 5 },
// { tile: "Z", score: 10 },
// { tile: "X", score: 8 },
// { tile: "D", score: 2 },
// { tile: "A", score: 1 },
// { tile: "E", score: 1 }
// The players maximumScore from playing all these tiles would be 1 + 5 + 10+ 8+2 +1+1, or 28.

// Examples
// maximumScore([
// { tile: "N", score: 1 },
// { tile: "K", score: 5 },
// { tile: "Z", score: 10 },
// { tile: "X", score: 8 },
// { tile: "D", score: 2 },
// { tile: "A", score: 1 },
// { tile: "E", score: 1 }
// 1) - 28
function maximumScore(hand = []){
    // really wanted to use something other than "for"

    let handScore = hand.map(number => number.score);
    let sum = handScore.reduce((sum, current) => {
        return sum + current;
    }, 0);
    return sum;
}

console.log(maximumScore([
{ tile: "N", score: 1 },
{ tile: "K", score: 5 },
{ tile: "Z", score: 10 },
{ tile: "X", score: 8 },
{ tile: "D", score: 2 },
{ tile: "A", score: 1 },
{ tile: "E", score: 1 }]));