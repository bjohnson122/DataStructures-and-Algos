/*
PROMPT:

Given an array of distinct integers and an integer representing 
the target sum, we are asked to implement a function that is 
going to find out whether there's a pair of numbers in the array
 that adds up to the target sum. If such pair exists, return the 
 pair in any order; otherwise return an empty array. We cannot add 
 a number to itself to get the target sum.


*/

//Time: O(n^2) || Space: O(1)
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}
