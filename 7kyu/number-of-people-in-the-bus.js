// function that takes in an array of int pairs
// first number is how many people get on the bus each stop, second number is how many people get off the bus each stop
// return how many people are left on the bus after the last stop or after the last array

// number of people is always greater than or equal to 0
// the second value in the first pair is always 0

const number = function (busStops) {
    // create a variable that will be our return
    let finalNum = 0
    // map through the array, destructure each value and subtract the second number from the first number for each array and total it up into finalNum variable
    busStops.map(([numsOn, numsOff]) => (finalNum += (numsOn - numsOff)))
    // return the sum
    return finalNum
}

console.log(number([[10, 0], [3, 5], [5, 8]]), 5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
console.log(number([[0, 0]]), 0);