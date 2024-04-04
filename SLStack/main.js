class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  class SLStack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(val) {
      const newNode = new Node(val);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    top() {
      if (this.isEmpty()) {
        return null;
      }
      return this.top.value;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      const poppedValue = this.top.value;
      this.top = this.top.next;
      this.size--;
      return poppedValue;
    }
  
    contains(val) {
      let current = this.top;
      while (current !== null) {
        if (current.value === val) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    getSize() {
      return this.size;
    }
  }