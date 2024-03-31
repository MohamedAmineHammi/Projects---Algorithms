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

  //BST: Smallest Difference:
  class BSTNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function smallestDifference(root) {
    let prev = null;
    let minDiff = Infinity;
  
    inorderTraversal(root, node => {
      if (prev !== null) {
        minDiff = Math.min(minDiff, node.value - prev.value);
      }
      prev = node;
    });
  
    return minDiff;
  }
  
  function inorderTraversal(node, visit) {
    if (node === null) {
      return;
    }
  
    inorderTraversal(node.left, visit);
    visit(node);
    inorderTraversal(node.right, visit);
  }

  //SList: Smallest Difference:
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function smallestDifference(head) {
    let minDiff = Infinity;
    let curr = head;
  
    while (curr !== null && curr.next !== null) {
      minDiff = Math.min(minDiff, Math.abs(curr.value - curr.next.value));
      curr = curr.next;
    }
  
    return minDiff;
  }

  //BST: Closest Value:
  class BSTNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function closestValue(root, target) {
    let closest = root.value;
  
    while (root !== null) {
      if (Math.abs(target - root.value) < Math.abs(target - closest)) {
        closest = root.value;
      }
  
      if (target < root.value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
  
    return closest;
  }