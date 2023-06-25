/*
PROMPT:
You are given the heads of two sorted linked lists list1 and list2.
    - Merge the two lists in a one sorted list. 
    - The list should be made by splicing together the nodes of the first two lists.
    - Return the head of the merged linked list.

EXPECTED INPUT: 2 linked lists
EXPECTED OUTPUT: ONE linked list

EDGE CASE(S):
    -  if EITHER list is empty or if BOTH lists are empty 

APPROACH: 
    - create a dummy node to initialize our new list
    - create another variable to hold the current node(s) as we move through the list
    - while BOTH lists are valid inputs:
        - if List1 <= List2, current node = List1
            - we move to the right by assigning List1 to List1.next
        - else current node = List2
            - we move to the right by assigning List2 to List2.next
        - the CURRENT node (for the list we are returning) moves 
          to the right by assigning currentNode to currentNode.next
        - if List1 is longer, we append it to the end of our NEW linkedList by
          assigning currentNode.next to List1 
        - if List2 is longer, we append it to the end of our NEW linkedList by
          assigning currentNode.next to List2

    - return the dummyNode.NEXT (<- we need to return .next because that is where 
      the first value (either from List1 or List2 is stored)
    */

    //   TIME:  | SPACE: 
var mergeTwoLists = function (list1, list2) {
  if (!list1 && list2) return list2;
  else if ((!list1 && !list2) || (list1 && !list2)) return list1;

  let newList = new ListNode(0);
  let currentNodeInNewList = newList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNodeInNewList.next = list1;
      list1 = list1.next;
    } else {
      currentNodeInNewList.next = list2;
      list2 = list2.next;
    }
    currentNodeInNewList = currentNodeInNewList.next;
    if (list1) {
      currentNodeInNewList.next = list1;
    }
    if (list2) {
      currentNodeInNewList.next = list2;
    }
  }
  return newList.next;
};
