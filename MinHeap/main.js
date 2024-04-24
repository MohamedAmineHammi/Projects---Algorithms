class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
  
    contains(val) {
      return this.heap.includes(val);
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    top() {
      if (this.isEmpty()) {
        return null;
      }
      return this.heap[0];
    }
  
    insert(val) {
      this.heap.push(val);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[parentIndex] <= this.heap[currentIndex]) {
          break;
        }
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      }
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [
        this.heap[index2],
        this.heap[index1],
      ];
    }
  }