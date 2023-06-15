/**
  Given an integer array nums, return true if any value appears at least 
  twice in the array, and return false if every element is distinct.
  
  example: 
    Input: nums = [1,2,3,1]
    Output: true

    Input: nums = [1,2,3,4]
    Output: false

    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true
 */

var containsDuplicate = function(nums) {
 
    let container = {};

    for (let i = 0; i < nums.length; i++) {
        if (!container[nums[i]]) { // DOES NOT EXIST:
            container[nums[i]] = 1 // --> assign the value of 1
        }
        else if (container[nums[i]]) { // EXISTS:
            container[nums[i]] += 1 // --> add 1
        }    
    }
    console.log(container, "<-- container")
    for (let key in container) {
      if (container[key] > 1) {
        return true
      }
    }


return false; 
};