// SList: Prepend Val
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function prependVal(head, val, before) {
    if (!head) {
      return new ListNode(val);
    }
  
    if (head.val === before) {
      const newNode = new ListNode(val, head);
      return newNode;
    }
  
    let currentNode = head;
    while (currentNode.next) {
      if (currentNode.next.val === before) {
        const newNode = new ListNode(val, currentNode.next);
        currentNode.next = newNode;
        return head;
      }
      currentNode = currentNode.next;
    }
  
    currentNode.next = new ListNode(val);
    return head;
  }

  // Create sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Calling prependVal to insert a new ListNode with value 10 before the node with value 3
const newList = prependVal(node1, 10, 3);

// Print the new list
let currentNode = newList;
while (currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}

// Output
1
2
10
3
4
5

// 2- SList: agregar Val
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function appendVal(head, val, after) {
    if (!head) {
      return new ListNode(val);
    }
  
    let currentNode = head;
    while (currentNode) {
      if (currentNode.val === after) {
        const newNode = new ListNode(val, currentNode.next);
        currentNode.next = newNode;
        return head;
      }
      currentNode = currentNode.next;
    }
  
    // If after is not found, append the new ListNode at the end
    currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(val);
    return head;
  }
  // Create sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Calling appendVal to insert a new ListNode with value 10 after the node with value 3
const newList = appendVal(node1, 10, 3);

// Print the new list
let currentNode = newList;
while (currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}

// Output
1
2
3
10
4
5