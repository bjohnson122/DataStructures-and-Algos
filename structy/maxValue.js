/*
Write a function, maxValue, that takes in array of numbers as an argument. 
The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.
 */

//MY SOLUTION
const maxValue = (nums) => {
  // optimize nums.length

  const lengthOfNumsArray = nums.length;

  if (lengthOfNumsArray === 1) {
    // if the array only has one value
    return nums[0];
  }

  let highestNum = nums[0]; // container to hold value

  for (let i = 0; i < lengthOfNumsArray; i++) {
    // iterate over the array

    if (highestNum < nums[i]) {
      highestNum = nums[i]; // set the hightest number to be nums[i]
    }
  }

  return highestNum; // return the highest value
};

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: Constant