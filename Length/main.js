class SLL {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Other methods (e.g., insert, delete, display) go here
  
    length() {
      let count = 0;
      let currentNode = this.head;
  
      while (currentNode !== null) {
        count++;
        currentNode = currentNode.next;
      }
  
      return count;
    }
  }