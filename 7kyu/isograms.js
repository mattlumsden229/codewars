// function that takes in a string -> is the string an isogram

// str -> always a string, no empty spaces, no special characters, no nums, case sensitive

// return true || false

// tiger -> true
// mother -> true
// ninja -> false

function isIsogram(str) {
    // create a new set, make the string lower case, and use size method to return unique characters in the string. 
    // compare the new set length to the length of the original string. if they equal the word is an isogram -> return true, if they are not equal, the word is not an isogram -> return false
    return new Set(str.toLowerCase()).size == str.length;
}

console.log(isIsogram('tiger'), 'true')
console.log(isIsogram('mother'), 'true')
console.log(isIsogram('ninja'), 'false')