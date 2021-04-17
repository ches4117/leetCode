const addTwoNumbers = (l1, l2) => {
    let res = new ListNode();
    let cur = res;
    let carry = 0;
    let last = undefined
    
    while (l1 || l2 || carry) {
      if (l1) {
        carry += l1.val; // Calculate sum
        l1 = l1.next;
      }
      if (l2) {
        carry += l2.val; // Calculate sum
        l2 = l2.next;
      }
      last = carry % 10; // Get the last digit
      carry = Math.floor(carry / 10); // Update the carry
      cur.next = new ListNode(last);
      cur = cur.next;
    }
  
    return res.next;
  };