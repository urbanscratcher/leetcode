/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // note that we do not know the length

  let middler = head;
  let finisher = head;

  while (finisher.next !== null && finisher.next?.next !== null) {
    finisher = finisher.next.next;
    middler = middler.next;
  }

  return finisher.next?.next === null ? middler.next : middler;
};
