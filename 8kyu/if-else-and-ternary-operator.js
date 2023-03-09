// function that takes in one parameter that is a number

// if n or number of hot dogs is less than 5, each hotdog costs 100
// if n is greater than or equal to 5 AND less than 10, each hotdog costs 95
// if n is greater than 10, each hotdog costs 90

function saleHotdogs(n) {
    return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}