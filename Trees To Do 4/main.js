class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else if (newNode.value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    remove(value) {
      this.root = this.removeNode(this.root, value);
    }
  
    removeNode(node, value) {
      if (!node) {
        return null;
      }
  
      if (value < node.value) {
        node.left = this.removeNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.removeNode(node.right, value);
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
  
        const minRightNode = this.findMinNode(node.right);
        node.value = minRightNode.value;
        node.right = this.removeNode(node.right, minRightNode.value);
      }
  
      return node;
    }
  
    findMinNode(node) {
      if (!node.left) {
        return node;
      }
      return this.findMinNode(node.left);
    }
  
    removeAll() {
      this.root = null;
    }
  
    isValid() {
      return this.checkValid(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
  
    checkValid(node, min, max) {
      if (!node) {
        return true;
      }
  
      if (node.value <= min || node.value >= max) {
        return false;
      }
  
      return (
        this.checkValid(node.left, min, node.value) && this.checkValid(node.right, node.value, max)
      );
    }
  
    addWithoutDupes(value) {
      if (this.search(value)) {
        return false;
      } else {
        this.insert(value);
        return true;
      }
    }
  
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    searchNode(node, value) {
      if (!node) {
        return false;
      }
  
      if (value === node.value) {
        return true;
      } else if (value < node.value) {
        return this.searchNode(node.left, value);
      } else {
        return this.searchNode(node.right, value);
      }
    }
  
    bstReverseOrder() {
      const values = [];
      this.traverseReverse(this.root, values);
      console.log(values.reverse().join(" "));
    }
  
    traverseReverse(node, values) {
      if (node) {
        this.traverseReverse(node.right, values);
        values.push(node.value);
        this.traverseReverse(node.left, values);
      }
    }
  }