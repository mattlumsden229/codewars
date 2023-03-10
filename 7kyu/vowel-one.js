// create a function that takes in a string
// for every vowel in the string, return '1', for every non-vowel, return '0'

// string can include uppercase, lowercase, spaces, special characters, etc.

function vowelOne(s) {
    // create an array with all of the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    // create a variable for a new string that will eventually be our return
    let newStr = ''
    // loop though the string compare each character in the string to the vowels array.
    for (let i of s.toLowerCase()) {
        // if the letter is found in the vowels array, add '1' to the new string
        if (vowels.includes(i)) {
            newStr += '1'
            // if the letter is NOT found in the vowels array, add '0' to the new string
        } else {
            newStr += '0'
        }
    }
    // return the new string
    return newStr
}

console.log(vowelOne('abcdef'), '100010')
console.log(vowelOne('123456'), '000000')
console.log(vowelOne('jfk 123 a'), '000000001')