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

  // SList: Remove Negatives
function removeNegatives(head) {
    while (head && head.val < 0) {
      head = head.next;
    }
  
    let current = head;
    while (current && current.next) {
      if (current.next.val < 0) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return head;
  }

  // SList: Concat
function concatLists(list1, list2) {
    if (!list1) {
      return list2;
    }
  
    let current = list1;
    while (current.next) {
      current = current.next;
    }
  
    current.next = list2;
    return list1;
  }