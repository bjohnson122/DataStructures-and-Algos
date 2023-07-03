/*
PROMPT: Given two non-empty arrays of integers, 
write a function that determines whether the second array 
is a subsequence of the first one. A subsequence of an 
array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear
in the array.

APPROACH:
    - filter the input array for to ensure that it has 
      the same ele's as the seq arr
    - declare counter variables for each array
    - use a while loop to see if the elements are the same... starting from    
      the back of the arr
        - if the elements are the same, pop them out of the seq arr
            - decrease the sequence counter variable to move left 
              & iterate over the arr
        - otherwise, decrement the filteredArray counter to continue
    - if we're done iterating and sequence still has values
      (if the length of `sequence` > 0)
        - it is NOT a valid subsequence and we should return false
    - otherwise, return true

*/
// TIME: O(n) n = length of array || SPACE: O(1)
function isValidSubsequence(array, sequence) {
  let filtered = array.filter((ele) => {
    return sequence.includes(ele);
  });
  let currIdxInFiltered = filtered.length - 1; // starting from the end
  let sequenceIdx = sequence.length - 1;

  while (currIdxInFiltered >= 0 && sequenceIdx >= 0) {
    // while we're not at the beginning of our arrs
    if (sequence[sequenceIdx] === filtered[currIdxInFiltered]) {
      sequence.pop();
      sequenceIdx--;
    }
    currIdxInFiltered--;
  }
  return sequence.length > 0 ? false : true;
}
