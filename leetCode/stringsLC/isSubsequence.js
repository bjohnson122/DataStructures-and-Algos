/*
Given two strings s and t, return true if s is a subsequence of t,
 or false otherwise.

A subsequence of a string is a new string that is formed 
from the original string by deleting some (can be none) of the 
characters without disturbing the relative positions of the remaining 
characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


EXPECTED INPUT: 2 strings
EXPECTED OUTPUT: Boolean
APPROACH:
  - create pointer variables for each string
  - while loop --> regPointer < t.length
    - if s[subPointer] === t[regPointer]
        subPointer++
        regularPointer++
    - else 
      - regularPointer++

  - subPointer === s.length ? true : false


  LOGIC:
  Example 1:
Input: s = "abc", t = "ahbgdc"
               ^             p
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
               ^             p
Output: false
*/

// TIME: O(n)   || SPACE: O(1)
var isSubsequence = function (s, t) {
  let subStrPointer = 0;
  let regStrPointer = 0;

  while (regStrPointer < t.length) {
    if (s[subStrPointer] === t[regStrPointer]) {
      subStrPointer++; // move BOTH pointers to the right
      regStrPointer++;
    } else {
      regStrPointer++;
    }
  }
  return subStrPointer === s.length ? true : false;
};
