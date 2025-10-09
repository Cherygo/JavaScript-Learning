// Task 1
// Create a function that takes an object argument sizes 
// (contains width, length, height keys) and returns the volume of the box.

// Examples volumeOfBox({ width: 2, length: 5, height: 1 }) - 10

// Notes
// . Remember that the values are in an object.
// · Volume is length width height.
function volumeOfBox({width, length, height}){
    return width * height * length;
}
console.log(volumeOfBox({width: 2, length: 5, height: 1}));