class TrieMultiNode {
    constructor() {
      this.children = new Map();
      this.count = 0;
    }
  }
  
  class TrieMultiSet {
    constructor() {
      this.root = new TrieMultiNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieMultiNode());
        }
        node = node.children.get(char);
      }
      node.count++;
    }
  
    remove(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
          return 0; // Word not found
        }
        node = node.children.get(char);
      }
      const previousCount = node.count;
      node.count = 0;
      return previousCount;
    }
  
    size() {
      return this.getCount(this.root);
    }
  
    getCount(node) {
      let count = node.count;
      for (let child of node.children.values()) {
        count += this.getCount(child);
      }
      return count;
    }
  
    contains(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
          return 0; // Word not found
        }
        node = node.children.get(char);
      }
      return node.count;
    }
  
    autoComplete(fragment, maxResults) {
      let node = this.root;
      for (let char of fragment) {
        if (!node.children.has(char)) {
          return []; // No words with the given fragment
        }
        node = node.children.get(char);
      }
      const results = [];
      this.collectWords(node, fragment, results);
      results.sort((a, b) => b.count - a.count); // Sort by frequency (count)
      return results.slice(0, maxResults);
    }
  
    collectWords(node, prefix, results) {
      if (node.count > 0) {
        results.push({ word: prefix, count: node.count });
      }
      for (let [char, child] of node.children) {
        this.collectWords(child, prefix + char, results);
      }
    }
  }