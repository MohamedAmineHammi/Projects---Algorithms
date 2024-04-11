class SLNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SList {
    constructor() {
      this.head = null;
    }
  
    hasLoop() {
      let slow = this.head;
      let fast = this.head;
  
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          return true;
        }
      }
  
      return false;
    }
  
    breakLoop() {
      let slow = this.head;
      let fast = this.head;
  
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          break;
        }
      }
  
      if (slow === this.head) {
        // If loop starts at the head node
        while (fast.next !== slow) {
          fast = fast.next;
        }
      } else {
        slow = this.head;
  
        while (slow.next !== fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
      }
  
      fast.next = null;
    }
  
    loopStart() {
      let slow = this.head;
      let fast = this.head;
  
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          slow = this.head;
  
          while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
          }
  
          return slow;
        }
      }
  
      return null;
    }
  
    countNodes() {
      let count = 0;
      let current = this.head;
      let visited = new Set();
  
      while (current !== null) {
        count++;
        visited.add(current);
        current = current.next;
  
        if (visited.has(current)) {
          break;
        }
      }
  
      return count;
    }
  
    swapPairs() {
      let current = this.head;
  
      while (current !== null && current.next !== null) {
        let temp = current.value;
        current.value = current.next.value;
        current.next.value = temp;
  
        current = current.next.next;
      }
    }
  }
  
  // Example usage:
  const myList = new SList();
  
  const nodeA = new SLNode('a');
  const nodeB = new SLNode('b');
  const nodeC = new SLNode('c');
  const nodeD = new SLNode('d');
  
  myList.head = nodeA;
  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;
  
  console.log(myList.countNodes()); // Output: 4
  
  myList.swapPairs();
  let currentNode = myList.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  // Output: b, a, d, c