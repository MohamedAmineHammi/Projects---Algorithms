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