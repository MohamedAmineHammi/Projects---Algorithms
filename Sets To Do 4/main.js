class PriQNode {
    constructor(value, priority) {
      this.value = value;
      this.pri = priority;
      this.next = null;
    }
  }
  
  class PriQueue {
    constructor() {
      this.head = null;
    }
  
    push(value, priority) {
      const newNode = new PriQNode(value, priority);
  
      if (!this.head || priority < this.head.pri) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next && priority >= current.next.pri) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    pop() {
      if (!this.head) {
        return null;
      }
      const poppedNode = this.head;
      this.head = this.head.next;
      return poppedNode.value;
    }
  }
  
  const messageQueue = new PriQueue();
  
  function sequenceMessage(arr) {
    const [timestamp, message] = arr;
    messageQueue.push(message, timestamp);
  }
  
  function playMessages() {
    const currentTime = Date.now();
  
    while (messageQueue.head && messageQueue.head.pri <= currentTime) {
      const message = messageQueue.pop();
      console.log(message);
    }
  }