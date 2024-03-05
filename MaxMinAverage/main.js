class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  max() {
    if (!this.head) {
      return null;
    }

    let maxVal = this.head.value;
    let current = this.head.next;
    while (current !== null) {
      if (current.value > maxVal) {
        maxVal = current.value;
      }
      current = current.next;
    }
    return maxVal;
  }

  min() {
    if (!this.head) {
      return null;
    }

    let minVal = this.head.value;
    let current = this.head.next;
    while (current !== null) {
      if (current.value < minVal) {
        minVal = current.value;
      }
      current = current.next;
    }
    return minVal;
  }

  average() {
    if (!this.head) {
      return null;
    }

    let sum = 0;
    let count = 0;
    let current = this.head;
    while (current !== null) {
      sum += current.value;
      count++;
      current = current.next;
    }
    return sum / count;
  }
}

// Example usage:
const list = new SLL();
list.addNode(5);
list.addNode(10);
list.addNode(15);
list.addNode(20);

console.log(list.max()); // Output: 20
console.log(list.min()); // Output: 5
console.log(list.average()); // Output: 12.5
