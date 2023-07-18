/*
PROMPT:
Given the head of a sorted linked list, delete all duplicates 
such that each element appears only once. Return the linked list
sorted as well.


I: head of Linked List (LL)
O: head of Linked List w/ Duplicates REMOVED
E: if head == null
C: list will be sorted

APPROACH:
    - assign a temp var for the head of the list
    - while that temp var is not null
    - if temp.next != null && the temp.val == temp.next.val
        - reassign the next val to be temp.next.next
    - otherwise, we traverse normally temp = temp.next
    - return the head of the LL

*/

//TIME: O(n) | SPACE: O(n)
var deleteDuplicates = function(head) {
    let curr = head
    while (curr) {
        if (curr.next !== null && curr.val === curr.next.val ) {
            if(curr.next=== null) head = curr.next
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
};