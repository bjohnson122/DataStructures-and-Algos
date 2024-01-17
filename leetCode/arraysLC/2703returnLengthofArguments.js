/*
Write a function argumentsLength that returns the
count of arguments passed to it.
Example 1:
Input: args = [5]
Output: 1

*/
// Time: O(1)  | Space:O(1)
var argumentsLength = function (...args) {
  return [...args].length;
};
