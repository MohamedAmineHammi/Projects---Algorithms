// Add Front

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
}

// Example:
const SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// Remove Front

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  removeFront() {
    if (!this.head) {
      return null;
    }

    const newHead = this.head.next;
    this.head = newHead;
    return this.head;
  }
}

// Example:
const SLL = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Node { data: 18, next: null }
console.log(SLL1.removeFront()); // null

// Front

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  removeFront() {
    if (!this.head) {
      return null;
    }

    const newHead = this.head.next;
    this.head = newHead;
    return this.head;
  }

  front() {
    if (!this.head) {
      return null;
    }

    return this.head.data;
  }
}

// Example:
const SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1.front()); // 18

SLL1.removeFront();
console.log(SLL1.front()); // null

console.log(SLL1.removeFront()); // null
console.log(SLL1.front()); // null
