// Repairing a Binary Search Tree:
class BSTNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isValidBST(root) {
    return isValidBSTHelper(root, -Infinity, Infinity);
  }
  
  function isValidBSTHelper(node, min, max) {
    if (node === null) {
      return true;
    }
  
    if (node.value <= min || node.value >= max) {
      return false;
    }
  
    return (
      isValidBSTHelper(node.left, min, node.value) &&
      isValidBSTHelper(node.right, node.value, max)
    );
  }
  
  function bstRepair(root) {
    if (isValidBST(root)) {
      return false; // BST is already valid
    }
  
    const nodes = [];
    inorderTraversal(root, nodes); // Perform inorder traversal
  
    return buildBST(nodes); // Rebuild the BST
  }
  
  function inorderTraversal(node, nodes) {
    if (node === null) {
      return;
    }
  
    inorderTraversal(node.left, nodes);
    nodes.push(node);
    inorderTraversal(node.right, nodes);
  }
  
  function buildBST(nodes) {
    return buildBSTHelper(nodes, 0, nodes.length - 1);
  }
  
  function buildBSTHelper(nodes, start, end) {
    if (start > end) {
      return null;
    }
  
    const mid = Math.floor((start + end) / 2);
    const node = nodes[mid];
  
    node.left = buildBSTHelper(nodes, start, mid - 1);
    node.right = buildBSTHelper(nodes, mid + 1, end);
  
    return node;
  }