// Task 6
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those
// numbers formatted as a phone number (e.g. (555) 555-5555).

// Example
// formatPhoneNumber([1, 2,3,4,5,6,7,8,9,0])-"(123) 456-7890"

function formatPhoneNumber(numbers) {
    // code written after some more learning
    if(!Array.isArray(numbers) || numbers.length !== 10){
    //if(Array(numbers).length !== 10){
        return "The array must be exactly 10 numbers";
    }
    if(numbers.some(n => n < 0 || n > 9)){
        return "Ensure that the numbers are all within the 0-9 range";
    }


    const phoneCode = numbers.slice(0, 3).join('');
    const phoneMiddle = numbers.slice(3, 6).join('');
    const phoneEnd = numbers.slice(6).join('');

    return `(${phoneCode}) ${phoneMiddle}-${phoneEnd}`;

//   task code written the first time BELOW
//   let temp = "(";
//   for (let i = 0; i < 10; i++) {
//     if (numbers[i] > 9 || numbers[i] < 0) {
//       temp = "Ensure that the all the number are within the 0-9 interval";
//       return temp;
//     } else {
//       if (i < 2) {
//         temp += numbers[i];
//       } else if (i == 3) {
//         temp += ") " + numbers[i];
//       } else if (i < 5) {
//         temp += numbers[i];
//       } else if (i == 5) {
//         temp += numbers[i] + "-";
//       } else if (i > 5) {
//         temp += numbers[i];
//       }
//     }
//   }
//   return temp;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]));
