// BST Partitioning - Partition Around Value
class BSTNode {
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
  
    partition(value) {
      const partitionedTree = new BST();
      let currentNode = this.root;
      let prevNode = null;
  
      // Find the node containing the value
      while (currentNode !== null && currentNode.value !== value) {
        prevNode = currentNode;
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
  
      if (currentNode === null) {
        return partitionedTree; // Value not found, return empty tree
      }
  
      // Set the root of the partitioned tree
      partitionedTree.root = currentNode;
  
      // Update the previous node's child reference
      if (prevNode !== null) {
        if (prevNode.left === currentNode) {
          prevNode.left = null;
        } else {
          prevNode.right = null;
        }
      }
  
      return partitionedTree;
    }
  }