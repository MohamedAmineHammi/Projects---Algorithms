class DLNode {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(value) {
      const newNode = new DLNode(value);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
    }
  
    pop() {
      if (this.tail === null) {
        return undefined;
      }
  
      const poppedValue = this.tail.value;
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
  
      this.length--;
  
      return poppedValue;
    }
  
    front() {
      if (this.head === null) {
        return undefined;
      }
  
      return this.head.value;
    }
  
    back() {
      if (this.tail === null) {
        return undefined;
      }
  
      return this.tail.value;
    }
  
    contains(value) {
      let currentNode = this.head;
  
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }
  
        currentNode = currentNode.next;
      }
  
      return false;
    }
  
    size() {
      return this.length;
    }
  }
  
  // Standalone functions
  
  function push(node, value) {
    node.push(value);
  }
  
  function pop(node) {
    return node.pop();
  }
  
  function front(node) {
    return node.front();
  }
  
  function back(node) {
    return node.back();
  }
  
  function contains(node, value) {
    return node.contains(value);
  }
  
  function size(node) {
    return node.size();
  }