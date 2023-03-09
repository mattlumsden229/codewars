//Shorten the given function

function find(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return "Not found";
}

// function that takes in an array and an element
// the function should return the index of the element if found, if not found, return Not found

// to shorten the function we will use an ES6 arrow function
const find = (arr, el) => {
    // to shorten the function even further, we will use a ternary operator for our conditional
    // if the array includes the element, return the index of the element, else, return Not found
    return arr.includes(el) ? arr.indexOf(el) : 'Not found'
}

console.log(findIndex(['a', 'b', 'c'], 'b'), 2)
console.log(findIndex([1, 2, 3], 1), 0)
console.log(findIndex(['x', 210, 9, 'pizza'], 'burger'), 'Not found')