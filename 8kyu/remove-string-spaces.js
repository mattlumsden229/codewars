// Simple, remove the spaces from the string, then return the resultant string.

// My solutions

function noSpace(str){
    return str.replace(/\s/g, '')
  }


function noSpace(str){
    return str.split(' ').join('')
}