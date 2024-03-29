class BTNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null; // Optional attribute
    }
  
    nodeBefore() {
      if (this.left) {
        let node = this.left;
        while (node.right) {
          node = node.right;
        }
        return node;
      } else {
        let current = this;
        while (current.parent && current.parent.left === current) {
          current = current.parent;
        }
        return current.parent;
      }
    }
  
    nodeAfter() {
      if (this.right) {
        let node = this.right;
        while (node.left) {
          node = node.left;
        }
        return node;
      } else {
        let current = this;
        while (current.parent && current.parent.right === current) {
          current = current.parent;
        }
        return current.parent;
      }
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    valBefore(value) {
      let current = this.root;
      let prev = null;
      while (current) {
        if (current.value === value) {
          if (current.left) {
            let node = current.left;
            while (node.right) {
              node = node.right;
            }
            return node.value;
          } else {
            return prev ? prev.value : null;
          }
        } else if (value < current.value) {
          current = current.left;
        } else {
          prev = current;
          current = current.right;
        }
      }
      return null;
    }
  
    valAfter(value) {
      let current = this.root;
      let next = null;
      while (current) {
        if (current.value === value) {
          if (current.right) {
            let node = current.right;
            while (node.left) {
              node = node.left;
            }
            return node.value;
          } else {
            return next ? next.value : null;
          }
        } else if (value < current.value) {
          next = current;
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  
    closestValue(value) {
      let current = this.root;
      let closest = current.value;
      while (current) {
        if (current.value === value) {
          return current.value;
        } else {
          if (Math.abs(value - current.value) < Math.abs(value - closest)) {
            closest = current.value;
          }
          if (value < current.value) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
      }
      return closest;
    }
  }
  
  // Helper function to construct a binary tree
  function buildBinaryTree(arr) {
    const nodes = arr.map(val => new BTNode(val));
    const root = nodes.shift();
    nodes.forEach(node => {
      let current = root;
      while (true) {
        if (node.value < current.value) {
          if (current.left === null) {
            current.left = node;
            node.parent = current;
            break;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            node.parent = current;
            break;
          } else {
            current = current.right;
          }
        }
      }
    });
    return root;
  }
  
  // Test the methods
  const tree = buildBinaryTree([2, 5, 8]);
  const node5 = tree.left;
  const node8 = tree.right;
  
  console.log(tree.valBefore(3)); // Output: 2
  console.log(tree.valBefore(8)); // Output: 5
  
  console.log(tree.valAfter(3)); // Output: 5
  console.log(tree.valAfter(8)); // Output: null
  
  console.log(node5.nodeBefore().value); // Output: 2
  console.log(node8.nodeBefore().value); // Output: 5
  
  console.log(node5.nodeAfter().value); // Output: 8
  console.log(node2.nodeAfter()); // Output: null
  
  console.log(tree.closestValue(4)); // Output: 5
  
  // Tree Path Contains Sum
  function treePathContainsSum(root, sum) {
    const result = [];
  
    function dfs(node, path, currentSum) {
      if (!node) return;
  
      currentSum += node.value;
      path.push(node.value);
  
      if (!node.left && !node.right) {
        if (currentSum === sum) {
          result.push([...path]);
        }
      } else {
        dfs(node.left, path, currentSum);
        dfs(node.right, path, currentSum);
      }
  
      path.pop();
    }
  
    dfs(root, [], 0);
    return result.length > 0;
  }