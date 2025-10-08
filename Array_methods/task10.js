// Task 10
// Create a function that performs an even-odd transform to an array, n times. Each even-odd
// transformation:
// · Adds two (+2) to each odd integer.
// · Subtracts two (-2) to each even integer.

// Examples
// evenOddTransform([3,4, 9],3)-[3,4,9]=>[5,2,11]=>[7,0,13]=>[9,-2, 15]
// Return only the final array.
function evenOddTransform(numArr = [], amount) {
  for (let i = 0; i < amount; i++) {
    for (let j = 0; j < numArr.length; j++) {
      if (numArr[j] % 2 == 0) {
        numArr[j] -= 2;
      } else {
        numArr[j] += 2;
      }
    }
  }

  return numArr;
}
console.log(evenOddTransform([3, 4, 9], 3));