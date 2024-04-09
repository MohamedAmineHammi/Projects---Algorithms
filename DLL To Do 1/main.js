class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class SList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addNode(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    reverse() {
      let current = this.head;
      let prev = null;
      let next = null;
  
      while (current) {
        next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    kthLastNode(k) {
      let p1 = this.head;
      let p2 = this.head;
      
      for (let i = 0; i < k; i++) {
        if (!p2) return null; // k is greater than the list length
        p2 = p2.next;
      }
  
      while (p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
  
      return p1.value;
    }
  
    isPalindrome() {
      let slow = this.head;
      let fast = this.head;
      let stack = [];
  
      while (fast && fast.next) {
        stack.push(slow.value);
        slow = slow.next;
        fast = fast.next.next;
      }
  
      if (fast) {
        slow = slow.next;
      }
  
      while (slow) {
        if (slow.value !== stack.pop()) {
          return false;
        }
        slow = slow.next;
      }
  
      return true;
    }
  
    shiftRight(shiftBy) {
      if (shiftBy === 0) return;
  
      let length = 1;
      let current = this.head;
  
      while (current.next) {
        current = current.next;
        length++;
      }
  
      shiftBy = shiftBy % length;
      if (shiftBy < 0) shiftBy += length;
  
      if (shiftBy === 0) return;
  
      current.next = this.head;
      this.head.prev = current;
  
      let count = length - shiftBy;
      while (count > 0) {
        this.head = this.head.next;
        this.head.prev = null;
        current = current.next;
        count--;
      }
  
      current.next = null;
      this.tail = current;
    }
  }