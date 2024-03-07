// Node class for the linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a node at the front of the list
    addFront(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Method to find the minimum value in the linked list and move it to the front
    moveMinToFront() {
      if (!this.head || !this.head.next) {
        return; // Empty list or single node, nothing to move
      }
  
      let minNode = this.head;
      let prevNode = null;
      let currentNode = this.head;
  
      while (currentNode) {
        if (currentNode.value < minNode.value) {
          minNode = currentNode;
          prevNode = prevNode;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
  
      if (minNode === this.head) {
        return; // Minimum value is already at the front
      }
  
      prevNode.next = minNode.next;
      minNode.next = this.head;
      this.head = minNode;
    }
  
    // Method to find the maximum value in the linked list and move it to the back
    moveMaxToBack() {
      if (!this.head || !this.head.next) {
        return; // Empty list or single node, nothing to move
      }
  
      let maxNode = this.head;
      let prevNode = null;
      let currentNode = this.head;
  
      while (currentNode) {
        if (currentNode.value > maxNode.value) {
          maxNode = currentNode;
          prevNode = prevNode;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
  
      if (!maxNode.next) {
        return; // Maximum value is already at the back
      }
  
      prevNode.next = maxNode.next;
      currentNode.next = maxNode;
      maxNode.next = null;
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.addFront(5);
  list.addFront(3);
  list.addFront(8);
  list.addFront(1);
  list.addFront(2);
  
  console.log('Original List:');
  let currentNode = list.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  
  list.moveMinToFront();
  console.log('\nList after moving minimum to front:');
  currentNode = list.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  
  list.moveMaxToBack();
  console.log('\nList after moving maximum to back:');
  currentNode = list.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }