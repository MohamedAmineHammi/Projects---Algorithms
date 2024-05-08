class TrieNode {
    constructor() {
      this.children = new Map();
      this.value = null;
    }
  }
  
  class TrieMap {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(key, value) {
      let node = this.root;
      for (let char of key) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      const previousValue = node.value;
      node.value = value;
      return previousValue;
    }
  
    contains(key) {
      let node = this.root;
      for (let char of key) {
        if (!node.children.has(char)) {
          return null;
        }
        node = node.children.get(char);
      }
      return node.value;
    }
  
    remove(key) {
      function removeHelper(node, key, index) {
        if (index === key.length) {
          if (node.value !== null) {
            node.value = null;
            return true;
          }
          return false;
        }
  
        const char = key[index];
        if (!node.children.has(char)) {
          return false;
        }
  
        const childNode = node.children.get(char);
        const isDeleted = removeHelper(childNode, key, index + 1);
  
        if (isDeleted && childNode.children.size === 0 && childNode.value === null) {
          node.children.delete(char);
        }
  
        return isDeleted;
      }
  
      return removeHelper(this.root, key, 0);
    }
  
    size() {
      function countNodes(node) {
        let count = 0;
        if (node.value !== null) {
          count++;
        }
        for (let child of node.children.values()) {
          count += countNodes(child);
        }
        return count;
      }
  
      return countNodes(this.root);
    }
  
    first() {
      function findFirst(node) {
        if (node.value !== null) {
          return { key: '', value: node.value };
        }
        for (let [char, child] of node.children) {
          const result = findFirst(child);
          if (result !== null) {
            return { key: char + result.key, value: result.value };
          }
        }
        return null;
      }
  
      return findFirst(this.root);
    }
  
    last() {
      function findLast(node) {
        let maxKey = null;
        let maxValue = null;
  
        if (node.value !== null) {
          maxKey = '';
          maxValue = node.value;
        }
  
        for (let [char, child] of node.children) {
          const result = findLast(child);
          if (result !== null && (maxKey === null || char + result.key > maxKey)) {
            maxKey = char + result.key;
            maxValue = result.value;
          }
        }
  
        if (maxKey === null) {
          return null;
        }
  
        return { key: maxKey, value: maxValue };
      }
  
      return findLast(this.root);
    }
  
    next(key) {
      let currentNode = this.root;
      let prefix = '';
  
      // Find the node corresponding to the given key, if it exists
      for (let char of key) {
        if (!currentNode.children.has(char)) {
          return null;
        }
        currentNode = currentNode.children.get(char);
        prefix += char;
      }
  
      // Find the next key-value pair by traversing the trie
      function findNext(node, prefix) {
        if (node.value !== null && prefix > key) {
          return { key: prefix, value: node.value };
        }
  
        let nextResult = null;
        for (let [char, child] of node.children) {
          const result = findNext(child, prefix + char);
          if (result !== null && (nextResult === null || result.key < nextResult.key)) {
            nextResult = result;
          }
        }
  
        return nextResult;
      }
  
      return findNext(currentNode, prefix);
    }
  }