class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class TrieSet {
    constructor() {
      this.root = new TrieNode();
      this.size = 0;
    }
  
    // Method 1: Counting on Insertion
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      if (!node.isEndOfWord) {
        node.isEndOfWord = true;
        this.size++;
      }
    }
  
    // Method 2: Counting on Query
    getSize() {
      return this.size;
    }
  
    // Find the next string in the trie after the given string
    next(str) {
      let node = this.root;
      let prefix = '';
      for (let char of str) {
        if (!node.children.has(char)) {
          return null; // String not found in trie
        }
        prefix += char;
        node = node.children.get(char);
      }
      return this.findNextString(node, prefix);
    }
  
    // Helper function to find the next string in the trie
    findNextString(node, prefix) {
      if (node.isEndOfWord) {
        return prefix;
      }
      for (let [char, childNode] of node.children) {
        const result = this.findNextString(childNode, prefix + char);
        if (result !== null) {
          return result;
        }
      }
      return null;
    }
  
    // Auto-complete words starting with the given prefix
    autoComplete(prefix, maxResults = Infinity) {
      let node = this.root;
      let result = [];
      for (let char of prefix) {
        if (!node.children.has(char)) {
          return result; // Prefix not found in trie
        }
        node = node.children.get(char);
      }
      this.collectWords(node, prefix, result, maxResults);
      return result;
    }
  
    // Helper function to collect words starting from the given node
    collectWords(node, prefix, result, maxResults) {
      if (node.isEndOfWord) {
        result.push(prefix);
        if (result.length === maxResults) {
          return;
        }
      }
      for (let [char, childNode] of node.children) {
        this.collectWords(childNode, prefix + char, result, maxResults);
        if (result.length === maxResults) {
          return;
        }
      }
    }
  }