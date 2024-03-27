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

    // Traverse BST in pre-order
    bstPreOrder() {
        if (!this.root) return;
    
        const stack = [];
        stack.push(this.root);
    
        while (stack.length) {
          const node = stack.pop();
          console.log(node.value);
    
          if (node.right) stack.push(node.right);
          if (node.left) stack.push(node.left);
        }
      }