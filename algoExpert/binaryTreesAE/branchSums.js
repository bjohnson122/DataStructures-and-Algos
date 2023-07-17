/*
PROMPT:
Given a Binary Tree, sum all of the branches of the tree
and return them in an array, ordered from leftmost branch 
sum to rightmost branch sum. In a tree, a branch is a path
that starts at the root node and ends at one of the leaf nodes. 
A branch sum means the sum of all values in a branch.

Expected INPUT: root (node)
Expected OUTPUT: an ARRAY of integers
*/

//APPROACH: (recursive)
// establish a runningSum (accumulator) variable
// establish an array to return the "sums" variable
// currentSum = node's value + running sum
// if we are at a leaf node (!node.left && !node.right) -> push currentSum to sums
// if there's a node.left/node.right use the function recurively to add to the runningSum
// repeat for node.right
//return sums

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TIME: O(n) || SPACE: O(n)
function branchSums(node, runningSum = 0, sums = []) {
  let currentSum = node.value + runningSum;

  if (!node.left && !node.right) {
    sums.push(currentSum);
  }

  if (node.left) {
    branchSums(node.left, currentSum, sums);
  }

  if (node.right) {
    branchSums(node.right, currentSum, sums);
  }

  return sums;
}
