// create a function that takes in two numbers but as strings.
// return the sum as a string of the two numbers

function sumStr(a, b) {
    let sum = 0
    sum += Number(a) + Number(b)
    return sum.toString()
}

console.log(sumStr('5', '4'), '9')
console.log(sumStr('39', '1'), '40')
console.log(sumStr('1', '2'), '3')