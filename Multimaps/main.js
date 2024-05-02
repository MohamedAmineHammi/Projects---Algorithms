//the HashSet
class HashSet {
    constructor() {
      this.set = new Set();
    }
  
    has(key) {
      return this.set.has(key);
    }
  
    add(key) {
      this.set.add(key);
    }
  
    size() {
      return this.set.size;
    }
  
    clear() {
      this.set.clear();
    }
  }

  //HashMap to unordered_map
  class unordered_map {
    constructor() {
      this.map = new Map();
    }
  
    put(key, value) {
      this.map.set(key, value);
    }
  
    get(key) {
      return this.map.get(key);
    }
  
    has(key) {
      return this.map.has(key);
    }
  
    remove(key) {
      this.map.delete(key);
    }
  
    size() {
      return this.map.size;
    }
  
    clear() {
      this.map.clear();
    }
  }

  //HashMap to unordered_set:
  class unordered_set {
    constructor() {
      this.set = new Set();
    }
  
    has(key) {
      return this.set.has(key);
    }
  
    add(key) {
      this.set.add(key);
    }
  
    size() {
      return this.set.size;
    }
  
    clear() {
      this.set.clear();
    }
  }