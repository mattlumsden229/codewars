// create a function that takes in two strings
// find instances of the second string inside the first string and return the index they start at



function motifLocator(sequence, motif) {
    let result = []
    let next = 0

    while (next = sequence.indexOf(motif, next) + 1)
        result.push(next)

    return result
}

console.log(motifLocator('TTCCGGAACC', 'CC'), '[3, 9]')
console.log(motifLocator('ACGTTACAACGTTAG', 'ACGT'), '[1, 9]')
console.log(motifLocator('ACGT', 'ACGTGAC'), '[]')