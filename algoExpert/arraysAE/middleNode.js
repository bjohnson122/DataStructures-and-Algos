/*
PROMPT:
You're given a Linked List with at least one node. Write a
function that returns the middle node of the Linked List. 
If there are two middle nodes (i.e. an even length list), 
your function should return the second of these nodes.

Each LinkedList node has an integer value as well as a 
next node pointing to the next node in the list or to None 
/ null if it's the tail of the list.

INPUT: Linked List
OUTPUT: Node (not just the value)
EDGE CASES: --
CONSTRAINTS: --

APPROACH:
    -use a slow & fast pointer
    - traverse the list until the fast pointer is at the end
    - return slow b/c slow is moving 1/2 as fast

*/

// Time: O(n) | SPACE: O(1)

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNode(linkedList) {
  let fast = linkedList;
  let slow = linkedList;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
