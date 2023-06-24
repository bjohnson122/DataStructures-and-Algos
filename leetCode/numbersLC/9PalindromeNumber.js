/*
PROMPT:
Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/
// APPROACH:
// create a variable to store the reversed number (modifiedX)
// convert x into a string so we can turn it into an array.
// reverse the entire array
// join the array back to a string 
// convert the new string into a number
// compare modifiedX to X. if ===, return true; else, return false



// TIME: O(n) || SPACE: O(n)
var isPalindrome = function(x) {
    let modifiedX = x.toString().split('').reverse().join('')
    let test = Number(modifiedX)
    return test === x ? true : false
};