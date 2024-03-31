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

  // BST Partitioning - Partition Evenly:
  class BSTNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function partitionEvenly(tree) {
    const partitionedTree = new BST();
    const nodes = [];
  
    inorderTraversal(tree.root, nodes); // Get sorted nodes
  
    // Build the partitioned tree
    partitionedTree.root = buildBalancedBST(nodes, 0, nodes.length - 1);
  
    // Update the original tree
    tree.root = null;
  
    return partitionedTree;
  }
  
  function inorderTraversal(node, nodes) {
    if (node === null) {
      return;
    }
  
    inorderTraversal(node.left, nodes);
    nodes.push(node);
    inorderTraversal(node.right, nodes);
  }
  
  function buildBalancedBST(nodes, start, end) {
    if (start > end) {
      return null;
    }
  
    const mid = Math.floor((start + end) / 2);
    const node = nodes[mid];
  
    node.left = buildBalancedBST(nodes, start, mid - 1);
    node.right = buildBalancedBST(nodes, mid + 1, end);
  
    return node;
  }