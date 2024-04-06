class Stack {
    constructor() {
      this.queue = [];
    }
  
    push(val) {
      this.queue.push(val);
    }
  
    pop() {
      return this.queue.pop();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  // Task 1: Copy Stack to another Stack
  function copyStack(stack) {
    const newStack = new Stack();
    const tempQueue = new Stack();
  
    while (!stack.isEmpty()) {
      const value = stack.pop();
      tempQueue.push(value);
    }
  
    while (!tempQueue.isEmpty()) {
      const value = tempQueue.pop();
      stack.push(value);
      newStack.push(value);
    }
  
    return newStack;
  }
  
  class Queue {
    constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();
    }
  
    enqueue(val) {
      this.stack1.push(val);
    }
  
    dequeue() {
      if (this.stack2.isEmpty()) {
        while (!this.stack1.isEmpty()) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  
    isEmpty() {
      return this.stack1.isEmpty() && this.stack2.isEmpty();
    }
  
    size() {
      return this.stack1.size() + this.stack2.size();
    }
  }
  
  // Task 2: Check if Queue values are palindrome
  function isPalindrome(queue) {
    const stack = new Stack();
  
    while (!queue.isEmpty()) {
      const value = queue.dequeue();
      stack.push(value);
    }
  
    let isPalindrome = true;
  
    while (!stack.isEmpty() && !queue.isEmpty()) {
      const stackValue = stack.pop();
      const queueValue = queue.dequeue();
  
      if (stackValue !== queueValue) {
        isPalindrome = false;
        break;
      }
    }
  
    while (!stack.isEmpty()) {
      queue.enqueue(stack.pop());
    }
  
    return isPalindrome;
  }
  
  // Task 3: Combine SLQueue and SLStack
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
  
    pop() {
      if (!this.top) {
        return null;
      }
  
      const poppedValue = this.top.value;
      this.top = this.top.next;
      this.size--;
      return poppedValue;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  }
  
  class SLQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    enqueue(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    dequeue() {
      if (!this.head) {
        return null;
      }
  
      const dequeuedValue = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return dequeuedValue;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  }
  
  // Task 4: Implement Deque
  class Deque {
    constructor() {
      this.stackFront = new SLStack();
      this.stackBack = new SLStack();
    }
  
    pushFront(val) {
      this.stackFront.push(val);
    }
  
    pushBack(val) {
      this.stackBack.push(val);
    }
  
    popFront() {
      if (this.stackFront.isEmpty()) {
        while (!this.stackBack.isEmpty()) {
          this.stackFront.push(this.stackBack.pop());
        }
      }
      return this.stackFront.pop();
    }
  
    popBack() {
      if (this.stackBack.isEmpty()) {
        while (!this.stackFront.isEmpty()) {
          this.stackBack.push(this.stackFront.pop());
        }
      }
      return this.stackBack.pop();
    }
  
    front() {
      if (this.stackFront.isEmpty()) {
        while (!this.stackBack.isEmpty()) {
          this.stackFront.push(this.stackBack.pop());
        }
      }
      return this.stackFront.top.value;
    }
  
    back() {
      if (this.stackBack.isEmpty()) {
        while (!this.stackFront.isEmpty()) {
          this.stackBack.push(this.stackFront.pop());
        }
      }
      return this.stackBack.top.value;
    }
  
    contains(val) {
      let currentNode = this.stackFront.top;
  
      while (currentNode) {
        if (currentNode.value === val) {
          return true;
        }
        currentNode = currentNode.next;
      }
  
      currentNode = this.stackBack.top;
  
      while (currentNode) {
        if (currentNode.value === val) {
          return true;
        }
        currentNode = currentNode.next;
      }
  
      return false;
    }
  
    isEmpty() {
      return this.stackFront.isEmpty() && this.stackBack.isEmpty();
    }
  
    size() {
      return this.stackFront.getSize() + this.stackBack.getSize();
    }
  }
  
  // Task 5: Remove Stack Min
  function removeStackMin(stack) {
    let min = Infinity;
    let count = 0;
  
    while (!stack.isEmpty()) {
      const value = stack.pop();
      if (value < min) {
        min = value;
        count = 1;
      } else if (value === min) {
        count++;
      }
    }
  
    while (count > 0) {
      stack.push(min);
      count--;
    }
  
    return stack;
  }
  
  // Bonus: Remove Newest Min
  function removeNewestMin(stack) {
    let min = Infinity;
    let count = 0;
  
    while (!stack.isEmpty()) {
      const value = stack.pop();
      if (value < min) {
        min = value;
        count = 1;
      } else if (value === min) {
        count++;
      }
    }
  
    let foundMin = false;
  
    while (!stack.isEmpty()) {
      const value = stack.pop();
      if (!foundMin && value === min) {
        foundMin = true;
        continue;
      }
      stack.push(value);
    }
  
    return stack;
  }
  
  // Bonus: Remove Oldest Min
  function removeOldestMin(stack) {
    let min = Infinity;
    let count = 0;
    let tempStack = new Stack();
  
    while (!stack.isEmpty()) {
      const value = stack.pop();
      if (value < min) {
        min = value;
        count = 1;
      } else if (value === min) {
        count++;
      }
      tempStack.push(value);
    }
  
    while (!tempStack.isEmpty()) {
      const value = tempStack.pop();
      if (value !== min) {
        stack.push(value);
      }
    }
  
    while (count > 0) {
      stack.push(min);
      count--;
    }
  
    return stack;
  }