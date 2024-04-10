// Challenge 1: SList - Sum Numerals
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumNumerals(list1, list2) {
    let result = new ListNode(0);
    let current = result;
    let carry = 0;
  
    while (list1 || list2 || carry) {
      let sum = (list1 ? list1.value : 0) + (list2 ? list2.value : 0) + carry;
      carry = Math.floor(sum / 10);
      sum %= 10;
  
      current.next = new ListNode(sum);
      current = current.next;
  
      list1 = list1 ? list1.next : null;
      list2 = list2 ? list2.next : null;
    }
  
    return result.next;
  }
  
  // Example usage:
  const list1 = new ListNode(2);
  list1.next = new ListNode(0);
  list1.next.next = new ListNode(1);
  
  const list2 = new ListNode(8);
  list2.next = new ListNode(4);
  
  const sumList = sumNumerals(list1, list2);
  console.log(sumList); // Output: ListNode { value: 0, next: ListNode { value: 5, next: ListNode { value: 1, next: null } } }

  //Challenge 2: SList - Setup Loop
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function setupLoop(totalNodes, loopNodeNumber) {
    if (totalNodes <= 0 || loopNodeNumber <= 0 || loopNodeNumber > totalNodes) {
      return null;
    }
  
    let head = new ListNode(1);
    let current = head;
  
    // Create the nodes without forming a loop
    for (let i = 2; i <= totalNodes; i++) {
      current.next = new ListNode(i);
      current = current.next;
    }
  
    let loopNode = head;
    while (loopNode.next) {
      if (loopNode.value === loopNodeNumber) {
        current.next = loopNode;
        break;
      }
      loopNode = loopNode.next;
    }
  
    return head;
  }
  
