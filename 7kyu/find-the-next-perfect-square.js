// function that takes in a number, if the number is a perfect square, return the next perfect square number, if number is not a perfect square return -1

// 144 -> 169
// 4 -> 9
// 14 -> -1

function findNextSquare(sq) {
    // find square root of sq, if square root of sq is an integer, add 1 and multiply it by itself
    if (Number.isInteger(Math.sqrt(sq))) {
        return ((Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1))
        // if the square root of sq is not an integer, sq is not a perfect square, return -1
    } else {
        return -1
    }
}

console.log(findNextSquare(144), '169')
console.log(findNextSquare(4), '9')
console.log(findNextSquare(14), '-1')

// best practices

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}