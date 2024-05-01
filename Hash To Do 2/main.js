class HashMap {
    constructor() {
      this.map = {};
    }
  
    // Hash: Remove
    remove(key) {
      if (this.map.hasOwnProperty(key)) {
        const value = this.map[key];
        delete this.map[key];
        return value;
      }
      return null;
    }
  
    // Hash: Load Factor
    loadFactor() {
      const numElements = Object.keys(this.map).length;
      const numBuckets = Object.keys(this.map).length;
      return numElements / numBuckets;
    }
  
    // Hash: Grow
    grow() {
      const currentSize = Object.keys(this.map).length;
      const newSize = Math.floor(currentSize * 1.5);
      this.setSize(newSize);
    }
  
    // Hash: Set Size
    setSize(newCap) {
      const entries = Object.entries(this.map);
      this.map = {};
      for (const [key, value] of entries) {
        const hash = this._hash(key, newCap);
        this.map[hash] = value;
      }
    }
  
    // Hash: Add
    addMap(otherMap, overwrite = false) {
      for (const [key, value] of Object.entries(otherMap.map)) {
        if (overwrite || !this.map.hasOwnProperty(key)) {
          this.map[key] = value;
        }
      }
    }
  
    // Hash: Select Keys
    selectKeys(keyArray) {
      const keysToRemove = Object.keys(this.map).filter(
        (key) => !keyArray.includes(key)
      );
      for (const key of keysToRemove) {
        delete this.map[key];
      }
    }
  
    // Helper method to calculate hash
    _hash(key, size) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i)) % size;
      }
      return hash;
    }
  }