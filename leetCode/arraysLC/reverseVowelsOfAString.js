/*
Given a string s, reverse only all 
the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', 
and they can appear in both lower and upper cases, 
more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Rationale:
compare = "aeiouAEIOU".split('') because STRINGS ARE IMMUTABLE
turn s into an array as well
use 2 pointers -- one at the end of s (s.length-1) & the other at the beginning
if both pointers are @ a vowel, they swap
return s.join("")

 */

// Time: O(n) |  Space: O(n)
var reverseVowels = function (s) {
  s = s.split("");
  let firstPointer = 0;
  let lastPointer = s.length - 1;
  let compare = "aeiouAEIOU".split("");

  while (firstPointer < lastPointer) {
    if (compare.includes(s[firstPointer]) === false) {
      firstPointer++;
    }
    if (compare.includes(s[lastPointer]) === false) {
      lastPointer--;
    }
    if (compare.includes(s[firstPointer]) && compare.includes(s[lastPointer])) {
      let temp = s[firstPointer];
      s[firstPointer] = s[lastPointer];
      s[lastPointer] = temp;
      lastPointer--;
      firstPointer++;
    }
  }
  return s.join("");
};
