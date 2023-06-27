/*
PROMPT:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid. An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

----------------
EXPECTED INPUT: string
EXPECTED OUTPUT: boolean

EDGE CASES:
- if s is empty
- if s < 2

APPROACH:
- make a variable for parens obj
- make a variable for our STACK
- iterate over the arr
    - see if the current bracket is an opening bracket
        - see if current bracket is a key in our parens obj (if parensObj[currBracket])
        - if so, push into parens stack
        - otherwise, compare the current bracket to the most recently added bracket in the stack (using .pop())
        - if (parensObj at the poppedBracketFromTheStack !== current bracket) 
            - return false b/c its a mismatch pair
- if the stack has not been cleared, return false because theres too many opening brackets

- if the stack is clear, return true. 
 */

// TIME: O(n) | SPACE: O(n)
var isValid = function (s) {
  if (!s || s.length < 2) return false;
  let parensStack = [];
  let validBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    let currentBracket = s[i];
    if (validBrackets[currentBracket]) {
      parensStack.push(currentBracket);
    } else {
      let openingBracketToCompare = parensStack.pop();
      if (validBrackets[openingBracketToCompare] !== currentBracket) {
        return false;
      }
    }
  }
  if (parensStack.length > 0) {
    return false;
  }
  return true;
};
