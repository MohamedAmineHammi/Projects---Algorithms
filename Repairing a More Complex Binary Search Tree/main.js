class BTNode2 {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  class BST2 {
    constructor() {
      this.root = null;
    }
  }
  
  function bst2Repair(tree) {
    if (tree.root === null) {
      // Empty tree is considered valid
      return false;
    }
  
    const isValid = validateBST2(tree.root, null, null);
    return isValid;
  }
  
  function validateBST2(node, min, max) {
    if (node === null) {
      return true; // Null node is valid
    }
  
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
      return false; // Node value is out of range
    }
  
    if (!validateBST2(node.left, min, node.value) || !validateBST2(node.right, node.value, max)) {
      return false; // Invalid left or right subtree
    }
  
    // Update parent pointers
    if (node.left !== null) {
      node.left.parent = node;
    }
    if (node.right !== null) {
      node.right.parent = node;
    }
  
    return true; // Valid BST2
  }