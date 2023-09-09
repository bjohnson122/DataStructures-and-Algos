/*
Given two strings s and t, return true if t is 
an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically
 using all the original letters exactly once.
*/

//Time: O(n log n) |  Space: O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  s = s.split("").sort();
  t = t.split("").sort();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) return false;
  }

  return true;
};
