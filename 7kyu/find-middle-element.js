// Create a function that takes in an array of numbers
// return the index of the number that fits in between the other two numbers
// numbers in the array will always be distinct/unique

function gimme(triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1])
}

console.log(gimme([2, 3, 1], 0))
console.log(gimme([5, 10, 14], 1))