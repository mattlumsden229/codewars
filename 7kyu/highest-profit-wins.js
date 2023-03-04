// function that takes in an array of nums. returns the lowest num and highest num in an array

// arr -> will always have at least one element, always a number

// return [lowestNum,highestNum]

// [1,2,3,4] -> [1,4]
// [15] -> [15]
// [43,100,2,14] -> [2,100]

function minMax(arr) {
    // sort array from lowest to highest, return first index in array, and last index in array
    const sortedArr = arr.sort((a, b) => a - b)
    return [sortedArr[0], sortedArr[sortedArr.length - 1]]
}

console.log(minMax([1, 2, 3, 4]), '[1,4]')
console.log(minMax([15]), '[15]')
console.log(minMax([43, 100, 2, 14]), '[43,100,2,14]')