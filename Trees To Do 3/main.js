// Node class for BST
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // Binary Search Tree class
class BST {
    constructor() {
      this.root = null;
    }
}

  // Insert a value into BST
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        } else {
          // Ignore duplicate values
          break;
        }
      }
    }
  }