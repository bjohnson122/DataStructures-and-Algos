/**
 
PROMPT: Given the head of a singly linked list, reverse the list, and return the reversed list.

 INPUT: linked list
 OUTPUT: linked list

 APPROACH:
  - create a variable for:
      - the head of the linked list (the current node)
      - the next node
      - the previous node
  
  -  while (current node !== null)
    - next = curr.next
    - curr.next = prev
    - prev = curr
  - return prev (because by the end of the while loop, current would be null)

Time: O(n): where n is the length of the linked list
Space: O(1)
  */
var reverseList = function(head) {
// 1 - 2 -4 - 6- 7- 8 -9   
    let currentNode = head;             // begin with the head of the linked list
    let previousNode = null;            // assign previousNode to null because the end of linked lists point to NULL
                                        // we do this in the beginning because when we resverse the linked list,
                                        // the beginning becomes the END of the list, which should point to null
    let nextNode;                       // the variable is declared so that it can be used in the while loop 
    
    while (currentNode != null) {      // while we are NOT at the END of the linked list... (*** Remember the end of the list points to null)
      
      nextNode = currentNode.next      // assign the next node in the list to the adjacent node on the right (as usual)
      
      currentNode.next = previousNode  // this line changes the "pointer" from 
                                       // the right to  the left/previous node... 
                                       // think of the arrow/pointer as the hands on a clock
                                       // rotating counter clockwise to point to the previous node. 
     
      previousNode = currentNode      // this helps us move to the right/down the linked list to the next node
      currentNode = nextNode          // this reassigns the current node that we changed the pointer of
                                      // to the next node in the linked list (the node to the right)

    }
  return previousNode                 // return the previousNode because the `currentNode` is now NULL
                                      // hence, we are OUTSIDE of the while loop
};