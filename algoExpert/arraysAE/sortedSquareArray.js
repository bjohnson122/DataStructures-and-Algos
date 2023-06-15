/**
 * PROMPT:
 * Given an array of integers that are sorted in increasing order,
 * write a function that squares all the integers in the array and 
 * returns them in a new array, also sorted in increasing order.
 *  
  Example: 
    Input: [-5, -4, -3, 0, 2, 8]
    Output: [0, 4, 9, 16, 25, 64]
 
 */



// SOLUTION 1

// APPROACH:
// iterate over the array w/ .map()
// square each value
// sort the modified array returned from .map() function
//  return the sorted array

// TIME: O(nlogn) || SPACE: O(n)
function sortedSquaredArray(array) {
  let sqArr = array.map((ele) => ele * ele);
  return sqArr.sort((a, b) => a - b); // sorting algos are O(nlogn)
}
