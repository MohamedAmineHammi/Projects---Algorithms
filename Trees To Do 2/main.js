class BTNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (!this.root) {
        this.root = new BTNode(value);
      } else {
        this._insertRecursive(value, this.root);
      }
    }
  
    _insertRecursive(value, node) {
      if (value < node.value) {
        if (node.left) {
          this._insertRecursive(value, node.left);
        } else {
          node.left = new BTNode(value);
        }
      } else {
        if (node.right) {
          this._insertRecursive(value, node.right);
        } else {
          node.right = new BTNode(value);
        }
      }
    }
  
    height() {
      return this._heightRecursive(this.root);
    }
  
    _heightRecursive(node) {
      if (!node) {
        return 0;
      } else {
        const leftHeight = this._heightRecursive(node.left);
        const rightHeight = this._heightRecursive(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
      }
    }
  
    isBalanced() {
      return this._isBalancedRecursive(this.root);
    }
  
    _isBalancedRecursive(node) {
      if (!node) {
        return true;
      }
      const leftHeight = this._heightRecursive(node.left);
      const rightHeight = this._heightRecursive(node.right);
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
      }
      return (
        this._isBalancedRecursive(node.left) &&
        this._isBalancedRecursive(node.right)
      );
    }
  
    static arrayToBST(arr) {
      if (!arr.length) {
        return null;
      }
      const mid = Math.floor(arr.length / 2);
      const root = new BTNode(arr[mid]);
      root.left = BST.arrayToBST(arr.slice(0, mid));
      root.right = BST.arrayToBST(arr.slice(mid + 1));
      return root;
    }
  
    closestCommonAncestor(value1, value2) {
      return this._closestCommonAncestorRecursive(
        this.root,
        value1,
        value2
      );
    }
  
    _closestCommonAncestorRecursive(node, value1, value2) {
      if (!node) {
        return null;
      }
  
      if (value1 < node.value && value2 < node.value) {
        return this._closestCommonAncestorRecursive(node.left, value1, value2);
      } else if (value1 > node.value && value2 > node.value) {
        return this._closestCommonAncestorRecursive(node.right, value1, value2);
      } else {
        return node.value;
      }
    }
  }