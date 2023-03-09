// function that takes in a sorted array of numbers and a number
// return the index that the number what be at if it were to join the sorted array

function keepOrder(ary, val) {
    // add val to ary, resort the numbers, and then grab the index of val
    return ary.concat(val).sort((a, b) => a - b).indexOf(val)
}