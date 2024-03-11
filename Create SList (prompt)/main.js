class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function createSList() {
    let head = null;
    let tail = null;
  
    while (true) {
      let value = prompt("Enter a value (or click 'Cancel' to finish):");
  
      if (value === null) {
        break;
      }
  
      let newNode = new ListNode(value);
  
      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Example usage:
  let list = createSList();
  
  console.log(list); // Output the created list