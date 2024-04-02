class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SLQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    enqueue(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    front() {
      if (!this.head) {
        return null;
      }
      return this.head.value;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    dequeue() {
      if (!this.head) {
        return null;
      }
      const removedValue = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return removedValue;
    }
  
    contains(val) {
      let current = this.head;
      while (current) {
        if (current.value === val) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    size() {
      return this.size;
    }
  }
  
  function compareQueues(queue1, queue2) {
    if (queue1.size !== queue2.size) {
      return false;
    }
    
    let current1 = queue1.head;
    let current2 = queue2.head;
    
    while (current1 && current2) {
      if (current1.value !== current2.value) {
        return false;
      }
      current1 = current1.next;
      current2 = current2.next;
    }
    
    return true;
  }
  
  function removeMinimums(queue) {
    if (!queue.head) {
      return;
    }
    
    let min = queue.head.value;
    let current = queue.head;
    
    while (current) {
      if (current.value < min) {
        min = current.value;
      }
      current = current.next;
    }
    
    current = queue.head;
    let prev = null;
    
    while (current) {
      if (current.value === min) {
        if (prev) {
          prev.next = current.next;
        } else {
          queue.head = current.next;
        }
        queue.size--;
      } else {
        prev = current;
      }
      current = current.next;
    }
  }
  
  function interleaveQueue(queue) {
    if (!queue.head || !queue.head.next) {
      return;
    }
  
    const secondHalf = new SLQueue();
    let current = queue.head;
    let count = 0;
    let mid = Math.floor(queue.size / 2);
  
    while (count < mid) {
      current = current.next;
      count++;
    }
  
    secondHalf.head = current.next;
    secondHalf.tail = queue.tail;
    secondHalf.size = queue.size - mid;
  
    queue.tail = current;
    queue.tail.next = null;
    queue.size = mid;
  
    let q1Current = queue.head;
    let q2Current = secondHalf.head;
  
    while (q2Current) {
      const temp = q1Current.next;
      q1Current.next = q2Current;
      q2Current = q2Current.next;
      q1Current.next.next = temp;
      q1Current = temp;
    }
  
    queue.tail = secondHalf.tail;
    queue.size += secondHalf.size;
  }