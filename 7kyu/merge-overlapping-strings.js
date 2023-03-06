// function that takes in two strings
// merge end of the first string with the start of the second when they are a match

function mergeStrings(first, second) {
    return `${first} ${second}`.replace(/(.*) \1/, '$1');
}