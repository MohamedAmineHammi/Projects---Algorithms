class CirQueue {
    constructor(capacity) {
      this.capacity = capacity;
      this.queue = new Array(capacity);
      this.front = 0;
      this.rear = -1;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.capacity;
    }
  
    getSize() {
      return this.size;
    }
  
    enqueue(val) {
      if (this.isFull()) {
        return false;
      }
  
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = val;
      this.size++;
      return true;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const frontVal = this.queue[this.front];
      this.front = (this.front + 1) % this.capacity;
      this.size--;
      return frontVal;
    }
  
    contains(val) {
      for (let i = 0; i < this.size; i++) {
        const index = (this.front + i) % this.capacity;
        if (this.queue[index] === val) {
          return true;
        }
      }
      return false;
    }
  
    grow(newSize) {
      if (newSize <= this.capacity) {
        return false;
      }
  
      const newQueue = new Array(newSize);
      for (let i = 0; i < this.size; i++) {
        const index = (this.front + i) % this.capacity;
        newQueue[i] = this.queue[index];
      }
  
      this.queue = newQueue;
      this.front = 0;
      this.rear = this.size - 1;
      this.capacity = newSize;
      return true;
    }
  }