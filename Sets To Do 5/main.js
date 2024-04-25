// Heap: Extract
class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    extract() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const minValue = this.heap[0];
      const lastValue = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastValue;
        this.siftDown(0);
      }
  
      return minValue;
    }
  
    siftDown(index) {
      const length = this.heap.length;
      const element = this.heap[index];
  
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let swapIndex = null;
  
        if (leftChildIndex < length) {
          if (this.heap[leftChildIndex] < element) {
            swapIndex = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          if (
            (swapIndex === null && this.heap[rightChildIndex] < element) ||
            (swapIndex !== null && this.heap[rightChildIndex] < this.heap[leftChildIndex])
          ) {
            swapIndex = rightChildIndex;
          }
        }
  
        if (swapIndex === null) {
          break;
        }
  
        this.heap[index] = this.heap[swapIndex];
        this.heap[swapIndex] = element;
        index = swapIndex;
      }
    }
  }

  //Heap: Heapify Array
  function heapifyArray(arr) {
    const minHeap = new MinHeap();
  
    for (let i = 0; i < arr.length; i++) {
      minHeap.heap.push(arr[i]);
    }
  
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      minHeap.siftDown(i);
    }
  
    return minHeap.heap;
  }

  //Heap Sort
  function heapSort(arr) {
    const minHeap = new MinHeap();
    const sortedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      minHeap.heap.push(arr[i]);
    }
  
    while (minHeap.heap.length > 0) {
      sortedArr.push(minHeap.extract());
    }
  
    return sortedArr;
  }

  //Heap Sort (In-place)
  function heapSortInPlace(arr) {
    function siftDown(index, length) {
      const element = arr[index];
  
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let swapIndex = null;
  
        if (leftChildIndex < length) {
          if (arr[leftChildIndex] < element) {
            swapIndex = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          if (
            (swapIndex === null && arr[rightChildIndex] < element) ||
            (swapIndex !== null && arr[rightChildIndex] < arr[leftChildIndex])
          ) {
            swapIndex = rightChildIndex;
          }
        }
  
        if (swapIndex === null) {
          break;
        }
  
        arr[index] = arr[swapIndex];
        arr[swapIndex] = element;
        index = swapIndex;
      }
    }
  
    const length = arr.length;
  
    for (let i = Math.floor(length / 2); i >= 0; i--) {
      siftDown(i, length);
    }
  
    for (let i = length - 1; i > 0; i--) {
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      siftDown(0, i);
    }
  
    return arr;
  }