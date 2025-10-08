// Task 12
// Suppose an image can be represented as a 2D array of Os and 1s. Write a function to reverse an image.
// Replace the Os with 1s and vice versa.

// Examples
// reverseImage([
// [1, 0, 0],
// [0, 1, 0],
// [0, 0, 1]
// ]);
// ->
// [0, 1, 1],
// [1, 0, 1],
// [1, 1, 0]
// ]
function reverseImage(arrImg = [,]){
    let element = [];
    for(let i = 0; i < arrImg.length; i++){
        element = arrImg[i];
        for(let j = 0; j < element.length; j++){
            if(element[j] === 0){
                arrImg[i][j] = 1;
            } else{
                arrImg[i][j] = 0;
            }
        }
    }
    // for(const output of arrImg){
    //     console.log(output.join(' '));
    // }
    return arrImg;
}
console.log(reverseImage([
[1, 0, 0],
[0, 1, 0],
[0, 0, 1]
]));