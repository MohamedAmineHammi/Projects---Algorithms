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

  function compareStacks(stack1, stack2) {
    if (stack1.getSize() !== stack2.getSize()) {
      return false;
    }
  
    const tempStack = new SLStack();
  
    let equal = true;
    while (!stack1.isEmpty()) {
      const value1 = stack1.pop();
      const value2 = stack2.pop();
  
      if (value1 !== value2) {
        equal = false;
      }
  
      tempStack.push(value1);
      tempStack.push(value2);
    }
  
    // Restore the original stacks
    while (!tempStack.isEmpty()) {
      stack2.push(tempStack.pop());
      stack1.push(tempStack.pop());
    }
  
    return equal;
  }