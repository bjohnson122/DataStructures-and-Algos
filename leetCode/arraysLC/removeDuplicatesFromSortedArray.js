/*
PROMPT: 

Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element 
appears only once. The relative order of the elements should 
be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get
accepted, you need to do the following things:

Change the array nums such that the first k elements of nums
contain the unique elements in the order they were present in 
nums initially. The remaining elements of nums are not important 
as well as the size of nums.

Return k.

[0,1,1,1,1,2,2,3,3,4]
   L   R
 APPROACH:
    - use L & R pointers & counter 
    - while r<nums.length
        - compare L & R for equality ===
            - if equal -> move right pointer
            - if not equal:
                 swap r for l 
                 move left over
                 imcrement counter var
    - return counter

 INPUT: arr of integers (sorted in increasing/ascending order)
 OUTPUT: ** NUMBER ** (the # of unique elements)
 CONSTRAINTS: remove eles in place 
 EDGE CASES:if nums is empty or if nums.length === 1
*/

//TIME:O(n)  | SPACE: O(1)
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 0;
  let counter = 0;

  if (nums.length === 1) return 1;

  while (right <= nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    }
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
      right++;
      counter += 1;
    }
  }
  return counter;
};
