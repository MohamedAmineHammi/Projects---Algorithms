class ListNode {
    constructor(value) {
      this.val = value;
      this.next = null;
    }
  }
  
  // SList: Split on Value
  function splitOnVal(list, num) {
    let slow = list;
    let fast = list;
  
    while (fast.next && fast.next.val !== num) {
      slow = slow.next;
      fast = fast.next;
      if (fast.next) {
        fast = fast.next;
      }
    }
  
    const newList = slow.next;
    slow.next = null;
    return newList;
  }