function ListNode(value) {
  this.val = value;
  this.next = null;
  this.front = function () {
    // Implementation for front() function
    // Return the value of the next node
    if (this.next) {
      return this.next.val;
    }
    return null;
  };

  // more functions here
}

function secondToLastValue(headNode) {
  if (!headNode || !headNode.next) {
    return null;
  }

  let current = headNode;
  while (current.next.next) {
    current = current.next;
  }

  return current.val;
}

ListNode.prototype.removeSelf = function () {
  if (this.next) {
    this.val = this.next.val;
    this.next = this.next.next;
  }
};

function copyLinkedList(headNode) {
  if (!headNode) {
    return null;
  }

  let current = headNode;
  let newHead = new ListNode(current.val);
  let newCurrent = newHead;

  while (current.next) {
    current = current.next;
    newCurrent.next = new ListNode(current.val);
    newCurrent = newCurrent.next;
  }

  return newHead;
}

function filterLinkedList(headNode, lowVal, highVal) {
  if (!headNode) {
    return null;
  }

  let current = headNode;
  let newHead = null;
  let newTail = null;

  while (current) {
    if (current.val >= lowVal && current.val <= highVal) {
      if (!newHead) {
        newHead = new ListNode(current.val);
        newTail = newHead;
      } else {
        newTail.next = new ListNode(current.val);
        newTail = newTail.next;
      }
    }
    current = current.next;
  }

  return newHead;
}
