class HashMap {
    constructor() {
      this.size = 10; // Size of the array
      this.array = new Array(this.size); // Main array for storing values
      this.collisionArray = new Array(this.size); // Secondary array for handling collisions
    }
  
    // Helper function to calculate the hash
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i)) % this.size;
      }
      return hash;
    }
  
    // Method to add a key-value pair to the map
    add(key, val) {
      const index = this.hash(key);
      if (this.array[index] === undefined) {
        this.array[index] = val; // No collision, store the value directly
      } else {
        if (!this.collisionArray[index]) {
          this.collisionArray[index] = [];
        }
        this.collisionArray[index].push({ key, val }); // Collision occurred, store in collision array
      }
    }
  
    // Method to check if the HashMap is empty
    isEmpty() {
      return this.array.every((element) => element === undefined) && 
             this.collisionArray.every((element) => element === undefined || element.length === 0);
    }
  
    // Method to find the value for a given key
    find(key) {
      const index = this.hash(key);
      if (this.array[index] !== undefined) {
        return this.array[index];
      } else if (this.collisionArray[index]) {
        const collisionItems = this.collisionArray[index];
        for (let i = 0; i < collisionItems.length; i++) {
          if (collisionItems[i].key === key) {
            return collisionItems[i].val;
          }
        }
      }
      return null; // Key not found
    }
  }