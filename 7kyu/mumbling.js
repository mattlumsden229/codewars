// function that takes in a string of letters

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    // split the string into an array, map throught the array and destructure it into element and index
    // make first letter of each element uppercase and repeat each element with count of i or index, and make them lowercase
    // finally, join the array by a dash
    return s.split('').map((e, i) => e[0].toUpperCase() + e.repeat(i).toLowerCase()).join('-')

}