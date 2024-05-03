class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class TrieSet {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      word = word.toLowerCase();
  
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
  
      if (currentNode.isEndOfWord) {
        return false; // Word already exists
      }
  
      currentNode.isEndOfWord = true;
      return true;
    }
  
    contains(word) {
      word = word.toLowerCase();
  
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          return false; // Word not found
        }
        currentNode = currentNode.children[char];
      }
  
      return currentNode.isEndOfWord;
    }
  
    first() {
      let currentNode = this.root;
      while (currentNode) {
        const keys = Object.keys(currentNode.children);
        if (keys.length === 0) {
          break;
        }
        const firstKey = keys.sort()[0];
        currentNode = currentNode.children[firstKey];
      }
  
      if (currentNode) {
        return this.getNodeValue(currentNode);
      }
  
      return null;
    }
  
    last() {
      let currentNode = this.root;
      while (currentNode) {
        const keys = Object.keys(currentNode.children);
        if (keys.length === 0) {
          break;
        }
        const lastKey = keys.sort()[keys.length - 1];
        currentNode = currentNode.children[lastKey];
      }
  
      if (currentNode) {
        return this.getNodeValue(currentNode);
      }
  
      return null;
    }
  
    remove(word) {
      word = word.toLowerCase();
  
      const stack = [];
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          return false; // Word not found
        }
        stack.push({ node: currentNode, char });
        currentNode = currentNode.children[char];
      }
  
      if (!currentNode.isEndOfWord) {
        return false; // Word not found
      }
  
      currentNode.isEndOfWord = false;
  
      if (Object.keys(currentNode.children).length > 0) {
        return true; // Word removed, but other words still share this prefix
      }
  
      for (let i = stack.length - 1; i >= 0; i--) {
        const { node, char } = stack[i];
        delete node.children[char];
        if (Object.keys(node.children).length > 0 || node.isEndOfWord) {
          break; // Stop removing if ancestor node has other children or is the end of another word
        }
      }
  
      return true; // Word removed completely
    }
  
    getNodeValue(node) {
      let value = '';
      let currentNode = node;
      while (currentNode) {
        const keys = Object.keys(currentNode.children);
        if (keys.length === 0) {
          break;
        }
        const firstKey = keys.sort()[0];
        value += firstKey;
        currentNode = currentNode.children[firstKey];
      }
      return value;
    }
  }