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

// Alternate Solution
function isAnagramAgain(s, t) {
  if (s.length !== t.length) return false;

  let sObj = {};
  let tObj = {};

  for (let i = 0; i < s.length; i++) {
    if (!sObj[s[i]]) {
      sObj[s[i]] = 1;
    } else {
      sObj[s[i]] += 1;
    }

    if (!tObj[t[i]]) {
      tObj[t[i]] = 1;
    } else {
      tObj[t[i]] += 1;
    }
  }

  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false;
  }
  return true;
}

// Alternate Solution w/ Ternary
function isAnagramAgain(s, t) {
  if (s.length !== t.length) return false;

  let sObj = {};
  let tObj = {};

  for (let i = 0; i < s.length; i++) {
    let currentLetterInS = s[i];
    let currentLetterInT = t[i];

    sObj[currentLetterInS]
      ? (sObj[currentLetterInS] += 1)
      : (sObj[currentLetterInS] = 1);

    tObj[currentLetterInT]
      ? (tObj[currentLetterInT] += 1)
      : (tObj[currentLetterInT] = 1);
  }

  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false;
  }
  return true;
}
