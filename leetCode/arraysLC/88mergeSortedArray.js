/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing 
order, and two integers m and n, representing the number of elements in 
nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function,
 but instead be stored inside the array nums1. To accommodate this, 
 nums1 has a length of m + n, where the first m elements denote the 
 elements that should be merged, and the last n elements are set to 
 0 and should be ignored. nums2 has a length of n.

 EXAMPLE:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

*/
// Time: O(n) |  Space O(1)
var merge = function (nums1, m, nums2, n) {
  let numsOneIdx = m - 1;
  let numsTwoIdx = n - 1;
  let i = nums1.length - 1; // or n+m -1
  while (numsTwoIdx >= 0) {
    let firstValue = nums1[numsOneIdx];
    let secondValue = nums2[numsTwoIdx];

    if (firstValue > secondValue) {
      nums1[i] = firstValue;
      i--;
      numsOneIdx--;
    } else {
      nums1[i] = secondValue;
      i--;
      numsTwoIdx--;
    }
  }
};
