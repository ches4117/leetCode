/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, left, right) {
  let rec = 0
  let pre = null
  let next = null
  let prevTemp = null

  while (head) {
    if (rec >= left - 1 && rec <= right - 1) {
      next = head.next
      head.next = pre
      pre = head
      rec++
    } else {
      pre = head
      head = head.next
    }
  }

  return head
};