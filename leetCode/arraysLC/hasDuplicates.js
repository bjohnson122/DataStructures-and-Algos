/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 
 * Given an integer array nums, return true
 * if any value appears more than once in the array,
 * otherwise return false.
 
Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
 */

// Time O(n) | O(n)
function hasDuplicate(nums) {
  const setForDuplicates = new Set();

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (setForDuplicates.has(currentNum)) {
      return true;
    } else {
      setForDuplicates.add(currentNum);
    }
  }
  return false;
}
