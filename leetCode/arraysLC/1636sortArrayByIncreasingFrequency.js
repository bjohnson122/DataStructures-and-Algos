/**
 * 
1636. Sort Array by Increasing Frequency:

PROMPT:

Given an array of integers nums, sort the array in increasing 
order based on the frequency of the values. If multiple values 
have the same frequency, sort them in decreasing order.

Return the sorted array.
 */

// APPROACH:
// create a container to hold the values
// iterate over the array to populate frequency container
// sort the array based on the values in the frequency container
// if the values are the same, the larger value goes first


// TIME: O(nlogn) || SPACE: O(n)
var frequencySort = function (nums) {
  let container = new Map();

  for (let i = 0; i < nums.length; i++) {
    container[nums[i]] ? (container[nums[i]] += 1) : (container[nums[i]] = 1);
  }
  return nums.sort((a, b) => container[a] - container[b] || b - a);
};
