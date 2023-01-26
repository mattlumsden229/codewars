// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
const countPositivesSumNegatives = (arr = []) => {
  if(arr == null || arr.length == 0){
    return []
  }
   const creds = arr.reduce((acc, val) => {
      let [count, sum] = acc
      if(val > 0){
         count++
      }else if(val < 0){
         sum += val;
      }
      return [count, sum]
   }, [0,0])
   return creds;
}