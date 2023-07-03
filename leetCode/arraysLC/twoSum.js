/*
PROMPT:
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.


INPUT: an array, a target integer 
OUTPUT: an array of TWO indices 
** mustn't use the same ele twice

APPROACH:
    - loop thru the arr
    - use obj store the difference (target - currentNum ) as the key and the idx as the value
    - see if the current num is in the obj
        - if so, return obj[currentNum] (the idx of the difference), and the current idx
    OPTIMIZED: Space: O(1)
        - establish a left pointer & right pointer
        - as long as the pointers don't intersect, 
        - add them & based on the sum, move only ONE pointer
        - return the idxs
*/
 // TIME: O(n)  || SPACE: O(n)
function twoSum(arr, target) {
    const neededNumbers = {};    
     
    for (let i = 0; i < arr.length; i++) {   
      let currentNumber = arr[i];     
      let difference = target - currentNumber
      
      if (neededNumbers[currentNumber] !== undefined) {          
        return [neededNumbers[currentNumber], i ]
      }
      else {
        neededNumbers[difference] = i
      }
    }
  }
  
  