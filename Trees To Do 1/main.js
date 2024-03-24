class BTNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    add(val) {
      const newNode = new BTNode(val);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.val < node.val) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    contains(val) {
      return this.search(this.root, val);
    }
  
    search(node, val) {
      if (node === null) {
        return false;
      }
  
      if (val === node.val) {
        return true;
      } else if (val < node.val) {
        return this.search(node.left, val);
      } else {
        return this.search(node.right, val);
      }
    }
  
    min() {
      if (this.root === null) {
        return null;
      }
  
      let currentNode = this.root;
      while (currentNode.left !== null) {
        currentNode = currentNode.left;
      }
  
      return currentNode.val;
    }
  
    max() {
      if (this.root === null) {
        return null;
      }
  
      let currentNode = this.root;
      while (currentNode.right !== null) {
        currentNode = currentNode.right;
      }
  
      return currentNode.val;
    }
  
    size() {
      return this.countNodes(this.root);
    }
  
    countNodes(node) {
      if (node === null) {
        return 0;
      }
  
      return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
  
    isEmpty() {
      return this.root === null;
    }
  }