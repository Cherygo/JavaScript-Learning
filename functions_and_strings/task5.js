// range of numbers, return only even ones in range
function evenNumbers(start, end){
    let temp = [];
    for(let i = start; i < end; i++){
        if(i % 2 == 0){
            temp.push(i);
        }
    }
    return temp;
}

let even = evenNumbers(1,9);
console.log(even);